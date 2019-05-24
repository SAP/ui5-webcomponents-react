import React, { FC, ReactNode } from 'react';
import { Event } from '@fiori-for-react/utils';
import UI5Tokenizer from '@ui5/webcomponents/dist/Tokenizer';
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
