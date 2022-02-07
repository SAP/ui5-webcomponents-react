import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { MediaGalleryItemDomRef, MediaGalleryItemPropTypes } from '../webComponents/MediaGalleryItem';
import { MediaGalleryItem } from '../webComponents/MediaGalleryItem';

deprecationNotice(
  'MediaGalleryItem',
  `importing from '@ui5/webcomponents-react/dist/MediaGalleryItem' is deprecated. Please use "import { MediaGalleryItem } from '@ui5/webcomponents-react';" instead.`
);

export { MediaGalleryItem };

export type { MediaGalleryItemPropTypes, MediaGalleryItemDomRef };
