import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { ObjectPageSubSection } from './components/ObjectPageSubSection';

export type { ObjectPageSubSectionPropTypes } from './components/ObjectPageSubSection';

deprecationNotice(
  'ObjectPageSubSection',
  `importing from '@ui5/webcomponents-react/dist/ObjectPageSubSection' is deprecated. Please use "import { ObjectPageSubSection } from '@ui5/webcomponents-react';" instead.`
);

export { ObjectPageSubSection };
