import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { DatePickerDomRef, DatePickerPropTypes } from './webComponents/DatePicker';
import { DatePicker } from './webComponents/DatePicker';

deprecationNotice(
  'DatePicker',
  `importing from '@ui5/webcomponents-react/dist/DatePicker' is deprecated. Please use "import { DatePicker } from '@ui5/webcomponents-react';" instead.`
);

export { DatePicker };

export type { DatePickerPropTypes, DatePickerDomRef };
