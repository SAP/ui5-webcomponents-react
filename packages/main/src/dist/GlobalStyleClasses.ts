import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { GlobalStyleClasses } from '../enums/GlobalStyleClasses';

deprecationNotice(
  'GlobalStyleClasses',
  `importing from '@ui5/webcomponents-react/dist/GlobalStyleClasses' is deprecated. Please use "import { GlobalStyleClasses } from '@ui5/webcomponents-react';" instead.`
);

export { GlobalStyleClasses };
