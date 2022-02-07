import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { SelectDialog } from '../components/SelectDialog';

export type { SelectDialogPropTypes } from '../components/SelectDialog';

deprecationNotice(
  'SelectDialog',
  `importing from '@ui5/webcomponents-react/dist/SelectDialog' is deprecated. Please use "import { SelectDialog } from '@ui5/webcomponents-react';" instead.`
);

export { SelectDialog };
