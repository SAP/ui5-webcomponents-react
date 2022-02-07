import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { CalendarDomRef, CalendarPropTypes } from '../webComponents/Calendar';
import { Calendar } from '../webComponents/Calendar';

deprecationNotice(
  'Calendar',
  `importing from '@ui5/webcomponents-react/dist/Calendar' is deprecated. Please use "import { Calendar } from '@ui5/webcomponents-react';" instead.`
);

export { Calendar };

export type { CalendarPropTypes, CalendarDomRef };
