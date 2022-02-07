import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { CardHeaderDomRef, CardHeaderPropTypes } from './webComponents/CardHeader';
import { CardHeader } from './webComponents/CardHeader';

deprecationNotice(
  'CardHeader',
  `importing from '@ui5/webcomponents-react/dist/CardHeader' is deprecated. Please use "import { CardHeader } from '@ui5/webcomponents-react';" instead.`
);

export { CardHeader };

export type { CardHeaderPropTypes, CardHeaderDomRef };
