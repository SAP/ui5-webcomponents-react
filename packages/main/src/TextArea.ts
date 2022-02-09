import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TextAreaDomRef, TextAreaPropTypes } from './webComponents/TextArea';
import { TextArea } from './webComponents/TextArea';

deprecationNotice(
  'TextArea',
  `importing from '@ui5/webcomponents-react/dist/TextArea' is deprecated. Please use "import { TextArea } from '@ui5/webcomponents-react';" instead.`
);

export { TextArea };

export type { TextAreaPropTypes, TextAreaDomRef };
