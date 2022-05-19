import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { OverflowToolbarButton } from './components/OverflowToolbarButton';

export type { OverflowToolbarButtonPropTypes } from './components/OverflowToolbarButton';

deprecationNotice(
  'OverflowToolbarButton',
  `importing from '@ui5/webcomponents-react/dist/OverflowToolbarButton' is deprecated. Please use "import { OverflowToolbarButton } from '@ui5/webcomponents-react';" instead.`
);

export { OverflowToolbarButton };
