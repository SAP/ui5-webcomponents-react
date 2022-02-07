import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TreeItemDomRef, TreeItemPropTypes } from '../webComponents/TreeItem';
import { TreeItem } from '../webComponents/TreeItem';

deprecationNotice(
  'TreeItem',
  `importing from '@ui5/webcomponents-react/dist/TreeItem' is deprecated. Please use "import { TreeItem } from '@ui5/webcomponents-react';" instead.`
);

export { TreeItem };

export type { TreeItemPropTypes, TreeItemDomRef };
