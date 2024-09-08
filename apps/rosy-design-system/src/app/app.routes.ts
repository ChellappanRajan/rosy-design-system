import { Route } from '@angular/router';
import {SimmerExampleComponent} from './shimmer.component';

export const appRoutes: Route[] = [
  {path:'skeleton', component:SimmerExampleComponent},
  {path:'popover', loadComponent:()=>import('./popover.component')}

];
