import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './table.css';

@customElement('rosy-table')
export class Table extends LitElement {
  static override styles = styles;

  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'table');
  }

  override render() {
    return html`<slot></slot>`;
  }
}
