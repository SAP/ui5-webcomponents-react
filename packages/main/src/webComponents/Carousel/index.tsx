import { CarouselArrowsPlacement } from '@ui5/webcomponents-react/lib/CarouselArrowsPlacement';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Carousel';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface CarouselPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the position of arrows. <br><br> Available options are: <ul> <li><code>Content</code></li> <li><code>Navigation</code></li> </ul> <br> When set to "Content", the arrows are placed on the sides of the current page. <br> When set to "Navigation", the arrows are placed on the sides of the page indicator.
   */
  arrowsPlacement?: CarouselArrowsPlacement;
  /**
   * Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.
   */
  cyclic?: boolean;
  /**
   * If set to true the navigation is hidden.
   */
  hideNavigation?: boolean;
  /**
   * Defines when the <code>load-more</code> event is thrown. If not applied the event will not be thrown.
   */
  infiniteScrollOffset?: number;
  /**
   * Sets the number of items per page on large size (more than 1024px). One item per page shown by default.
   */
  itemsPerPageL?: number;
  /**
   * Sets the number of items per page on medium size (from 640px to 1024px). One item per page shown by default.
   */
  itemsPerPageM?: number;
  /**
   * Sets the number of items per page on small size (up to 640px). One item per page shown by default.
   */
  itemsPerPageS?: number;
  /**
   * Defines the index of the initially selected item.
   */
  selectedIndex?: number;
  /**
   * Defines the content of the <code>ui5-carousel</code>.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired for the last items of the <code>ui5-carousel</code> if it is scrolled and the direction of scrolling is to the end. The number of items for which the event is thrown is controlled by the <code>infiniteScrollOffset</code> property.
   */
  onLoadMore?: (event: CustomEvent<{}>) => void;
  /**
   * Fired whenever the <code>selectedIndex</code> changes due to user interaction, when the user clicks on the navigation arrows or while resizing, based on the <code>items-per-page-l</code>, <code>items-per-page-m</code> and <code>items-per-page-s</code> properties.
   */
  onNavigate?: (event: CustomEvent<{ selectedIndex: number }>) => void;
}

/**
 * <code>import { Carousel } from '@ui5/webcomponents-react/lib/Carousel';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Carousel" target="_blank">UI5 Web Components Playground</a>
 */
const Carousel: FC<CarouselPropTypes> = withWebComponent<CarouselPropTypes>(
  'ui5-carousel',
  ['arrowsPlacement', 'infiniteScrollOffset', 'itemsPerPageL', 'itemsPerPageM', 'itemsPerPageS', 'selectedIndex'],
  ['cyclic', 'hideNavigation'],
  [],
  ['load-more', 'navigate']
);

Carousel.displayName = 'Carousel';

Carousel.defaultProps = {
  arrowsPlacement: CarouselArrowsPlacement.Content,
  cyclic: false,
  hideNavigation: false,
  infiniteScrollOffset: 1,
  itemsPerPageL: 1,
  itemsPerPageM: 1,
  itemsPerPageS: 1,
  selectedIndex: 0
};

export { Carousel };
