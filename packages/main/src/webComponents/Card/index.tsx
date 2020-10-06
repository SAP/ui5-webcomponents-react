import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Card';
import { FC, ReactNode } from 'react';

export interface CardPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the <code>Card</code> header would be interactive, e.g gets hover effect, gets focused and <code>headerPress</code> event is fired, when it is pressed.
   */
  headerInteractive?: boolean;
  /**
   * Defines the title displayed in the <code>Card</code> header.
   */
  heading?: string;
  /**
   * Defines the status displayed in the <code>Card</code> header. <br><br> <b>Note:</b> If the <code>action</code> slot is set, the <code>status</code> will not be displayed, you can either have <code>action</code>, or <code>status</code>.
   */
  status?: string;
  /**
   * Defines the subheading displayed in the <code>Card</code> header.
   */
  subheading?: string;
  /**
   * Defines an action, displayed in the right most part of the header. <br><br> <b>Note:</b> If set, the <code>status</code> text will not be displayed, you can either have <code>action</code>, or <code>status</code>.
   */
  action?: ReactNode | ReactNode[];
  /**
   * Defines the visual representation in the header of the card. Supports images and icons. <br><br> <b>Note:</b> SAP-icons font provides numerous options. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  avatar?: ReactNode | ReactNode[];
  /**
   * Defines the content of the <code>Card</code>.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the <code>Card</code> header is activated by mouse/tap or by using the Enter or Space key. <br><br> <b>Note:</b> The event would be fired only if the <code>headerInteractive</code> property is set to true.
   */
  onHeaderClick?: (event: CustomEvent<{}>) => void;
}

/**
 * The <code>Card</code> is a component that represents information in the form of a tile with separate header and content
 areas. The content area of a <code>Card</code> can be arbitrary HTML content. The header can be used through several
 properties, such as: <code>heading</code>, <code>subheading</code>, <code>status</code> and two slots:
 <code>avatar</code> and <code>action</code>.

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
