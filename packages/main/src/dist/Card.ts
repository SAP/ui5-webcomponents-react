import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { CardDomRef, CardPropTypes } from '../webComponents/Card';
import { Card } from '../webComponents/Card';

deprecationNotice(
  'Card',
  `importing from '@ui5/webcomponents-react/dist/Card' is deprecated. Please use "import { Card } from '@ui5/webcomponents-react';" instead.`
);

export { Card };

export type { CardPropTypes, CardDomRef };
