import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { LabelDomRef, LabelPropTypes } from './webComponents/Label';
import { Label } from './webComponents/Label';

deprecationNotice(
  'Label',
  `importing from '@ui5/webcomponents-react/dist/Label' is deprecated. Please use "import { Label } from '@ui5/webcomponents-react';" instead.`
);

export { Label };

export type { LabelPropTypes, LabelDomRef };
