import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { StepInputDomRef, StepInputPropTypes } from './webComponents/StepInput';
import { StepInput } from './webComponents/StepInput';

deprecationNotice(
  'StepInput',
  `importing from '@ui5/webcomponents-react/dist/StepInput' is deprecated. Please use "import { StepInput } from '@ui5/webcomponents-react';" instead.`
);

export { StepInput };

export type { StepInputPropTypes, StepInputDomRef };
