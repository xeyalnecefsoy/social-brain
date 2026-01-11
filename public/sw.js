// Service Worker for Social Brain PWA
// Bu fayl offline funksionallığı təmin edir

const CACHE_NAME = 'social-brain-v1';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/icon.png',
  '/icon-512.png',
];

// Service Worker quraşdırma zamanı statik faylları cache et
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Statik fayllar cache edilir');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  // Dərhal aktivləş
  self.skipWaiting();
});

// Köhnə cache-ləri təmizlə
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[ServiceWorker] Köhnə cache silinir:', name);
            return caches.delete(name);
          })
      );
    })
  );
  // Bütün client-ləri idarə et
  self.clients.claim();
});

// Network First strategiyası - əvvəlcə network, əgər olmasa cache
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Yalnız GET sorğularını cache et
  if (request.method !== 'GET') return;

  // Chrome extension və digər xarici sorğuları ignore et
  if (!request.url.startsWith('http')) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        // Uğurlu cavab - cache-ə əlavə et
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Network yoxdur - cache-dən götür
        return caches.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            console.log('[ServiceWorker] Cache-dən göstərilir:', request.url);
            return cachedResponse;
          }
          
          // Əgər ana səhifədirsə və cache-də yoxdursa, offline səhifə göstər
          if (request.destination === 'document') {
            return caches.match('/');
          }
          
          return new Response('Offline - məzmun tapılmadı', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain; charset=utf-8'
            })
          });
        });
      })
  );
});
