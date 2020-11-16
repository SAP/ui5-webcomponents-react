import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Title';
import { FC, ReactNode } from 'react';

export interface TitlePropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the `Title` level. Available options are: `"H6"` to `"H1"`.
   */
  level?: TitleLevel;
  /**
   * Defines whether the `Title` would wrap.
   */
  wrap?: boolean;
  /**
   * Defines the text of the `Title`.
   *
   * **Note:** Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `Title` component is used to display titles inside a page. It is a simple, large-sized text with explicit header/title semantics.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Title" target="_blank">UI5 Web Components Playground</a>
 */
const Title: FC<TitlePropTypes> = withWebComponent<TitlePropTypes>('ui5-title', ['level'], ['wrap'], [], []);

Title.displayName = 'Title';

Title.defaultProps = {
  level: TitleLevel.H2,
  wrap: false
};

export { Title };
