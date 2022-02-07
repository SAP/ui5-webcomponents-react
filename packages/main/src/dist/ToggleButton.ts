import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ToggleButtonDomRef, ToggleButtonPropTypes } from '../webComponents/ToggleButton';
import { ToggleButton } from '../webComponents/ToggleButton';

deprecationNotice(
  'ToggleButton',
  `importing from '@ui5/webcomponents-react/dist/ToggleButton' is deprecated. Please use "import { ToggleButton } from '@ui5/webcomponents-react';" instead.`
);

export { ToggleButton };

export type { ToggleButtonPropTypes, ToggleButtonDomRef };
