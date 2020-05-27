import { action } from '@storybook/addon-actions';
import { boolean, number, select } from '@storybook/addon-knobs';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { Carousel } from '@ui5/webcomponents-react/lib/Carousel';
import { CarouselArrowsPlacement } from '@ui5/webcomponents-react/lib/CarouselArrowsPlacement';
import React from 'react';

export default {
  title: 'UI5 Web Components / Carousel',
  component: Carousel
};

export const generatedDefaultStory = () => (
  <Carousel
    arrowsPlacement={select('arrowsPlacement', CarouselArrowsPlacement, CarouselArrowsPlacement['Content'])}
    cyclic={boolean('cyclic', false)}
    hideNavigation={boolean('hideNavigation', false)}
    itemsPerPageL={number('itemsPerPageL', 1)}
    itemsPerPageM={number('itemsPerPageM', 1)}
    itemsPerPageS={number('itemsPerPageS', 1)}
    onNavigate={action('onNavigate')}
    selectedIndex={number('selectedIndex', 0)}
  >
    <div style={{ height: '300px', width: '100%', backgroundColor: ThemingParameters.sapInformationBackground }}>
      Carousel Content 1
    </div>
    <div style={{ height: '300px', width: '100%', backgroundColor: ThemingParameters.sapInformationBackground }}>
      Carousel Content 2
    </div>
    <div style={{ height: '300px', width: '100%', backgroundColor: ThemingParameters.sapInformationBackground }}>
      Carousel Content 3
    </div>
    <div style={{ height: '300px', width: '100%', backgroundColor: ThemingParameters.sapInformationBackground }}>
      Carousel Content 4
    </div>
  </Carousel>
);

generatedDefaultStory.storyName = 'Generated default story';
