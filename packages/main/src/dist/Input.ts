import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { InputDomRef, InputPropTypes } from '../webComponents/Input';
import { Input } from '../webComponents/Input';

deprecationNotice(
  'Input',
  `importing from '@ui5/webcomponents-react/dist/Input' is deprecated. Please use "import { Input } from '@ui5/webcomponents-react';" instead.`
);

export { Input };

export type { InputPropTypes, InputDomRef };
