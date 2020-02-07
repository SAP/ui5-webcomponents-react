import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5RadioButton from '@ui5/webcomponents/dist/RadioButton';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface RadioButtonPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  readonly?: boolean; // @generated
  selected?: boolean; // @generated
  text?: string; // @generated
  valueState?: ValueState; // @generated
  name?: string; // @generated
  value?: string; // @generated
  onSelect?: (event: Event) => void; // @generated
}

/**
 * <code>import { RadioButton } from '@ui5/webcomponents-react/lib/RadioButton';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/RadioButton" target="_blank">UI5 Web Components Playground</a>
 */
const RadioButton: FC<RadioButtonPropTypes> = withWebComponent<RadioButtonPropTypes>(UI5RadioButton);

RadioButton.displayName = 'RadioButton';

RadioButton.defaultProps = {
  valueState: ValueState.None // @generated
};

export { RadioButton };
