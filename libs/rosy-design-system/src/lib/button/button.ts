import { LitElement, nothing, PropertyValues } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';

import {
  customElement,
  property,
  query,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import { styles } from './button.css';
import { html, literal, unsafeStatic } from 'lit/static-html.js';

@customElement('rosy-button')
//Try to add type for href
export class RosyButton extends LitElement implements HTMLButtonElement {
  disabled!: boolean;
  // static override shadowRootOptions: ShadowRootInit = {...LitElement.shadowRootOptions,delegatesFocus:true};
  form!: HTMLFormElement | null;
  formAction!: string;
  formEnctype!: string;
  formMethod!: string;
  formNoValidate!: boolean;
  formTarget!: string;
  labels!: NodeListOf<HTMLLabelElement>;
  name!: string;
  type!: 'submit' | 'reset' | 'button';
  validationMessage!: string;
  validity!: ValidityState;
  value!: string;
  willValidate!: boolean;
  checkValidity(): boolean {
    throw new Error('Method not implemented.');
  }
  reportValidity(): boolean {
    throw new Error('Method not implemented.');
  }
  setCustomValidity(error: string): void {
    throw new Error('Method not implemented.');
  }
  popoverTargetAction!: string;
  popoverTargetElement!: Element | null;
  static override styles = styles;

  @property({ type: String }) accessor as: string = 'button';
  @property({ type: String }) accessor href: string | undefined;

  #tag = literal`button`;
  #tagType = 'button';

  // protected override createRenderRoot(): HTMLElement | DocumentFragment {
  //     return this
  // }

  protected override willUpdate(_changedProperties: PropertyValues): void {
    super.willUpdate(_changedProperties);
    if (_changedProperties.has('as')) {
      this.#tag = literal`${unsafeStatic(this.as)}`;
      this.#tagType = this.as;
      //  const ifDefined =  customElements.get(this.#tag._$litStatic$);
      //  console.log(ifDefined);
    }
  }

  override render() {
    const classes = classMap({
      'ry-button': true,
      link: this.#tagType === 'a',
    });

    return html`
      <${this.#tag} href=${ifDefined(this.href)} class=${classes}>
        <slot></slot>
      </${this.#tag}>
    `;
  }
}
