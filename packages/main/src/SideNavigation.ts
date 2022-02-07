import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { SideNavigationDomRef, SideNavigationPropTypes } from './webComponents/SideNavigation';
import { SideNavigation } from './webComponents/SideNavigation';

deprecationNotice(
  'SideNavigation',
  `importing from '@ui5/webcomponents-react/dist/SideNavigation' is deprecated. Please use "import { SideNavigation } from '@ui5/webcomponents-react';" instead.`
);

export { SideNavigation };

export type { SideNavigationPropTypes, SideNavigationDomRef };
