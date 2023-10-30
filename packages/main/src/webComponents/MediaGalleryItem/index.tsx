'use client';

import '@ui5/webcomponents-fiori/dist/MediaGalleryItem.js';
import type { ReactNode } from 'react';
import { MediaGalleryItemLayout } from '../../enums/index.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

interface MediaGalleryItemAttributes {
  /**
   * Defines whether the component is in disabled state.
   */
  disabled?: boolean;
  /**
   * Determines the layout of the item container.
   *
   * Available options are:
   *
   * *   `Square`
   * *   `Wide`
   */
  layout?: MediaGalleryItemLayout | keyof typeof MediaGalleryItemLayout;
  /**
   * Defines the selected state of the component.
   */
  selected?: boolean;
}

export interface MediaGalleryItemDomRef extends MediaGalleryItemAttributes, Ui5DomRef {}

export interface MediaGalleryItemPropTypes extends MediaGalleryItemAttributes, CommonProps {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode;
  /**
   * Defines the content of the thumbnail.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="thumbnail"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  thumbnail?: UI5WCSlotsNode;
}

/**
 * The `MediaGalleryItem` web component represents the items displayed in the `MediaGallery` web component.
 *
 * **Note:** `MediaGalleryItem` is not supported when used outside of `MediaGallery`.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-MediaGallery)
 */
const MediaGalleryItem = withWebComponent<MediaGalleryItemPropTypes, MediaGalleryItemDomRef>(
  'ui5-media-gallery-item',
  ['layout'],
  ['disabled', 'selected'],
  ['thumbnail'],
  [],
  () => import('@ui5/webcomponents-fiori/dist/MediaGalleryItem.js')
);

MediaGalleryItem.displayName = 'MediaGalleryItem';

MediaGalleryItem.defaultProps = {
  layout: MediaGalleryItemLayout.Square
};

export { MediaGalleryItem };
