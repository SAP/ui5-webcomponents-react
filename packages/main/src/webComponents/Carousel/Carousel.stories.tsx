import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { Carousel } from '@ui5/webcomponents-react/lib/Carousel';
import { CarouselArrowsPlacement } from '@ui5/webcomponents-react/lib/CarouselArrowsPlacement';
import React from 'react';

export default {
  title: 'UI5 Web Components / Carousel',
  component: Carousel,
  argTypes: {
    ...createSelectArgTypes({ arrowsPlacement: CarouselArrowsPlacement }),
    children: {
      type: null
    }
  },
  args: {
    arrowsPlacement: CarouselArrowsPlacement.Content,
    selectedIndex: 0
  }
};

export const generatedDefaultStory = (props) => (
  <Carousel
    arrowsPlacement={props.arrowsPlacement}
    cyclic={props.cyclic}
    hideNavigation={props.hideNavigation}
    itemsPerPageL={props.itemsPerPageL}
    itemsPerPageM={props.itemsPerPageM}
    itemsPerPageS={props.itemsPerPageS}
    onNavigate={props.onNavigate}
    selectedIndex={props.selectedIndex}
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
