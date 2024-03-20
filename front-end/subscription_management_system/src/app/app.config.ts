import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { DateFormatPipe } from './date-format.pipe';

export const appConfig: ApplicationConfig = {
  providers: [
    DateFormatPipe,
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideHttpClient( withFetch(),), provideAnimationsAsync(),
  ],
};
