import { Route } from '@angular/router';
import { SimmerExampleComponent } from './shimmer.component';

export const appRoutes: Route[] = [
  { path: '', loadComponent: () => import('./labs.component') },
  { path: 'skeleton', component: SimmerExampleComponent },
  { path: 'popover', loadComponent: () => import('./popover.component') },
  { path: 'table', loadComponent: () => import('./table.component') },
  { path: 'button', loadComponent: () => import('./button.component') },
  { path: 'ar', loadComponent: () => import('./aspect-ratio') },
  { path: 'learning', loadComponent: () => import('./learning.ng') },
];
