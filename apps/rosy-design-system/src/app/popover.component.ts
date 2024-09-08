import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Popover } from '@rosy-design-system/rosy-design-system';
@Component({
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-popover-example',
  template: `
    <div
      class="center"
    >
      <select (change)="onChange($event)">
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="center-left">Center Left</option>
        <option value="center-right">Center Right</option>
      </select>
      <rosy-popover
        title="Hello Test A11y"
        [position]="position"
      ></rosy-popover>
    </div>
  `,
})
export default class PopoverExampleComponent {
  position = 'center-left';
  constructor() {
    console.log(Popover);
  }

  onChange(event: Event) {
    this.position = (event.target as HTMLInputElement).value;
  }
}
