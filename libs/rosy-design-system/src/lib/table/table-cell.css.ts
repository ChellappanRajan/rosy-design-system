import { css } from 'lit';

export const styles = css`
  :host {
    display: table-cell;
  }
  :host([role='columnheader']) {
    font-weight: bold;
    text-align: center;
  }
`;
