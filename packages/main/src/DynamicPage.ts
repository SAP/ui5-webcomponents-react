import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { DynamicPage } from './components/DynamicPage';

export type { DynamicPagePropTypes } from './components/DynamicPage';

deprecationNotice(
  'DynamicPage',
  `importing from '@ui5/webcomponents-react/dist/DynamicPage' is deprecated. Please use "import { DynamicPage } from '@ui5/webcomponents-react';" instead.`
);

export { DynamicPage };
