import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { BulletChart } from './components/BulletChart/BulletChart';

deprecationNotice(
  'BulletChart',
  `importing from '@ui5/webcomponents-react-charts/dist/BulletChart' is deprecated. Please use "import { BulletChart } from '@ui5/webcomponents-react-charts';" instead.`
);
export { BulletChart };
