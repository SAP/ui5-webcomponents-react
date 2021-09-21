import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/SegmentedButtonItem.js';
import { FC, ReactNode } from 'react';

export interface SegmentedButtonItemPropTypes extends Omit<WithWebComponentPropTypes, 'onClick'> {
  /**
   * Determines whether the `ToggleButton` is displayed as pressed.
   */
  pressed?: boolean;
  /**
   * Defines whether the `Button` is disabled (default is set to `false`). A disabled `Button` can't be pressed or focused, and it is not in the tab chain.
   */
  disabled?: boolean;
  /**
   * Defines the icon to be displayed as graphical element within the `Button`. The SAP-icons font provides numerous options.
   *
   * Example:
   *
   * Button icon="palette"
   *
   * See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the text of the `Button`.
   *
   * **Note:** Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the `Button` is activated either with a mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `disabled` property is set to `true`.
   */
  onClick?: (event: CustomEvent) => void;
}

/**
 * Users can use the `SegmentedButtonItem` as part of a `SegmentedButton`.
 *
 * Clicking or tapping on a `SegmentedButtonItem` changes its state to `pressed`. The item returns to its initial state when the user clicks or taps on it again. By applying additional custom CSS-styling classes, apps can give a different style to any `SegmentedButtonItem`.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/SegmentedButtonItem" target="_blank">UI5 Web Components Playground</a>
 */
const SegmentedButtonItem: FC<SegmentedButtonItemPropTypes> = withWebComponent<SegmentedButtonItemPropTypes>(
  'ui5-segmented-button-item',
  ['icon'],
  ['pressed', 'disabled'],
  [],
  ['click']
);

SegmentedButtonItem.displayName = 'SegmentedButtonItem';

SegmentedButtonItem.defaultProps = {
  pressed: false,
  disabled: false
};

export { SegmentedButtonItem };
