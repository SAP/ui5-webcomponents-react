import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { LoaderType } from '../enums/LoaderType';

deprecationNotice(
  'LoaderType',
  `importing from '@ui5/webcomponents-react/dist/LoaderType' is deprecated. Please use "import { LoaderType } from '@ui5/webcomponents-react';" instead.`
);

export { LoaderType };
