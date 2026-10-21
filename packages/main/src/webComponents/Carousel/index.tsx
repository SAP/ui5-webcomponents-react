'use client';

import '@ui5/webcomponents/dist/Carousel.js';
import type { CarouselNavigateEventDetail } from '@ui5/webcomponents/dist/Carousel.js';
import type BackgroundDesign from '@ui5/webcomponents/dist/types/BackgroundDesign.js';
import type BorderDesign from '@ui5/webcomponents/dist/types/BorderDesign.js';
import type CarouselArrowsPlacement from '@ui5/webcomponents/dist/types/CarouselArrowsPlacement.js';
import type CarouselPageIndicatorType from '@ui5/webcomponents/dist/types/CarouselPageIndicatorType.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface CarouselAttributes {
  /**
   * Defines the accessible name of the component.
   *
   * **Note:** Available since [v1.24.0](https://github.com/UI5/webcomponents/releases/tag/v1.24.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines the IDs of the elements that label the input.
   *
   * **Note:** Available since [v1.24.0](https://github.com/UI5/webcomponents/releases/tag/v1.24.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

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
   * **Note:** Available since [v1.14.0](https://github.com/UI5/webcomponents/releases/tag/v1.14.0) of **@ui5/webcomponents**.
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
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   * @default false
   */
  hideNavigationArrows?: boolean;

  /**
   * Defines the visibility of the page indicator.
   * If set to true the page indicator will be hidden.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   * @default false
   */
  hidePageIndicator?: boolean;

  /**
   * Defines the number of items per page depending on the carousel width.
   *
   * - 'S' for screens smaller than 600 pixels.
   * - 'M' for screens greater than or equal to 600 pixels and smaller than 1024 pixels.
   * - 'L' for screens greater than or equal to 1024 pixels and smaller than 1440 pixels.
   * - 'XL' for screens greater than or equal to 1440 pixels.
   *
   * One item per page is shown by default.
   * @default "S1 M1 L1 XL1"
   */
  itemsPerPage?: string;

  /**
   * Defines the page indicator background design.
   *
   * **Note:** Available since [v1.14.0](https://github.com/UI5/webcomponents/releases/tag/v1.14.0) of **@ui5/webcomponents**.
   * @default "Solid"
   */
  pageIndicatorBackgroundDesign?: BackgroundDesign | keyof typeof BackgroundDesign;

  /**
   * Defines the page indicator border design.
   *
   * **Note:** Available since [v1.14.0](https://github.com/UI5/webcomponents/releases/tag/v1.14.0) of **@ui5/webcomponents**.
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
   * **Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   * @default "Default"
   */
  pageIndicatorType?: CarouselPageIndicatorType | keyof typeof CarouselPageIndicatorType;
}

interface CarouselDomRef extends Required<CarouselAttributes>, Ui5DomRef {
  /**
   * Changes the currently displayed page.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   * @param {number} itemIndex - The index of the target item
   * @returns {void}
   */
  navigateTo: (itemIndex: number) => void;

  /**
   * The indices of the currently visible items of the component.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   */
  readonly visibleItemsIndices: Array<number>;
}

interface CarouselPropTypes
  extends CarouselAttributes, Omit<CommonProps, keyof CarouselAttributes | 'children' | 'onNavigate'> {
  /**
   * Defines the content of the component.
   *
   * **Note:** Items with the `hidden` attribute will be automatically excluded from carousel navigation and page calculations.
   * They will not be displayed or accessible via keyboard navigation. See [sample](./#carousel-with-hidden-items).
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired whenever the page changes due to user interaction,
   * when the user clicks on the navigation arrows or while resizing,
   * based on the `items-per-page` property.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onNavigate?: (event: Ui5CustomEvent<CarouselDomRef, CarouselNavigateEventDetail>) => void;
}

/**
 * The Carousel allows the user to browse through a set of items.
 * The component is mostly used for showing a gallery of images, but can hold any other HTML element.
 *
 * There are several ways to perform navigation:
 *
 * - on desktop - the user can navigate using the navigation arrows or with keyboard shortcuts.
 * - on touch devices - the user can navigate using the navigation arrows (always visible) or can use swipe gestures.
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
 * ### Hidden Items
 *
 * Carousel items can be conditionally hidden by adding the `hidden` attribute to any child element.
 * Hidden items are automatically excluded from carousel navigation and will not be displayed or counted in pagination.
 * This allows for dynamic showing or hiding of carousel items without affecting the overall carousel behavior.
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
 * __Note:__ This is a UI5 Web Component! [Carousel UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Carousel) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents__.
 */
const Carousel = withWebComponent<CarouselPropTypes, CarouselDomRef>(
  'ui5-carousel',
  [
    'accessibleName',
    'accessibleNameRef',
    'arrowsPlacement',
    'backgroundDesign',
    'itemsPerPage',
    'pageIndicatorBackgroundDesign',
    'pageIndicatorBorderDesign',
    'pageIndicatorType',
  ],
  ['cyclic', 'hideNavigationArrows', 'hidePageIndicator'],
  [],
  ['navigate'],
);

Carousel.displayName = 'Carousel';

export { Carousel };
export type { CarouselDomRef, CarouselPropTypes };
