import React from 'react';
import { Carousel } from '@ui5/webcomponents-react/lib/Carousel';

import { select, boolean, number } from '@storybook/addon-knobs';
import { CarouselArrowsPlacement } from '@ui5/webcomponents-react/lib/CarouselArrowsPlacement';

export default {
  title: 'UI5 Web Components / Carousel',
  component: Carousel
};

export const generatedDefaultStory = () => (
  <Carousel
    arrowsPlacement={select('arrowsPlacement', CarouselArrowsPlacement, CarouselArrowsPlacement['Content'])}
    cycling={boolean('cycling', true)}
    hideNavigation={boolean('hideNavigation', true)}
    itemsPerPage={number('itemsPerPage', 1)}
    selectedIndex={number('selectedIndex', 0)}
  >
    Some Content
  </Carousel>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
