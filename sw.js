self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('reality-kernel').then((cache) => {
      return cache.addAll(['/reality-kernel/']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
