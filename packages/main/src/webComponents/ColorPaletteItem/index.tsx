import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/ColorPaletteItem';
import { CSSProperties, FC } from 'react';

export interface ColorPaletteItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the stable selector that you can use via getStableDomRef method.
   */
  stableDomRef?: unknown;
  /**
   * Defines the value of the `ColorPaletteItem` color.
   *
   * **Note:** The value should be a valid CSS color.
   */
  value?: CSSProperties['color'];
}

/**
 * The `ColorPaletteItem` component represents a color in the the `ColorPalette`
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPaletteItem" target="_blank">UI5 Web Components Playground</a>
 */
const ColorPaletteItem: FC<ColorPaletteItemPropTypes> = withWebComponent<ColorPaletteItemPropTypes>(
  'ui5-color-palette-item',
  ['stableDomRef', 'value'],
  [],
  [],
  []
);

ColorPaletteItem.displayName = 'ColorPaletteItem';

ColorPaletteItem.defaultProps = {};

export { ColorPaletteItem };
