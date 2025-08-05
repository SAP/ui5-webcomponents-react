import type { CommonProps } from '@ui5/webcomponents-react-base';
import type { DependencyList, ReactElement } from 'react';
import type { SplitterElementPropTypes } from '../SplitterElement/index.js';

interface SplitterLayoutOptions {
  /**
   * Defines whether the `SplitterLayout` should be reset when its size changes depending on the orientation.
   */
  resetOnSizeChange?: boolean;
  /**
   * Defines whether the `SplitterLayout` should be reset when its `children` change.
   */
  resetOnChildrenChange?: boolean;
  /**
   * Defines a list of dependencies that trigger a reset of the `SplitterLayout` when they are changed.
   *
   * __Note:__ The order and size of arrays of dependencies must remain constant in React, it's therefore not possible to change size or order between renders.
   */
  resetOnCustomDepsChange?: DependencyList;
}

type SplitterLayoutChild = ReactElement<SplitterElementPropTypes> | undefined | false | null;

interface ResizeArea {
  size: number;
  area: HTMLElement;
}
interface OnResizeParam {
  /**
   * The `SplitterElement`s that are being resized.
   * The first element is the previous sibling of the splitter bar, the second element is the next sibling.
   *
   * __Note:__ The array reflects the logical position of the `SplitterElement`s.
   */
  areas: [ResizeArea, ResizeArea];
  splitter: HTMLElement;
}

export interface SplitterLayoutPropTypes extends Omit<CommonProps<HTMLDivElement>, 'onResize'> {
  /**
   * Controls if a vertical or horizontal `SplitterLayout` is rendered.
   */
  vertical?: boolean;
  /**
   * The content areas (optional) to be split. The control will show n-1 splitter bars between n controls in this aggregation.
   */
  children?: SplitterLayoutChild | SplitterLayoutChild[];
  /**
   * Defines options to customize the behavior of the SplitterLayout.
   */
  options?: SplitterLayoutOptions;
  /**
   * Fired when contents are resized.
   *
   * __Note:__
   * - Resize events can fire many times in quick succession, it’s therefore strongly recommended to debounce your handler if you’re updating React state or causing other expensive operations.
   * - The `areas` array reflects the logical position of the `SplitterElement`s relative to the "Splitter".
   */
  onResize?: (e: OnResizeParam) => void;
}
