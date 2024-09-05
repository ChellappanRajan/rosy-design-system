
import {html,LitElement, nothing} from 'lit';
import {customElement, property,state, queryAssignedElements, queryAssignedNodes} from 'lit/decorators.js';
import {styles} from './popover.css';

@customElement('rosy-popover')
export class Popover extends LitElement {
  static override styles = styles;

  // static override shadowRootOptions = {...LitElement.shadowRootOptions, delegatesFocus: true};


  @property({reflect:true,type:String}) accessor position = 'center-right';

  @property({type:String}) override accessor title!:string;

  @state() accessor isPressed = false;

  // @property({attribute:false,type:String}) accessor ;

  @queryAssignedElements({ slot: 'trigger' })
  trigger!: Array<HTMLElement>;

  #restoreFocus:Element | null = null;


  private onClose(){
    this.shadowRoot?.querySelector<HTMLElement>('[popover]')?.hidePopover();
  }

  private onBeforeToggle(event:ToggleEvent){
    if(event.oldState === "closed"){
      this.isPressed = true;
      setTimeout(()=>{
      this.shadowRoot?.querySelector<HTMLElement>('[popover]')!.focus();
      });
      this.#restoreFocus = document.activeElement!.shadowRoot!.activeElement;
    }
    if (event.newState === "closed") {
      this.isPressed = false;
      (this.#restoreFocus as HTMLElement)?.focus();
    }
  }

  override render() {
    return html`
      <div>
      <slot @slotchange=${(e:any)=>{
      console.log('Slot Change',e.target.querySelector('button'));
      }} name="trigger">
        <button popovertarget="popover" aria-controls=${this.isPressed ? 'popover' : nothing} class="btn">show popover ⓘ </button>
      </slot>

      <section @beforetoggle=${this.onBeforeToggle} role="dialog" tabindex="-1" aria-labelledby="heading" class="popover" popover id="popover">
          <div class="header">
            <slot name="title">
              <h2 id="heading">${this.title}</h2>
            </slot>
            <button @click=${this.onClose} class="close-button">
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            </button>
          </div>
          <main>
          <slot name="body">
          <p>
              Greetings, one and all!
          </p>
          </slot>
          </main>
          <div class="footer">
          <slot name="footer">
            Hello footer
          </slot>
          </div>
        </section>
      </div>
    `;
  }
}
