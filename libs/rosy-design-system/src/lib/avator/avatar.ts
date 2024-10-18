import { html, LitElement, nothing } from 'lit';
import {
  customElement,
  property,
  query,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import { styles } from './avatar.css';

@customElement('rosy-avatar')
export class Avatar extends LitElement {
  static override styles = styles;

  @property({ type: String }) accessor urlSrc = '';

  protected override render(): unknown {
    return html` <img src=${this.urlSrc} /> `;
  }
}
