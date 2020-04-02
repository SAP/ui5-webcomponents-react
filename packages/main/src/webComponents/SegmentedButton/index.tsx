import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5SegmentedButton from '@ui5/webcomponents/dist/SegmentedButton';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface SegmentedButtonPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the buttons of <code>ui5-segmentedbutton</code>. <br><br> <b>Note:</b> Multiple buttons are allowed. <br><br> <b>Note:</b> Use the <code>ui5-togglebutton</code> for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the selected button changes.
   */
  onSelectionChange?: (event: CustomEvent<{ selectedButton: ReactNode }>) => void;
}

/**
 * <code>import { SegmentedButton } from '@ui5/webcomponents-react/lib/SegmentedButton';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/SegmentedButton" target="_blank">UI5 Web Components Playground</a>
 */
const SegmentedButton: FC<SegmentedButtonPropTypes> = withWebComponent<SegmentedButtonPropTypes>(UI5SegmentedButton);

SegmentedButton.displayName = 'SegmentedButton';

SegmentedButton.defaultProps = {};

export { SegmentedButton };
