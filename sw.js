// Un Service Worker basilare per bypassare il controllo di installabilità
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // Lasciamo che la rete gestisca tutto normalmente
    e.respondWith(fetch(e.request));
});
