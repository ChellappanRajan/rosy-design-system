import { HttpClient } from '@angular/common/http';
import { Component, computed, effect,ElementRef, inject, signal, viewChild, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';




const URL = `http://localhost:8080/stream`;
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

_ = effect(()=>{
  const element = this.elementRef() as ElementRef;
 
  if(this.response() && element){
    // eslint-disable-next-line no-self-assign
    // element.nativeElement.scrollTop = element.nativeElement.scrollTop;
  }
    console.log(element.nativeElement.scrollTop);
})




fetchData2(){
    this.http.post('http://localhost:8080/api/conversation',{
      "model": "llama3.2",
  "prompt": "Why is the sky blue?"
    }).subscribe((value)=>{
       console.log(value);
     })
}


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
