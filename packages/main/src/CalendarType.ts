import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { CalendarType } from './enums/CalendarType';

deprecationNotice(
  'CalendarType',
  `importing from '@ui5/webcomponents-react/dist/CalendarType' is deprecated. Please use "import { CalendarType } from '@ui5/webcomponents-react';" instead.`
);

export { CalendarType };
