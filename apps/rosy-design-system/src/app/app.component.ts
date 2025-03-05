import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
    imports: [RouterOutlet, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  fistLevel = signal(true);
  secondLevel = signal(true);

  onClick() {
    this.fistLevel.set(!this.fistLevel());
  }

  onSecondLevel() {
    this.secondLevel.set(!this.secondLevel());
  }
  text = signal(
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  );
}
