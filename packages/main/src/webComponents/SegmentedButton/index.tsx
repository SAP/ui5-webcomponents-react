import '@ui5/webcomponents/dist/SegmentedButton.js';
import { ReactNode } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface SegmentedButtonAttributes {
  /**
   * Sets the accessible aria name of the component.
   */
  accessibleName?: string;
}

export interface SegmentedButtonDomRef extends SegmentedButtonAttributes, Ui5DomRef {
  /**
   * Currently selected item.
   */
  readonly selectedItem: ReactNode;
}

export interface SegmentedButtonPropTypes extends SegmentedButtonAttributes, CommonProps {
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
  /**
   * Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.
   *
   * __Note:__ This adds a rendering cycle to your component.
   */
  waitForDefine?: boolean;
}

/**
 * The `SegmentedButton` shows a group of items. When the user clicks or taps one of the items, it stays in a pressed state. It automatically resizes the items to fit proportionally within the component. When no width is set, the component uses the available width.
 *
 * **Note:** There can be just one selected `item` at a time.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SegmentedButton" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const SegmentedButton = withWebComponent<SegmentedButtonPropTypes, SegmentedButtonDomRef>(
  'ui5-segmented-button',
  ['accessibleName', 'waitForDefine'],
  [],
  [],
  ['selection-change']
);

SegmentedButton.displayName = 'SegmentedButton';

export { SegmentedButton };
