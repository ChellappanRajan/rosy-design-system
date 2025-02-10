import { css } from 'lit';

export const styles = css`
  :after,
  :before {
    box-sizing: border-box;
    border: 0 solid;
    margin: 0;
    padding: 0;
  }

  :popover-open {
    inset: auto;
  }

  @property --ry-gray-300 {
    syntax: '<color>';
    inherits: false;
    initial-value: oklch(12% 8.5% 264/17%);
  }

  dialog {
    box-sizing: border-box;
    outline: 1px solid oklch(12% 8.5% 264/17%);
    background-color: white;
    color: oklch(12% 7% 264/67%);
    border: none;
    border-radius: 0.5rem;
    max-width: 24rem;
    transition: all 0.5s;
  }

  :popover-open {
  }

  /* Transition the :backdrop when the dialog modal is promoted to the top layer */
  dialog::backdrop {
    opacity: 0.2;
    background-color: #000;
    transition: opacity 0.15s;
    inset: 0;
  }
  dialog:has(::backdrop) {
    color: red;
  }
`;
