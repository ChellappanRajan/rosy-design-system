import { css } from 'lit';

export const styles = css`
  @property --placement {
    syntax: 'top | bottom | left | right';
    inherits: true;
    initial-value: top;
  }
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
    /*Since popover attribute by default have inset:0, we must set inset:0 inorder to position anchor
  */
    inset: auto;
    position: absolute;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 10px;
    position-anchor: --popover-trigger-element;
  }

  @container style(--placement:top) {
    :popover-open {
      position-area: block-start;
      position-try-fallbacks: flip-block;
      position-try-order: most-block-size;
    }
  }

  @container style(--placement:bottom) {
    :popover-open {
      position-area: block-end;
      position-try-fallbacks: flip-block;
    }
  }

  @container style(--placement:left) {
    :popover-open {
      position-area: inline-start;
      position-try-fallbacks: flip-inline, flip-block;
    }
  }

  @container style(--placement:right) {
    :popover-open {
      position-area: inline-end;
      position-try-fallbacks: flip-inline, flip-block;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    margin: 0;
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
