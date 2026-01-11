"use client";

import { useEffect } from "react";

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("[PWA] Service Worker qeydiyyatdan keçdi:", registration.scope);
          
          // Yeni versiya mövcuddursa, avtomatik yenilə
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                  console.log("[PWA] Yeni versiya mövcuddur, yenilənir...");
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error("[PWA] Service Worker qeydiyyatı uğursuz:", error);
        });
    }
  }, []);

  return null;
}
