import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Tokenizer';
import React, { FC, ReactNode } from 'react';

export interface TokenizerPropTypes extends WithWebComponentPropTypes {
  showMore?: boolean; // @generated
  disabled?: boolean; // @generated
  onTokenDelete?: (event: CustomEvent) => void; // @generated
  onShowMoreItemsPress?: (event: CustomEvent) => void; // @generated
  children?: ReactNode[]; // @generated
}

const Tokenizer: FC<TokenizerPropTypes> = withWebComponent<TokenizerPropTypes>(
  'ui5-tokenizer',
  [],
  ['showMore', 'disabled'],
  [],
  ['tokenDelete', 'showMoreItemsPress']
);

Tokenizer.displayName = 'Tokenizer';

export { Tokenizer };
