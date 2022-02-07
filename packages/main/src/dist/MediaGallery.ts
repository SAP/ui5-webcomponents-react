import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { MediaGalleryDomRef, MediaGalleryPropTypes } from '../webComponents/MediaGallery';
import { MediaGallery } from '../webComponents/MediaGallery';

deprecationNotice(
  'MediaGallery',
  `importing from '@ui5/webcomponents-react/dist/MediaGallery' is deprecated. Please use "import { MediaGallery } from '@ui5/webcomponents-react';" instead.`
);

export { MediaGallery };

export type { MediaGalleryPropTypes, MediaGalleryDomRef };
