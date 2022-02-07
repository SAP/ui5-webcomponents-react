import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TreeDomRef, TreePropTypes } from '../webComponents/Tree';
import { Tree } from '../webComponents/Tree';

deprecationNotice(
  'Tree',
  `importing from '@ui5/webcomponents-react/dist/Tree' is deprecated. Please use "import { Tree } from '@ui5/webcomponents-react';" instead.`
);

export { Tree };

export type { TreePropTypes, TreeDomRef };
