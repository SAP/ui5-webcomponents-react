import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { TablePlaceholder } from './components/AnalyticalTable/defaults/LoadingComponent/TablePlaceholder';

deprecationNotice(
  'TablePlaceholder',
  `importing from '@ui5/webcomponents-react/dist/TablePlaceholder' is deprecated. Please use "import { TablePlaceholder } from '@ui5/webcomponents-react';" instead.`
);

export { TablePlaceholder };
