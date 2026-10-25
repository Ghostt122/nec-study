'use strict';
/* NEC Study — offline study app. Content lives in content/*.js (window.MODULES). */
const $ = (s, el = document) => el.querySelector(s);
const app = $('#app');
const MODULES = window.MODULES || [];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const hash = s => { let h = 5381; for (const ch of s) h = (h * 33 ^ ch.charCodeAt(0)) >>> 0; return h.toString(36); };

/* ---------- content index ---------- */
const QUESTIONS = [];
for (const m of MODULES) for (const q of m.questions || []) {
  q.m = m.id; q.id = m.id + '.' + hash(q.q); QUESTIONS.push(q);
}
const modById = id => MODULES.find(m => m.id === id);
const lessonQs = (mid, lid) => QUESTIONS.filter(q => q.m === mid && q.l === lid);

/* ---------- progress (localStorage, small) ---------- */
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem('nec.' + k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('nec.' + k, JSON.stringify(v)); } catch { /* private mode: progress just won't stick */ } }
};
const prog = Object.assign({ done: {}, q: {}, days: {} }, store.get('prog', {}));
const save = () => store.set('prog', prog);
const today = () => new Date().toLocaleDateString('en-CA');
const DAY = 864e5, GAPS = [0, 1, 3, 7, 16, 35, 90]; // spaced repetition: days until next review per box

function grade(q, ok) {
  const s = prog.q[q.id] ||= { b: 0, due: 0, n: 0, r: 0 };
  s.n++; if (ok) s.r++;
  s.b = ok ? Math.min(s.b + 1, GAPS.length - 1) : 0;
  s.due = Date.now() + GAPS[s.b] * DAY;
  prog.days[today()] = (prog.days[today()] || 0) + 1;
  save();
}
const dueQs = () => QUESTIONS.filter(q => prog.q[q.id] && prog.q[q.id].due <= Date.now());
const newQs = () => QUESTIONS.filter(q => !prog.q[q.id] && prog.done[q.m + '/' + q.l]);
function streak() {
  let n = 0; const d = new Date();
  if (!prog.days[today()]) d.setDate(d.getDate() - 1);
  while (prog.days[d.toLocaleDateString('en-CA')]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

/* ---------- the private book (IndexedDB, lives only on this device) ---------- */
const DB = {
  p: null,
  open() {
    return this.p ||= new Promise((res, rej) => {
      const r = indexedDB.open('necbook', 1);
      r.onupgradeneeded = () => { r.result.createObjectStore('meta'); r.result.createObjectStore('pages'); };
      r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
    });
  },
  async get(st, k) {
    const db = await this.open();
    return new Promise((res, rej) => { const q = db.transaction(st).objectStore(st).get(k); q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error); });
  },
  async put(st, entries) {
    const db = await this.open();
    return new Promise((res, rej) => {
      const tx = db.transaction(st, 'readwrite'), os = tx.objectStore(st);
      for (const [k, v] of entries) os.put(v, k);
      tx.oncomplete = res; tx.onerror = () => rej(tx.error); tx.onabort = () => rej(tx.error || Error('Storage full?'));
    });
  }
};
let book = null;
async function loadBook() { if (!book) { try { book = await DB.get('meta', 'book') || null; } catch { book = null; } } return book; }

async function importBook(file, onProgress) {
  const magic = new TextDecoder().decode(await file.slice(0, 8).arrayBuffer());
  if (magic !== 'NECBOOK1') throw Error('That file is not a .necbook book file.');
  const n = new DataView(await file.slice(8, 12).arrayBuffer()).getUint32(0, true);
  const h = JSON.parse(await file.slice(12, 12 + n).text());
  const base = 12 + n, N = h.pages.length;
  for (let i = 0; i < N; i += 20) {
    const chunk = [];
    for (let j = i; j < Math.min(i + 20, N); j++) {
      const [off, len] = h.pages[j];
      chunk.push([j, new Blob([await file.slice(base + off, base + off + len).arrayBuffer()], { type: 'image/webp' })]);
    }
    await DB.put('pages', chunk);
    onProgress(Math.min(i + 20, N) / N);
  }
  book = { title: h.title, n: N, text: h.text, idx: h.idx };
  await DB.put('meta', [['book', book]]);
  try { await navigator.storage?.persist?.(); } catch { /* best effort */ }
}

function normRef(r) {
  r = r.trim().replace(/\s+/g, ' ');
  let m;
  if ((m = r.match(/^(?:ch(?:apter)?\.?\s*9,?\s*)?table\s*(\d{1,2}[a-z]?)$/i))) return 'Ch9 Table ' + m[1].toUpperCase();
  if ((m = r.match(/^art(?:icle)?\.?\s*(\d{2,3})$/i)) || (m = r.match(/^(\d{2,3})$/))) return 'Art ' + m[1];
  if ((m = r.match(/^table\s*(.+)$/i))) return 'Table ' + m[1].replace(/\s/g, '').toUpperCase();
  return r.replace(/\s/g, '').toUpperCase();
}
function findKey(r) {
  if (!book) return null;
  let k = normRef(r);
  for (;;) {
    if (book.idx[k]) return k;
    const s = k.replace(/\([^()]*\)$/, '');
    if (s === k) return null;
    k = s; // 358.30(A)(2) -> 358.30(A) -> 358.30
  }
}

/* refs in lesson text: [[358.30(A)]] */
const refs = html => html.replace(/\[\[([^\]]+)\]\]/g, (_, r) => `<button class="ref" data-ref="${esc(r)}">${esc(r)}</button>`);
document.addEventListener('click', e => {
  const b = e.target.closest('button.ref');
  if (b) { e.preventDefault(); openRef(b.dataset.ref); }
});
async function openRef(r) {
  await loadBook();
  const k = findKey(r);
  if (k) { const [p, y, c = 0] = book.idx[k]; location.hash = `#/page/${p}/${y}/${c}/${encodeURIComponent(r)}`; return; }
  sheet(book
    ? `<h3>${esc(r)}</h3><p>Couldn't auto-find that spot (the scan's text isn't perfect). Try search in the Code Book tab.</p>
       <a class="btn" href="#/book?q=${encodeURIComponent(r)}">Search for ${esc(r)}</a>`
    : `<h3>${esc(r)}</h3><p>Look this up in your printed book — that's the open-book skill the exam tests.</p>
       <p class="dim small">Or import your private book file once, and every section number becomes tappable with the exact NEC text.</p>
       <a class="btn" href="#/book">How to import my book</a>`);
}
function sheet(html) {
  $('.sheet')?.remove();
  const d = document.createElement('div'); d.className = 'sheet';
  d.innerHTML = html + '<button class="btn" data-close>Close</button>';
  d.addEventListener('click', e => { if (e.target.matches('[data-close], a')) d.remove(); });
  document.body.append(d);
}

/* ---------- views ---------- */
const views = {};
function route() {
  $('.sheet')?.remove();
  const [path, query] = location.hash.slice(1).split('?');
  const parts = (path || '/').split('/').filter(Boolean);
  const name = parts[0] || 'home';
  document.querySelectorAll('nav.tabs a').forEach(a => a.classList.toggle('on', a.dataset.tab === (TAB_OF[name] || name)));
  (views[name] || views.home)(parts.slice(1).map(decodeURIComponent), new URLSearchParams(query));
  if (name !== 'page') window.scrollTo(0, 0);
}
const TAB_OF = { m: 'learn', l: 'learn', quiz: 'practice', cards: 'practice', page: 'book' };
addEventListener('hashchange', route);

function moduleStats(m) {
  const total = m.lessons.length, done = m.lessons.filter(l => prog.done[m.id + '/' + l.id]).length;
  return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
}
function nextLesson() {
  for (const m of MODULES) for (const l of m.lessons) if (!prog.done[m.id + '/' + l.id]) return { m, l };
  return null;
}

views.home = () => {
  const due = dueQs().length, nw = newQs().length, nx = nextLesson(), st = streak();
  app.innerHTML = `
    <h1>NEC Study</h1>
    <p class="dim">2026 NEC · Texas journeyman track</p>
    <div class="card">
      <div class="row"><div class="grow"><b>Today</b><div class="dim small">${due} due for review · ${nw} new from your lessons</div></div>
      <div style="text-align:center"><div style="font-size:26px">🔥 ${st}</div><div class="dim small">day streak</div></div></div>
      <a class="btn primary" href="#/cards/review">${due + nw ? '5-minute review' : 'Nothing due — quick mixed quiz'}</a>
    </div>
    ${nx ? `<div class="card"><b>Up next</b><div class="dim small">${esc(nx.m.title)}</div>
      <a class="btn" href="#/l/${nx.m.id}/${nx.l.id}">${esc(nx.l.title)} →</a></div>` : ''}
    <h2>Your path</h2>
    <div class="list">${MODULES.map(m => { const s = moduleStats(m); return `
      <a class="item" href="#/m/${m.id}"><div class="ico">${m.icon}</div><div class="grow">
      <div class="t">${esc(m.title)}</div><div class="s">${s.done}/${s.total} lessons</div>
      <div class="bar"><i style="width:${s.pct}%"></i></div></div></a>`; }).join('')}</div>`;
};

views.learn = () => {
  app.innerHTML = `<h1>Learn</h1><p class="dim">Short lessons. Do one on break, then hit "Mark done" to quiz yourself.</p>
    <div class="list">${MODULES.map(m => { const s = moduleStats(m); return `
      <a class="item" href="#/m/${m.id}"><div class="ico">${m.icon}</div><div class="grow">
      <div class="t">${esc(m.title)}</div><div class="s">${esc(m.blurb)}</div>
      <div class="bar"><i style="width:${s.pct}%"></i></div></div></a>`; }).join('')}</div>
    <p class="dim small">More of the code (services, grounding, motors, calcs…) is added in later updates.</p>`;
};

views.m = ([mid]) => {
  const m = modById(mid); if (!m) return views.learn();
  app.innerHTML = `<a href="#/learn" class="dim">← Learn</a><h1>${m.icon} ${esc(m.title)}</h1><p class="dim">${esc(m.blurb)}</p>
    <div class="list">${m.lessons.map((l, i) => `
      <a class="item" href="#/l/${m.id}/${l.id}"><div class="ico">${prog.done[m.id + '/' + l.id] ? '<span class="check">✓</span>' : i + 1}</div>
      <div class="grow"><div class="t">${esc(l.title)}</div><div class="s">${lessonQs(m.id, l.id).length} questions</div></div></a>`).join('')}</div>
    <a class="btn" href="#/quiz/module/${m.id}">Quiz the whole section</a>`;
};

views.l = ([mid, lid]) => {
  const m = modById(mid), i = m?.lessons.findIndex(l => l.id === lid);
  if (!m || i < 0) return views.learn();
  const l = m.lessons[i], next = m.lessons[i + 1], key = mid + '/' + lid, nq = lessonQs(mid, lid).length;
  app.innerHTML = `<a href="#/m/${mid}" class="dim">← ${esc(m.title)}</a>
    <h1>${esc(l.title)}</h1><article class="lesson">${refs(l.html)}</article>
    ${nq ? `<a class="btn primary" href="#/quiz/lesson/${mid}/${lid}" data-done>Mark done &amp; quiz me (${nq})</a>`
         : `<button class="btn primary" data-done>Mark done</button>`}
    ${next ? `<a class="btn" href="#/l/${mid}/${next.id}">Next: ${esc(next.title)} →</a>` : `<a class="btn" href="#/m/${mid}">Back to section</a>`}`;
  app.querySelectorAll('[data-done]').forEach(b => b.addEventListener('click', () => {
    prog.done[key] = Date.now(); save();
    if (b.tagName === 'BUTTON') location.hash = next ? `#/l/${mid}/${next.id}` : `#/m/${mid}`;
  }));
};

views.practice = () => {
  const due = dueQs().length, finds = QUESTIONS.filter(q => q.t === 'find').length;
  app.innerHTML = `<h1>Practice</h1>
    <a class="btn primary" href="#/cards/review">Flashcard review (${due} due)</a>
    <a class="btn" href="#/quiz/mixed">Quick quiz — 10 mixed</a>
    <a class="btn" href="#/quiz/find">Find it in the book (${finds} drills)</a>
    <a class="btn" href="#/quiz/missed">Redo ones I've missed</a>
    <h2>Timed test</h2>
    <p class="dim small">The real Texas journeyman exam: 80 scored questions, 4 hours, 70% to pass, open book (your own soft-bound NEC). That's about 3 minutes a question.</p>
    <div class="grid2"><a class="btn" href="#/quiz/timed/20">20 Q · 60 min</a><a class="btn" href="#/quiz/timed/40">40 Q · 2 hr</a></div>
    <h2>By section</h2>
    <div class="list">${MODULES.map(m => `<a class="item" href="#/quiz/module/${m.id}"><div class="ico">${m.icon}</div>
      <div class="grow"><div class="t">${esc(m.title)}</div><div class="s">${(m.questions || []).length} questions</div></div></a>`).join('')}</div>`;
};

/* flashcards: self-graded, feeds spaced repetition */
views.cards = () => {
  let list = shuffle(dueQs()).slice(0, 10);
  if (list.length < 10) list = list.concat(shuffle(newQs()).slice(0, 10 - list.length));
  if (!list.length) list = shuffle(QUESTIONS).slice(0, 10);
  let i = 0, got = 0;
  const show = (flip) => {
    if (i >= list.length) {
      app.innerHTML = `<h1>Done ✓</h1><p>${got}/${list.length} known. Missed cards come back sooner; known ones space out.</p>
        <a class="btn primary" href="#/cards/review" onclick="setTimeout(route)">Another 10</a><a class="btn" href="#/">Home</a>`;
      return;
    }
    const q = list[i];
    app.innerHTML = `<div class="row"><a href="#/practice" class="dim grow">← Practice</a><span class="dim">${i + 1}/${list.length}</span></div>
      <div class="card flash"><div class="q">${esc(q.q)}</div>
      ${flip ? `<div class="why"><b style="color:var(--good)">${esc(q.c[0])}</b><p>${refs(esc(q.w || ''))}</p>
        ${q.r ? `<button class="ref" data-ref="${esc(q.r)}">${esc(q.r)}</button>` : ''}</div>` : ''}</div>
      ${flip ? `<div class="grid2"><button class="btn" data-g="0">✗ Missed it</button><button class="btn primary" data-g="1">✓ Knew it</button></div>`
             : `<button class="btn primary" data-flip>Show answer</button>`}`;
    $('[data-flip]')?.addEventListener('click', () => show(true));
    app.querySelectorAll('[data-g]').forEach(b => b.addEventListener('click', () => {
      const ok = b.dataset.g === '1'; grade(q, ok); if (ok) got++; i++; show(false);
    }));
  };
  show(false);
};

/* multiple-choice quiz / timed test */
views.quiz = ([kind, a, b]) => {
  let pool, title, timed = 0;
  if (kind === 'lesson') { pool = lessonQs(a, b); title = 'Lesson quiz'; prog.done[a + '/' + b] ||= Date.now(); save(); }
  else if (kind === 'module') { pool = QUESTIONS.filter(q => q.m === a); title = modById(a)?.title; }
  else if (kind === 'find') { pool = QUESTIONS.filter(q => q.t === 'find'); title = 'Find it in the book'; }
  else if (kind === 'missed') { pool = QUESTIONS.filter(q => prog.q[q.id] && prog.q[q.id].b === 0); title = 'Missed questions'; }
  else if (kind === 'timed') { timed = +a || 20; pool = QUESTIONS; title = `Timed test · ${timed} Q`; }
  else { pool = QUESTIONS; title = 'Mixed quiz'; }
  const list = shuffle(pool).slice(0, timed || (kind === 'lesson' ? 99 : 10));
  if (!list.length) { app.innerHTML = `<h1>${esc(title || 'Quiz')}</h1><p>Nothing here yet.</p><a class="btn" href="#/practice">Back</a>`; return; }
  const answers = [], end = timed ? Date.now() + timed * 3 * 60e3 : 0;
  let i = 0, tick;
  const finish = () => {
    clearInterval(tick);
    const right = answers.filter(x => x.ok).length, pct = Math.round(right / list.length * 100);
    app.innerHTML = `<h1>${pct >= 70 ? 'Pass ✓' : 'Keep going'}</h1>
      <p class="out">${right}/${list.length} · ${pct}%</p><p class="dim">Texas passing score is 70%.</p>
      <h2>Review</h2>${list.map((q, k) => { const x = answers[k]; return `<div class="card">
        <div><b>${x?.ok ? '✓' : '✗'}</b> ${esc(q.q)}</div>
        ${x && !x.ok ? `<div class="small" style="color:var(--bad)">You: ${esc(x.pick ?? '(no answer)')}</div>` : ''}
        <div class="small" style="color:var(--good)">${esc(q.c[0])}</div>
        <div class="small dim">${refs(esc(q.w || ''))}</div>${q.r ? `<button class="ref" data-ref="${esc(q.r)}">${esc(q.r)}</button>` : ''}</div>`; }).join('')}
      <a class="btn primary" href="#/practice">Done</a>`;
  };
  const show = () => {
    if (i >= list.length) return finish();
    const q = list[i], opts = shuffle(q.c);
    app.innerHTML = `<div class="row"><a href="#/practice" class="dim grow">← ${esc(title)}</a>
        ${timed ? '<span class="timer" id="tm"></span>' : ''}<span class="dim">&nbsp;${i + 1}/${list.length}</span></div>
      ${q.t === 'find' ? '<div class="dim small">📖 Where in the code?</div>' : ''}
      <div class="q">${esc(q.q)}</div>
      ${opts.map(o => `<button class="btn choice" data-o="${esc(o)}">${esc(o)}</button>`).join('')}
      <div id="fb"></div>`;
    app.querySelectorAll('.choice').forEach(btn => btn.addEventListener('click', () => {
      if (answers[i]) return;
      const ok = btn.dataset.o === q.c[0];
      answers[i] = { ok, pick: btn.dataset.o }; grade(q, ok);
      if (timed) { i++; return show(); }
      app.querySelectorAll('.choice').forEach(x => x.classList.add(x.dataset.o === q.c[0] ? 'right' : x === btn ? 'wrong' : 'x'));
      $('#fb').innerHTML = `<div class="why"><b>${ok ? '✓ Right' : '✗ Not quite'}</b><p>${refs(esc(q.w || ''))}</p>
        ${q.r ? `<button class="ref" data-ref="${esc(q.r)}">Read it: ${esc(q.r)}</button>` : ''}</div>
        <button class="btn primary" id="nx">${i + 1 < list.length ? 'Next' : 'See score'}</button>`;
      $('#nx').addEventListener('click', () => { i++; show(); });
      $('#fb').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }));
    if (timed) {
      const t = $('#tm'), upd = () => {
        const s = Math.max(0, Math.round((end - Date.now()) / 1000));
        if (t) t.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
        if (!s) finish();
      };
      clearInterval(tick); upd(); tick = setInterval(() => { if (!document.contains(t)) return clearInterval(tick); upd(); }, 1000);
      if (i === list.length - 1) app.insertAdjacentHTML('beforeend', '<button class="btn" id="fin">Finish test</button>');
      $('#fin')?.addEventListener('click', finish);
    }
  };
  show();
};

/* ---------- code book ---------- */
views.book = async (_, qs) => {
  await loadBook();
  if (!book) {
    app.innerHTML = `<h1>Code Book</h1>
      <div class="card"><b>Import your book (one time)</b>
      <p class="small">Your NEC stays private: it's loaded from your own book file into this phone's storage only. It's never on the website.</p>
      <ol class="small"><li>Get the file <b>NEC-2026-book.necbook</b> onto this iPhone (AirDrop it, or save it to the Files app).</li>
      <li>Tap the button below and pick that file.</li><li>Wait about a minute and keep the app open.</li></ol>
      <label class="btn primary" style="position:relative">Choose book file…<input type="file" id="bf" style="position:absolute;inset:0;opacity:0"></label>
      <div id="imp" class="dim"></div></div>
      <p class="dim small">Until then, every section number in the lessons is still worth looking up in your printed book — finding things fast is the open-book skill the exam tests.</p>`;
    $('#bf').addEventListener('change', async e => {
      const f = e.target.files[0]; if (!f) return;
      const out = $('#imp');
      try {
        await importBook(f, p => { out.textContent = `Importing… ${Math.round(p * 100)}%`; });
        out.textContent = 'Done ✓'; route();
      } catch (err) { out.innerHTML = `<span style="color:var(--bad)">Import failed: ${esc(err.message)}</span>`; }
    });
    return;
  }
  const q = qs.get('q') || '';
  app.innerHTML = `<h1>Code Book</h1><p class="dim small">${esc(book.title)} · ${book.n} pages · on this phone only</p>
    <label for="go">Go to a section, table, or article</label>
    <form id="gof" class="row"><input id="go" placeholder="358.30   Table 310.16   Art 250   Table 4" autocomplete="off" autocapitalize="off" class="grow"><button class="btn small">Go</button></form>
    <label for="sq">Search words</label>
    <form id="sf" class="row"><input id="sq" value="${esc(q)}" placeholder="e.g. ceiling grid" autocomplete="off" class="grow"><button class="btn small">Search</button></form>
    <div id="res"></div>
    <h2>Jump to</h2>
    <div class="grid2">${[['Art 90', 'Intro (90)'], ['Art 100', 'Definitions (100)'], ['Art 110', 'General (110)'], ['Art 300', 'Wiring methods (300)'],
      ['Table 310.16', 'Ampacity 310.16'], ['Art 314', 'Boxes (314)'], ['Art 250', 'Grounding (250)'], ['Ch9 Table 1', 'Chapter 9 tables']]
      .map(([r, t]) => `<button class="btn small ref" style="width:100%" data-ref="${r}">${t}</button>`).join('')}</div>`;
  $('#gof').addEventListener('submit', e => { e.preventDefault(); const v = $('#go').value.trim(); if (v) openRef(v); });
  $('#sf').addEventListener('submit', e => { e.preventDefault(); location.hash = '#/book?q=' + encodeURIComponent($('#sq').value.trim()); });
  if (q) search(q);
};
function search(q) {
  const needle = q.toLowerCase().replace(/\s+/g, ' '), hits = [];
  for (let p = 0; p < book.n && hits.length < 60; p++) {
    const t = book.text[p].replace(/\s+/g, ' '), low = t.toLowerCase(); // phrases can wrap lines
    let at = low.indexOf(needle);
    while (at >= 0 && hits.length < 60) {
      hits.push({ p, s: t.slice(Math.max(0, at - 70), at), m: t.slice(at, at + q.length), e: t.slice(at + q.length, at + q.length + 90) });
      at = low.indexOf(needle, at + 300);
    }
  }
  $('#res').innerHTML = `<p class="dim small">${hits.length >= 60 ? '60+' : hits.length} matches</p>` + hits.map(h =>
    `<a class="hit" href="#/page/${h.p}/0/0"><b>Page ${h.p + 1}</b><div class="small">…${esc(h.s)}<mark>${esc(h.m)}</mark>${esc(h.e)}…</div></a>`).join('');
}

views.page = async ([p, y, c, label]) => {
  await loadBook();
  if (!book) return views.book([], new URLSearchParams());
  p = Math.max(0, Math.min(book.n - 1, +p || 0));
  const zoom = store.get('zoom', 200); // 200% = one column fills a phone screen
  app.innerHTML = `<div class="pager"><button class="btn small" onclick="history.back()">←</button>
      <span class="grow dim small" style="text-align:center">${label ? esc(label) + ' · ' : ''}p. ${p + 1}</span>
      <button class="btn small" id="zm">${zoom}%</button>
      <a class="btn small" href="#/page/${p - 1}/0/0">‹</a><a class="btn small" href="#/page/${p + 1}/0/0">›</a></div>
    <div class="pagewrap"><img id="pg" alt="Code book page ${p + 1}" style="width:${zoom}%"></div>
    <div class="grid2" style="margin-top:8px"><a class="btn" href="#/page/${p - 1}/0/0">‹ Prev page</a><a class="btn" href="#/page/${p + 1}/0/0">Next page ›</a></div>`;
  $('#zm').addEventListener('click', () => {
    const z = { 200: 100, 100: 150, 150: 200 }[store.get('zoom', 200)] || 200;
    store.set('zoom', z); $('#pg').style.width = z + '%'; $('#zm').textContent = z + '%';
  });
  const blob = await DB.get('pages', p), img = $('#pg');
  if (!blob || !img) return;
  img.onload = () => {
    URL.revokeObjectURL(img.src);
    const wrap = img.parentNode; wrap.scrollLeft = +c ? wrap.scrollWidth : 0;
    window.scrollTo(0, img.getBoundingClientRect().top + scrollY + img.offsetHeight * (+y || 0) - 70);
  };
  img.src = URL.createObjectURL(blob);
};

/* ---------- tools ---------- */
const frac = x => { // inches -> nearest 1/16 as 12 3/8"
  const s = x < 0 ? '-' : ''; x = Math.abs(x);
  let w = Math.floor(x), n = Math.round((x - w) * 16), d = 16;
  if (n === 16) { w++; n = 0; }
  while (n && n % 2 === 0) { n /= 2; d /= 2; }
  return s + (w || !n ? w : '') + (n ? `${w ? ' ' : ''}${n}/${d}` : '') + '"';
};
const BEND = { 10: [6, 1 / 16], 22.5: [2.6, 3 / 16], 30: [2, 1 / 4], 45: [1.4, 3 / 8], 60: [1.2, 1 / 2] };
const TAKEUP = { '1/2" EMT': 5, '3/4" EMT': 6, '1" EMT': 8, '1-1/4" EMT': 11 };
const BOXES = [['4" round/oct × 1-1/4"', 12.5], ['4" round/oct × 1-1/2"', 15.5], ['4" round/oct × 2-1/8"', 21.5],
  ['4" square × 1-1/4"', 18.0], ['4" square × 1-1/2"', 21.0], ['4" square × 2-1/8"', 30.3],
  ['4-11/16" sq × 1-1/4"', 25.5], ['4-11/16" sq × 1-1/2"', 29.5], ['4-11/16" sq × 2-1/8"', 42.0],
  ['3×2×2" device', 10.0], ['3×2×2-1/2" device', 12.5], ['3×2×3-1/2" device', 18.0], ['4×2-1/8×1-7/8" device (handy)', 13.0],
  ['FS single gang', 13.5], ['FD single gang', 18.0]];
const VOL = { 18: 1.5, 16: 1.75, 14: 2, 12: 2.25, 10: 2.5, 8: 3, 6: 5 }; // Table 314.16(B)(4), in³ per conductor

views.tools = ([which]) => {
  if (which === 'bend') return bendTool();
  if (which === 'box') return boxTool();
  app.innerHTML = `<h1>Tools</h1>
    <div class="list">
      <a class="item" href="#/tools/bend"><div class="ico">↪️</div><div class="grow"><div class="t">Bending calculator</div><div class="s">Offsets, rolling offsets, 3-point saddles, 90° stubs</div></div></a>
      <a class="item" href="#/tools/box"><div class="ico">📦</div><div class="grow"><div class="t">Box fill calculator</div><div class="s">Will it fit? 314.16</div></div></a>
      <a class="item" href="#/progress"><div class="ico">📊</div><div class="grow"><div class="t">My progress</div><div class="s">Scores, streak, reset</div></div></a>
    </div>`;
};
function bendTool() {
  app.innerHTML = `<a href="#/tools" class="dim">← Tools</a><h1>Bending calculator</h1>
    <label>What are you bending?</label>
    <select id="k"><option value="off">Offset</option><option value="roll">Rolling offset</option><option value="sad">3-point saddle</option><option value="stub">90° stub-up</option></select>
    <div id="f"></div><div class="card"><div id="o" class="out"></div><div id="n" class="small dim"></div></div>
    <p class="small dim">Uses the field multipliers on most hand benders. Always check your own bender's marks — brands differ a little. See the Pipe Bending lessons for the why.</p>`;
  const fields = {
    off: `<label>Offset depth (inches)</label><input id="d" type="number" inputmode="decimal" value="6">
          <label>Bend angle</label><select id="a">${Object.keys(BEND).map(a => `<option ${a == 30 ? 'selected' : ''}>${a}</option>`).join('')}</select>
          <label>Distance from pipe end to obstruction (optional)</label><input id="x" type="number" inputmode="decimal" placeholder="inches">`,
    roll: `<label>Rise (inches)</label><input id="r" type="number" inputmode="decimal" value="8">
           <label>Roll / sideways (inches)</label><input id="s" type="number" inputmode="decimal" value="6">
           <label>Bend angle</label><select id="a">${Object.keys(BEND).map(a => `<option ${a == 30 ? 'selected' : ''}>${a}</option>`).join('')}</select>`,
    sad: `<label>Obstruction height (inches)</label><input id="d" type="number" inputmode="decimal" value="2">
          <label>Distance from pipe end to center of obstruction (inches)</label><input id="x" type="number" inputmode="decimal" value="30">`,
    stub: `<label>Stub height wanted (inches, to back of the 90)</label><input id="d" type="number" inputmode="decimal" value="12">
           <label>Bender</label><select id="b">${Object.keys(TAKEUP).map(b => `<option>${b}</option>`).join('')}</select>`
  };
  const calc = () => {
    const k = $('#k').value, v = id => parseFloat($('#' + id)?.value), o = $('#o'), n = $('#n');
    if (k === 'off' || k === 'roll') {
      const depth = k === 'roll' ? Math.hypot(v('r'), v('s')) : v('d'), [mult, sh] = BEND[$('#a').value];
      if (!(depth > 0)) { o.textContent = '—'; n.textContent = ''; return; }
      const space = depth * mult, shrink = depth * sh;
      o.innerHTML = `${k === 'roll' ? `True offset: ${frac(depth)}<br>` : ''}Marks ${frac(space)} apart<br>Shrink ${frac(shrink)}`;
      n.innerHTML = v('x') > 0 ? `First mark at <b>${frac(v('x') + shrink)}</b> from the end (obstruction distance + shrink), second mark ${frac(space)} past it.`
        : `Multiplier ${mult} × ${frac(depth)} depth. Shrink ${frac(sh)} per inch of depth.`;
    } else if (k === 'sad') {
      const h = v('d'), x = v('x');
      if (!(h > 0)) { o.textContent = '—'; return; }
      const c = (x || 0) + h * 3 / 16, side = h * 2.5;
      o.innerHTML = `Center mark ${frac(c)}<br>Outer marks ±${frac(side)}`;
      n.innerHTML = `45° at the center mark, 22½° at each outer mark. Center mark moved ahead ${frac(h * 3 / 16)} for shrink (3/16" per inch of height); outer marks are 2½ × height from center.`;
    } else {
      const d = v('d'), t = TAKEUP[$('#b').value];
      if (!(d > t)) { o.textContent = `Stub must be over ${t}"`; return; }
      o.innerHTML = `Mark at ${frac(d - t)}`;
      n.innerHTML = `Take-up (deduct) for ${$('#b').value} is ${t}". Put the bender's arrow on the mark, stub pointing back toward the end you measured from.`;
    }
  };
  const setK = () => { $('#f').innerHTML = fields[$('#k').value]; $('#f').oninput = calc; $('#f').onchange = calc; calc(); };
  $('#k').addEventListener('change', setK); setK();
}
function boxTool() {
  const sizes = Object.keys(VOL).sort((a, b) => b - a);
  app.innerHTML = `<a href="#/tools" class="dim">← Tools</a><h1>Box fill</h1>
    <p class="small dim">Counting rules are in [[314.16(B)]]; volumes per conductor in [[Table 314.16(B)(4)]]; standard box sizes in [[Table 314.16(A)]].</p>
    <label>Insulated conductors in the box, by size</label>
    <div class="grid2">${sizes.map(s => `<div><label>#${s} AWG</label><input type="number" inputmode="numeric" min="0" data-c="${s}" placeholder="0"></div>`).join('')}</div>
    <label>Devices (switches/receptacles on a yoke)</label><input id="dev" type="number" inputmode="numeric" min="0" placeholder="0">
    <label>Internal cable clamps?</label><select id="cl"><option value="0">No</option><option value="1">Yes (any number)</option></select>
    <label>Luminaire studs / hickeys</label><input id="st" type="number" inputmode="numeric" min="0" placeholder="0">
    <label>Equipment grounding conductors (green/bare)</label><input id="eg" type="number" inputmode="numeric" min="0" placeholder="0">
    <label>Box</label><select id="bx">${BOXES.map(([n, v]) => `<option value="${v}">${n} — ${v} in³</option>`).join('')}<option value="x">Other (marked volume)</option></select>
    <input id="bv" type="number" inputmode="decimal" placeholder="Marked volume, in³" style="display:none">
    <div class="card"><div id="o" class="out"></div><div id="n" class="small"></div></div>`;
  app.innerHTML = refs(app.innerHTML);
  const calc = () => {
    const num = el => Math.max(0, parseInt(el?.value) || 0);
    let units = [], big = 0;
    app.querySelectorAll('[data-c]').forEach(el => { const n = num(el), s = +el.dataset.c; if (n) { units.push([n, s, `${n} × #${s}`]); big = big ? Math.min(big, s) : s; } });
    const dev = num($('#dev')), cl = +$('#cl').value, st = num($('#st')), eg = num($('#eg'));
    if (!big && (dev || cl || st || eg)) big = 14;
    let vol = units.reduce((a, [n, s]) => a + n * VOL[s], 0), lines = units.map(([n, s, t]) => `${t} = ${(n * VOL[s]).toFixed(2)}`);
    const add = (count, what) => { if (count) { vol += count * VOL[big]; lines.push(`${what} = ${count} × ${VOL[big]} = ${(count * VOL[big]).toFixed(2)}`); } };
    add(dev * 2, `${dev} device(s), 2 each, sized to largest wire`);
    add(cl, 'Clamps (1 total)');
    add(st, 'Studs/hickeys (1 each)');
    if (eg) add(eg > 4 ? 1 + (eg - 4) / 4 : 1, `EGCs (1 for up to 4, +¼ each over 4)`);
    $('#bv').style.display = $('#bx').value === 'x' ? '' : 'none';
    const box = $('#bx').value === 'x' ? parseFloat($('#bv').value) : +$('#bx').value;
    $('#o').innerHTML = vol ? `Need ${vol.toFixed(2)} in³` + (box ? `<br><span style="color:${vol <= box ? 'var(--good)' : 'var(--bad)'}">${vol <= box ? '✓ Fits' : '✗ Too small'} (${box} in³)</span>` : '') : 'Enter what goes in the box';
    $('#n').innerHTML = lines.join('<br>');
  };
  app.oninput = calc; app.onchange = calc; calc();
}

views.progress = () => {
  const seen = Object.keys(prog.q).length, n = Object.values(prog.q).reduce((a, s) => a + s.n, 0), r = Object.values(prog.q).reduce((a, s) => a + s.r, 0);
  app.innerHTML = `<a href="#/tools" class="dim">← Tools</a><h1>My progress</h1>
    <div class="card"><div class="out">🔥 ${streak()} day streak</div>
    <p>${seen}/${QUESTIONS.length} questions seen · ${n ? Math.round(r / n * 100) : 0}% right overall</p></div>
    ${MODULES.map(m => { const s = moduleStats(m), qs = (m.questions || []).map(q => prog.q[q.id]).filter(Boolean);
      const a = qs.reduce((x, s) => x + s.n, 0), b = qs.reduce((x, s) => x + s.r, 0);
      return `<div class="card"><b>${m.icon} ${esc(m.title)}</b><div class="small dim">${s.done}/${s.total} lessons · ${a ? Math.round(b / a * 100) + '% right' : 'no answers yet'}</div><div class="bar"><i style="width:${s.pct}%"></i></div></div>`; }).join('')}
    <h2>Backup</h2><p class="small dim">Progress is saved on this phone. Copy a backup now and then (paste it in Notes).</p>
    <button class="btn" id="cp">Copy backup</button>
    <button class="btn" id="rs">Restore from backup</button>
    <button class="btn" id="wipe" style="color:var(--bad)">Reset all progress</button>`;
  $('#cp').onclick = async () => { try { await navigator.clipboard.writeText(JSON.stringify(prog)); $('#cp').textContent = 'Copied ✓'; } catch { sheet(`<p>Copy this:</p><textarea style="width:100%;height:160px">${esc(JSON.stringify(prog))}</textarea>`); } };
  $('#rs').onclick = () => { const t = prompt('Paste your backup:'); if (!t) return; try { Object.assign(prog, JSON.parse(t)); save(); route(); } catch { alert("That backup didn't read right."); } };
  $('#wipe').onclick = () => { if (confirm('Erase all lesson progress and quiz history?')) { prog.done = {}; prog.q = {}; prog.days = {}; save(); route(); } };
};

route();
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js');
