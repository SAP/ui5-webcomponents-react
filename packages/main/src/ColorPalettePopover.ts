import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ColorPalettePopoverDomRef, ColorPalettePopoverPropTypes } from './webComponents/ColorPalettePopover';
import { ColorPalettePopover } from './webComponents/ColorPalettePopover';

deprecationNotice(
  'ColorPalettePopover',
  `importing from '@ui5/webcomponents-react/dist/ColorPalettePopover' is deprecated. Please use "import { ColorPalettePopover } from '@ui5/webcomponents-react';" instead.`
);

export { ColorPalettePopover };

export type { ColorPalettePopoverPropTypes, ColorPalettePopoverDomRef };
