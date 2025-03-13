import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-block;
    --_bg-color: var(--bg-color, #f4f4f5);
    --font-color: black;
    --_ry-button-radius: var(--ry-button-radius, 6px);
  }
  .ry-button {
    cursor: pointer;
    padding-inline: 1rem;
    padding-block: 0.25rem;
    user-select: none;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    box-sizing: border-box;

    border: none;
    outline: none;
    line-height: inherit;
    -webkit-appearance: none;
    overflow: visible;
    vertical-align: middle;
    background: var(--_bg-color);
    color: var(--font-color);
    border-radius: var(--_ry-button-radius);
    line-height: 1.7;
  }

  .link {
    text-decoration: none;
  }

  @property --variant {
    syntax: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline' | 'link';
    inherits: true;
    initial-value: 'primary';
  }

  @container style(--variant:primary) {
    .ry-button {
      --_bg-color: #111;
      --font-color: #fff;
    }
  }
  @container style(--variant:secondary) {
    .ry-button {
      --_bg-color: #f4f4f5;
      --font-color: #111;
    }
  }

  @container style(--variant:danger) {
    .ry-button {
      --_bg-color: red;
      --font-color: #f4f4f5;
    }
  }
  @container style(--variant:link) {
    .ry-button {
      --_bg-color: transparent;
    }
    .ry-button:hover {
      text-underline-offset: 4px;
      text-decoration-line: underline;
    }
  }
`;
