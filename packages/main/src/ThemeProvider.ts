import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { ThemeProvider } from './components/ThemeProvider';

export type { ThemeProviderPropTypes } from './components/ThemeProvider';

deprecationNotice(
  'ThemeProvider',
  `importing from '@ui5/webcomponents-react/dist/ThemeProvider' is deprecated. Please use "import { ThemeProvider } from '@ui5/webcomponents-react';" instead.`
);

export { ThemeProvider };
