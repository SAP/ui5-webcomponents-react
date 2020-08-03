import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Token';
import React, { FC, ReactNode, ReactNodeArray } from 'react';

export interface TokenPropTypes extends Omit<WithWebComponentPropTypes, 'onSelect'> {
  selected?: boolean; // @generated
  readonly?: boolean; // @generated
  onDelete?: (event: CustomEvent) => void; // @generated
  onSelect?: (event: CustomEvent) => void; // @generated
  children?: ReactNode | ReactNodeArray; // @generated
}

/**
 * <code>import { Token } from '@ui5/webcomponents-react/lib/Token';</code>
 */
const Token: FC<TokenPropTypes> = withWebComponent<TokenPropTypes>(
  'ui5-token',
  [],
  ['selected', 'readonly'],
  [],
  ['delete', 'select']
);

Token.displayName = 'Token';

export { Token };
