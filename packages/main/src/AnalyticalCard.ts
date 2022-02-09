import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { AnalyticalCard } from './components/AnalyticalCard';

export type { AnalyticalCardPropTypes } from './components/AnalyticalCard';

deprecationNotice(
  'AnalyticalCard',
  `importing from '@ui5/webcomponents-react/dist/AnalyticalCard' is deprecated. Please use "import { AnalyticalCard } from '@ui5/webcomponents-react';" instead.`
);

export { AnalyticalCard };
