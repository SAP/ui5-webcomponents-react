import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { Grid } from '../components/Grid';

export type { GridPropTypes } from '../components/Grid';

deprecationNotice(
  'Grid',
  `importing from '@ui5/webcomponents-react/dist/Grid' is deprecated. Please use "import { Grid } from '@ui5/webcomponents-react';" instead.`
);

export { Grid };
