import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { LinkDomRef, LinkPropTypes } from '../webComponents/Link';
import { Link } from '../webComponents/Link';

deprecationNotice(
  'Link',
  `importing from '@ui5/webcomponents-react/dist/Link' is deprecated. Please use "import { Link } from '@ui5/webcomponents-react';" instead.`
);

export { Link };

export type { LinkPropTypes, LinkDomRef };
