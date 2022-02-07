import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { DynamicPageTitle } from '../components/DynamicPageTitle';

export type { DynamicPageTitlePropTypes } from '../components/DynamicPageTitle';

deprecationNotice(
  'DynamicPageTitle',
  `importing from '@ui5/webcomponents-react/dist/DynamicPageTitle' is deprecated. Please use "import { DynamicPageTitle } from '@ui5/webcomponents-react';" instead.`
);

export { DynamicPageTitle };
