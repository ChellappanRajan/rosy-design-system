import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './dialog.css';

const sheet = new CSSStyleSheet();
sheet.replaceSync('');

@customElement('ry-dialog-trigger')
export class RosyModalTrigger extends LitElement {
  @property({ type: Boolean, attribute: true }) accessor asChild = false;

  // protected override createRenderRoot(): HTMLElement | DocumentFragment {
  //     return this
  // }

  protected override render(): unknown {
    // this.slot = 'trigger';
    // this.slot = 'dialog-title';
    return html` <slot></slot> `;
  }
}

@customElement('ry-dialog-content')
export class RosyModalContent extends LitElement {
  protected override render(): unknown {
    this.slot = 'content';
    return html`
      <div class="flex flex-col space-y-1.5 text-center sm:text-left">
        <slot name="header"></slot>
        <slot></slot>
      </div>
    `;
  }
}

@customElement('ry-dialog-header')
export class RosyModalHeader extends LitElement {
  protected override render(): unknown {
    this.slot = 'header';
    return html`
      <slot name="title"></slot>
      <slot name="description"></slot>
    `;
  }
}

@customElement('ry-dialog-title')
export class RosyModalTitle extends LitElement {
  protected override render(): unknown {
    this.slot = 'title';
    return html`
      <h2
        style="
    margin:0;
    margin-bottom: .25rem;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.75rem;"
      >
        <slot></slot>
      </h2>
    `;
  }
}
@customElement('ry-dialog-description')
export class RosyModalDescription extends LitElement {
  protected override render(): unknown {
    this.slot = 'description';
    return html`
      <p style="color:#020510ab;font-size: 14px;padding:0; margin: 0 0 1.5rem;">
        <slot></slot>
      </p>
    `;
  }
}

@customElement('ry-dialog-body')
export class RosyModalBody extends LitElement {
  protected override render(): unknown {
    this.slot = 'footer';
    return html`<div><slot></slot></div>`;
  }
}

@customElement('ry-dialog')
export class RosyModal extends LitElement {
  static override styles = styles;

  // static override shadowRootOptions = {
  //   ...LitElement.shadowRootOptions,
  //   delegatesFocus: true,
  // };

  @property({ type: Boolean }) accessor open: boolean = false;

  #openModal() {
    const dialog = this.shadowRoot?.querySelector('dialog');
    dialog?.showModal();
    dialog?.focus();
  }

  constructor() {
    super();
    document.addEventListener('mousedown', event => {
      console.log(this.contains(event.target as any));
    });
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
      <slot @click=${this.#openModal} name="trigger"></slot>
      <dialog aria-describedby="d">
        <slot name="content"></slot>
      </dialog>
    `;
  }
}
