import { Event } from '@ui5/webcomponents-react-base';
import UI5Token from '@ui5/webcomponents/dist/Token';
import React, { FC, ReactNode, ReactNodeArray } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TokenPropTypes extends WithWebComponentPropTypes {
  selected?: boolean; // @generated
  readonly?: boolean; // @generated
  onDelete?: (event: Event) => void; // @generated
  onSelect?: (event: Event) => void; // @generated
  children?: ReactNode | ReactNodeArray; // @generated
}

const Token: FC<TokenPropTypes> = withWebComponent<TokenPropTypes>(UI5Token);

Token.displayName = 'Token';

export { Token };
