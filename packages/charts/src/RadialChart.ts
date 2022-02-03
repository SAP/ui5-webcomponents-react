import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { RadialChart } from './components/RadialChart/RadialChart';

deprecationNotice(
  'RadialChart',
  `importing from '@ui5/webcomponents-react-charts/dist/RadialChart' is deprecated. Please use "import { RadialChart } from '@ui5/webcomponents-react-charts';" instead.`
);
export { RadialChart };
