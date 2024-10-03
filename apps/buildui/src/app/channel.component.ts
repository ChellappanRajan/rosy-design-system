import { Component, effect, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-channel',
  imports: [RouterOutlet],
  template: `
    <h1 class="text-white">
      Channel Component {{ id() }}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit
      nulla dolorum nobis, eos atque cum voluptas architecto deleniti harum nemo
      nisi perspiciatis consectetur quidem, sint consequatur. Explicabo,
      architecto inventore?
    </h1>
  `,
  standalone: true,
})
export default class ChannelComponent {
  id = input();

  #logger = effect(() => {
    console.log(`[Channel Component]- ${this.id()}`);
  });
}
