import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { ColumnChart } from './components/ColumnChart/ColumnChart';

deprecationNotice(
  'ColumnChart',
  `importing from '@ui5/webcomponents-react-charts/dist/ColumnChart' is deprecated. Please use "import { ColumnChart } from '@ui5/webcomponents-react-charts';" instead.`
);
export { ColumnChart };
