/* Service worker for BCFeather.github.io
   Network-first strategy: page navigations always go to the network
   (bypassing the browser's HTTP cache), so a freshly deployed build is
   visible on the next refresh without the user having to clear the cache.
   Cached copies are kept only as an offline fallback. */
const CACHE_NAME = 'bf-site-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(['/'])).catch(() => {})
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') {
    return;
  }
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        try {
          const fresh = await fetch(request, { cache: 'no-store' });
          if (fresh && fresh.ok) {
            cache.put(request, fresh.clone());
          }
          return fresh;
        } catch (err) {
          const cached = await cache.match(request);
          return cached || Response.error();
        }
      })()
    );
    return;
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      try {
        const fresh = await fetch(request);
        if (fresh && fresh.ok) {
          cache.put(request, fresh.clone());
        }
        return fresh;
      } catch (err) {
        return cached || Response.error();
      }
    })()
  );
});
