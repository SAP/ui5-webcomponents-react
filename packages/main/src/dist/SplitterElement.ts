import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { SplitterElementPropTypes } from '../components/SplitterElement';
import { SplitterElement } from '../components/SplitterElement';

deprecationNotice(
  'SplitterElement',
  `importing from '@ui5/webcomponents-react/dist/SplitterElement' is deprecated. Please use "import { SplitterElement } from '@ui5/webcomponents-react';" instead.`
);

export { SplitterElement };

export type { SplitterElementPropTypes };
