import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { FlexBox } from '../components/FlexBox';

export type { FlexBoxPropTypes } from '../components/FlexBox';

deprecationNotice(
  'FlexBox',
  `importing from '@ui5/webcomponents-react/dist/FlexBox' is deprecated. Please use "import { FlexBox } from '@ui5/webcomponents-react';" instead.`
);

export { FlexBox };
