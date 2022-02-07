import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { DynamicSideContentDomRef, DynamicSideContentPropTypes } from './webComponents/DynamicSideContent';
import { DynamicSideContent } from './webComponents/DynamicSideContent';

deprecationNotice(
  'DynamicSideContent',
  `importing from '@ui5/webcomponents-react/dist/DynamicSideContent' is deprecated. Please use "import { DynamicSideContent } from '@ui5/webcomponents-react';" instead.`
);

export { DynamicSideContent };

export type { DynamicSideContentPropTypes, DynamicSideContentDomRef };
