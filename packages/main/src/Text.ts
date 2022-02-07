import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { Text } from './components/Text';

export type { TextPropTypes } from './components/Text';

deprecationNotice(
  'Text',
  `importing from '@ui5/webcomponents-react/dist/Text' is deprecated. Please use "import { Text } from '@ui5/webcomponents-react';" instead.`
);

export { Text };
