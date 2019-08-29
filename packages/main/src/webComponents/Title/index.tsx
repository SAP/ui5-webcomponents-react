import UI5Title from '@ui5/webcomponents/dist/Title';
import React, { FC } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';

export interface TitlePropTypes extends WithWebComponentPropTypes {
  wrap?: boolean; // @generated
  level?: TitleLevel; // @generated
  children?: string; // @generated
}

const Title: FC<TitlePropTypes> = withWebComponent<TitlePropTypes>(UI5Title);

Title.displayName = 'Title';

Title.defaultProps = {
  level: TitleLevel.H2 // @generated
};

export { Title };
