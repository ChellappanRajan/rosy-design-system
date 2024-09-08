
import {html,LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { styles } from './table-body.css';

@customElement('rosy-table-body')
export class TableBody extends LitElement {

  static override styles = styles;



  override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'rowgroup');
  }


   override render(){
    return html`<slot></slot>`;
    }
}
