'use client';

import type { ReactNode } from 'react';
import React, { forwardRef } from 'react';
import { useOverflowPopoverContext } from '../../internal/OverflowPopoverContext.js';
import type { ButtonDomRef, ButtonPropTypes } from '../../webComponents/index.js';
import { Button } from '../../webComponents/index.js';

export interface OverflowToolbarButtonPropTypes extends Omit<ButtonPropTypes, 'children' | 'icon'> {
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
 * The `OverflowToolbarButton` represents a push button that shows its text only when in the overflow area of a `Toolbar`.
 *
 * __Note:__ This component is only compatible with the `Toolbar` component and __not__ with `ToolbarV2`.
 */
const OverflowToolbarButton = forwardRef<ButtonDomRef, OverflowToolbarButtonPropTypes>((props, ref) => {
  const { children, ...rest } = props;
  const { inPopover } = useOverflowPopoverContext();

  return (
    <Button {...rest} ref={ref}>
      {inPopover ? children : ''}
    </Button>
  );
});

OverflowToolbarButton.displayName = 'OverflowToolbarButton';

export { OverflowToolbarButton };
