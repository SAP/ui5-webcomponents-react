import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type {
  SideNavigationSubItemDomRef,
  SideNavigationSubItemPropTypes
} from '../webComponents/SideNavigationSubItem';
import { SideNavigationSubItem } from '../webComponents/SideNavigationSubItem';

deprecationNotice(
  'SideNavigationSubItem',
  `importing from '@ui5/webcomponents-react/dist/SideNavigationSubItem' is deprecated. Please use "import { SideNavigationSubItem } from '@ui5/webcomponents-react';" instead.`
);

export { SideNavigationSubItem };

export type { SideNavigationSubItemPropTypes, SideNavigationSubItemDomRef };
