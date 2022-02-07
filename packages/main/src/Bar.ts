import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { BarDomRef, BarPropTypes } from './webComponents/Bar';
import { Bar } from './webComponents/Bar';

deprecationNotice(
  'Bar',
  `importing from '@ui5/webcomponents-react/dist/Bar' is deprecated. Please use "import { Bar } from '@ui5/webcomponents-react';" instead.`
);

export { Bar };

export type { BarPropTypes, BarDomRef };
