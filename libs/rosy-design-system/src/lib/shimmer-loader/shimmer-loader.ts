import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './shimmer';

@customElement('rosy-shimmer-loader')
export class RosyShimmerLoader extends LitElement {
  static override styles = styles;



  override render() {
    return html`<div class="shimmer-box animation"></div>`;
  }
}
