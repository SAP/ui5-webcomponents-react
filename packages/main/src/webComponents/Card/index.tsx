import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/dist/withWebComponent';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { FC, ReactNode } from 'react';

import '@ui5/webcomponents/dist/Card';

export interface CardPropTypes extends WithWebComponentPropTypes {
  /**
   * Sets the accessible aria name of the component.
   */
  accessibleName?: string;
  /**
   * Defines if the component header would be interactive, e.g gets hover effect, gets focused and `headerPress` event is fired, when it is pressed.
   */
  headerInteractive?: boolean;
  /**
   * Defines the status displayed in the component header.
   *
   * **Note:** If the `action` slot is set, the `status` will not be displayed, you can either have `action`, or `status`.
   */
  status?: string;
  /**
   * Defines the subtitle displayed in the component header.
   */
  subtitleText?: string;
  /**
   * Defines the title displayed in the component header.
   */
  titleText?: string;
  /**
   * Defines an action, displayed in the right most part of the header.
   *
   * **Note:** If set, the `status` text will not be displayed, you can either have `action`, or `status`.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  action?: ReactNode | ReactNode[];
  /**
   * Defines the visual representation in the header of the card. Supports images and icons.
   *
   * **Note:** SAP-icons font provides numerous options. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  avatar?: ReactNode | ReactNode[];
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the component header is activated by mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event would be fired only if the `headerInteractive` property is set to true.
   */
  onHeaderClick?: (event: Ui5CustomEvent<HTMLElement>) => void;
}

/**
 * The `Card` is a component that represents information in the form of a tile with separate header and content areas. The content area of a `Card` can be arbitrary HTML content. The header can be used through several properties, such as: `titleText`, `subtitleText`, `status` and two slots: `avatar` and `action`.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Card" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Card: FC<CardPropTypes> = withWebComponent<CardPropTypes>(
  'ui5-card',
  ['accessibleName', 'status', 'subtitleText', 'titleText'],
  ['headerInteractive'],
  ['action', 'avatar'],
  ['header-click']
);

Card.displayName = 'Card';

Card.defaultProps = {
  headerInteractive: false
};

export { Card };
