import { CSSProperties, Ref, HTMLAttributes } from 'react';

export interface CommonProps extends HTMLAttributes<HTMLElement> {
  /**
   * Element style which will be appended to the most outer element of a component.
   * Use this prop carefully, some css properties might break the component.
   */
  style?: CSSProperties;
  /**
   * CSS Class Name which will be appended to the most outer element of a component.
   * Use this prop carefully, overwriting CSS rules might break the component.
   */
  className?: string;
  /**
   * A tooltip which will be shown on hover.
   * This prop is deprecated as of v0.20.6, please use the native `title` prop instead.
   *
   * @deprecated please use `title` prop instead.
   */
  tooltip?: string;
}
