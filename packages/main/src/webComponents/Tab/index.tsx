import UI5Tab from '@ui5/webcomponents/dist/Tab';
import React, { FC, ReactNode } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { SemanticColor } from '@ui5/webcomponents-react/lib/SemanticColor';

export interface TabPropTypes extends WithWebComponentPropTypes {
  text?: string; // @generated
  disabled?: boolean; // @generated
  additionalText?: string; // @generated
  icon?: string; // @generated
  semanticColor?: SemanticColor; // @generated
  selected?: boolean; // @generated
  children?: ReactNode | ReactNode[];
}

const Tab: FC<TabPropTypes> = withWebComponent<TabPropTypes>(UI5Tab);

Tab.displayName = 'Tab';

Tab.defaultProps = {
  semanticColor: SemanticColor.Default // @generated
};

export { Tab };
