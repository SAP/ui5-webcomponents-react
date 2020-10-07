import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/SegmentedButton';
import { FC, ReactNode } from 'react';

export interface SegmentedButtonPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the buttons of <code>SegmentedButton</code>. <br><br> <b>Note:</b> Multiple buttons are allowed. <br><br> <b>Note:</b> Use the <code>ToggleButton</code> for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the selected button changes.
   */
  onSelectionChange?: (event: CustomEvent<{ selectedButton: ReactNode }>) => void;
}

/**
 * The <code>SegmentedButton</code> shows a group of buttons. When the user clicks or taps one of the buttons, it stays in
 a pressed state. It automatically resizes the buttons to fit proportionally within the component. When no width is set,
 the component uses the available width. <br /><br />
 <b>Note:</b> There can be just one selected <code>button</code> at a time.

 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/SegmentedButton" target="_blank">UI5 Web Components Playground</a>
 */
const SegmentedButton: FC<SegmentedButtonPropTypes> = withWebComponent<SegmentedButtonPropTypes>(
  'ui5-segmentedbutton',
  [],
  [],
  [],
  ['selection-change']
);

SegmentedButton.displayName = 'SegmentedButton';

SegmentedButton.defaultProps = {};

export { SegmentedButton };
