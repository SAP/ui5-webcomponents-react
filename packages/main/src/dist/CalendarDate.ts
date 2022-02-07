import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { CalendarDateDomRef, CalendarDatePropTypes } from '../webComponents/CalendarDate';
import { CalendarDate } from '../webComponents/CalendarDate';

deprecationNotice(
  'CalendarDate',
  `importing from '@ui5/webcomponents-react/dist/CalendarDate' is deprecated. Please use "import { CalendarDate } from '@ui5/webcomponents-react';" instead.`
);

export { CalendarDate };

export type { CalendarDatePropTypes, CalendarDateDomRef };
