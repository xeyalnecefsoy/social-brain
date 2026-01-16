"use client";

import { useEffect, useState } from "react";

// Cache-ə əlavə ediləcək kritik resurslar
const RESOURCES_TO_CACHE = [
  '/',
  '/manifest.json',
  '/icon.svg',
  '/offline.html',
];

export function ServiceWorkerRegistration() {
  const [showStoragePrompt, setShowStoragePrompt] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    // Online/Offline status
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    setIsOffline(!navigator.onLine);

    if ("serviceWorker" in navigator) {
      // Service Worker qeydiyyatı
      navigator.serviceWorker
        .register("/sw.js")
        .then(async (registration) => {
          console.log("[PWA] Service Worker qeydiyyatdan keçdi:", registration.scope);
          
          // Yeni versiya mövcuddursa
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                  console.log("[PWA] Yeni versiya mövcuddur!");
                  newWorker.postMessage({ type: 'SKIP_WAITING' });
                }
              });
            }
          });

          // Service Worker aktiv olduqda resursları cache et
          if (registration.active) {
            await warmCache();
          }

          // Persistent storage soruş
          await requestPersistentStorage();
        })
        .catch((error) => {
          console.error("[PWA] Service Worker qeydiyyatı uğursuz:", error);
        });

      // Controller dəyişdikdə
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log("[PWA] Controller dəyişdi");
      });
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Persistent storage request - ChatGPT kimi
  async function requestPersistentStorage() {
    if (!navigator.storage || !navigator.storage.persist) {
      console.log("[PWA] Persistent Storage API dəstəklənmir");
      return;
    }

    try {
      // Əvvəlcə mövcud vəziyyəti yoxla
      const isPersisted = await navigator.storage.persisted();
      
      if (isPersisted) {
        console.log("[PWA] Storage artıq persistent-dir ✓");
        return;
      }

      // İcazə soruş
      const granted = await navigator.storage.persist();
      
      if (granted) {
        console.log("[PWA] Persistent Storage icazəsi verildi ✓");
      } else {
        console.log("[PWA] Persistent Storage icazəsi verilmədi");
        // İstifadəçiyə bildiriş göstər
        setShowStoragePrompt(true);
      }
    } catch (error) {
      console.error("[PWA] Persistent Storage xətası:", error);
    }
  }

  // Storage prompt bağla
  const handleDismissPrompt = () => {
    setShowStoragePrompt(false);
    localStorage.setItem('storage-prompt-dismissed', 'true');
  };

  // Əvvəlcədən dismiss edilib?
  useEffect(() => {
    if (localStorage.getItem('storage-prompt-dismissed')) {
      setShowStoragePrompt(false);
    }
  }, []);

  return (
    <>
      {/* Offline indicator */}
      {isOffline && (
        <div className="fixed top-0 left-0 right-0 z-[9999] bg-amber-500/90 text-amber-950 backdrop-blur-sm shadow-lg flex items-center justify-between px-4 py-2 text-sm font-medium animate-in slide-in-from-top duration-300">
           <div className="flex items-center gap-2">
             <span>📴</span>
             <span className="text-xs font-semibold">
               Offline Rejim
             </span>
           </div>
           
           <button 
             onClick={() => setIsOffline(false)}
             className="ml-2 p-1 hover:bg-amber-600/20 rounded-full transition-colors"
             aria-label="Bağla"
           >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
             </svg>
           </button>
        </div>
      )}

      {/* Storage permission prompt */}
      {showStoragePrompt && (
        <div className="fixed bottom-20 left-4 right-4 z-[9999] md:left-auto md:right-4 md:max-w-sm animate-in slide-in-from-bottom">
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500/10">
                <span className="text-xl">💾</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-100">Offline İstifadə</h4>
                <p className="mt-1 text-sm text-slate-400">
                  Tətbiqetmənin offline işləməsi üçün brauzerin tənzimləmələrindən bu sayt üçün &quot;Storage&quot; icazəsi verin.
                </p>
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={handleDismissPrompt}
                    className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-700"
                  >
                    Bağla
                  </button>
                  <button
                    onClick={() => {
                      requestPersistentStorage();
                      handleDismissPrompt();
                    }}
                    className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-500"
                  >
                    Yenidən Cəhd Et
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Cache-i isit - kritik resursları prefetch et
async function warmCache() {
  if (!('caches' in window)) return;

  try {
    console.log("[PWA] Cache isidilir...");
    
    const cache = await caches.open('social-brain-v4');
    
    // Kritik resursları cache et
    for (const url of RESOURCES_TO_CACHE) {
      try {
        const response = await fetch(url, { cache: 'reload' });
        if (response.ok) {
          await cache.put(url, response);
          console.log("[PWA] ✓ Cache:", url);
        }
      } catch {
        console.warn("[PWA] ✗ Cache edilə bilmədi:", url);
      }
    }

    // Səhifədəki bütün script və style resurslarını cache et
    const links = document.querySelectorAll('link[rel="stylesheet"], script[src]');
    for (const link of links) {
      const href = (link as HTMLLinkElement).href || (link as HTMLScriptElement).src;
      if (href && href.includes('/_next/')) {
        try {
          const response = await fetch(href, { cache: 'reload' });
          if (response.ok) {
            await cache.put(href, response);
            console.log("[PWA] ✓ Asset:", href.split('/').pop());
          }
        } catch {
          // ignore
        }
      }
    }

    // Estimate storage
    if (navigator.storage && navigator.storage.estimate) {
      const estimate = await navigator.storage.estimate();
      const usedMB = ((estimate.usage || 0) / 1024 / 1024).toFixed(2);
      const totalMB = ((estimate.quota || 0) / 1024 / 1024).toFixed(0);
      console.log(`[PWA] Storage: ${usedMB}MB / ${totalMB}MB`);
    }

    console.log("[PWA] ✓ Cache isitməsi tamamlandı!");
  } catch (error) {
    console.error("[PWA] Cache isitmə xətası:", error);
  }
}


