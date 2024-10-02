import { Component, effect, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-channel',
  imports: [RouterOutlet],
  template: `
    <h1 class="text-white">Channel Component {{ id() }}</h1>
    <router-outlet />
  `,
  standalone: true,
})
export default class ChannelComponent {
  id = input();

  #logger = effect(() => {
    console.log(`[Channel Component]- ${this.id()}`);
  });
}
