import { deprecationNotice } from '@ui5/webcomponents-react-base';

export * from '../components/ResponsiveGridLayout';

deprecationNotice(
  'ResponsiveGridLayout',
  `importing from '@ui5/webcomponents-react/dist/ResponsiveGridLayout' is deprecated. Please use "import { ResponsiveGridLayout } from '@ui5/webcomponents-react';" instead.`
);
