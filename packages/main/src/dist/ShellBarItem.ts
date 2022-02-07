import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ShellBarItemDomRef, ShellBarItemPropTypes } from '../webComponents/ShellBarItem';
import { ShellBarItem } from '../webComponents/ShellBarItem';

deprecationNotice(
  'ShellBarItem',
  `importing from '@ui5/webcomponents-react/dist/ShellBarItem' is deprecated. Please use "import { ShellBarItem } from '@ui5/webcomponents-react';" instead.`
);

export { ShellBarItem };

export type { ShellBarItemPropTypes, ShellBarItemDomRef };
