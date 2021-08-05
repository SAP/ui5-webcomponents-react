import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/ColorPalette';

export interface ColorPalettePropTypes extends CommonProps {
  /**
   * Defines the `ColorPaletteItem` items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the user selects a color.
   */
  onItemClick?: (event: Ui5CustomEvent<HTMLElement, { color: string }>) => void;
}

/**
 * The ColorPalette provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPalette" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ColorPalette = withWebComponent<ColorPalettePropTypes>('ui5-color-palette', [], [], [], ['item-click']);

ColorPalette.displayName = 'ColorPalette';

ColorPalette.defaultProps = {};

export { ColorPalette };
