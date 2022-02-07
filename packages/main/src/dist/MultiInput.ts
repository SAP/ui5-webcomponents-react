import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { MultiInputDomRef, MultiInputPropTypes } from '../webComponents/MultiInput';
import { MultiInput } from '../webComponents/MultiInput';

deprecationNotice(
  'MultiInput',
  `importing from '@ui5/webcomponents-react/dist/MultiInput' is deprecated. Please use "import { MultiInput } from '@ui5/webcomponents-react';" instead.`
);

export { MultiInput };

export type { MultiInputPropTypes, MultiInputDomRef };
