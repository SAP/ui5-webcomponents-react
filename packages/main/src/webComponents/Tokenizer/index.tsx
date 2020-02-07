import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Tokenizer from '@ui5/webcomponents/dist/Tokenizer';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TokenizerPropTypes extends WithWebComponentPropTypes {
  showMore?: boolean; // @generated
  disabled?: boolean; // @generated
  onTokenDelete?: (event: Event) => void; // @generated
  onShowMoreItemsPress?: (event: Event) => void; // @generated
  children?: ReactNode[]; // @generated
}

/**
 * <code>import { Tokenizer } from '@ui5/webcomponents-react/lib/Tokenizer';</code>
 */
const Tokenizer: FC<TokenizerPropTypes> = withWebComponent<TokenizerPropTypes>(UI5Tokenizer);

Tokenizer.displayName = 'Tokenizer';

export { Tokenizer };
