import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { MessageStripType } from '@ui5/webcomponents-react/lib/MessageStripType';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5MessageStrip from '@ui5/webcomponents/dist/MessageStrip';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface MessageStripPropTypes extends WithWebComponentPropTypes {
  type?: MessageStripType; // @generated
  icon?: string; // @generated
  noIcon?: boolean; // @generated
  noCloseButton?: boolean; // @generated
  onClose?: (event: Event) => void; // @generated
  children?: string; // @generated
}

/**
 * <code>import { MessageStrip } from '@ui5/webcomponents-react/lib/MessageStrip';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/MessageStrip" target="_blank">UI5 Web Components Playground</a>
 */
const MessageStrip: FC<MessageStripPropTypes> = withWebComponent<MessageStripPropTypes>(UI5MessageStrip);

MessageStrip.displayName = 'MessageStrip';

MessageStrip.defaultProps = {
  type: MessageStripType.Information // @generated
};

export { MessageStrip };
