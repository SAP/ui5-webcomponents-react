'use client';

import '@ui5/webcomponents/dist/Carousel.js';
import type { CarouselNavigateEventDetail } from '@ui5/webcomponents/dist/Carousel.js';
import type BackgroundDesign from '@ui5/webcomponents/dist/types/BackgroundDesign.js';
import type BorderDesign from '@ui5/webcomponents/dist/types/BorderDesign.js';
import type CarouselArrowsPlacement from '@ui5/webcomponents/dist/types/CarouselArrowsPlacement.js';
import type CarouselPageIndicatorStyle from '@ui5/webcomponents/dist/types/CarouselPageIndicatorStyle.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface CarouselAttributes {
  /**
   * Defines the accessible name of the component.
   *
   * **Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.
   */
  accessibleName?: string;

  /**
   * Defines the IDs of the elements that label the input.
   *
   * **Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.
   */
  accessibleNameRef?: string;

  /**
   * Defines the position of arrows.
   *
   * Available options are:
   *
   * - `Content` - the arrows are placed on the sides of the current page.
   * - `Navigation` - the arrows are placed on the sides of the page indicator.
   * @default "Content"
   */
  arrowsPlacement?: CarouselArrowsPlacement | keyof typeof CarouselArrowsPlacement;

  /**
   * Defines the carousel's background design.
   *
   * **Note:** Available since [v1.14](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.
   * @default "Translucent"
   */
  backgroundDesign?: BackgroundDesign | keyof typeof BackgroundDesign;

  /**
   * Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.
   * @default false
   */
  cyclic?: boolean;

  /**
   * Defines the visibility of the navigation arrows.
   * If set to true the navigation arrows will be hidden.
   *
   * **Note:** The navigation arrows are never displayed on touch devices.
   * In this case, the user can swipe to navigate through the items.
   * @default false
   */
  hideNavigationArrows?: boolean;

  /**
   * Defines the visibility of the page indicator.
   * If set to true the page indicator will be hidden.
   * @default false
   */
  hidePageIndicator?: boolean;

  /**
   * Defines the number of items per page on large size (more than 1024px). One item per page shown by default.
   * @default 1
   */
  itemsPerPageL?: number;

  /**
   * Defines the number of items per page on medium size (from 640px to 1024px). One item per page shown by default.
   * @default 1
   */
  itemsPerPageM?: number;

  /**
   * Defines the number of items per page on small size (up to 640px). One item per page shown by default.
   * @default 1
   */
  itemsPerPageS?: number;

  /**
   * Defines the page indicator background design.
   *
   * **Note:** Available since [v1.14](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.
   * @default "Solid"
   */
  pageIndicatorBackgroundDesign?: BackgroundDesign | keyof typeof BackgroundDesign;

  /**
   * Defines the page indicator border design.
   *
   * **Note:** Available since [v1.14](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14) of **@ui5/webcomponents**.
   * @default "Solid"
   */
  pageIndicatorBorderDesign?: BorderDesign | keyof typeof BorderDesign;

  /**
   * Defines the style of the page indicator.
   * Available options are:
   *
   * - `Default` - The page indicator will be visualized as dots if there are fewer than 9 pages. If there are more pages, the page indicator will switch to displaying the current page and the total number of pages. (e.g. X of Y)
   * - `Numeric` - The page indicator will display the current page and the total number of pages. (e.g. X of Y)
   *
   * **Note:** Available since [v1.10](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10) of **@ui5/webcomponents**.
   * @default "Default"
   */
  pageIndicatorStyle?: CarouselPageIndicatorStyle | keyof typeof CarouselPageIndicatorStyle;
}

interface CarouselDomRef extends Required<CarouselAttributes>, Ui5DomRef {
  /**
   * Changes the currently displayed page.
   * @param {number} itemIndex - The index of the target page
   * @returns {void}
   */
  navigateTo: (itemIndex: number) => void;

  /**
   * The indices of the currently visible items of the component.
   */
  readonly visibleItemsIndices: Array<number>;
}

interface CarouselPropTypes
  extends CarouselAttributes,
    Omit<CommonProps, keyof CarouselAttributes | 'children' | 'onNavigate'> {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired whenever the page changes due to user interaction,
   * when the user clicks on the navigation arrows or while resizing,
   * based on the `items-per-page-l`, `items-per-page-m` and `items-per-page-s` properties.
   */
  onNavigate?: (event: Ui5CustomEvent<CarouselDomRef, CarouselNavigateEventDetail>) => void;
}

/**
 * The Carousel allows the user to browse through a set of items.
 * The component is mostly used for showing a gallery of images, but can hold any other HTML element.
 *
 * There are several ways to perform navigation:
 *
 * - on desktop - the user can navigate using the navigation arrows or with keyboard shorcuts.
 * - on mobile - the user can use swipe gestures.
 *
 * ### Usage
 *
 * #### When to use:
 *
 * - The items you want to display are very different from each other.
 * - You want to display the items one after the other.
 *
 * #### When not to use:
 *
 * - The items you want to display need to be visible at the same time.
 * - The items you want to display are uniform and very similar.
 *
 * ### Keyboard Handling
 *
 * #### Basic Navigation
 * When the `Carousel` is focused the user can navigate between the items
 * with the following keyboard shortcuts:
 *
 * - [Up] or [Down] - Navigates to previous and next item
 * - [Left] or [Right] - Navigates to previous and next item
 *
 * ### Fast Navigation
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 *
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const Carousel = withWebComponent<CarouselPropTypes, CarouselDomRef>(
  'ui5-carousel',
  [
    'accessibleName',
    'accessibleNameRef',
    'arrowsPlacement',
    'backgroundDesign',
    'itemsPerPageL',
    'itemsPerPageM',
    'itemsPerPageS',
    'pageIndicatorBackgroundDesign',
    'pageIndicatorBorderDesign',
    'pageIndicatorStyle'
  ],
  ['cyclic', 'hideNavigationArrows', 'hidePageIndicator'],
  [],
  ['navigate'],
  () => import('@ui5/webcomponents/dist/Carousel.js')
);

Carousel.displayName = 'Carousel';

export { Carousel };
export type { CarouselDomRef, CarouselPropTypes };
