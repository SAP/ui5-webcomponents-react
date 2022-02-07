import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TabDomRef, TabPropTypes } from '../webComponents/Tab';
import { Tab } from '../webComponents/Tab';

deprecationNotice(
  'Tab',
  `importing from '@ui5/webcomponents-react/dist/Tab' is deprecated. Please use "import { Tab } from '@ui5/webcomponents-react';" instead.`
);

export { Tab };

export type { TabPropTypes, TabDomRef };
