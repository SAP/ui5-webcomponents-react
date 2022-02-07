import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { IllustratedMessageDomRef, IllustratedMessagePropTypes } from './webComponents/IllustratedMessage';
import { IllustratedMessage } from './webComponents/IllustratedMessage';

deprecationNotice(
  'IllustratedMessage',
  `importing from '@ui5/webcomponents-react/dist/IllustratedMessage' is deprecated. Please use "import { IllustratedMessage } from '@ui5/webcomponents-react';" instead.`
);

export { IllustratedMessage };

export type { IllustratedMessagePropTypes, IllustratedMessageDomRef };
