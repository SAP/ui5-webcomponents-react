import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { Themes } from '../enums/Themes';

deprecationNotice(
  'Themes',
  `importing from '@ui5/webcomponents-react/dist/Themes' is deprecated. Please use "import { Themes } from '@ui5/webcomponents-react';" instead.`
);

export { Themes };
