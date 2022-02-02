export * from './styling/spacing';
import { deprecationNotice } from './utils/index';

deprecationNotice(
  'spacing',
  `importing from '@ui5/webcomponents-react-base/dist/spacing' is deprecated. Please use "import { spacing } from '@ui5/webcomponents-react-base';" instead.`
);
