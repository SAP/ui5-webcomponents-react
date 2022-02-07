import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ComboBoxDomRef, ComboBoxPropTypes } from '../webComponents/ComboBox';
import { ComboBox } from '../webComponents/ComboBox';

deprecationNotice(
  'ComboBox',
  `importing from '@ui5/webcomponents-react/dist/ComboBox' is deprecated. Please use "import { ComboBox } from '@ui5/webcomponents-react';" instead.`
);

export { ComboBox };

export type { ComboBoxPropTypes, ComboBoxDomRef };
