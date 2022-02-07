import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { SliderDomRef, SliderPropTypes } from './webComponents/Slider';
import { Slider } from './webComponents/Slider';

deprecationNotice(
  'Slider',
  `importing from '@ui5/webcomponents-react/dist/Slider' is deprecated. Please use "import { Slider } from '@ui5/webcomponents-react';" instead.`
);

export { Slider };

export type { SliderPropTypes, SliderDomRef };
