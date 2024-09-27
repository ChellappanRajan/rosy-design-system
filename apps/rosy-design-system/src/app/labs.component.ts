import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-labs-component',
  templateUrl: './labs.component.html',
  //   template: `
  //     Labs Exploration
  //     <style>
  //       @property --_f {
  //         syntax: '<number>';
  //         inherits: true;
  //         initial-value: 0;
  //       }

  //       @keyframes --_f {
  //         0% {
  //           --_f: 1;
  //         }
  //       }

  //       input {
  //         width: 400px;
  //         /* height: var(--s);  */
  //         /* --_c: color-mix(in srgb, var(--c), #000 var(--p,0%)); */
  //         appearance: none;
  //         background: none;
  //         cursor: pointer;
  //         overflow: hidden;
  //         font-size: inherit;
  //       }

  //       :host {
  //         animation: var(--_f) linear both;
  //       }

  //       /* button{
  //         --_color:var(--color,blue);
  //     border:1px solid var(--_color);

  // } */
  //       .parent {
  //         --color: red;
  //       }

  //       button {
  //         --color: hsl(var(--color-hue) 60% 50%);
  //         border: 3px solid var(--color);
  //         animation: 5s color-hue linear infinite;
  //       }
  //     </style>

  //     <label>
  //       <input type="range" id="one" min="0" max="120" step="1" value="20" />
  //       <output for="one" style="--min: 0;--max: 120"></output>
  //     </label>

  //     <div class="parent">
  //       <button>click me</button>
  //     </div>

  //     <ul>
  //     </ul>
  //   `,
})
export default class LabsComponent {
  showStyle = signal(false);

  onClick() {
    this.showStyle.set(!this.showStyle());
  }
}
