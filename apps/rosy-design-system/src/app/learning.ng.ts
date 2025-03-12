import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GridComponent } from './components/grid/grid.ng';

@Component({
  imports: [GridComponent],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-learning',
  template: `<section>
    <app-grid></app-grid>
  </section>`,
})
export default class LearningComponent {}
