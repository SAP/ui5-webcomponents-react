import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { SuggestionGroupItemDomRef, SuggestionGroupItemPropTypes } from '../webComponents/SuggestionGroupItem';
import { SuggestionGroupItem } from '../webComponents/SuggestionGroupItem';

deprecationNotice(
  'SuggestionGroupItem',
  `importing from '@ui5/webcomponents-react/dist/SuggestionGroupItem' is deprecated. Please use "import { SuggestionGroupItem } from '@ui5/webcomponents-react';" instead.`
);

export { SuggestionGroupItem };

export type { SuggestionGroupItemPropTypes, SuggestionGroupItemDomRef };
