import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { ToolbarSeparator } from './components/ToolbarSeparator';

export type { ToolbarSeparatorPropTypes } from './components/ToolbarSeparator';

deprecationNotice(
  'ToolbarSeparator',
  `importing from '@ui5/webcomponents-react/dist/ToolbarSeparator' is deprecated. Please use "import { ToolbarSeparator } from '@ui5/webcomponents-react';" instead.`
);

export { ToolbarSeparator };
