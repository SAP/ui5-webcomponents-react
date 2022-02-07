import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { UploadCollectionDomRef, UploadCollectionPropTypes } from './webComponents/UploadCollection';
import { UploadCollection } from './webComponents/UploadCollection';

deprecationNotice(
  'UploadCollection',
  `importing from '@ui5/webcomponents-react/dist/UploadCollection' is deprecated. Please use "import { UploadCollection } from '@ui5/webcomponents-react';" instead.`
);

export { UploadCollection };

export type { UploadCollectionPropTypes, UploadCollectionDomRef };
