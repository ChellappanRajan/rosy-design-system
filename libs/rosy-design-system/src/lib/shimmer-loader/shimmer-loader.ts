import {html,LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './shimmer';
// import {classMap} from 'lit/directives/class-map.js';

@customElement('rosy-shimmer-loader')
export class RosyShimmerLoader extends LitElement {
  static override styles = styles;

  @property({ reflect:true, type:String }) accessor shape :'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-full' | 'rounded-none' = 'rounded-none';


  override render() {
    return html`<div class="shimmer-box animation"></div>`;
  }
}
