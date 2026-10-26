// Offline: serve from cache instantly, refresh the cache in the background (new content shows next launch).
const CACHE = 'nec-study';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', 'index.html', 'app.js', 'manifest.webmanifest', 'icon-180.png',
    'content/start.js', 'content/names.js', 'content/support.js', 'content/bending.js', 'content/safety.js', 'content/ch1.js', 'content/ch2branch.js', 'content/ch2service.js', 'content/ch2ocpd.js', 'content/ch2ground.js', 'content/ch3.js'])));
  self.skipWaiting();
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request, { cache: 'no-cache' }).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
