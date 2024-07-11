import type { CommonProps } from '@ui5/webcomponents-react';
import { forwardRef } from 'react';

export type ToolbarSpacerPropTypes = CommonProps;
/**
 * Adds horizontal space between the items used within a `Toolbar`.
 *
 * __Note:__ This component is only compatible with the `Toolbar` component from the `@ui5/webcomponents-react-compat` package.
 */
const ToolbarSpacer = forwardRef<HTMLSpanElement, ToolbarSpacerPropTypes>((props, ref) => {
  return <span ref={ref} style={{ flexGrow: 1 }} className="spacer" {...props} data-component-name="ToolbarSpacer" />;
});

ToolbarSpacer.displayName = 'ToolbarSpacer';
export { ToolbarSpacer };
