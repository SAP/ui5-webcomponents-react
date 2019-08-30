import { Event } from '@ui5/webcomponents-react-base';
import '@ui5/webcomponents/dist/features/InputSuggestions';
import UI5MultiComboBox from '@ui5/webcomponents/dist/MultiComboBox';
import React, { FC, ReactNode } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

export interface MultiComboBoxPropTypes extends WithWebComponentPropTypes {
  value?: string; // @generated
  placeholder?: string; // @generated
  validateInput?: boolean; // @generated
  disabled?: boolean; // @generated
  valueState?: ValueState; // @generated
  readonly?: boolean; // @generated
  onChange?: (event: Event) => void; // @generated
  onInput?: (event: Event) => void; // @generated
  onSelectionChange?: (event: Event) => void; // @generated
  children?: ReactNode[]; // @generated
}

const MultiComboBox: FC<MultiComboBoxPropTypes> = withWebComponent<MultiComboBoxPropTypes>(UI5MultiComboBox);

MultiComboBox.displayName = 'MultiComboBox';

MultiComboBox.defaultProps = {
  value: '', // @generated
  placeholder: '', // @generated
  valueState: ValueState.None // @generated
};

export { MultiComboBox };
