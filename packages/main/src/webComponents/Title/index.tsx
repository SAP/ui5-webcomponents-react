import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Title';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TitlePropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the <code>ui5-title</code> level. Available options are: <code>"H6"</code> to <code>"H1"</code>.
   */
  level?: TitleLevel;
  /**
   * Defines whether the <code>ui5-title</code> would wrap.
   */
  wrap?: boolean;
  /**
   * Defines the text of the <code>ui5-title</code>. <br><br> <b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { Title } from '@ui5/webcomponents-react/lib/Title';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Title" target="_blank">UI5 Web Components Playground</a>
 */
const Title: FC<TitlePropTypes> = withWebComponent<TitlePropTypes>('ui5-title', ['level'], ['wrap'], [], []);

Title.displayName = 'Title';

Title.defaultProps = {
  level: TitleLevel.H2,
  wrap: false
};

export { Title };
