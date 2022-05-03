import { CssSizeVariables, CssSizeVariablesNames } from './styling/CssSizeVariables';
import { deprecationNotice } from './utils/index';

deprecationNotice(
  'CssSizeVariables',
  `importing from '@ui5/webcomponents-react-base/dist/CssSizeVariables' is deprecated. Please use "import { CssSizeVariables, CssSizeVariablesNames } from '@ui5/webcomponents-react-base';" instead.`
);

export { CssSizeVariables, CssSizeVariablesNames };
