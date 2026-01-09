
const APP_ID = process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID;
const API_KEY = process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY;

let Backendless: any;

if (typeof window === 'undefined') {
  // --- SERVER TƏRƏFİ (SSR) ---
  // Serverdə Backendless-i yükləmirik ki, xəta verməsin.
  // Yalançı bir obyekt yaradırıq (Mock).
  Backendless = {
    initApp: () => {},
    applicationId: null,
    Data: {
      of: () => ({
        find: async () => [],
        save: async () => {},
        remove: async () => {},
        rt: () => ({
          addCreateListener: () => {},
          removeCreateListener: () => {},
          addDeleteListener: () => {},
          removeDeleteListener: () => {}
        })
      })
    },
    UserService: {}
  };
} else {
  // --- BRAUZER TƏRƏFİ ---
  // Burada əsl kitabxananı "dist" qovluğundan çağırırıq
  // @ts-ignore
  Backendless = require('backendless/dist/backendless.js');
  
  if (APP_ID && API_KEY) {
    try {
        Backendless.initApp(APP_ID, API_KEY);
    } catch(e) {
        console.error("Backendless init error", e);
    }
  } else {
    console.warn('Backendless App ID or API Key is missing.');
  }
}

export const db = Backendless.Data;
export const auth = Backendless.UserService;

export default Backendless;
