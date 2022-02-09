import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { RangeSliderDomRef, RangeSliderPropTypes } from './webComponents/RangeSlider';
import { RangeSlider } from './webComponents/RangeSlider';

deprecationNotice(
  'RangeSlider',
  `importing from '@ui5/webcomponents-react/dist/RangeSlider' is deprecated. Please use "import { RangeSlider } from '@ui5/webcomponents-react';" instead.`
);

export { RangeSlider };

export type { RangeSliderPropTypes, RangeSliderDomRef };
