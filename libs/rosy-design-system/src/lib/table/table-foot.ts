import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './table-foot.css';

@customElement('rosy-table-foot')
export class TableFoot extends LitElement {
  static override styles = styles;

  override render() {
    return html`<slot></slot>`;
  }
}
