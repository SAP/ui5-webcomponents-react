import React from 'react';

import { number, select } from '@storybook/addon-knobs/';
import { storiesOf } from '@storybook/react/';
import { Carousel } from './index';
import { PlacementType } from '@fiori-for-react/core/enums/PlacementType';
import { boolean } from '@storybook/addon-knobs';
import { Label } from '../../webComponents/Label';
import { CarouselArrowsPlacement } from '@fiori-for-react/core/enums/CarouselArrowsPlacement';

function renderCarousel() {
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
}

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

storiesOf('F4R Components | Carousel', module)
  .add('Default', renderCarousel)
  .add('with 1 Child', renderCarouselWithOneChild);
