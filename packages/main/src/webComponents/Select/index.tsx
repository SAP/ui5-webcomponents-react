import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Select from '@ui5/webcomponents/dist/Select';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface SelectPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  valueState?: ValueState; // @generated
  onChange?: (event: Event) => void; // @generated
  children?: ReactNode[]; // @generated
}

/**
 * <code>import { Select } from '@ui5/webcomponents-react/lib/Select';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Select" target="_blank">UI5 Web Components Playground</a>
 */
const Select: FC<SelectPropTypes> = withWebComponent<SelectPropTypes>(UI5Select);

Select.displayName = 'Select';

Select.defaultProps = {
  valueState: ValueState.None // @generated
};

export { Select };
