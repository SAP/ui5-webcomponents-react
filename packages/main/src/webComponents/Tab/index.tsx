import { SemanticColor } from '@ui5/webcomponents-react/lib/SemanticColor';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Tab from '@ui5/webcomponents/dist/Tab';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TabPropTypes extends WithWebComponentPropTypes {
  text?: string; // @generated
  disabled?: boolean; // @generated
  additionalText?: string; // @generated
  icon?: string; // @generated
  semanticColor?: SemanticColor; // @generated
  selected?: boolean; // @generated
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { Tab } from '@ui5/webcomponents-react/lib/Tab';</code>
 */
const Tab: FC<TabPropTypes> = withWebComponent<TabPropTypes>(UI5Tab);

Tab.displayName = 'Tab';

Tab.defaultProps = {
  semanticColor: SemanticColor.Default // @generated
};

export { Tab };
