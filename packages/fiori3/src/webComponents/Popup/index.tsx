import React, { FC, ReactNode } from 'react';
import { Event } from '@fiori-for-react/utils';
import UI5Popup from '@ui5/webcomponents/dist/Popup';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface PopupPropTypes extends WithWebComponentPropTypes {
  initialFocus?: string; // @generated
  hideHeader?: boolean; // @generated
  headerText?: string; // @generated
  onBeforeOpen?: (event: Event) => void; // @generated
  onAfterOpen?: (event: Event) => void; // @generated
  onBeforeClose?: (event: Event) => void; // @generated
  onAfterClose?: (event: Event) => void; // @generated
  content?: ReactNode[]; // @generated
  header?: ReactNode; // @generated
  footer?: ReactNode; // @generated
}

const Popup: FC<PopupPropTypes> = withWebComponent<PopupPropTypes>(UI5Popup);

Popup.displayName = 'Popup';

Popup.defaultProps = {
  initialFocus: null, // @generated
  headerText: '' // @generated
};

export { Popup };
