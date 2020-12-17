import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Card';
import { FC, ReactNode } from 'react';

export interface CardPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the `Card` header would be interactive, e.g gets hover effect, gets focused and `headerPress` event is fired, when it is pressed.
   */
  headerInteractive?: boolean;
  /**
   * Defines the title displayed in the `Card` header.
   */
  heading?: string;
  /**
   * Defines the status displayed in the `Card` header.
   *
   * **Note:** If the `action` slot is set, the `status` will not be displayed, you can either have `action`, or `status`.
   */
  status?: string;
  /**
   * Defines the subheading displayed in the `Card` header.
   */
  subheading?: string;
  /**
   * Defines an action, displayed in the right most part of the header.
   *
   * **Note:** If set, the `status` text will not be displayed, you can either have `action`, or `status`.
   */
  action?: ReactNode | ReactNode[];
  /**
   * Defines the visual representation in the header of the card. Supports images and icons.
   *
   * **Note:** SAP-icons font provides numerous options. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  avatar?: ReactNode | ReactNode[];
  /**
   * Defines the content of the `Card`.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the `Card` header is activated by mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event would be fired only if the `headerInteractive` property is set to true.
   */
  onHeaderClick?: (event: CustomEvent) => void;
}

/**
 * The `Card` is a component that represents information in the form of a tile with separate header and content areas. The content area of a `Card` can be arbitrary HTML content. The header can be used through several properties, such as: `heading`, `subheading`, `status` and two slots: `avatar` and `action`.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Card" target="_blank">UI5 Web Components Playground</a>
 */
const Card: FC<CardPropTypes> = withWebComponent<CardPropTypes>(
  'ui5-card',
  ['heading', 'status', 'subheading'],
  ['headerInteractive'],
  ['action', 'avatar'],
  ['header-click']
);

Card.displayName = 'Card';

Card.defaultProps = {
  headerInteractive: false
};

export { Card };
