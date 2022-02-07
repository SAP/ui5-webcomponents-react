import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { ToolbarSpacer } from './components/ToolbarSpacer';

export type { ToolbarSpacerPropTypes } from './components/ToolbarSpacer';

deprecationNotice(
  'ToolbarSpacer',
  `importing from '@ui5/webcomponents-react/dist/ToolbarSpacer' is deprecated. Please use "import { ToolbarSpacer } from '@ui5/webcomponents-react';" instead.`
);

export { ToolbarSpacer };
