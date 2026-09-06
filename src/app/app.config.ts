import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withNavigationErrorHandler } from '@angular/router';
import { Location } from '@angular/common';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { recoverLazyLoad } from './lazy-load-recovery';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withNavigationErrorHandler(event => {
      const url = inject(Location).prepareExternalUrl(event.url);
      recoverLazyLoad(event.error, url, window);
    })),
    provideHttpClient(),
  ]
};
