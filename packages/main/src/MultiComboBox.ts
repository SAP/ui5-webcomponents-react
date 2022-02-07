import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { MultiComboBoxDomRef, MultiComboBoxPropTypes } from './webComponents/MultiComboBox';
import { MultiComboBox } from './webComponents/MultiComboBox';

deprecationNotice(
  'MultiComboBox',
  `importing from '@ui5/webcomponents-react/dist/MultiComboBox' is deprecated. Please use "import { MultiComboBox } from '@ui5/webcomponents-react';" instead.`
);

export { MultiComboBox };

export type { MultiComboBoxPropTypes, MultiComboBoxDomRef };
