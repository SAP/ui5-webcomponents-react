export * from './utils/index';
import { deprecationNotice } from './utils/index';

deprecationNotice(
  'Utils',
  `importing from '@ui5/webcomponents-react-base/dist/Utils' is deprecated. Please use "import { deprecationNotice, debounce, enrichEventWithDetails } from '@ui5/webcomponents-react-base';" instead.`
);
