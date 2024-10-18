// @ts-nocheck
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LightDomController } from '../controller/LightDOMController';

@customElement('simple-select')
export class SimpleSelect extends LitElement {
  static override styles = css`
    p {
      color: blue;
    }
  `;
  @property({ type: Array }) accessor options = [];

  private controller = new LightDomController(this, {
    render: () => html`
      <option slot="option">None</option>
      ${this.options.map(
        option => html`<option value=${option.value}>${option.label}</option>`
      )}
    `,
  });

  onSlotChange = e => {
    console.log(e, 'SlotChanges');
    const select = this.shadowRoot!.querySelector('select');
    const options = this.querySelectorAll('option');
    const fragment = new DocumentFragment();
    for (const option of Array.from(options)) {
      fragment.append(option);
    }
    select && select.append(fragment);
  };

  override render() {
    return html`<select></select>
      <slot @slotchange=${this.onSlotChange} name="option"> </slot> `;
  }
}
