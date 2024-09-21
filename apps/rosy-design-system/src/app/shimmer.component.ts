import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShimmerLoader } from '@rosy-design-system';
@Component({
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-shimmer-example',
  // templateUrl: './app.component.html',
  template: `
    <div class="container roboto-regular">
      <h1>Card Example</h1>
      <div class="flex-row">
        <rosy-shimmer-loader
          class="rounded-full"
          style="--width:30px;--height: 30px;"
        ></rosy-shimmer-loader>
        <rosy-shimmer-loader
          class="rounded-md"
          style="--height: 30px;"
        ></rosy-shimmer-loader>
      </div>
      <rosy-shimmer-loader
        class="rounded-md"
        style="display:block; margin-top:1rem; --width: 342px; height: 100px;"
      ></rosy-shimmer-loader>
    </div>
    <div class="roboto-regular">
      <h1>Multiline Example</h1>
      <rosy-shimmer-loader
        class="rounded-md"
        style="--width: 500px; --height: 20px; display: block;"
      ></rosy-shimmer-loader>
      <rosy-shimmer-loader
        class="rounded-md"
        style="--width: 400px; --height: 20px;display: block; margin-top: 10px;"
      ></rosy-shimmer-loader>
      <rosy-shimmer-loader
        class="rounded-md"
        style="--width: 300px; --height: 20px;display: block; margin-top: 10px;"
      ></rosy-shimmer-loader>
      <rosy-shimmer-loader
        class="rounded-md"
        style="--width: 200px; --height: 20px; display: block; margin-top: 10px;"
      ></rosy-shimmer-loader>
    </div>
    <section class="roboto-regular">
      <h1>More complex Example</h1>
      <header class="header">
        <rosy-shimmer-loader class="rounded-full"></rosy-shimmer-loader>
        <div class="right-side">
          <rosy-shimmer-loader
            class="rounded-full"
            style="--width:40px;--height: 40px;"
          ></rosy-shimmer-loader>
          <rosy-shimmer-loader
            class="rounded-full"
            style="--width:40px;--height: 40px;"
          ></rosy-shimmer-loader>
          <span>Rosy Tv</span>
        </div>
      </header>
      <main>
        <div
          style="margin-top:2rem;display: flex;gap:1rem;flex-direction:column;"
        >
          <rosy-shimmer-loader
            class="rounded-full"
            style="--width:80px;--height: 30px;"
          ></rosy-shimmer-loader>
          <rosy-shimmer-loader
            class="rounded-full"
            style="--width:360px;--height: 30px;"
          ></rosy-shimmer-loader>
          <rosy-shimmer-loader
            class="rounded-full"
            style="--width:160px;--height: 30px;"
          ></rosy-shimmer-loader>
        </div>
        <div class="card-wrapper">
          <rosy-shimmer-loader
            class="rounded-full"
            style="--width:600px;--height: 30px;"
          ></rosy-shimmer-loader>
          <div class="card-container">
            <rosy-shimmer-loader class="card rounded-md"></rosy-shimmer-loader>
            <rosy-shimmer-loader class="card rounded-md"></rosy-shimmer-loader>
            <rosy-shimmer-loader class="card rounded-md"></rosy-shimmer-loader>
            <rosy-shimmer-loader class="card rounded-md"></rosy-shimmer-loader>
            <rosy-shimmer-loader class="card rounded-md"></rosy-shimmer-loader>
          </div>
          <rosy-shimmer-loader
            class="rounded-full"
            style="--width:600px;--height: 30px;"
          ></rosy-shimmer-loader>
        </div>
        <div class="footer">
          <rosy-shimmer-loader
            class="footer-card rounded-full"
          ></rosy-shimmer-loader>
          <rosy-shimmer-loader
            class="footer-card rounded-full"
          ></rosy-shimmer-loader>
          <rosy-shimmer-loader
            class="footer-card rounded-full"
          ></rosy-shimmer-loader>
          <rosy-shimmer-loader
            class="footer-card rounded-full"
          ></rosy-shimmer-loader>
          <rosy-shimmer-loader
            class="footer-card rounded-full"
          ></rosy-shimmer-loader>
          <rosy-shimmer-loader
            class="footer-card rounded-full"
          ></rosy-shimmer-loader>
          <rosy-shimmer-loader
            class="footer-card rounded-full"
          ></rosy-shimmer-loader>
          <rosy-shimmer-loader
            class="footer-card rounded-full"
          ></rosy-shimmer-loader>
          <rosy-shimmer-loader
            class="footer-card rounded-full"
          ></rosy-shimmer-loader>
          <rosy-shimmer-loader
            class="footer-card rounded-full"
          ></rosy-shimmer-loader>
          <rosy-shimmer-loader
            class="footer-card rounded-full"
          ></rosy-shimmer-loader>
          <rosy-shimmer-loader
            class="footer-card rounded-full"
          ></rosy-shimmer-loader>
          <rosy-shimmer-loader
            class="footer-card rounded-full"
          ></rosy-shimmer-loader>
        </div>
      </main>
    </section>
  `,
})
export class SimmerExampleComponent {
  constructor() {
    console.log(ShimmerLoader);
  }
}
