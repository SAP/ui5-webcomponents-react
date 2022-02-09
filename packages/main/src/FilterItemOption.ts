import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { FilterItemOptionDomRef, FilterItemOptionPropTypes } from './webComponents/FilterItemOption';
import { FilterItemOption } from './webComponents/FilterItemOption';

deprecationNotice(
  'FilterItemOption',
  `importing from '@ui5/webcomponents-react/dist/FilterItemOption' is deprecated. Please use "import { FilterItemOption } from '@ui5/webcomponents-react';" instead.`
);

export { FilterItemOption };

export type { FilterItemOptionPropTypes, FilterItemOptionDomRef };
