import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { FormGroup } from '../components/FormGroup';

export type { FormGroupPropTypes } from '../components/FormGroup';

deprecationNotice(
  'FormGroup',
  `importing from '@ui5/webcomponents-react/dist/FormGroup' is deprecated. Please use "import { FormGroup } from '@ui5/webcomponents-react';" instead.`
);

export { FormGroup };
