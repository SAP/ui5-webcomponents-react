import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { ComposedChart } from './components/ComposedChart';

deprecationNotice(
  'ComposedChart',
  `importing from '@ui5/webcomponents-react-charts/dist/ComposedChart' is deprecated. Please use "import { ComposedChart } from '@ui5/webcomponents-react-charts';" instead.`
);
export { ComposedChart };
