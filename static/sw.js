const CACHE_NAME = 'biblioteca-pwa-v2';
const STATIC_ASSETS = [
  '/',
  '/static/manifest.json',
  '/static/icon.svg',
  '/static/icon-192.png',
  '/static/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  // Para requisições Firebase ou APIs externas (Google Books, BrasilAPI), não intercepta no SW
  const url = event.request.url;
  if (url.includes('firestore.googleapis.com') || 
      url.includes('firebaseio.com') || 
      url.includes('googleapis.com/books') || 
      url.includes('brasilapi.com.br') || 
      url.includes('openlibrary.org')) {
    return;
  }

  // Network-first com fallback para cache
  event.respondWith(
    fetch(event.request).then(response => {
      return response;
    }).catch(() => {
      return caches.match(event.request).then(cached => {
        if (cached) return cached;
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('/');
        }
      });
    })
  );
});
