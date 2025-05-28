import { Component, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RosyButton } from '@rosy-design-system';
@Component({
  imports: [RouterOutlet, RouterLink, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-button-example',
  templateUrl: './button.component.html',
})
export default class ButtonExampleComponent {
  bakgroundColor = model();
  fontColor = model();
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
