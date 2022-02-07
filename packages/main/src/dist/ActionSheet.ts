import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { ActionSheet } from '../components/ActionSheet';

export type { ActionSheetPropTypes } from '../components/ActionSheet';

deprecationNotice(
  'ActionSheet',
  `importing from '@ui5/webcomponents-react/dist/ActionSheet' is deprecated. Please use "import { ActionSheet } from '@ui5/webcomponents-react';" instead.`
);

export { ActionSheet };
