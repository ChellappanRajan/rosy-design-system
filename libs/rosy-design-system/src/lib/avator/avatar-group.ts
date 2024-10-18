import { html, LitElement, nothing } from 'lit';
import {
  customElement,
  property,
  query,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import { styles } from './avatar-group.css';

@customElement('rosy-avatar-group')
export class AvatarGroup extends LitElement {
  static override styles = styles;

  protected override render(): unknown {
    return html` <slot></slot> `;
  }
}
