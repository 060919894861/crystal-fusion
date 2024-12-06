import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'crystalfusion-a0304',
        appId: '1:40617535779:web:dade03c7d2a1434e224496',
        storageBucket: 'crystalfusion-a0304.firebasestorage.app',
        apiKey: 'AIzaSyC3eCB79hE2Ax1rViYAkHqGSX1zqOFedZg',
        authDomain: 'crystalfusion-a0304.firebaseapp.com',
        messagingSenderId: '40617535779',
        measurementId: 'G-WXFEGCX0JW',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
