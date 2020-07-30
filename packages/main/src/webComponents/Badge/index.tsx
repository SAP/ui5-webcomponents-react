import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Badge';
import { FC, ReactNode } from 'react';

export interface BadgePropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the color scheme of the <code>ui5-badge</code>. There are 10 predefined schemes. Each scheme applies different values for the <code>background-color</code> and <code>border-color</code>. To use one you can set a number from <code>"1"</code> to <code>"10"</code>. The <code>colorScheme</code> <code>"1"</code> will be set by default. <br><br> <b>Note:</b> Color schemes have no visual representation in High Contrast Black (sap_belize_hcb) theme.
   */
  colorScheme?: string;
  /**
   * Defines the text of the <code>ui5-badge</code>. <br><b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the <code>ui5-icon</code> to be displayed in the <code>ui5-badge</code>.
   */
  icon?: ReactNode | ReactNode[];
}

/**
 * <code>import { Badge } from '@ui5/webcomponents-react/lib/Badge';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Badge" target="_blank">UI5 Web Components Playground</a>
 */
const Badge: FC<BadgePropTypes> = withWebComponent<BadgePropTypes>('ui5-badge', ['colorScheme'], [], ['icon'], []);

Badge.displayName = 'Badge';

Badge.defaultProps = {
  colorScheme: '1'
};

export { Badge };
