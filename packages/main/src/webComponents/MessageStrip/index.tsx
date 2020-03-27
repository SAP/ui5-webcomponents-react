import { MessageStripType } from '@ui5/webcomponents-react/lib/MessageStripType';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5MessageStrip from '@ui5/webcomponents/dist/MessageStrip';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface MessageStripPropTypes extends WithWebComponentPropTypes {
  /**
 * Defines the content to be displayed as graphical element within the <code>ui5-messagestrip</code>. <br><br> <b>Note:</b> If no icon is given, the default icon for the <code>ui5-messagestrip</code> type will be used. The SAP-icons font provides numerous options. <br><br>

See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
 */
  icon?: ReactNode;
  /**
   * Defines whether the MessageStrip renders close icon.
   */
  noCloseButton?: boolean;
  /**
   * Defines whether the MessageStrip will show an icon in the beginning. You can directly provide an icon with the <code>icon</code> slot. Otherwise, the default icon for the type will be used.
   */
  noIcon?: boolean;
  /**
   * Defines the <code>ui5-messagestrip</code> type. <br><br> <b>Note:</b> Available options are <code>"Information"</code>, <code>"Positive"</code>, <code>"Negative"</code>, and <code>"Warning"</code>.
   */
  type?: MessageStripType;
  /**
   * Defines the text of the <code>ui5-messagestrip</code>. <br><br> <b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the close button is pressed either with a click/tap or by using the Enter or Space key.
   */
  onClose?: (event: CustomEvent<{}>) => void;
}

/**
 * <code>import { MessageStrip } from '@ui5/webcomponents-react/lib/MessageStrip';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/MessageStrip" target="_blank">UI5 Web Components Playground</a>
 */
const MessageStrip: FC<MessageStripPropTypes> = withWebComponent<MessageStripPropTypes>(UI5MessageStrip);

MessageStrip.displayName = 'MessageStrip';

MessageStrip.defaultProps = {
  icon: null,
  noCloseButton: false,
  noIcon: false,
  type: MessageStripType.Information
};

export { MessageStrip };
