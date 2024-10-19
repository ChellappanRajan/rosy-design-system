import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, signal, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { response } from 'express';


const URL = `http://localhost:8080/stream`;
@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {



response = signal('');

_ = effect(()=>{
  console.log(`[Log] ${this.response()}`);
})





fetchData() {
  fetch(URL).then((response) => {
    const reader = response.body!.getReader();
    const  _this  = this;
    return new ReadableStream<Uint8Array>({
      start(controller) {
        return pump();
        function pump(): any {
          return reader.read().then(({ done, value }) => {
            // When no more data needs to be consumed, close the stream
            if (done) {
              console.info('[Stream] Completed...')
              controller.close();
              return;
            }

            const chunk = new TextDecoder("utf-8").decode(value);
            const oldResponse = _this.response();
            _this.response.set(`${oldResponse} ${chunk}`);
            // Enqueue the next data chunk into our target stream
            controller.enqueue(value);
            return pump();
          });
        }
      },
    });
  }) 

}
 

}
