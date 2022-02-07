import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ProgressIndicatorDomRef, ProgressIndicatorPropTypes } from '../webComponents/ProgressIndicator';
import { ProgressIndicator } from '../webComponents/ProgressIndicator';

deprecationNotice(
  'ProgressIndicator',
  `importing from '@ui5/webcomponents-react/dist/ProgressIndicator' is deprecated. Please use "import { ProgressIndicator } from '@ui5/webcomponents-react';" instead.`
);

export { ProgressIndicator };

export type { ProgressIndicatorPropTypes, ProgressIndicatorDomRef };
