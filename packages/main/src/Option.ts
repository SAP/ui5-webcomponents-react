import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { OptionDomRef, OptionPropTypes } from './webComponents/Option';
import { Option } from './webComponents/Option';

deprecationNotice(
  'Option',
  `importing from '@ui5/webcomponents-react/dist/Option' is deprecated. Please use "import { Option } from '@ui5/webcomponents-react';" instead.`
);

export { Option };

export type { OptionPropTypes, OptionDomRef };
