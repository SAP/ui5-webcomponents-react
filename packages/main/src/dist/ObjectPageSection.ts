import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { ObjectPageSection } from '../components/ObjectPageSection';

export type { ObjectPageSectionPropTypes } from '../components/ObjectPageSection';

deprecationNotice(
  'ObjectPageSection',
  `importing from '@ui5/webcomponents-react/dist/ObjectPageSection' is deprecated. Please use "import { ObjectPageSection } from '@ui5/webcomponents-react';" instead.`
);

export { ObjectPageSection };
