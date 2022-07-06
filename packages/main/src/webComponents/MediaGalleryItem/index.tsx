import '@ui5/webcomponents-fiori/dist/MediaGalleryItem.js';
import { ReactNode } from 'react';
import { MediaGalleryItemLayout } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

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
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  thumbnail?: ReactNode;
}

/**
 * The `MediaGalleryItem` web component represents the items displayed in the `MediaGallery` web component.
 *
 * **Note:** `MediaGalleryItem` is not supported when used outside of `MediaGallery`.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MediaGallery" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const MediaGalleryItem = withWebComponent<MediaGalleryItemPropTypes, MediaGalleryItemDomRef>(
  'ui5-media-gallery-item',
  ['layout'],
  ['disabled', 'selected'],
  ['thumbnail'],
  []
);

MediaGalleryItem.displayName = 'MediaGalleryItem';

MediaGalleryItem.defaultProps = {
  layout: MediaGalleryItemLayout.Square
};

export { MediaGalleryItem };
