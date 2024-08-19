import { css } from "lit";

export const styles = css`
:host{
  --rosy-shimmer-loader-width:300px;
  --rosy-shimmer-loader-height:75px;
  --width:var(--rosy-shimmer-loader-width);
  --height:var(--rosy-shimmer-loader-height);
}
.shimmer-box {
  width: var(--width);
  height: var(--height);
}
.animation {
  background: linear-gradient(-45deg, #eee 40%, #fafafa 50%, #eee 60%);
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
