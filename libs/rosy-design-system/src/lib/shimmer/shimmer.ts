import {html,LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './shimmer.css';

@customElement('rosy-shimmer-loader')
export class ShimmerLoader extends LitElement {
  static override styles = styles;

/**
 * The `shape` property controls the border radius styling of the shimmer loader component.
 *
 * @property {string} shape
 * @default 'rounded-none'
 * @reflects true
 * @type {'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-full' | 'rounded-none'}
 *
 * @description
 * This property determines the border radius applied to the component's corners. The possible values are:
 * - `'rounded'`: Small border-radius applied to the corners.
 * - `'rounded-md'`: Medium border-radius applied to the corners.
 * - `'rounded-lg'`: Large border-radius applied to the corners.
 * - `'rounded-full'`: Maximum border-radius, making the corners fully rounded (circular or oval).
 * - `'rounded-none'`: No border-radius, keeping the corners sharp.
 *
 * The `shape` property reflects its value to a corresponding HTML attribute, allowing for CSS-based styling. The default value is `'rounded-none'`.
 *
 * @example
 * // Usage in HTML
 * <rosy-shimmer-loader shape="rounded-lg"></rosy-shimmer-loader>
 *
 * // JavaScript example
 * const component = document.querySelector('rosy-shimmer-loader');
 * component.shape = 'rounded-full';
 *
 * @example
 * // JSX example
 * import React from 'react';
 *
 * function App() {
 *  return (
 *     <RosyShimmerLoader shape="rounded-md" />
 *   );
 * }
 *
 */
   @property({ reflect:true, type:String }) accessor shape :'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-full' | 'rounded-none' = 'rounded-none';


  override render() {
    return html`<div class="shimmer-box animation"></div>`;
  }
}
