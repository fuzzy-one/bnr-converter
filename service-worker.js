const cacheName = 'currency-converter-cache-v1';
const assetsToCache = [
  '/index.html',
  '/styles.css',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Install event - Cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        console.log('Caching assets...');
        return cache.addAll(assetsToCache);
      })
  );
});

// Fetch event - Serve cached resources
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
