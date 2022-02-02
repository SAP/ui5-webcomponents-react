import { useConsolidatedRef } from './hooks';
import { deprecationNotice } from './utils/index';

deprecationNotice(
  'useConsolidatedRef',
  `importing from '@ui5/webcomponents-react-base/dist/useConsolidatedRef' is deprecated. Please use "import { useConsolidatedRef } from '@ui5/webcomponents-react-base';" instead.`
);

export { useConsolidatedRef };
