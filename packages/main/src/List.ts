import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ListDomRef, ListPropTypes } from './webComponents/List';
import { List } from './webComponents/List';

deprecationNotice(
  'List',
  `importing from '@ui5/webcomponents-react/dist/List' is deprecated. Please use "import { List } from '@ui5/webcomponents-react';" instead.`
);

export { List };

export type { ListPropTypes, ListDomRef };
