import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { FilterGroupItem } from './components/FilterGroupItem';

export type { FilterGroupItemPropTypes } from './components/FilterGroupItem';

deprecationNotice(
  'FilterGroupItem',
  `importing from '@ui5/webcomponents-react/dist/FilterGroupItem' is deprecated. Please use "import { FilterGroupItem } from '@ui5/webcomponents-react';" instead.`
);

export { FilterGroupItem };
