'use client';

import type { ReactNode } from 'react';
import React, { forwardRef, useContext } from 'react';
import { OverflowPopoverContext } from '../../internal/OverflowPopoverContext.js';
import type { ToggleButtonDomRef, ToggleButtonPropTypes } from '../../webComponents/index.js';
import { ToggleButton } from '../../webComponents/index.js';

export interface OverflowToolbarToggleButtonPropTypes extends Omit<ToggleButtonPropTypes, 'children' | 'icon'> {
  /**
   * Defines the text of the component which is only visible in the overflow area of a `Toolbar`.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.
   *
   * Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon: string;
}

/**
 * The `OverflowToolbarToggleButton` represents a toggle button that shows its text only when in the overflow area of a `Toolbar`.
 *
 * __Note:__ This component is only compatible with the `Toolbar` component and __not__ with `ToolbarV2`.
 */
const OverflowToolbarToggleButton = forwardRef<ToggleButtonDomRef, OverflowToolbarToggleButtonPropTypes>(
  (props, ref) => {
    const { children, ...rest } = props;
    const { inPopover } = useContext(OverflowPopoverContext);

    return (
      <ToggleButton {...rest} ref={ref}>
        {inPopover ? children : ''}
      </ToggleButton>
    );
  }
);

OverflowToolbarToggleButton.displayName = 'OverflowToolbarToggleButton';

export { OverflowToolbarToggleButton };
