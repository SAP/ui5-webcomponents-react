import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TabContainerDomRef, TabContainerPropTypes } from '../webComponents/TabContainer';
import { TabContainer } from '../webComponents/TabContainer';

deprecationNotice(
  'TabContainer',
  `importing from '@ui5/webcomponents-react/dist/TabContainer' is deprecated. Please use "import { TabContainer } from '@ui5/webcomponents-react';" instead.`
);

export { TabContainer };

export type { TabContainerPropTypes, TabContainerDomRef };
