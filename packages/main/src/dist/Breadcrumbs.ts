import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { BreadcrumbsDomRef, BreadcrumbsPropTypes } from '../webComponents/Breadcrumbs';
import { Breadcrumbs } from '../webComponents/Breadcrumbs';

deprecationNotice(
  'Breadcrumbs',
  `importing from '@ui5/webcomponents-react/dist/Breadcrumbs' is deprecated. Please use "import { Breadcrumbs } from '@ui5/webcomponents-react';" instead.`
);

export { Breadcrumbs };

export type { BreadcrumbsPropTypes, BreadcrumbsDomRef };
