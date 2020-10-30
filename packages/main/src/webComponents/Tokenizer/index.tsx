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

// TODO When deleting this component, clean up withWebComponent as well.

/**
 * ### **DEPRECATION NOTICE**
 * **This component is deprecated and will be removed with v0.12.0. Please use `MultiInput` instead.**
 * You can check our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#migrating-from-011x-to-0120) for an example on how to migrate to MultiInput.
 */
const Tokenizer: FC<TokenizerPropTypes> = withWebComponent<TokenizerPropTypes>(
  'ui5-tokenizer',
  [],
  ['showMore', 'disabled'],
  [],
  ['tokenDelete', 'showMoreItemsPress']
);

Tokenizer.displayName = 'Tokenizer';

export { Tokenizer };
