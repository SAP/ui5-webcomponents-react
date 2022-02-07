import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { SelectDomRef, SelectPropTypes } from '../webComponents/Select';
import { Select } from '../webComponents/Select';

deprecationNotice(
  'Select',
  `importing from '@ui5/webcomponents-react/dist/Select' is deprecated. Please use "import { Select } from '@ui5/webcomponents-react';" instead.`
);

export { Select };

export type { SelectPropTypes, SelectDomRef };
