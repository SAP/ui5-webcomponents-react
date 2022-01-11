import { useViewportRange } from './hooks';
import { deprecationNotice } from './utils/index';

deprecationNotice(
  'useViewportRange',
  `importing from '@ui5/webcomponents-react-base/dist/useViewportRange' is deprecated. Please use "import { useViewportRange } from '@ui5/webcomponents-react-base';" instead.`
);

export { useViewportRange };
