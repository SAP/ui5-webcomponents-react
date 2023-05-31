'use client';

import '@ui5/webcomponents/dist/Carousel.js';
import type { CarouselNavigateEventDetail } from '@ui5/webcomponents/dist/Carousel.js';
import type { ReactNode } from 'react';
import { CarouselArrowsPlacement, CarouselPageIndicatorStyle } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface CarouselAttributes {
  /**
   * Defines the position of arrows.
   *
   * Available options are:
   *
   * *   `Content`
   * *   `Navigation`
   *
   *
   * When set to "Content", the arrows are placed on the sides of the current page.
   * When set to "Navigation", the arrows are placed on the sides of the page indicator.
   */
  arrowsPlacement?: CarouselArrowsPlacement | keyof typeof CarouselArrowsPlacement;
  /**
   * Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.
   */
  cyclic?: boolean;
  /**
   * Defines the visibility of the navigation arrows. If set to true the navigation arrows will be hidden.
   *
   * **Note:** The navigation arrows are never displayed on touch devices. In this case, the user can swipe to navigate through the items.
   */
  hideNavigationArrows?: boolean;
  /**
   * Defines the visibility of the page indicator. If set to true the page indicator will be hidden.
   */
  hidePageIndicator?: boolean;
  /**
   * Defines the number of items per page on large size (more than 1024px). One item per page shown by default.
   */
  itemsPerPageL?: number;
  /**
   * Defines the number of items per page on medium size (from 640px to 1024px). One item per page shown by default.
   */
  itemsPerPageM?: number;
  /**
   * Defines the number of items per page on small size (up to 640px). One item per page shown by default.
   */
  itemsPerPageS?: number;
  /**
   * Defines the style of the page indicator. Available options are:
   *
   * *   `Default` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)
   * *   `Numeric` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)
   */
  pageIndicatorStyle?: CarouselPageIndicatorStyle | keyof typeof CarouselPageIndicatorStyle;
}

export interface CarouselDomRef extends CarouselAttributes, Ui5DomRef {
  /**
   * Changes the currently displayed page.
   * @param {number} itemIndex - The index of the target page
   */
  navigateTo: (itemIndex: number) => void;
}

export interface CarouselPropTypes extends CarouselAttributes, CommonProps {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired whenever the page changes due to user interaction, when the user clicks on the navigation arrows or while resizing, based on the `items-per-page-l`, `items-per-page-m` and `items-per-page-s` properties.
   */
  onNavigate?: (event: Ui5CustomEvent<CarouselDomRef, CarouselNavigateEventDetail>) => void;
}

/**
 * The Carousel allows the user to browse through a set of items. The component is mostly used for showing a gallery of images, but can hold any other HTML element.
 * There are several ways to perform navigation:
 *
 * *   on desktop - the user can navigate using the navigation arrows or with keyboard shorcuts.
 * *   on mobile - the user can use swipe gestures.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Carousel" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Carousel = withWebComponent<CarouselPropTypes, CarouselDomRef>(
  'ui5-carousel',
  ['arrowsPlacement', 'itemsPerPageL', 'itemsPerPageM', 'itemsPerPageS', 'pageIndicatorStyle'],
  ['cyclic', 'hideNavigationArrows', 'hidePageIndicator'],
  [],
  ['navigate'],
  () => import('@ui5/webcomponents/dist/Carousel.js')
);

Carousel.displayName = 'Carousel';

Carousel.defaultProps = {
  arrowsPlacement: CarouselArrowsPlacement.Content,
  itemsPerPageL: 1,
  itemsPerPageM: 1,
  itemsPerPageS: 1,
  pageIndicatorStyle: CarouselPageIndicatorStyle.Default
};

export { Carousel };
