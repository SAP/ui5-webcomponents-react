import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { PieChart } from './components/PieChart/PieChart';

deprecationNotice(
  'PieChart',
  `importing from '@ui5/webcomponents-react-charts/dist/PieChart' is deprecated. Please use "import { PieChart } from '@ui5/webcomponents-react-charts';" instead.`
);
export { PieChart };
