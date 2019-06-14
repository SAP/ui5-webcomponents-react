import { StyleClassHelper } from '@ui5-webcomponents-react/utils';
import React, { Component } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { ClassProps } from '../../interfaces/ClassProps';
import { withStyles } from '@ui5-webcomponents-react/styles';
import styles from './Bar.jss';

export interface BarPropTypes extends CommonProps {
  renderContentLeft?: () => JSX.Element;
  renderContentMiddle?: () => JSX.Element;
  renderContentRight?: () => JSX.Element;
}

interface BarInternalProps extends BarPropTypes, ClassProps {}

@withStyles(styles)
export class Bar extends Component<BarPropTypes> {
  static defaultProps = {
    renderContentLeft: () => null,
    renderContentMiddle: () => null,
    renderContentRight: () => null
  };

  render() {
    const { classes, renderContentLeft, renderContentMiddle, renderContentRight, className, style, tooltip } = this
      .props as BarInternalProps;

    const cssClasses = StyleClassHelper.of(classes.bar);
    if (className) {
      cssClasses.put(className);
    }
    return (
      <div
        data-bar-part="Root"
        className={cssClasses.toString()}
        style={style}
        title={tooltip}
        data-ui5-slot={this.props['data-ui5-slot']}
      >
        <div data-bar-part="Left" className={classes.left}>
          {renderContentLeft()}
        </div>
        <div data-bar-part="Center" className={classes.center}>
          <div className={classes.inner}>{renderContentMiddle()}</div>
        </div>
        <div data-bar-part="Right" className={classes.right}>
          {renderContentRight()}
        </div>
      </div>
    );
  }
}
