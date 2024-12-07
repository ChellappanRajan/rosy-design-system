import { HttpClient } from '@angular/common/http';
import {
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  signal,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule } from '@angular/router';

// const URL = `http://localhost:8080/stream`;
const URL = `http://localhost:11434/api/generate`;
@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  elementRef = viewChild('ref');
  http = inject(HttpClient);

  response = signal('');

  _ = effect(() => {
    const element = this.elementRef() as ElementRef;

    if (this.response() && element) {
      console.log(this.response());
      // eslint-disable-next-line no-self-assign
      // element.nativeElement.scrollTop = element.nativeElement.scrollTop;
    }
    // console.log(element.nativeElement.scrollTop);
  });

  fetchData2() {
    this.http
      .post(URL, {
        model: 'llama3.2',
        prompt: 'Why is the sky blue?',
      })
      .subscribe(value => {
        console.log(value);
      });
  }

  fetchData(elementRef: HTMLInputElement) {
    const value = elementRef.value;
    const serialization = JSON.stringify({
      model: 'llama3.2',
      prompt: value,
    });

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: serialization,
    }).then(response => {
      const reader = response.body!.getReader();

      return new ReadableStream<Uint8Array>({
        start: controller => {
          const push: () => void = () => {
            return reader.read().then(({ done, value }) => {
              // When no more data needs to be consumed, close the stream
              if (done) {
                console.info('[Stream] Completed...');
                elementRef.value = '';
                controller.close();
                return;
              }

              const chunk = new TextDecoder('utf-8').decode(value);
              const parseJSON = JSON.parse(chunk).response;
              const oldResponse = this.response();
              this.response.set(`${oldResponse} ${parseJSON}`);
              // Enqueue the next data chunk into our target stream
              controller.enqueue(value);
              return push();
            });
          };
          return push();
        },
      });
    });
  }
}
