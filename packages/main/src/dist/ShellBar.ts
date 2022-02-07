import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ShellBarDomRef, ShellBarPropTypes } from '../webComponents/ShellBar';
import { ShellBar } from '../webComponents/ShellBar';

deprecationNotice(
  'ShellBar',
  `importing from '@ui5/webcomponents-react/dist/ShellBar' is deprecated. Please use "import { ShellBar } from '@ui5/webcomponents-react';" instead.`
);

export { ShellBar };

export type { ShellBarPropTypes, ShellBarDomRef };
