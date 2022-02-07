import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { SuggestionItemDomRef, SuggestionItemPropTypes } from './webComponents/SuggestionItem';
import { SuggestionItem } from './webComponents/SuggestionItem';

deprecationNotice(
  'SuggestionItem',
  `importing from '@ui5/webcomponents-react/dist/SuggestionItem' is deprecated. Please use "import { SuggestionItem } from '@ui5/webcomponents-react';" instead.`
);

export { SuggestionItem };

export type { SuggestionItemPropTypes, SuggestionItemDomRef };
