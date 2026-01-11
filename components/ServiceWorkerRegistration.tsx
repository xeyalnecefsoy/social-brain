"use client";

import { useEffect } from "react";

// Cache-ə əlavə ediləcək kritik resurslar
const RESOURCES_TO_CACHE = [
  '/',
  '/manifest.json',
  '/icon.png',
  '/icon-512.png',
  '/offline.html',
];

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      // Service Worker qeydiyyatı
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("[PWA] Service Worker qeydiyyatdan keçdi:", registration.scope);
          
          // Yeni versiya mövcuddursa
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                  console.log("[PWA] Yeni versiya mövcuddur!");
                  // Avtomatik yeniləmə tələbi
                  newWorker.postMessage({ type: 'SKIP_WAITING' });
                }
              });
            }
          });

          // Service Worker aktiv olduqda resursları cache et
          if (registration.active) {
            warmCache();
          }
        })
        .catch((error) => {
          console.error("[PWA] Service Worker qeydiyyatı uğursuz:", error);
        });

      // Səhifə dəyişdikdə controller yenilənməsini izlə
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log("[PWA] Controller dəyişdi, səhifə yenilənir...");
        window.location.reload();
      });
    }
  }, []);

  return null;
}

// Cache-i isit - kritik resursları prefetch et
async function warmCache() {
  if (!('caches' in window)) return;

  try {
    console.log("[PWA] Cache isidilir...");
    
    // Kritik resursları cache et
    const cache = await caches.open('social-brain-v2');
    
    for (const url of RESOURCES_TO_CACHE) {
      try {
        const response = await fetch(url, { cache: 'no-cache' });
        if (response.ok) {
          await cache.put(url, response);
          console.log("[PWA] Cache edildi:", url);
        }
      } catch (err) {
        console.warn("[PWA] Cache edilə bilmədi:", url);
      }
    }

    // Ana səhifənin tam HTML-ni cache et
    const homeResponse = await fetch('/', { cache: 'no-cache' });
    if (homeResponse.ok) {
      await cache.put('/', homeResponse);
      console.log("[PWA] Ana səhifə cache edildi");
    }

    console.log("[PWA] Cache isitməsi tamamlandı!");
  } catch (error) {
    console.error("[PWA] Cache isitmə xətası:", error);
  }
}

