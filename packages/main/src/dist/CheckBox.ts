import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { CheckBoxDomRef, CheckBoxPropTypes } from '../webComponents/CheckBox';
import { CheckBox } from '../webComponents/CheckBox';

deprecationNotice(
  'CheckBox',
  `importing from '@ui5/webcomponents-react/dist/CheckBox' is deprecated. Please use "import { CheckBox } from '@ui5/webcomponents-react';" instead.`
);

export { CheckBox };

export type { CheckBoxPropTypes, CheckBoxDomRef };
