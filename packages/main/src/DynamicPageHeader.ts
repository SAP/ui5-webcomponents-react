import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { DynamicPageHeader } from './components/DynamicPageHeader';

export type { DynamicPageHeaderPropTypes } from './components/DynamicPageHeader';

deprecationNotice(
  'DynamicPageHeader',
  `importing from '@ui5/webcomponents-react/dist/DynamicPageHeader' is deprecated. Please use "import { DynamicPageHeader } from '@ui5/webcomponents-react';" instead.`
);

export { DynamicPageHeader };
