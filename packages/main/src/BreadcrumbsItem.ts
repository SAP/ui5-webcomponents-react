import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { BreadcrumbsItemDomRef, BreadcrumbsItemPropTypes } from './webComponents/BreadcrumbsItem';
import { BreadcrumbsItem } from './webComponents/BreadcrumbsItem';

deprecationNotice(
  'BreadcrumbsItem',
  `importing from '@ui5/webcomponents-react/dist/BreadcrumbsItem' is deprecated. Please use "import { BreadcrumbsItem } from '@ui5/webcomponents-react';" instead.`
);

export { BreadcrumbsItem };

export type { BreadcrumbsItemPropTypes, BreadcrumbsItemDomRef };
