import { action } from '@storybook/addon-actions';
import { boolean, number, select } from '@storybook/addon-knobs';
import { Carousel } from '@ui5/webcomponents-react/lib/Carousel';
import { CarouselArrowsPlacement } from '@ui5/webcomponents-react/lib/CarouselArrowsPlacement';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import React from 'react';

export const renderCarousel = () => {
  return (
    <Carousel
      width="90%"
      activePage={number('active', 0)}
      onPageChanged={action('onPageChanged')}
      arrowsPlacement={select(
        'arrowsPlacement',
        Object.values(CarouselArrowsPlacement),
        CarouselArrowsPlacement.PageIndicator
      )}
      showPageIndicator={boolean('showPageIndicator', true)}
      loop={boolean('loop', false)}
      pageIndicatorPlacement={select(
        'pageIndicatorPlacement',
        [PlacementType.Top, PlacementType.Bottom],
        PlacementType.Bottom
      )}
    >
      <Label>Carousel 1. This is the content of the Carousel.</Label>
      <div>
        <p>This is a larger content</p>
        <br />
        <p>This is a larger content</p>
      </div>
      <Label>Carousel 2</Label>
      <Label>Carousel 3</Label>
      <Label>Carousel 4</Label>
      <Label>Carousel 5</Label>
    </Carousel>
  );
};
renderCarousel.story = {
  name: 'Default'
};

const renderCarouselWithOneChild = () => {
  return (
    <Carousel
      activePage={number('active', 0)}
      arrowsPlacement={select(
        'arrowsPlacement',
        Object.values(CarouselArrowsPlacement),
        CarouselArrowsPlacement.PageIndicator
      )}
      showPageIndicator={boolean('showPageIndicator', true)}
      loop={boolean('loop', false)}
      pageIndicatorPlacement={select(
        'pageIndicatorPlacement',
        [PlacementType.Top, PlacementType.Bottom],
        PlacementType.Bottom
      )}
    >
      <Label>Carousel 1. This is the content of the Carousel.</Label>
    </Carousel>
  );
};
renderCarouselWithOneChild.story = {
  name: 'with One Child'
};

export default {
  title: 'Components / Carousel',
  component: Carousel
};
