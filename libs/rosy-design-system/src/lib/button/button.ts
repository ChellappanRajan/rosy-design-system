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

@customElement('ry-button')
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
  static formAssociated = true;
  @property({ type: String }) accessor as: 'button' | 'input' | 'a' = 'button';
  @property({ type: String }) accessor href: string | undefined;
  @property({ type: String }) accessor value: string = '';
  #tag = literal`button`;
  #tagType = 'button';
  internals!: ElementInternals;

  constructor() {
    super();
  }

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
    const isLink = this.#tagType === 'a';
    const classes = classMap({
      'ry-button': true,
      link: this.#tagType === 'a',
    });

    if (this.#tagType === 'input') {
      return html`<input type="button" value=${this.value} class=${classes} />`;
    }

    return html`
      <${this.#tag} href=${ifDefined(this.href)} class=${classes} >
        <slot></slot>
      </${this.#tag}>
    `;
  }
}
