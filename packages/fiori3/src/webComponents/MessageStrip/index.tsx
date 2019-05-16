import { Event } from '@fiori-for-react/utils';
import { MessageStripType } from '@lib/MessageStripType';
import UI5MessageStrip from '@ui5/webcomponents/dist/MessageStrip';
import React, { FC } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface MessageStripPropTypes extends WithWebComponentPropTypes {
  type?: MessageStripType; // @generated
  icon?: string; // @generated
  hideIcon?: boolean; // @generated
  hideCloseButton?: boolean; // @generated
  onClose?: (event: Event) => void; // @generated
  children?: string; // @generated
}

const MessageStrip: FC<MessageStripPropTypes> = withWebComponent<MessageStripPropTypes>(UI5MessageStrip);

MessageStrip.displayName = 'MessageStrip';

MessageStrip.defaultProps = {
  type: MessageStripType.Information, // @generated
  icon: null, // @generated
  hideIcon: false, // @generated
  hideCloseButton: false // @generated
};

export { MessageStrip };
