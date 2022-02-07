import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { FlexibleColumnLayoutDomRef, FlexibleColumnLayoutPropTypes } from './webComponents/FlexibleColumnLayout';
import { FlexibleColumnLayout } from './webComponents/FlexibleColumnLayout';

deprecationNotice(
  'FlexibleColumnLayout',
  `importing from '@ui5/webcomponents-react/dist/FlexibleColumnLayout' is deprecated. Please use "import { FlexibleColumnLayout } from '@ui5/webcomponents-react';" instead.`
);

export { FlexibleColumnLayout };

export type { FlexibleColumnLayoutPropTypes, FlexibleColumnLayoutDomRef };
