import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import UI5Tokenizer from '@ui5/webcomponents/dist/Tokenizer';
import React, { FC, ReactNode } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

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
