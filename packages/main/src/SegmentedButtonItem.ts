import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { SegmentedButtonItemDomRef, SegmentedButtonItemPropTypes } from './webComponents/SegmentedButtonItem';
import { SegmentedButtonItem } from './webComponents/SegmentedButtonItem';

deprecationNotice(
  'SegmentedButtonItem',
  `importing from '@ui5/webcomponents-react/dist/SegmentedButtonItem' is deprecated. Please use "import { SegmentedButtonItem } from '@ui5/webcomponents-react';" instead.`
);

export { SegmentedButtonItem };

export type { SegmentedButtonItemPropTypes, SegmentedButtonItemDomRef };
