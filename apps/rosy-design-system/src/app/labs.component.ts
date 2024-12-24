import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { Avatar } from '@rosy-design-system';
import { AvatarGroup } from '@rosy-design-system';
import { SimpleSelect } from '@rosy-design-system';
import { RosyModal } from '@rosy-design-system';
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
  open = signal(false);
  imgSrc = [
    'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80',
  ];
  showStyle = signal(false);
  data = [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'C', value: 'c' },
  ];

  onClick() {
    this.showStyle.set(!this.showStyle());
  }
}
