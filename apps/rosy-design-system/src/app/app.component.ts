import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RosyShimmerLoader} from '@rosy-design-system/rosy-design-system';
@Component({
  standalone: true,
  imports: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(){
  console.log(RosyShimmerLoader);
  }
}
