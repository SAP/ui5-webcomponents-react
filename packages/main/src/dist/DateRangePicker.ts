import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { DateRangePickerDomRef, DateRangePickerPropTypes } from '../webComponents/DateRangePicker';
import { DateRangePicker } from '../webComponents/DateRangePicker';

deprecationNotice(
  'DateRangePicker',
  `importing from '@ui5/webcomponents-react/dist/DateRangePicker' is deprecated. Please use "import { DateRangePicker } from '@ui5/webcomponents-react';" instead.`
);

export { DateRangePicker };

export type { DateRangePickerPropTypes, DateRangePickerDomRef };
