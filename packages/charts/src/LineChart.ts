import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { LineChart } from './components/LineChart/LineChart';

deprecationNotice(
  'LineChart',
  `importing from '@ui5/webcomponents-react-charts/dist/LineChart' is deprecated. Please use "import { LineChart } from '@ui5/webcomponents-react-charts';" instead.`
);
export { LineChart };
