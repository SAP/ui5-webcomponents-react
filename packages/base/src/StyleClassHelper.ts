import { StyleClassHelper } from './styling/StyleClassHelper';
import { deprecationNotice } from './utils/index';

deprecationNotice(
  'StyleClassHelper',
  `importing from '@ui5/webcomponents-react-base/dist/StyleClassHelper' is deprecated. Please use "import { StyleClassHelper } from '@ui5/webcomponents-react-base';" instead.`
);

export { StyleClassHelper };
