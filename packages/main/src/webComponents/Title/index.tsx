import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Title from '@ui5/webcomponents/dist/Title';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TitlePropTypes extends WithWebComponentPropTypes {
  wrap?: boolean; // @generated
  level?: TitleLevel; // @generated
  children?: string; // @generated
}

/**
 * <code>import { Title } from '@ui5/webcomponents-react/lib/Title';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Title" target="_blank">UI5 Web Components Playground</a>
 */
const Title: FC<TitlePropTypes> = withWebComponent<TitlePropTypes>(UI5Title);

Title.displayName = 'Title';

Title.defaultProps = {
  level: TitleLevel.H2 // @generated
};

export { Title };
