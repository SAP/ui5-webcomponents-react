import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { WizardStepDomRef, WizardStepPropTypes } from './webComponents/WizardStep';
import { WizardStep } from './webComponents/WizardStep';

deprecationNotice(
  'WizardStep',
  `importing from '@ui5/webcomponents-react/dist/WizardStep' is deprecated. Please use "import { WizardStep } from '@ui5/webcomponents-react';" instead.`
);

export { WizardStep };

export type { WizardStepPropTypes, WizardStepDomRef };
