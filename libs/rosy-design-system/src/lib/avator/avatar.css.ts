import { css } from 'lit';

export const styles = css`
  :host {
    --_width: var(--width, 40px);
    --_height: var(--_height, 40px);
    --_index: 1;
  }

  img {
    border-radius: 50%;
    width: var(--_width);
    height: var(--_height);
    border: 2px solid white;
  }

  @container style(--index:1) {
    img {
      margin-left: calc(-0.5rem);
    }
  }

  @container style(--index:2) {
    img {
      margin-left: calc(-0.5rem);
    }
  }
`;
