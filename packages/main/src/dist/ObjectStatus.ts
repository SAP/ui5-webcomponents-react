import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { ObjectStatus } from '../components/ObjectStatus';

export type { ObjectStatusPropTypes } from '../components/ObjectStatus';

deprecationNotice(
  'ObjectStatus',
  `importing from '@ui5/webcomponents-react/dist/ObjectStatus' is deprecated. Please use "import { ObjectStatus } from '@ui5/webcomponents-react';" instead.`
);

export { ObjectStatus };
