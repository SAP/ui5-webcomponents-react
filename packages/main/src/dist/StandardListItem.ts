import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { StandardListItemDomRef, StandardListItemPropTypes } from '../webComponents/StandardListItem';
import { StandardListItem } from '../webComponents/StandardListItem';

deprecationNotice(
  'StandardListItem',
  `importing from '@ui5/webcomponents-react/dist/StandardListItem' is deprecated. Please use "import { StandardListItem } from '@ui5/webcomponents-react';" instead.`
);

export { StandardListItem };

export type { StandardListItemPropTypes, StandardListItemDomRef };
