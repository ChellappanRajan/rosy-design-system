import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GridComponent } from './components/grid.ng';

@Component({
  imports: [GridComponent],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-learning',
  template: `<app-grid></app-grid>`,
})
export default class LearningComponent {}
