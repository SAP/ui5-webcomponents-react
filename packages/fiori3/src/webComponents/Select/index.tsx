import React, { FC, ReactNode } from 'react';
import { ValueState } from '../../lib/ValueState';
import { Event } from '@ui5-webcomponents-react/utils';
import UI5Select from '@ui5/webcomponents/dist/Select';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

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
