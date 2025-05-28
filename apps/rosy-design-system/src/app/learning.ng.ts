import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GridComponent } from './components/grid/grid.ng';

@Component({
  imports: [GridComponent],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-learning',
  template: `<section>
    <!-- there's no jaguar emoji?! 🙀 -->
    <div class="component" style="--n: 4">
      <button
        class="toggler visual-item"
        aria-expanded="false"
        aria-controls="cats-menu"
      >
        <!-- in a real project, this would be an SVG--><span
          class="ico"
          aria-hidden="true"
          >😼</span
        ><span>cats</span>
      </button>
      <!-- found out about inert attribute from-->
      <!-- https://codepen.io/aardrian/pen/jOvRWbP?editors=1000-->
      <!-- then looked it up-->
      <!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert-->
      <ul id="cats-menu" inert="inert">
        <li class="visual-item" style="--i: 0">
          <!-- in a real project, this would be an SVG--><span
            class="ico"
            aria-hidden="true"
            >🐯</span
          ><span>tiger</span>
          <!-- this would open a submenu if we had one-->
          <!-- but we don't, so it's disabled -->
          <!-- and hdden from screenreaders-->
          <!-- if you do add a submenu, -->
          <!-- remove first two attributes-->
          <!-- and give submenu an id identical-->
          <!-- to this button's area-controls-->
          <button
            class="toggler"
            disabled="disabled"
            aria-hidden="true"
            aria-label="open tiger submenu"
            aria-expanded="false"
            aria-controls="tiger-submenu"
          >
            ➜
          </button>
        </li>
        <li class="visual-item" style="--i: 1">
          <!-- in a real project, this would be an SVG--><span
            class="ico"
            aria-hidden="true"
            >🦁</span
          ><span>lion</span>
          <!-- this would open a submenu if we had one-->
          <!-- but we don't, so it's disabled -->
          <!-- and hdden from screenreaders-->
          <!-- if you do add a submenu, -->
          <!-- remove first two attributes-->
          <!-- and give submenu an id identical-->
          <!-- to this button's area-controls-->
          <button
            class="toggler"
            disabled="disabled"
            aria-hidden="true"
            aria-label="open lion submenu"
            aria-expanded="false"
            aria-controls="lion-submenu"
          >
            ➜
          </button>
        </li>
        <li class="visual-item" style="--i: 2">
          <!-- in a real project, this would be an SVG--><span
            class="ico"
            aria-hidden="true"
            >🐆</span
          ><span>jaguar</span>
          <!-- this would open a submenu if we had one-->
          <!-- but we don't, so it's disabled -->
          <!-- and hdden from screenreaders-->
          <!-- if you do add a submenu, -->
          <!-- remove first two attributes-->
          <!-- and give submenu an id identical-->
          <!-- to this button's area-controls-->
          <button
            class="toggler"
            disabled="disabled"
            aria-hidden="true"
            aria-label="open jaguar submenu"
            aria-expanded="false"
            aria-controls="jaguar-submenu"
          >
            ➜
          </button>
        </li>
        <li class="visual-item" style="--i: 3">
          <!-- in a real project, this would be an SVG--><span
            class="ico"
            aria-hidden="true"
            >🐆</span
          ><span>leopard</span>
          <!-- this would open a submenu if we had one-->
          <!-- but we don't, so it's disabled -->
          <!-- and hdden from screenreaders-->
          <!-- if you do add a submenu, -->
          <!-- remove first two attributes-->
          <!-- and give submenu an id identical-->
          <!-- to this button's area-controls-->
          <button
            class="toggler"
            disabled="disabled"
            aria-hidden="true"
            aria-label="open leopard submenu"
            aria-expanded="false"
            aria-controls="leopard-submenu"
          >
            ➜
          </button>
        </li>
      </ul>
    </div>
    <div class="component"></div>
    <app-grid></app-grid>
  </section>`,
  styleUrl: './learning.scss',
})
export default class LearningComponent {}
