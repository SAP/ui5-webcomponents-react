'use client';

import '@ui5/webcomponents-fiori/dist/MediaGallery.js';
import type { MediaGallerySelectionChangeEventDetail } from '@ui5/webcomponents-fiori/dist/MediaGallery.js';
import type { ReactNode } from 'react';
import {
  MediaGalleryLayout,
  MediaGalleryMenuHorizontalAlign,
  MediaGalleryMenuVerticalAlign
} from '../../enums/index.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import type { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface MediaGalleryAttributes {
  /**
   * If enabled, a `onDisplayAreaClick` event is fired when the user clicks or taps on the display area.
   * The display area is the central area that contains the enlarged content of the currently selected item.
   */
  interactiveDisplayArea?: boolean;
  /**
   * Determines the layout of the component.
   *
   * Available options are:
   *
   * *   `Auto`
   * *   `Vertical`
   * *   `Horizontal`
   */
  layout?: MediaGalleryLayout | keyof typeof MediaGalleryLayout;
  /**
   * Determines the horizontal alignment of the thumbnails menu vs. the central display area.
   *
   * Available options are:
   *
   * *   `Left`
   * *   `Right`
   */
  menuHorizontalAlign?: MediaGalleryMenuHorizontalAlign | keyof typeof MediaGalleryMenuHorizontalAlign;
  /**
   * Determines the vertical alignment of the thumbnails menu vs. the central display area.
   *
   * Available options are:
   *
   * *   `Top`
   * *   `Bottom`
   */
  menuVerticalAlign?: MediaGalleryMenuVerticalAlign | keyof typeof MediaGalleryMenuVerticalAlign;
  /**
   * If set to `true`, all thumbnails are rendered in a scrollable container. If `false`, only up to five thumbnails are rendered, followed by an overflow button that shows the count of the remaining thumbnails.
   */
  showAllThumbnails?: boolean;
}

export interface MediaGalleryDomRef extends MediaGalleryAttributes, Ui5DomRef {}

export interface MediaGalleryPropTypes extends MediaGalleryAttributes, CommonProps {
  /**
   * Defines the component items.
   *
   * **Note:** Only one selected item is allowed.
   *
   * **Note:** Use the `MediaGalleryItem` component to define the desired items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the display area is clicked.
   * The display area is the central area that contains the enlarged content of the currently selected item.
   */
  onDisplayAreaClick?: (event: Ui5CustomEvent<MediaGalleryDomRef>) => void;
  /**
   * Fired when the thumbnails overflow button is clicked.
   */
  onOverflowClick?: (event: Ui5CustomEvent<MediaGalleryDomRef>) => void;
  /**
   * Fired when selection is changed by user interaction.
   */
  onSelectionChange?: (event: Ui5CustomEvent<MediaGalleryDomRef, MediaGallerySelectionChangeEventDetail>) => void;
}

/**
 * The `MediaGallery` component allows the user to browse through multimedia items. Currently, the supported items are images and videos. The items should be defined using the `MediaGalleryItem` component. The items are initially displayed as thumbnails. When the user selects a thumbnail, the corresponding item is displayed in larger size.
 * The component is responsive by default and adjusts the position of the menu with respect to viewport size, but the application is able to further customize the layout via the provided API.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MediaGallery" target="_blank">UI5 Web Components Playground</ui5-link>
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

MediaGallery.defaultProps = {
  layout: MediaGalleryLayout.Auto,
  menuHorizontalAlign: MediaGalleryMenuHorizontalAlign.Left,
  menuVerticalAlign: MediaGalleryMenuVerticalAlign.Bottom
};

export { MediaGallery };
