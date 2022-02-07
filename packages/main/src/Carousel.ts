import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { CarouselDomRef, CarouselPropTypes } from './webComponents/Carousel';
import { Carousel } from './webComponents/Carousel';

deprecationNotice(
  'Carousel',
  `importing from '@ui5/webcomponents-react/dist/Carousel' is deprecated. Please use "import { Carousel } from '@ui5/webcomponents-react';" instead.`
);

export { Carousel };

export type { CarouselPropTypes, CarouselDomRef };
