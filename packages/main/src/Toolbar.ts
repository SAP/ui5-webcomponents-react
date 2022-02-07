import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { Toolbar } from './components/Toolbar';

export type { ToolbarPropTypes } from './components/Toolbar';

deprecationNotice(
  'Toolbar',
  `importing from '@ui5/webcomponents-react/dist/Toolbar' is deprecated. Please use "import { Toolbar } from '@ui5/webcomponents-react';" instead.`
);

export { Toolbar };
