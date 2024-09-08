
import {html,LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './table-head.css';


@customElement('rosy-table-head')
export class TableHead extends LitElement {

  static override styles = styles;

  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'rowgroup');
  }

   override render(){
    return html`<slot></slot>`;
    }
}
