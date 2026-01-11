// Service Worker for Social Brain PWA
// Bu fayl offline funksionallığı təmin edir

const CACHE_NAME = 'social-brain-v2';
const OFFLINE_URL = '/offline.html';

// Quraşdırma zamanı cache ediləcək kritik fayllar
const PRECACHE_ASSETS = [
  '/',
  '/manifest.json',
  '/icon.png',
  '/icon-512.png',
  '/offline.html',
];

// Install event - kritik faylları əvvəlcədən cache et
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Precaching app shell');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => {
        console.log('[SW] Skip waiting on install');
        return self.skipWaiting();
      })
  );
});

// Activate event - köhnə cache-ləri təmizlə
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => {
        console.log('[SW] Claiming clients');
        return self.clients.claim();
      })
  );
});

// Fetch event - sorğuları tutub cache et
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Yalnız GET sorğularını işlə
  if (request.method !== 'GET') return;

  // Xarici domenləri ignore et (API-lər və s.)
  if (url.origin !== self.location.origin) {
    // Xarici resurslar üçün network-only
    return;
  }

  // Next.js static assets üçün Cache First strategiyası
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
    );
    return;
  }

  // Next.js data chunks üçün
  if (url.pathname.startsWith('/_next/')) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        }).catch(() => {
          // _next resursu yoxdursa, cached-i qaytar
          return cachedResponse || new Response('Resource not available offline', { status: 503 });
        });
      })
    );
    return;
  }

  // HTML səhifələri üçün Network First (fallback: cache)
  if (request.destination === 'document' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              console.log('[SW] Serving cached page:', url.pathname);
              return cachedResponse;
            }
            // Ana səhifəni göstər, yoxsa offline səhifə
            return caches.match('/').then((homeResponse) => {
              if (homeResponse) {
                return homeResponse;
              }
              return caches.match(OFFLINE_URL);
            });
          });
        })
    );
    return;
  }

  // Digər statik resurslar üçün (images, fonts və s.)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(request).then((response) => {
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      }).catch(() => {
        // Resurs tapılmadı
        return new Response('', { status: 404 });
      });
    })
  );
});

// Mesaj qəbul et (yeniləmə tələbi)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

