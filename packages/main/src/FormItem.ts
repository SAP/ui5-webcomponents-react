import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { FormItem } from './components/FormItem';

export type { FormItemPropTypes } from './components/FormItem';

deprecationNotice(
  'FormItem',
  `importing from '@ui5/webcomponents-react/dist/FormItem' is deprecated. Please use "import { FormItem } from '@ui5/webcomponents-react';" instead.`
);

export { FormItem };
