import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { FileUploaderDomRef, FileUploaderPropTypes } from './webComponents/FileUploader';
import { FileUploader } from './webComponents/FileUploader';

deprecationNotice(
  'FileUploader',
  `importing from '@ui5/webcomponents-react/dist/FileUploader' is deprecated. Please use "import { FileUploader } from '@ui5/webcomponents-react';" instead.`
);

export { FileUploader };

export type { FileUploaderPropTypes, FileUploaderDomRef };
