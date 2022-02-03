import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { BarChart } from './components/BarChart/BarChart';

deprecationNotice(
  'BarChart',
  `importing from '@ui5/webcomponents-react-charts/dist/BarChart' is deprecated. Please use "import { BarChart } from '@ui5/webcomponents-react-charts';" instead.`
);

export { BarChart };
