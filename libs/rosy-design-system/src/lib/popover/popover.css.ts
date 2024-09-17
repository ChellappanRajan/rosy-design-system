import { css } from 'lit';

export const styles = css`
  .btn {
    width: fit-content;
    border-radius: 1rem;
    border: none;
    box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.3);
    background: white;
    padding: 0.25rem 1rem;
    anchor-name: --popover-trigger-element;
  }
  svg {
    width: 20px;
    height: 20px;
  }

  [tabindex='-1'] {
    outline: none;
  }
  :popover-open {
    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.15),
      0 1px 2px 0 rgba(0, 0, 0, 0.3);
    margin: 0;
    height: 100px;
    background-color: #fff;
    display: flex;
    max-width: 200px;
    padding: 1rem;
    height: 100px;
    border: none;
    /*Since popover attribute by default have inset:0 without these positioing not working
  */
    inset: auto;
    position: absolute;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 10px;
    position-anchor: --popover-trigger-element;
  }

  :host([position='center-left']) {
    & :popover-open {
      inset-block-start: anchor(--popover-trigger-element center);
      inset-inline-end: anchor(--popover-trigger-element left);
    }
  }

  :host([position='top']) {
    & :popover-open {
      /*
      https://developer.chrome.com/blog/anchor-positioning-api
      */
      inset-area: block-top;
    }
  }
  :host([position='bottom']) {
    & :popover-open {
      inset-area: block-end;
    }
  }

  :host([position='center-right']) {
    & :popover-open {
      /* top of the popover container - anchor center
  *block-top/bottom
  *inline-left/righ
  *position-area should try
  * */

      inset-block-start: anchor(--popover-trigger-element center);

      inset-inline-start: anchor(--popover-trigger-element right);

      /* position-try-fallbacks:flip-block flip-inline;
    */
    }
  }

  // @position-try --bottom{
  //   bottom:anchor(--popover-trigger-element center);
  // }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    margin: 0;
  }
  main {
  }
  .close-button {
    border: none;
    padding: 0.25rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    cursor: pointer;
  }
  .close-button:hover {
    border: 2px solid #ffde4d;
  }
  p {
    margin: 0;
  }
`;
