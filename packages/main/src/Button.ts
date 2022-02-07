import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ButtonDomRef, ButtonPropTypes } from './webComponents/Button';
import { Button } from './webComponents/Button';

deprecationNotice(
  'Button',
  `importing from '@ui5/webcomponents-react/dist/Button' is deprecated. Please use "import { Button } from '@ui5/webcomponents-react';" instead.`
);

export { Button };

export type { ButtonPropTypes, ButtonDomRef };
