// Network first (always the newest version when there's signal); the cache is the offline fallback.
const CACHE = 'nec-study';
const FILES = ['./', 'index.html', 'app.js', 'manifest.webmanifest', 'icon-180.png',
    'content/photos.js', 'content/start.js', 'content/names.js', 'content/support.js', 'content/bending.js', 'content/safety.js', 'content/ch1.js', 'content/ch2branch.js', 'content/ch2service.js', 'content/ch2ocpd.js', 'content/ch2ground.js', 'content/ch3.js', 'content/ch4equip.js', 'content/ch4motors.js', 'content/ch5.js', 'content/ch6.js', 'content/ch7.js', 'content/extra.js', 'content/calc.js', 'content/map.js', 'img/ac-connectors.webp', 'img/arc-ppe.webp', 'img/bender-chart.webp', 'img/bender.webp', 'img/bending-foot.webp', 'img/box-4sq-deep.webp', 'img/box-4sq.webp', 'img/box-handy.webp', 'img/cable-tray.webp', 'img/clamp-meter.webp', 'img/conduit-strut.webp', 'img/cut-jagged.webp', 'img/deck-conduit.webp', 'img/duct-bank.webp', 'img/emt-fittings.webp', 'img/ent.webp', 'img/fish-tape.webp', 'img/gfci.webp', 'img/lineman.webp', 'img/longnose.webp', 'img/mcc.webp', 'img/meter-base.webp', 'img/multimeter.webp', 'img/nm.webp', 'img/offset-box.webp', 'img/padmount.webp', 'img/panel.webp', 'img/pvc-stubups.webp', 'img/pvc.webp', 'img/reamer.webp', 'img/receptacles.webp', 'img/safety-switch.webp', 'img/scissor-lift.webp', 'img/service-mast.webp', 'img/spring-nut.webp', 'img/straps-fittings.webp', 'img/stripper.webp', 'img/strut-trapeze.webp', 'img/tape.webp', 'img/tester.webp', 'img/tray-trapeze.webp', 'img/tubing-cutter.webp'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(u => new Request(u, { cache: 'reload' })))));
  self.skipWaiting();
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    try {  // ponytail: 4 s timeout so weak jobsite signal falls back to the cache quickly
      const r = await Promise.race([fetch(e.request, { cache: 'no-cache' }), new Promise((_, no) => setTimeout(no, 4000))]);
      if (r.ok) c.put(e.request, r.clone());
      return r;
    } catch { return (await c.match(e.request, { ignoreSearch: true })) || Response.error(); }
  }));
});
