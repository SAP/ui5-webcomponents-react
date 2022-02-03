import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { MicroBarChart } from './components/MicroBarChart/MicroBarChart';

deprecationNotice(
  'MicroBarChart',
  `importing from '@ui5/webcomponents-react-charts/dist/MicroBarChart' is deprecated. Please use "import { MicroBarChart } from '@ui5/webcomponents-react-charts';" instead.`
);
export { MicroBarChart };
