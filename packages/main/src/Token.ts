import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TokenDomRef, TokenPropTypes } from './webComponents/Token';
import { Token } from './webComponents/Token';

deprecationNotice(
  'Token',
  `importing from '@ui5/webcomponents-react/dist/Token' is deprecated. Please use "import { Token } from '@ui5/webcomponents-react';" instead.`
);

export { Token };

export type { TokenPropTypes, TokenDomRef };
