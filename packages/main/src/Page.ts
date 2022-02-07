import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { PageDomRef, PagePropTypes } from './webComponents/Page';
import { Page } from './webComponents/Page';

deprecationNotice(
  'Page',
  `importing from '@ui5/webcomponents-react/dist/Page' is deprecated. Please use "import { Page } from '@ui5/webcomponents-react';" instead.`
);

export { Page };

export type { PagePropTypes, PageDomRef };
