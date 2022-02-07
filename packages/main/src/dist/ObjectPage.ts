import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { ObjectPage } from '../components/ObjectPage';

export type { ObjectPagePropTypes } from '../components/ObjectPage';

deprecationNotice(
  'ObjectPage',
  `importing from '@ui5/webcomponents-react/dist/ObjectPage' is deprecated. Please use "import { ObjectPage } from '@ui5/webcomponents-react';" instead.`
);

export { ObjectPage };
