import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { SplitButtonDomRef, SplitButtonPropTypes } from '../webComponents/SplitButton';
import { SplitButton } from '../webComponents/SplitButton';

deprecationNotice(
  'SplitButton',
  `importing from '@ui5/webcomponents-react/dist/SplitButton' is deprecated. Please use "import { SplitButton } from '@ui5/webcomponents-react';" instead.`
);

export { SplitButton };

export type { SplitButtonPropTypes, SplitButtonDomRef };
