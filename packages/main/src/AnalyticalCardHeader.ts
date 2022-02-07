import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { AnalyticalCardHeader } from './components/AnalyticalCardHeader';

export type { AnalyticalCardHeaderPropTypes } from './components/AnalyticalCardHeader';

deprecationNotice(
  'AnalyticalCardHeader',
  `importing from '@ui5/webcomponents-react/dist/AnalyticalCardHeader' is deprecated. Please use "import { AnalyticalCardHeader } from '@ui5/webcomponents-react';" instead.`
);

export { AnalyticalCardHeader };
