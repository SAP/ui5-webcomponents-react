import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TimelineDomRef, TimelinePropTypes } from './webComponents/Timeline';
import { Timeline } from './webComponents/Timeline';

deprecationNotice(
  'Timeline',
  `importing from '@ui5/webcomponents-react/dist/Timeline' is deprecated. Please use "import { Timeline } from '@ui5/webcomponents-react';" instead.`
);

export { Timeline };

export type { TimelinePropTypes, TimelineDomRef };
