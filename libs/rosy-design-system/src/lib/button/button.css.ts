import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-block;
  }
  .ggr-button {
    padding-inline: 1rem;
    padding-block: 0.25rem;
    user-select: none;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    border: none;
    outline: none;
    line-height: inherit;
    -webkit-appearance: none;
    overflow: visible;
    vertical-align: middle;
    background: rgba(0, 0, 0, 0);
  }
  @property --variant {
    syntax: 'primary' | 'secondary' | 'ghost' | 'danger';
    inherits: true;
    initial-value: 'primary';
  }
  @container style(--variant:primary) {
  }
`;
