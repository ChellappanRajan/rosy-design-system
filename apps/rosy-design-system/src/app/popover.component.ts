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
        <option value="top-start">Top Start</option>
        <option value="top-end">Top End</option>
        <option value="bottom-start">Bottom Start</option>
        <option value="bottom-end">Bottom End</option>
        <option value="left-start">Left Start</option>
        <option value="left-end">Left End</option>
        <option value="right-start">Right Start</option>
        <option value="right-end">Right End</option>
      </select>
      <rosy-popover
        [style.--placement]="position"
        title="Hello Test A11y"
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
