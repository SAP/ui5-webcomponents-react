import { deprecationNotice } from '@ui5/webcomponents-react-base';

deprecationNotice(
  'AnalyticalTableHooks',
  `importing from '@ui5/webcomponents-react/dist/AnalyticalTableHooks' is deprecated. Please use "import { AnalyticalTableHooks } from '@ui5/webcomponents-react';" instead.`
);

export * from './components/AnalyticalTable/pluginHooks/AnalyticalTableHooks';
