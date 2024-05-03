import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    // importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebaseConfig))),
    // importProvidersFrom(provideDatabase(() => getDatabase())),
    // importProvidersFrom(provideStorage(() => getStorage()))
]
};
