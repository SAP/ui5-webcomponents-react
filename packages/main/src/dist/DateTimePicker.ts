import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { DateTimePickerDomRef, DateTimePickerPropTypes } from '../webComponents/DateTimePicker';
import { DateTimePicker } from '../webComponents/DateTimePicker';

deprecationNotice(
  'DateTimePicker',
  `importing from '@ui5/webcomponents-react/dist/DateTimePicker' is deprecated. Please use "import { DateTimePicker } from '@ui5/webcomponents-react';" instead.`
);

export { DateTimePicker };

export type { DateTimePickerPropTypes, DateTimePickerDomRef };
