import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC } from 'react';
import { ReactNode } from 'react';

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
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/SegmentedButton" target="_blank">UI5 Web Components Playground</a>
 */
const SegmentedButton: FC<SegmentedButtonPropTypes> = withWebComponent<SegmentedButtonPropTypes>(
  'ui5-segmentedbutton',
  () => import('@ui5/webcomponents/dist/SegmentedButton'),
  [],
  [],
  [],
  ['selection-change']
);

SegmentedButton.displayName = 'SegmentedButton';

SegmentedButton.defaultProps = {};

export { SegmentedButton };
