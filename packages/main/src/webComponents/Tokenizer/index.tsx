import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Tokenizer from '@ui5/webcomponents/dist/Tokenizer';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TokenizerPropTypes extends WithWebComponentPropTypes {
  showMore?: boolean; // @generated
  disabled?: boolean; // @generated
  onTokenDelete?: (event: CustomEvent) => void; // @generated
  onShowMoreItemsPress?: (event: CustomEvent) => void; // @generated
  children?: ReactNode[]; // @generated
}

/**
 * <code>import { Tokenizer } from '@ui5/webcomponents-react/lib/Tokenizer';</code>
 */
const Tokenizer: FC<TokenizerPropTypes> = withWebComponent<TokenizerPropTypes>(UI5Tokenizer);

Tokenizer.displayName = 'Tokenizer';

export { Tokenizer };
