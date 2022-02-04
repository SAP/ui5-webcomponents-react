import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { DonutChart } from './components/DonutChart/DonutChart';

deprecationNotice(
  'DonutChart',
  `importing from '@ui5/webcomponents-react-charts/dist/DonutChart' is deprecated. Please use "import { DonutChart } from '@ui5/webcomponents-react-charts';" instead.`
);
export { DonutChart };
