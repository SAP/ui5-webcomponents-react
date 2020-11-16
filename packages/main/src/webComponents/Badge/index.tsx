import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Badge';
import { FC, ReactNode } from 'react';

export interface BadgePropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the color scheme of the `Badge`. There are 10 predefined schemes. Each scheme applies different values for the `background-color` and `border-color`. To use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default.
   *
   * **Note:** Color schemes have no visual representation in High Contrast Black (sap\_belize\_hcb) theme.
   */
  colorScheme?: string;
  /**
   * Defines the text of the `Badge`.
   * **Note:** Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the `Icon` to be displayed in the `Badge`.
   */
  icon?: ReactNode | ReactNode[];
}

/**
 * The `Badge` is a small non-interactive component which contains text information and color chosen from a list of predefined color schemes. It serves the purpose to attract the user attention to some piece of information (state, quantity, condition, etc.).
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Badge" target="_blank">UI5 Web Components Playground</a>
 */
const Badge: FC<BadgePropTypes> = withWebComponent<BadgePropTypes>('ui5-badge', ['colorScheme'], [], ['icon'], []);

Badge.displayName = 'Badge';

Badge.defaultProps = {
  colorScheme: '1'
};

export { Badge };
