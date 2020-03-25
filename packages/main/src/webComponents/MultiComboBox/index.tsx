import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
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
  onChange?: (event: CustomEvent) => void; // @generated
  onInput?: (event: CustomEvent) => void; // @generated
  onSelectionChange?: (event: CustomEvent) => void; // @generated
  children?: ReactNode[]; // @generated
}

/**
 * <code>import { MultiComboBox } from '@ui5/webcomponents-react/lib/MultiComboBox';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBox" target="_blank">UI5 Web Components Playground</a>
 */
const MultiComboBox: FC<MultiComboBoxPropTypes> = withWebComponent<MultiComboBoxPropTypes>(UI5MultiComboBox);

MultiComboBox.displayName = 'MultiComboBox';

MultiComboBox.defaultProps = {
  value: '', // @generated
  placeholder: '', // @generated
  valueState: ValueState.None // @generated
};

export { MultiComboBox };
