import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './modal.css';

@customElement('ry-modal-body')
export class RosyModalBody extends LitElement {
  protected override render(): unknown {
    this.slot = 'footer';
    return html`<div><slot></slot></div>`;
  }
}
@customElement('ry-modal-header')
export class RosyModalHeader extends LitElement {
  protected override render(): unknown {
    this.slot = 'header';
    return html`<header><slot></slot></header>`;
  }
}

@customElement('ry-modal')
export class RosyModal extends LitElement {
  static override styles = styles;

  static override shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: Boolean }) accessor open: boolean = false;

  #openModal() {
    const dialog = this.shadowRoot?.querySelector('dialog');
    dialog?.showModal();
  }

  protected override updated(_changedProperties: PropertyValues): void {
    if (_changedProperties.has('open')) {
      if (this.open) {
        this.#openModal();
      }
    }
  }

  override render() {
    return html`
      <dialog>
        <button>Focused</button>
        <h1>Are you sure want to delete?</h1>
        <!-- <slot name="header"></slot> -->
        <!-- <slot name="body"></slot> -->
      </dialog>
    `;
  }
}
