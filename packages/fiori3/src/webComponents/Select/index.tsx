import React, { FC, ReactNode } from 'react';
import { ValueState } from '../../enums/ValueState';
import { Event } from '@fiori-for-react/utils';
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
  disabled: false, // @generated
  valueState: ValueState.None // @generated
};

export { Select };
