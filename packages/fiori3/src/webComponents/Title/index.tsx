import React, { FC } from 'react';
import { TitleLevel } from '../../enums/TitleLevel';
import UI5Title from '@ui5/webcomponents/dist/Title';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

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
