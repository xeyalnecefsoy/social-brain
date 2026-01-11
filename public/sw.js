// Social Brain PWA - Service Worker v3
// Tam offline dəstəyi üçün aqressiv caching

const CACHE_NAME = 'social-brain-v3';

// Install - Service Worker quraşdırılır
self.addEventListener('install', (event) => {
  console.log('[SW] Quraşdırılır...');
  
  // Dərhal aktivləş, köhnə SW-ni gözləmə
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] İlkin cache yaradıldı');
      // İlkin faylları cache et
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icon.png',
        '/icon-512.png',
        '/offline.html'
      ]).catch(err => {
        console.warn('[SW] Bəzi fayllar cache edilə bilmədi:', err);
      });
    })
  );
});

// Activate - Köhnə cache-ləri sil
self.addEventListener('activate', (event) => {
  console.log('[SW] Aktivləşir...');
  
  event.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(
        names.filter(name => name !== CACHE_NAME).map(name => {
          console.log('[SW] Köhnə cache silindi:', name);
          return caches.delete(name);
        })
      );
    }).then(() => {
      console.log('[SW] Bütün client-lər idarə olunur');
      return self.clients.claim();
    })
  );
});

// Fetch - BÜTÜN sorğuları tut və cache et
self.addEventListener('fetch', (event) => {
  const request = event.request;
  
  // Yalnız GET sorğuları
  if (request.method !== 'GET') {
    return;
  }
  
  // Chrome extension, browser-sync və s. ignore et
  const url = new URL(request.url);
  if (url.protocol === 'chrome-extension:' || 
      url.protocol === 'moz-extension:' ||
      url.hostname === 'localhost' && url.port !== location.port) {
    return;
  }

  // Stale-While-Revalidate strategiyası:
  // 1. Əvvəl cache-dən cavab ver (sürətli)
  // 2. Arxa planda network-dan yenilə
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(request).then((cachedResponse) => {
        
        // Network fetch promise
        const fetchPromise = fetch(request).then((networkResponse) => {
          // Uğurlu cavabları cache-ə əlavə et
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        }).catch((error) => {
          console.log('[SW] Network xətası:', error.message);
          // Network uğursuz oldu, null qaytar
          return null;
        });

        // Əgər cache-də varsa, onu qaytar
        // Eyni zamanda arxa planda yenilə
        if (cachedResponse) {
          console.log('[SW] Cache-dən:', request.url);
          // Arxa planda yenilə
          fetchPromise;
          return cachedResponse;
        }

        // Cache-də yoxdur, network-dan gözlə
        return fetchPromise.then((networkResponse) => {
          if (networkResponse) {
            return networkResponse;
          }
          
          // Heç biri işləmədi - offline fallback
          console.log('[SW] Offline fallback:', request.url);
          
          // HTML sorğuları üçün offline səhifə
          if (request.destination === 'document' || 
              request.headers.get('accept')?.includes('text/html')) {
            return cache.match('/offline.html').then(offlineResponse => {
              return offlineResponse || new Response(
                '<html><body><h1>Offline</h1><p>İnternet yoxdur</p></body></html>',
                { headers: { 'Content-Type': 'text/html' } }
              );
            });
          }
          
          // Digər resurslar üçün boş cavab
          return new Response('', { status: 503 });
        });
      });
    })
  );
});

// Background sync (gələcək üçün)
self.addEventListener('sync', (event) => {
  console.log('[SW] Sync event:', event.tag);
});

// Push notifications (gələcək üçün)
self.addEventListener('push', (event) => {
  console.log('[SW] Push event:', event);
});

// Mesaj qəbulu
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    const urls = event.data.urls;
    caches.open(CACHE_NAME).then((cache) => {
      urls.forEach(url => {
        fetch(url).then(response => {
          if (response.ok) {
            cache.put(url, response);
            console.log('[SW] Manually cached:', url);
          }
        }).catch(() => {});
      });
    });
  }
});
