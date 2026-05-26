// sw.js - Service Worker aggiornato
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Lascia passare le richieste al database/server
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
