import { deprecationNotice } from '@ui5/webcomponents-react-base';

export * from '../components/MessageView/MessageItem';

deprecationNotice(
  'MessageItem',
  `importing from '@ui5/webcomponents-react/dist/MessageItem' is deprecated. Please use "import { MessageItem } from '@ui5/webcomponents-react';" instead.`
);
