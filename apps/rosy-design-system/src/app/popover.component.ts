import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Popover } from '@rosy-design-system';
@Component({
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-popover-example',
  template: `
    <div class="center">
      <select (change)="onChange($event)">
        <option value="">Default(top)</option>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
        <option value="center-left">Center Left</option>
        <option value="center-right">Center Right</option>
      </select>
      <rosy-popover
        [style.--placement]="position"
        title="Hello Test A11y"
        style="--placement:top"
      ></rosy-popover>
    </div>
  `,
})
export default class PopoverExampleComponent {
  position = '';
  constructor() {
    console.log(Popover);
  }

  onChange(event: Event) {
    this.position = (event.target as HTMLInputElement).value;
  }
}
