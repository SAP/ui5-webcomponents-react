import { usePassThroughHtmlProps } from './hooks';
import { deprecationNotice } from './utils/index';

deprecationNotice(
  'usePassThroughHtmlProps',
  `importing from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps' is deprecated. Please use "import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base';" instead.`
);

export { usePassThroughHtmlProps };
