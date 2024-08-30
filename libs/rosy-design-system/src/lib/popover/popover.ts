
import {html,LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './popover.css';

@customElement('rosy-popover')
export class Popover extends LitElement {
  static override styles = styles;

  override render() {
    return html`<h1>Popover Test</h1>`;
  }
}
