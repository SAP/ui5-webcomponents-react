import { CarouselArrowsPlacement } from '@ui5/webcomponents-react/lib/CarouselArrowsPlacement';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Carousel from '@ui5/webcomponents/dist/Carousel';
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
  cycling?: boolean;
  /**
   * If set to true the navigation is hidden.
   */
  hideNavigation?: boolean;
  /**
   * Sets the amount of items per page. If this property is set, on mobile devices it will always fallback to 1.
   */
  itemsPerPage?: number;
  /**
   * Defines the index of the initially selected page.
   */
  selectedIndex?: number;
  /**
   * Defines the content of the <code>ui5-carousel</code>.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { Carousel } from '@ui5/webcomponents-react/lib/Carousel';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Carousel" target="_blank">UI5 Web Components Playground</a>
 */
const Carousel: FC<CarouselPropTypes> = withWebComponent<CarouselPropTypes>(UI5Carousel);

Carousel.displayName = 'Carousel';

Carousel.defaultProps = {
  arrowsPlacement: CarouselArrowsPlacement.Content,
  cycling: false,
  hideNavigation: false,
  itemsPerPage: 1,
  selectedIndex: 0
};

export { Carousel };
