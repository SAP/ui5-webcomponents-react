import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { Form } from './components/Form';

export type { FormPropTypes } from './components/Form';

deprecationNotice(
  'Form',
  `importing from '@ui5/webcomponents-react/dist/Form' is deprecated. Please use "import { Form } from '@ui5/webcomponents-react';" instead.`
);

export { Form };
