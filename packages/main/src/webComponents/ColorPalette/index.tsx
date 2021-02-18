import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/ColorPalette';
import { CSSProperties, FC, ReactNode } from 'react';

export interface ColorPalettePropTypes extends Omit<WithWebComponentPropTypes, 'onChange'> {
  /**
   * The selected color.
   */
  value?: CSSProperties['color'];
  /**
   * Defines the `ColorPaletteItem` items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the user selects a color.
   */
  onChange?: (event: CustomEvent<{ color: string }>) => void;
}

/**
 * The ColorPalette provides the users with a range of predefined colors. You can set them by using the ColorPaletteItem items as slots.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPalette" target="_blank">UI5 Web Components Playground</a>
 */
const ColorPalette: FC<ColorPalettePropTypes> = withWebComponent<ColorPalettePropTypes>(
  'ui5-color-palette',
  ['value'],
  [],
  [],
  ['change']
);

ColorPalette.displayName = 'ColorPalette';

ColorPalette.defaultProps = {};

export { ColorPalette };
