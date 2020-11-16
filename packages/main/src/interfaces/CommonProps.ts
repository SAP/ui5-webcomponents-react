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
   * A tooltip which will be shown on hover
   */
  tooltip?: string;
  ref?: Ref<any>;
}
