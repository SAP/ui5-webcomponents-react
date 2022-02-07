import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TimePickerDomRef, TimePickerPropTypes } from '../webComponents/TimePicker';
import { TimePicker } from '../webComponents/TimePicker';

deprecationNotice(
  'TimePicker',
  `importing from '@ui5/webcomponents-react/dist/TimePicker' is deprecated. Please use "import { TimePicker } from '@ui5/webcomponents-react';" instead.`
);

export { TimePicker };

export type { TimePickerPropTypes, TimePickerDomRef };
