import { css } from 'lit';

export const styles = css`
  :host {
    display: contents;
    --rosy-border-rounded-none: 0px;

    --rosy-border-rounded-full: 9999px;

    --rosy-border-rounded-: 0px;

    --rosy-border-rounded-none: 0px;

    --rosy-shimmer-loader-width: 100px;
    --rosy-shimmer-loader-height: 75px;
    --width: var(--rosy-shimmer-loader-width);
    --height: var(--rosy-shimmer-loader-height);
  }

  :host([shape='rounded-full']) {
    & .shimmer-box {
      border-radius: 9999px;
    }
  }

  :host([shape='rounded']) {
    & .shimmer-box {
      border-radius: 0.25rem;
    }
  }

  :host([shape='rounded-md']) {
    & .shimmer-box {
      border-radius: 0.375rem;
    }
  }

  :host([shape='rounded-lg']) {
    & .shimmer-box {
      border-radius: 0.5rem;
    }
  }

  .shimmer-box {
    width: var(--width);
    height: var(--height);
  }
  .animation {
    // background: linear-gradient(-45deg, #eee 40%, #fafafa 50%, #eee 60%);
    background: linear-gradient(-45deg, #eee 40%, #fafafa 50%, #eee 60%)
      right/300% 100%;
    /* add the following line: */
    background-attachment: fixed;
    background-size: 300%;
    animation-name: shimmer;
    animation-duration: 1000ms;
    animation-timing-function: linear;
    animation-delay: 0;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
  }

  @keyframes shimmer {
    0% {
      background-position-x: 100%;
    }

    100% {
      background-position-x: 0%;
    }
  }
`;
