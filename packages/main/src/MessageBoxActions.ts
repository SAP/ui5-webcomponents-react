import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { MessageBoxActions } from './enums/MessageBoxActions';

deprecationNotice(
  'MessageBoxActions',
  `importing from '@ui5/webcomponents-react/dist/MessageBoxActions' is deprecated. Please use "import { MessageBoxActions } from '@ui5/webcomponents-react';" instead.`
);

export { MessageBoxActions };
