import { TitleLevel } from '@ui5/webcomponents-react/dist/TitleLevel';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { WrappingType } from '@ui5/webcomponents-react/dist/WrappingType';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/Title.js';

export interface TitlePropTypes extends CommonProps {
  /**
   * Defines the component level. Available options are: `"H6"` to `"H1"`.
   */
  level?: TitleLevel | keyof typeof TitleLevel;
  /**
   * Defines how the text of a component will be displayed when there is not enough space. Available options are:
   *
   * *   `None` - The text will be truncated with an ellipsis.
   * *   `Normal` - The text will wrap. The words will not be broken based on hyphenation.
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `Title` component is used to display titles inside a page. It is a simple, large-sized text with explicit header/title semantics.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Title" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Title = withWebComponent<TitlePropTypes>('ui5-title', ['level', 'wrappingType'], [], [], []);

Title.displayName = 'Title';

Title.defaultProps = {
  level: TitleLevel.H2
};

export { Title };
