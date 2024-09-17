import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './table-row.css';

@customElement('rosy-table-row')
export class TableRow extends LitElement {
  static override styles = styles;

  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'row');
  }

  override render() {
    return html`<slot></slot>`;
  }
}
