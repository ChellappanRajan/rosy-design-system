import { Component, effect, inject } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { DiscordIconComponent } from './icon.component';
import { NgClass } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import ChannelDetailsComponent from './channel-details.component';
@Component({
  standalone: true,
  imports: [
    RouterModule,
    NgClass,
    RouterOutlet,
    DiscordIconComponent,
    NavigationBarComponent,
    ChannelDetailsComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'buildui';
  active = () => true;
  nums = [...Array(30)];
  servers = [
    {
      img: './servers/mirage.png',
    },
    {
      img: './servers/next.png',
    },
    {
      img: './servers/tailwind.png',
    },
  ];
  router = inject(Router);

  activeURL = toSignal(
    this.router.events.pipe(
      map(event => (event instanceof NavigationEnd ? this.router.url : ''))
    )
  );

  #logger = effect(() => {
    console.info(`[App], ${this.activeURL()}`);
  });
}

//cw - delete word in insert mode
//dw - delete word in visual mode
//ci - change inside
//ca - change around
//di - delete inside
//da - delete around
//E- end of word
//w - start of word
//cit - change inside tag
//cat - change around tag
//va' or ] or anythin
//p - put in below-if we do inline it will be in before or after
//P - put in above

//Change surround not working
//cs"` - working
//shift + 5 for check open and close tag such as () and [] and {}
//cst - change surroundings tag left shift+[,<],
//shift + + to jump to start of the line next ()
