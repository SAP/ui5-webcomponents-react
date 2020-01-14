import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/features/InputSuggestions';
import UI5MultiComboBox from '@ui5/webcomponents/dist/MultiComboBox';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface MultiComboBoxPropTypes extends WithWebComponentPropTypes {
  value?: string; // @generated
  placeholder?: string; // @generated
  allowCustomValues?: boolean; // @generated
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
