import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(
      withInterceptors([
        (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
          return next(req);
        },
      ])
    ),
  ],
};
