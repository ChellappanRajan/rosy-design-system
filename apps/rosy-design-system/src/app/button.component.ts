import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RosyButton } from '@rosy-design-system';
@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-button-example',
  templateUrl: './button.component.html',
})
export default class ButtonExampleComponent {
  constructor() {
    console.log(RosyButton);
  }

  onClick(event: Event) {
    console.log(event.target);
  }
  variant = '';

  onChange(event: Event) {
    this.variant = (event.target as HTMLInputElement).value;
  }
}
