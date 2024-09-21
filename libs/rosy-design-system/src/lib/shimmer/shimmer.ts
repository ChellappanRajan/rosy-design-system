import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './shimmer.css';

/**
 * @cssproperty --shape - Controls the border radius styling of the shimmer loader component.
 *
 * @default 'rounded-none'
 * @type {'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-full' | 'rounded-none'}
 *
 * @description
 * This CSS custom property determines the border radius applied to the component's corners. The possible values are:
 * - `'rounded'`: Small border-radius applied to the corners.
 * - `'rounded-md'`: Medium border-radius applied to the corners.
 * - `'rounded-lg'`: Large border-radius applied to the corners.
 * - `'rounded-full'`: Maximum border-radius, making the corners fully rounded (circular or oval).
 * - `'rounded-none'`: No border-radius, keeping the corners sharp.
 *
 * The `--shape` CSS custom property allows for easy CSS-based customization of the component's border radius. The default value is `'rounded-none'`.
 *
 * @example
 * // Usage in HTML
 * <rosy-shimmer-loader style="--shape: rounded-lg"></rosy-shimmer-loader>
 *
 * @example
 * // JSX example
 * import React from 'react';
 *
 * function App() {
 *   return (
 *     <RosyShimmerLoader style={{ '--shape': 'rounded-md' }} />
 *   );
 * }
 */

@customElement('rosy-shimmer-loader')
export class ShimmerLoader extends LitElement {
  static override styles = styles;
  override render() {
    return html`<div class="shimmer-box animation"></div>`;
  }
}
