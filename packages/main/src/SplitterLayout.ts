import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { SplitterLayout } from './components/SplitterLayout';

export type { SplitterLayoutPropTypes } from './components/SplitterLayout';

deprecationNotice(
  'SplitterLayout',
  `importing from '@ui5/webcomponents-react/dist/SplitterLayout' is deprecated. Please use "import { SplitterLayout } from '@ui5/webcomponents-react';" instead.`
);

export { SplitterLayout };
