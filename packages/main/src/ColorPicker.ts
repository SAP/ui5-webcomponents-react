import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ColorPickerDomRef, ColorPickerPropTypes } from './webComponents/ColorPicker';
import { ColorPicker } from './webComponents/ColorPicker';

deprecationNotice(
  'ColorPicker',
  `importing from '@ui5/webcomponents-react/dist/ColorPicker' is deprecated. Please use "import { ColorPicker } from '@ui5/webcomponents-react';" instead.`
);

export { ColorPicker };

export type { ColorPickerPropTypes, ColorPickerDomRef };
