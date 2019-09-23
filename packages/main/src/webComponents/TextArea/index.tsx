import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import UI5TextArea from '@ui5/webcomponents/dist/TextArea';
import React, { FC } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TextAreaPropTypes extends WithWebComponentPropTypes {
  value?: string; // @generated
  disabled?: boolean; // @generated
  readonly?: boolean; // @generated
  placeholder?: string; // @generated
  rows?: number; // @generated
  maxLength?: number; // @generated
  showExceededText?: boolean; // @generated
  growing?: boolean; // @generated
  growingMaxLines?: number; // @generated
  name?: string; // @generated
  onChange?: (event: Event) => void; // @generated
}

const TextArea: FC<TextAreaPropTypes> = withWebComponent<TextAreaPropTypes>(UI5TextArea);

TextArea.displayName = 'TextArea';

TextArea.defaultProps = {
  rows: 0, // @generated
  maxLength: null, // @generated
  growingMaxLines: 0 // @generated
};

export { TextArea };
