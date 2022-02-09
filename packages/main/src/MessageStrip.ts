import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { MessageStripDomRef, MessageStripPropTypes } from './webComponents/MessageStrip';
import { MessageStrip } from './webComponents/MessageStrip';

deprecationNotice(
  'MessageStrip',
  `importing from '@ui5/webcomponents-react/dist/MessageStrip' is deprecated. Please use "import { MessageStrip } from '@ui5/webcomponents-react';" instead.`
);

export { MessageStrip };

export type { MessageStripPropTypes, MessageStripDomRef };
