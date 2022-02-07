import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { MessageBoxTypes } from './enums/MessageBoxTypes';

deprecationNotice(
  'MessageBoxTypes',
  `importing from '@ui5/webcomponents-react/dist/MessageBoxTypes' is deprecated. Please use "import { MessageBoxTypes } from '@ui5/webcomponents-react';" instead.`
);

export { MessageBoxTypes };
