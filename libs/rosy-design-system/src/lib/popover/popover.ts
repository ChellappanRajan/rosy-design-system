import { html, LitElement, nothing } from 'lit';
import {
  customElement,
  property,
  query,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import { styles } from './popover.css';

/**
 * @cssproperty --placement - Controls the placement of the popover relative to its anchor element.
 *
 * @type {'top' | 'bottom' | 'left' | 'right' | 'top-start'  | 'top-end' | 'bottom-start'  | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'}
 *
 * @description
 * This CSS custom property determines the position of the popover relative to the anchor element. The possible values are:
 * - `'top'`: Aligns the popover above the anchor.
 * - `'bottom'`: Aligns the popover below the anchor.
 * - `'left'`: Aligns the popover to the left side of the anchor.
 * - `'right'`: Aligns the popover to the right side of the anchor.
 * - `'top-start'`: Aligns the popover to the top-start of the anchor.
 * - `'top-end'`: Aligns the popover to the top-end side of the anchor.
 * - `'bottom-start'`: Aligns the popover to the bottom-start side of the anchor.
 * - `'bottom-end'`: Aligns the popover to the bottom-end side of the anchor.
 * - `'left-start'`: Aligns the popover to the left-start side of the anchor.
 * - `'left-end'`: Aligns the popover to the left-end side of the anchor.
 * - `'right-start'`: Aligns the popover to the right-start side of the anchor.
 * - `'right-end'`: Aligns the popover to the right-end side of the anchor.
 *
 * The `--placement` property allows for easy CSS-based customization of the popover's positioning. The default value is `'top'`.
 *
 * @example
 * // Usage in HTML
 * <my-popover style="--placement: top"></my-popover>
 *
 * @example
 * // JSX example
 * import React from 'react';
 *
 * function App() {
 *   return (
 *     <MyPopover style={{ '--placement': 'bottom' }} />
 *   );
 * }
 */

@customElement('rosy-popover')
export class Popover extends LitElement {
  static override styles = styles;

  @property({ type: String }) override accessor title!: string;

  @state() accessor isPressed = false;

  @queryAssignedElements({ slot: 'trigger' })
  trigger!: Array<HTMLElement>;

  @query('[popover]') accessor popoverElement!: HTMLElement;

  #restoreFocus: Element | null = null;

  #onClose() {
    this.popoverElement.hidePopover();
  }

  #onToggle(event: ToggleEvent) {
    if (event.newState === 'open') {
      this.popoverElement.focus();
    }
  }

  #onBeforeToggle(event: ToggleEvent) {
    if (event.oldState === 'closed') {
      this.isPressed = true;
      this.#restoreFocus = document.activeElement!.shadowRoot!.activeElement;
    }
    if (event.newState === 'closed') {
      this.isPressed = false;
      (this.#restoreFocus as HTMLElement)?.focus();
    }
  }

  override render() {
    return html`
      <div>
        <slot name="trigger">
          <button
            popovertarget="popover"
            aria-controls=${this.isPressed ? 'popover' : nothing}
            class="btn"
          >
            show popover ⓘ
          </button>
        </slot>

        <section
          @toggle=${this.#onToggle}
          @beforetoggle=${this.#onBeforeToggle}
          role="dialog"
          tabindex="-1"
          aria-labelledby="heading"
          class="popover"
          popover
          id="popover"
        >
          <div class="header">
            <slot name="title">
              <h2 id="heading">${this.title}</h2>
            </slot>
            <button @click=${this.#onClose} class="close-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path
                  d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                />
              </svg>
            </button>
          </div>
          <main>
            <slot name="body">
              <p>Greetings, one and all!</p>
            </slot>
          </main>
          <div class="footer">
            <slot name="footer"> Hello footer </slot>
          </div>
        </section>
      </div>
    `;
  }
}
