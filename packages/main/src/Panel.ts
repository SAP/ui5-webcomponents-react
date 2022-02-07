import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { PanelDomRef, PanelPropTypes } from './webComponents/Panel';
import { Panel } from './webComponents/Panel';

deprecationNotice(
  'Panel',
  `importing from '@ui5/webcomponents-react/dist/Panel' is deprecated. Please use "import { Panel } from '@ui5/webcomponents-react';" instead.`
);

export { Panel };

export type { PanelPropTypes, PanelDomRef };
