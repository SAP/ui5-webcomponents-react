import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import UI5Select from '@ui5/webcomponents/dist/Select';
import React, { FC, ReactNode } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

export interface SelectPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  valueState?: ValueState; // @generated
  onChange?: (event: Event) => void; // @generated
  children?: ReactNode[]; // @generated
}

const Select: FC<SelectPropTypes> = withWebComponent<SelectPropTypes>(UI5Select);

Select.displayName = 'Select';

Select.defaultProps = {
  valueState: ValueState.None // @generated
};

export { Select };
