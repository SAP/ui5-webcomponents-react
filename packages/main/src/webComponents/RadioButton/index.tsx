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
 * In order to use the Radio Button in Compact Size, please add the following snippet to your `index.html`:
 * ```
 * <script data-ui5-config type="application/json">
 *  { "compactSize": true }
 * </script>
 * ```
 *
 * This Storybook is currently only working in ContentDensity=Cozy.
 */
const RadioButton: FC<RadioButtonPropTypes> = withWebComponent<RadioButtonPropTypes>(UI5RadioButton);

RadioButton.displayName = 'RadioButton';

RadioButton.defaultProps = {
  valueState: ValueState.None // @generated
};

export { RadioButton };
