import { forwardRef } from 'react';
import type { CommonProps } from '../../types/index.js';

export type ToolbarSpacerPropTypes = CommonProps;
/**
 * Adds horizontal space between the items used within a `Toolbar`.
 *
 * __Note:__ This component is only compatible with the `Toolbar` component and __not__ with `ToolbarV2`. If you're using `ToolbarV2`, please use `ToolbarSpacerV2` instead.
 */
const ToolbarSpacer = forwardRef<HTMLSpanElement, ToolbarSpacerPropTypes>((props, ref) => {
  return <span ref={ref} style={{ flexGrow: 1 }} className="spacer" {...props} data-component-name="ToolbarSpacer" />;
});

ToolbarSpacer.displayName = 'ToolbarSpacer';
export { ToolbarSpacer };
