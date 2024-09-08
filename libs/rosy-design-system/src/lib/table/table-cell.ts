
import {html,LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './table-cell.css';

@customElement('rosy-table-cell')
export class TableCell extends LitElement {


  static override styles = styles;

  override connectedCallback(): void {
    super.connectedCallback();
    if(!this.hasAttribute('role')){
      this.setAttribute('role', 'cell');
    }
  }

   override render(){
    return html`<slot></slot>`;
    }
}
