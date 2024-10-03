import { Route } from '@angular/router';
import ChannelComponent from './channel.component';
import ChannelDetailsComponent from './channel-details.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ChannelDetailsComponent,
  },
  {
    path: 'channel/:id',
    loadComponent: () => import('./channel-details.component'),
    // children:[
    //     {
    //         path:':id',
    //         component:ChannelDetailsComponent
    //     }
    // ]
  },
];
