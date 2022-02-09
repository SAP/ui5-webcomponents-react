import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { WizardDomRef, WizardPropTypes } from './webComponents/Wizard';
import { Wizard } from './webComponents/Wizard';

deprecationNotice(
  'Wizard',
  `importing from '@ui5/webcomponents-react/dist/Wizard' is deprecated. Please use "import { Wizard } from '@ui5/webcomponents-react';" instead.`
);

export { Wizard };

export type { WizardPropTypes, WizardDomRef };
