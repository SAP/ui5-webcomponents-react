import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { OverflowToolbarToggleButton } from './components/OverflowToolbarToggleButton';

export type { OverflowToolbarToggleButtonPropTypes } from './components/OverflowToolbarToggleButton';

deprecationNotice(
  'OverflowToolbarToggleButton',
  `importing from '@ui5/webcomponents-react/dist/OverflowToolbarToggleButton' is deprecated. Please use "import { OverflowToolbarToggleButton } from '@ui5/webcomponents-react';" instead.`
);

export { OverflowToolbarToggleButton };
