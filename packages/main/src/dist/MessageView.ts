import { deprecationNotice } from '@ui5/webcomponents-react-base';

export * from '../components/MessageView';

deprecationNotice(
  'MessageView',
  `importing from '@ui5/webcomponents-react/dist/MessageView' is deprecated. Please use "import { MessageView } from '@ui5/webcomponents-react';" instead.`
);
