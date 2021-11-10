import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { Ui5SegmentedButtonDomRef } from '@ui5/webcomponents-react/interfaces/Ui5SegmentedButtonDomRef';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/SegmentedButton.js';

export interface SegmentedButtonPropTypes extends CommonProps {
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
  onSelectionChange?: (event: Ui5CustomEvent<HTMLButtonElement, { selectedItem: ReactNode }>) => void;
}

/**
 * The `SegmentedButton` shows a group of items. When the user clicks or taps one of the items, it stays in a pressed state. It automatically resizes the items to fit proportionally within the component. When no width is set, the component uses the available width.
 *
 * **Note:** There can be just one selected `item` at a time.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SegmentedButton" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const SegmentedButton = withWebComponent<SegmentedButtonPropTypes, Ui5SegmentedButtonDomRef>(
  'ui5-segmented-button',
  [],
  [],
  [],
  ['selection-change']
);

SegmentedButton.displayName = 'SegmentedButton';

export { SegmentedButton };
