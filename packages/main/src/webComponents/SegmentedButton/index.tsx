import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/SegmentedButton.js';
import { FC, ReactNode } from 'react';

export interface SegmentedButtonPropTypes extends WithWebComponentPropTypes {
  /**
   * Sets the accessible aria name of the component.
   */
  accessibleName?: string;
  /**
   * Defines the items of `SegmentedButton`.
   *
   * **Note:** Multiple items are allowed.
   *
   * **Note:** Use the `SegmentedButtonItem` for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the selected item changes.
   */
  onSelectionChange?: (event: CustomEvent<{ selectedItem: ReactNode }>) => void;
}

/**
 * The `SegmentedButton` shows a group of items. When the user clicks or taps one of the items, it stays in a pressed state. It automatically resizes the items to fit proportionally within the component. When no width is set, the component uses the available width.
 *
 * **Note:** There can be just one selected `item` at a time.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/SegmentedButton" target="_blank">UI5 Web Components Playground</a>
 */
const SegmentedButton: FC<SegmentedButtonPropTypes> = withWebComponent<SegmentedButtonPropTypes>(
  'ui5-segmented-button',
  ['accessibleName'],
  [],
  [],
  ['selection-change']
);

SegmentedButton.displayName = 'SegmentedButton';

SegmentedButton.defaultProps = {};

export { SegmentedButton };
