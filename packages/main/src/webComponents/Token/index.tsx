import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import React, { FC, ReactNode, ReactNodeArray } from 'react';

export interface TokenPropTypes extends Omit<WithWebComponentPropTypes, 'onSelect'> {
  selected?: boolean; // @generated
  readonly?: boolean; // @generated
  onDelete?: (event: CustomEvent) => void; // @generated
  onSelect?: (event: CustomEvent) => void; // @generated
  children?: ReactNode | ReactNodeArray; // @generated
}

const Token: FC<TokenPropTypes> = withWebComponent<TokenPropTypes>(
  'ui5-token',
  () => import('@ui5/webcomponents/dist/Token'),
  [],
  ['selected', 'readonly'],
  [],
  ['delete', 'select']
);

Token.displayName = 'Token';

export { Token };
