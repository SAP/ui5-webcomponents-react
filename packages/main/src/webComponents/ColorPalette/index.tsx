import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/dist/withWebComponent';
import { FC, ReactNode } from 'react';

import '@ui5/webcomponents/dist/ColorPalette';

export interface ColorPalettePropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the `ColorPaletteItem` items.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The ColorPalette provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPalette" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ColorPalette: FC<ColorPalettePropTypes> = withWebComponent<ColorPalettePropTypes>(
  'ui5-color-palette',
  [],
  [],
  [],
  []
);

ColorPalette.displayName = 'ColorPalette';

ColorPalette.defaultProps = {};

export { ColorPalette };
