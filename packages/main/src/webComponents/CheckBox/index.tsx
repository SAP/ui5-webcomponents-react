import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5CheckBox from '@ui5/webcomponents/dist/CheckBox';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface CheckBoxPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  readonly?: boolean; // @generated
  checked?: boolean; // @generated
  text?: string; // @generated
  valueState?: ValueState; // @generated
  wrap?: boolean; // @generated
  name?: string; // @generated
  onChange?: (event: Event) => void; // @generated
}

/**
 * <code>import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/CheckBox" target="_blank">UI5 Web Components Playground</a>
 */
const CheckBox: FC<CheckBoxPropTypes> = withWebComponent<CheckBoxPropTypes>(UI5CheckBox);

CheckBox.displayName = 'CheckBox';

CheckBox.defaultProps = {
  valueState: ValueState.None // @generated
};

export { CheckBox };
