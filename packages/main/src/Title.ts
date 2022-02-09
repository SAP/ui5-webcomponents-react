import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TitleDomRef, TitlePropTypes } from './webComponents/Title';
import { Title } from './webComponents/Title';

deprecationNotice(
  'Title',
  `importing from '@ui5/webcomponents-react/dist/Title' is deprecated. Please use "import { Title } from '@ui5/webcomponents-react';" instead.`
);

export { Title };

export type { TitlePropTypes, TitleDomRef };
