import { ButtonDesign } from '@ui5/webcomponents-react/dist/ButtonDesign';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5DomRef } from '@ui5/webcomponents-react/interfaces/Ui5DomRef';
import { ReactNode, MouseEventHandler } from 'react';

import '@ui5/webcomponents/dist/SegmentedButtonItem.js';

interface SegmentedButtonItemAttributes {
  /**
   * Determines whether the component is displayed as pressed.
   */
  pressed?: boolean;
  /**
   * Sets the accessible aria name of the component.
   */
  accessibleName?: string;
  /**
   * Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.
   */
  disabled?: boolean;
  /**
   * Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.
   *
   * Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
}

export interface SegmentedButtonItemDomRef extends SegmentedButtonItemAttributes, Ui5DomRef {}

export interface SegmentedButtonItemPropTypes extends SegmentedButtonItemAttributes, Omit<CommonProps, 'onClick'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `disabled` property is set to `true`.
   */
  onClick?: MouseEventHandler<HTMLElement>;
}

/**
 * Users can use the `SegmentedButtonItem` as part of a `SegmentedButton`.
 *
 * Clicking or tapping on a `SegmentedButtonItem` changes its state to `pressed`. The item returns to its initial state when the user clicks or taps on it again. By applying additional custom CSS-styling classes, apps can give a different style to any `SegmentedButtonItem`.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SegmentedButtonItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const SegmentedButtonItem = withWebComponent<SegmentedButtonItemPropTypes, SegmentedButtonItemDomRef>(
  'ui5-segmented-button-item',
  ['accessibleName', 'icon'],
  ['pressed', 'disabled'],
  [],
  ['click']
);

SegmentedButtonItem.displayName = 'SegmentedButtonItem';

export { SegmentedButtonItem };
