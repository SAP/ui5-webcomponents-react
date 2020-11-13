import { MessageStripType } from '@ui5/webcomponents-react/lib/MessageStripType';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/MessageStrip';
import { FC, ReactNode } from 'react';

export interface MessageStripPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines whether the MessageStrip renders close icon.
   */
  noCloseButton?: boolean;
  /**
   * Defines whether the MessageStrip will show an icon in the beginning. You can directly provide an icon with the `icon` slot. Otherwise, the default icon for the type will be used.
   */
  noIcon?: boolean;
  /**
   * Defines the `MessageStrip` type.
   *
   * **Note:** Available options are `"Information"`, `"Positive"`, `"Negative"`, and `"Warning"`.
   */
  type?: MessageStripType;
  /**
   * Defines the text of the `MessageStrip`.
   *
   * **Note:** Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the content to be displayed as graphical element within the `MessageStrip`.
   *
   * **Note:** If no icon is given, the default icon for the `MessageStrip` type will be used. The SAP-icons font provides numerous options.
   *
   * See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: ReactNode;
  /**
   * Fired when the close button is pressed either with a click/tap or by using the Enter or Space key.
   */
  onClose?: (event: CustomEvent) => void;
}

/**
 * The `MessageStrip` component enables the embedding of app-related messages. It displays 4 types of messages, each with corresponding semantic color and icon: Information, Positive, Warning and Negative. Each message can have a Close button, so that it can be removed from the UI, if needed.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/MessageStrip" target="_blank">UI5 Web Components Playground</a>
 */
const MessageStrip: FC<MessageStripPropTypes> = withWebComponent<MessageStripPropTypes>(
  'ui5-messagestrip',
  ['type'],
  ['noCloseButton', 'noIcon'],
  ['icon'],
  ['close']
);

MessageStrip.displayName = 'MessageStrip';

MessageStrip.defaultProps = {
  noCloseButton: false,
  noIcon: false,
  type: MessageStripType.Information
};

export { MessageStrip };
