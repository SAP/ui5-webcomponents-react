import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { IconDomRef, IconPropTypes } from './webComponents/Icon';
import { Icon } from './webComponents/Icon';

deprecationNotice(
  'Icon',
  `importing from '@ui5/webcomponents-react/dist/Icon' is deprecated. Please use "import { Icon } from '@ui5/webcomponents-react';" instead.`
);

export { Icon };

export type { IconPropTypes, IconDomRef };
