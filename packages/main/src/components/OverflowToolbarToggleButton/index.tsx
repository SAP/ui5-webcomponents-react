import React, { forwardRef, ReactNode, Ref, useContext } from 'react';
import { OverflowPopoverContext } from '../../internal/OverflowPopoverContext';
import { ToggleButton, ToggleButtonDomRef, ToggleButtonPropTypes } from '../../webComponents';

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
 */
const OverflowToolbarToggleButton = forwardRef(
  (props: OverflowToolbarToggleButtonPropTypes, ref: Ref<ToggleButtonDomRef>) => {
    const { children, ...rest } = props;
    const { inPopover } = useContext(OverflowPopoverContext);

    return (
      <ToggleButton {...rest} ref={ref}>
        {inPopover ? children : ''}
      </ToggleButton>
    );
  }
);

OverflowToolbarToggleButton.displayName = 'OverflowToolbarButton';

export { OverflowToolbarToggleButton };
