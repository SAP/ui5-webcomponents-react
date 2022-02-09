import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { FilterBar } from './components/FilterBar';

export type { FilterBarPropTypes } from './components/FilterBar';

deprecationNotice(
  'FilterBar',
  `importing from '@ui5/webcomponents-react/dist/FilterBar' is deprecated. Please use "import { FilterBar } from '@ui5/webcomponents-react';" instead.`
);

export { FilterBar };
