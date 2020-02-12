import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5TextArea from '@ui5/webcomponents/dist/TextArea';
import React, { FC } from 'react';
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

/**
 * <code>import { TextArea } from '@ui5/webcomponents-react/lib/TextArea';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TextArea" target="_blank">UI5 Web Components Playground</a>
 */
const TextArea: FC<TextAreaPropTypes> = withWebComponent<TextAreaPropTypes>(UI5TextArea);

TextArea.displayName = 'TextArea';

TextArea.defaultProps = {
  rows: 0, // @generated
  maxLength: null, // @generated
  growingMaxLines: 0 // @generated
};

export { TextArea };
