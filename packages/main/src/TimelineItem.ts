import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TimelineItemDomRef, TimelineItemPropTypes } from './webComponents/TimelineItem';
import { TimelineItem } from './webComponents/TimelineItem';

deprecationNotice(
  'TimelineItem',
  `importing from '@ui5/webcomponents-react/dist/TimelineItem' is deprecated. Please use "import { TimelineItem } from '@ui5/webcomponents-react';" instead.`
);

export { TimelineItem };

export type { TimelineItemPropTypes, TimelineItemDomRef };
