import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { SwitchDomRef, SwitchPropTypes } from '../webComponents/Switch';
import { Switch } from '../webComponents/Switch';

deprecationNotice(
  'Switch',
  `importing from '@ui5/webcomponents-react/dist/Switch' is deprecated. Please use "import { Switch } from '@ui5/webcomponents-react';" instead.`
);

export { Switch };

export type { SwitchPropTypes, SwitchDomRef };
