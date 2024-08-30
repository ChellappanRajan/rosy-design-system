import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {SimmerExampleComponent} from './shimmer.component';
@Component({
  standalone: true,
  imports: [SimmerExampleComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(){
  }
}
