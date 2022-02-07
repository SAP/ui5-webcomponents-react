import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { RadioButtonDomRef, RadioButtonPropTypes } from '../webComponents/RadioButton';
import { RadioButton } from '../webComponents/RadioButton';

deprecationNotice(
  'RadioButton',
  `importing from '@ui5/webcomponents-react/dist/RadioButton' is deprecated. Please use "import { RadioButton } from '@ui5/webcomponents-react';" instead.`
);

export { RadioButton };

export type { RadioButtonPropTypes, RadioButtonDomRef };
