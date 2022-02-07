import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { UploadCollectionItemDomRef, UploadCollectionItemPropTypes } from '../webComponents/UploadCollectionItem';
import { UploadCollectionItem } from '../webComponents/UploadCollectionItem';

deprecationNotice(
  'UploadCollectionItem',
  `importing from '@ui5/webcomponents-react/dist/UploadCollectionItem' is deprecated. Please use "import { UploadCollectionItem } from '@ui5/webcomponents-react';" instead.`
);

export { UploadCollectionItem };

export type { UploadCollectionItemPropTypes, UploadCollectionItemDomRef };
