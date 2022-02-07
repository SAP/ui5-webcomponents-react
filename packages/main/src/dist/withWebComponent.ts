import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { withWebComponent } from '../internal/withWebComponent';

deprecationNotice(
  'withWebComponent',
  `importing from '@ui5/webcomponents-react/dist/withWebComponent' is deprecated. Please use "import { withWebComponent } from '@ui5/webcomponents-react';" instead.`
);

export { withWebComponent };
