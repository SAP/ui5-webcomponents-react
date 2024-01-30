'use client';

import '@ui5/webcomponents-fiori/dist/MediaGallery.js';
import type { MediaGallerySelectionChangeEventDetail } from '@ui5/webcomponents-fiori/dist/MediaGallery.js';
import type MediaGalleryLayout from '@ui5/webcomponents-fiori/dist/types/MediaGalleryLayout.js';
import type MediaGalleryMenuHorizontalAlign from '@ui5/webcomponents-fiori/dist/types/MediaGalleryMenuHorizontalAlign.js';
import type MediaGalleryMenuVerticalAlign from '@ui5/webcomponents-fiori/dist/types/MediaGalleryMenuVerticalAlign.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface MediaGalleryAttributes {
  /**
   * If enabled, a `display-area-click` event is fired when the user clicks or taps on the display area.
   * The display area is the central area that contains the enlarged content of the currently selected item.
   * @default false
   */
  interactiveDisplayArea?: boolean;

  /**
   * Determines the layout of the component.
   * @default "Auto"
   */
  layout?: MediaGalleryLayout | keyof typeof MediaGalleryLayout;

  /**
   * Determines the horizontal alignment of the thumbnails menu vs. the central display area.
   * @default "Left"
   */
  menuHorizontalAlign?: MediaGalleryMenuHorizontalAlign | keyof typeof MediaGalleryMenuHorizontalAlign;

  /**
   * Determines the vertical alignment of the thumbnails menu vs. the central display area.
   * @default "Bottom"
   */
  menuVerticalAlign?: MediaGalleryMenuVerticalAlign | keyof typeof MediaGalleryMenuVerticalAlign;

  /**
   * If set to `true`, all thumbnails are rendered in a scrollable container. If `false`, only up to five thumbnails are rendered, followed by an overflow button that shows the count of the remaining thumbnails.
   * @default false
   */
  showAllThumbnails?: boolean;
}

interface MediaGalleryDomRef extends MediaGalleryAttributes, Ui5DomRef {}

interface MediaGalleryPropTypes
  extends MediaGalleryAttributes,
    Omit<CommonProps, keyof MediaGalleryAttributes | 'onDisplayAreaClick' | 'onOverflowClick' | 'onSelectionChange'> {
  /**
   * Defines the component items.
   *
   * **Note:** Only one selected item is allowed.
   *
   * **Note:** Use the `MediaGalleryItem` component to define the desired items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when selection is changed by user interaction.
   */
  onSelectionChange?: (event: Ui5CustomEvent<MediaGalleryDomRef, MediaGallerySelectionChangeEventDetail>) => void;

  /**
   * Fired when the thumbnails overflow button is clicked.
   */
  onOverflowClick?: (event: Ui5CustomEvent<MediaGalleryDomRef>) => void;

  /**
   * Fired when the display area is clicked.
   * The display area is the central area that contains the enlarged content of the currently selected item.
   */
  onDisplayAreaClick?: (event: Ui5CustomEvent<MediaGalleryDomRef>) => void;
}

/**
 * The `MediaGallery` component allows the user to browse through multimedia items. Currently, the supported items are images and videos. The items should be defined using the `MediaGalleryItem` component. The items are initially displayed as thumbnails. When the user selects a thumbnail, the corresponding item is displayed in larger size.
 * The component is responsive by default and adjusts the position of the menu with respect to viewport size, but the application is able to further customize the layout via the provided API.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const MediaGallery = withWebComponent<MediaGalleryPropTypes, MediaGalleryDomRef>(
  'ui5-media-gallery',
  ['layout', 'menuHorizontalAlign', 'menuVerticalAlign'],
  ['interactiveDisplayArea', 'showAllThumbnails'],
  [],
  ['display-area-click', 'overflow-click', 'selection-change'],
  () => import('@ui5/webcomponents-fiori/dist/MediaGallery.js')
);

MediaGallery.displayName = 'MediaGallery';

export { MediaGallery };
export type { MediaGalleryDomRef, MediaGalleryPropTypes };
