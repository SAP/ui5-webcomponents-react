import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ColorPaletteDomRef, ColorPalettePropTypes } from './webComponents/ColorPalette';
import { ColorPalette } from './webComponents/ColorPalette';

deprecationNotice(
  'ColorPalette',
  `importing from '@ui5/webcomponents-react/dist/ColorPalette' is deprecated. Please use "import { ColorPalette } from '@ui5/webcomponents-react';" instead.`
);

export { ColorPalette };

export type { ColorPalettePropTypes, ColorPaletteDomRef };
