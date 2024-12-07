import { html, LitElement, nothing } from 'lit';
import {
  customElement,
  property,
  query,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import { styles } from './button.css';

@customElement('rosy-button')
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

  override render() {
    return html`
      <button class="ggr-button">
        <slot></slot>
      </button>
    `;
  }
}
