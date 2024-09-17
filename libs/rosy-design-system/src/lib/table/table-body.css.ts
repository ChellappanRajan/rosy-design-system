import { css } from 'lit';

export const styles = css`
  :host {
    display: table-row-group;
  }
  :host(role='columnheader') {
    font-weight: bold;
  }
`;
