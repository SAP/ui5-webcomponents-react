import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { RatingIndicatorDomRef, RatingIndicatorPropTypes } from './webComponents/RatingIndicator';
import { RatingIndicator } from './webComponents/RatingIndicator';

deprecationNotice(
  'RatingIndicator',
  `importing from '@ui5/webcomponents-react/dist/RatingIndicator' is deprecated. Please use "import { RatingIndicator } from '@ui5/webcomponents-react';" instead.`
);

export { RatingIndicator };

export type { RatingIndicatorPropTypes, RatingIndicatorDomRef };
