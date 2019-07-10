import { StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, { PureComponent, ReactNode, ReactNodeArray } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { ContentDensity } from '../../lib/ContentDensity';
import { Themes } from '../../lib/Themes';
import styles from './AnalyticalCard.jss';

export interface AnalyticalCardTypes extends CommonProps {
  /**
   * Render Function for Header Content
   * This function will pass two parameters: theme and Content Density.
   * Expect to return a CardHeader.
   */
  renderHeader: (theme: Themes, contentDensity: ContentDensity) => JSX.Element;
  /**
   * Expected one or more React Components
   */
  children?: ReactNode | ReactNodeArray;
}

export interface AnalyticalCardPropsInternal extends AnalyticalCardTypes, ClassProps {
  theme?: JSSTheme;
}

@withStyles(styles)
export class AnalyticalCard extends PureComponent<AnalyticalCardTypes> {
  render() {
    const { renderHeader, children, classes, theme, style, className, tooltip, innerRef } = this
      .props as AnalyticalCardPropsInternal;
    const classNameString = StyleClassHelper.of(classes.card);
    if (className) {
      classNameString.put(className);
    }
    return (
      <div ref={innerRef} className={classNameString.toString()} style={style} title={tooltip}>
        {renderHeader(theme.theme, theme.contentDensity)}
        <div style={{ padding: '1rem' }}>{children}</div>
      </div>
    );
  }
}
