import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ColorPaletteItemDomRef, ColorPaletteItemPropTypes } from '../webComponents/ColorPaletteItem';
import { ColorPaletteItem } from '../webComponents/ColorPaletteItem';

deprecationNotice(
  'ColorPaletteItem',
  `importing from '@ui5/webcomponents-react/dist/ColorPaletteItem' is deprecated. Please use "import { ColorPaletteItem } from '@ui5/webcomponents-react';" instead.`
);

export { ColorPaletteItem };

export type { ColorPaletteItemPropTypes, ColorPaletteItemDomRef };
