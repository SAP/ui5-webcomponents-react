import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { PopoverDomRef, PopoverPropTypes } from '../webComponents/Popover';
import { Popover } from '../webComponents/Popover';

deprecationNotice(
  'Popover',
  `importing from '@ui5/webcomponents-react/dist/Popover' is deprecated. Please use "import { Popover } from '@ui5/webcomponents-react';" instead.`
);

export { Popover };

export type { PopoverPropTypes, PopoverDomRef };
