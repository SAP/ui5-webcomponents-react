import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { RadarChart } from './components/RadarChart/RadarChart';

deprecationNotice(
  'RadarChart',
  `importing from '@ui5/webcomponents-react-charts/dist/RadarChart' is deprecated. Please use "import { RadarChart } from '@ui5/webcomponents-react-charts';" instead.`
);
export { RadarChart };
