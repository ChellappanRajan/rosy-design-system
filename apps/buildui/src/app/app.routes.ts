import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'channel/:id',
    loadComponent: () => import('./channel.component'),
    // children:[
    //     {
    //         path:':id',
    //         component:ChannelDetailsComponent
    //     }
    // ]
  },
];
