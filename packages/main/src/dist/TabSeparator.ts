import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TabSeparatorDomRef, TabSeparatorPropTypes } from '../webComponents/TabSeparator';
import { TabSeparator } from '../webComponents/TabSeparator';

deprecationNotice(
  'TabSeparator',
  `importing from '@ui5/webcomponents-react/dist/TabSeparator' is deprecated. Please use "import { TabSeparator } from '@ui5/webcomponents-react';" instead.`
);

export { TabSeparator };

export type { TabSeparatorPropTypes, TabSeparatorDomRef };
