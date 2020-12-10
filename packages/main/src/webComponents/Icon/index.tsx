import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Icon';
import { FC } from 'react';

export interface IconPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the text alternative of the `Icon`. If not provided a default text alternative will be set, if present.
   *
   * **Note:** Every icon should have a text alternative in order to calculate its accessible name.
   */
  accessibleName?: string;
  /**
   * Defines if the icon is interactive (focusable and pressable)
   */
  interactive?: boolean;
  /**
   * Defines the unique identifier (icon name) of each `Icon`.
   *
   * To browse all available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   *
   * Example:
   * `name='add'`, `name='delete'`, `name='employee'`.
   */
  name?: string;
  /**
   * Defines whether the `Icon` should have a tooltip.
   */
  showTooltip?: boolean;
}

/**
 * The `Icon` component represents an SVG icon. There are two main scenarios how the `Icon` component is used: as a purely decorative element; or as a visually appealing clickable area in the form of an icon button.
 *
 * A large set of built-in icons is available and they can be used by setting the `name` property on the `Icon`.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Icon" target="_blank">UI5 Web Components Playground</a>
 */
const Icon: FC<IconPropTypes> = withWebComponent<IconPropTypes>(
  'ui5-icon',
  ['accessibleName', 'name'],
  ['interactive', 'showTooltip'],
  [],
  []
);

Icon.displayName = 'Icon';

Icon.defaultProps = {
  interactive: false,
  showTooltip: false
};

export { Icon };
