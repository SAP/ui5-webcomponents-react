import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ResponsivePopoverDomRef, ResponsivePopoverPropTypes } from './webComponents/ResponsivePopover';
import { ResponsivePopover } from './webComponents/ResponsivePopover';

deprecationNotice(
  'ResponsivePopover',
  `importing from '@ui5/webcomponents-react/dist/ResponsivePopover' is deprecated. Please use "import { ResponsivePopover } from '@ui5/webcomponents-react';" instead.`
);

export { ResponsivePopover };

export type { ResponsivePopoverPropTypes, ResponsivePopoverDomRef };
