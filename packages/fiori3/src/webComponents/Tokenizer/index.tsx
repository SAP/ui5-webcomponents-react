import { Event } from '@ui5-webcomponents-react/base';
import UI5Tokenizer from '@ui5/webcomponents/dist/Tokenizer';
import React, { FC, ReactNode } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TokenizerPropTypes extends WithWebComponentPropTypes {
  showMore?: boolean; // @generated
  disabled?: boolean; // @generated
  onTokenDelete?: (event: Event) => void; // @generated
  onShowMoreItemsPress?: (event: Event) => void; // @generated
  children?: ReactNode[]; // @generated
}

const Tokenizer: FC<TokenizerPropTypes> = withWebComponent<TokenizerPropTypes>(UI5Tokenizer);

Tokenizer.displayName = 'Tokenizer';

export { Tokenizer };
