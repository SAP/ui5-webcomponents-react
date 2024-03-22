'use client';

import '@ui5/webcomponents-fiori/dist/MediaGalleryItem.js';
import type MediaGalleryItemLayout from '@ui5/webcomponents-fiori/dist/types/MediaGalleryItemLayout.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface MediaGalleryItemAttributes {
  /**
   * Defines whether the component is in disabled state.
   * @default false
   */
  disabled?: boolean;

  /**
   * Determines the layout of the item container.
   * @default "Square"
   */
  layout?: MediaGalleryItemLayout | keyof typeof MediaGalleryItemLayout;

  /**
   * Defines the selected state of the component.
   * @default false
   */
  selected?: boolean;
}

interface MediaGalleryItemDomRef extends Required<MediaGalleryItemAttributes>, Ui5DomRef {}

interface MediaGalleryItemPropTypes
  extends MediaGalleryItemAttributes,
    Omit<CommonProps, keyof MediaGalleryItemAttributes | 'children' | 'thumbnail'> {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];

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
 * The `MediaGalleryItem` web component represents the items displayed in the
 * `MediaGallery` web component.
 *
 * **Note:** `MediaGalleryItem` is not supported when used outside of `MediaGallery`.
 *
 * ### Keyboard Handling
 * The `MediaGallery` provides advanced keyboard handling.
 * When focused, the user can use the following keyboard
 * shortcuts in order to perform a navigation:
 *
 * - [SPACE/ENTER/RETURN] - Trigger `ui5-click` event
 *
 * )
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 *
 * @since [1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of __@ui5/webcomponents-fiori__.
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

export { MediaGalleryItem };
export type { MediaGalleryItemDomRef, MediaGalleryItemPropTypes };
