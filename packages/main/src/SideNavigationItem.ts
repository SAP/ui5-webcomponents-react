import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { SideNavigationItemDomRef, SideNavigationItemPropTypes } from './webComponents/SideNavigationItem';
import { SideNavigationItem } from './webComponents/SideNavigationItem';

deprecationNotice(
  'SideNavigationItem',
  `importing from '@ui5/webcomponents-react/dist/SideNavigationItem' is deprecated. Please use "import { SideNavigationItem } from '@ui5/webcomponents-react';" instead.`
);

export { SideNavigationItem };

export type { SideNavigationItemPropTypes, SideNavigationItemDomRef };
