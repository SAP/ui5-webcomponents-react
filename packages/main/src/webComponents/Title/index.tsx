import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Title';
import { FC, ReactNode } from 'react';

export interface TitlePropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the <code>Title</code> level. Available options are: <code>"H6"</code> to <code>"H1"</code>.
   */
  level?: TitleLevel;
  /**
   * Defines whether the <code>Title</code> would wrap.
   */
  wrap?: boolean;
  /**
   * Defines the text of the <code>Title</code>. <br><br> <b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
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
