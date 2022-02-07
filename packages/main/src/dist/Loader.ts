import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { Loader } from '../components/Loader';

export type { LoaderPropTypes } from '../components/Loader';

deprecationNotice(
  'Loader',
  `importing from '@ui5/webcomponents-react/dist/Loader' is deprecated. Please use "import { Loader } from '@ui5/webcomponents-react';" instead.`
);

export { Loader };
