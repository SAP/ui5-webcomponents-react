import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { ScatterChart } from './components/ScatterChart/ScatterChart';

deprecationNotice(
  'ScatterChart',
  `importing from '@ui5/webcomponents-react-charts/dist/ScatterChart' is deprecated. Please use "import { ScatterChart } from '@ui5/webcomponents-react-charts';" instead.`
);
export { ScatterChart };
