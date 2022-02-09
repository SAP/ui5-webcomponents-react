import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { BusyIndicatorDomRef, BusyIndicatorPropTypes } from './webComponents/BusyIndicator';
import { BusyIndicator } from './webComponents/BusyIndicator';

deprecationNotice(
  'BusyIndicator',
  `importing from '@ui5/webcomponents-react/dist/BusyIndicator' is deprecated. Please use "import { BusyIndicator } from '@ui5/webcomponents-react';" instead.`
);

export { BusyIndicator };

export type { BusyIndicatorPropTypes, BusyIndicatorDomRef };
