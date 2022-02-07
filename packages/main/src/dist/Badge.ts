import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { BadgeDomRef, BadgePropTypes } from '../webComponents/Badge';
import { Badge } from '../webComponents/Badge';

deprecationNotice(
  'Badge',
  `importing from '@ui5/webcomponents-react/dist/Badge' is deprecated. Please use "import { Badge } from '@ui5/webcomponents-react';" instead.`
);

export { Badge };

export type { BadgePropTypes, BadgeDomRef };
