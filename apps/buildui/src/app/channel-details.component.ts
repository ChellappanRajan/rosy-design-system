import { Component, effect, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-channel-detail',
  imports: [RouterOutlet],
  styles: `:host{display:contents}`,
  template: `
    <div class="w-60 bg-gray-800 flex-col flex">
      <div
        class="p-3 h-12 shadow-md w-full text-white text-lg flex items-center"
      >
        <div class="flex gap-1 font-title">
          {{ id() === '' ? 'Dashboard' : 'Server' }}
        </div>
      </div>
      <div class="flex-1 p-3 text-white">
        {{ id() === '' ? 'Friends' : 'general' }}
      </div>
    </div>
    <div class="flex-1 bg-gray-600">
      <div class="p-3 h-12 shadow-md w-full text-white text-lg">General</div>
      <div class="flex-1 p-3">
        <h1 class="text-white">
          Channel Component {{ id() }}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit
          nulla dolorum nobis, eos atque cum voluptas architecto deleniti harum
          nemo nisi perspiciatis consectetur quidem, sint consequatur.
          Explicabo, architecto inventore?
        </h1>
      </div>
    </div>
  `,
  standalone: true,
})
export default class ChannelDetailsComponent {
  router = inject(Router);
  id = input();

  #logger = effect(() => {
    console.log(`[Channel Component]- ${this.id()}`);
  });

  activeURL = toSignal(
    this.router.events.pipe(
      map(event => (event instanceof NavigationEnd ? this.router.url : ''))
    )
  );
}
