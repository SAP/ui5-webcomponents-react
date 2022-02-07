import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { MessageBox } from '../components/MessageBox';

export type { MessageBoxPropTypes } from '../components/MessageBox';

deprecationNotice(
  'MessageBox',
  `importing from '@ui5/webcomponents-react/dist/MessageBox' is deprecated. Please use "import { MessageBox } from '@ui5/webcomponents-react';" instead.`
);

export { MessageBox };
