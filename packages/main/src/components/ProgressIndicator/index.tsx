import { StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, { PureComponent } from 'react';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import styles from './ProgressIndicator.jss';

export interface ProgressIndicatorPropTypes extends CommonProps {
  /*
   * Percent value to be used
   */
  percentValue?: number;
  /*
   * Value to be displayed
   */
  displayValue?: string;

  /*
   * Flag to make component invisible
   */
  visible?: boolean;

  /*
   * Specified width of component
   */
  width?: string;

  /*
   * Specified height of component
   */
  height?: string;

  /*
   * State of indicator (using ValueState)
   */
  state?: ValueState;
}

interface ProgressIndicatorInternalProps extends ProgressIndicatorPropTypes, ClassProps {
  theme: JSSTheme;
}

@withStyles(styles)
export class ProgressIndicator extends PureComponent<ProgressIndicatorPropTypes> {
  static defaultProps = {
    percentValue: 0,
    displayValue: '',
    visible: true,
    width: 'auto',
    height: '',
    state: 'None'
  };

  render() {
    const {
      percentValue,
      displayValue,
      visible,
      width,
      height,
      classes,
      theme,
      className,
      style,
      tooltip,
      state,
      innerRef,
      slot
    } = this.props as ProgressIndicatorInternalProps;

    // CSS classes
    const wrapperClasses = StyleClassHelper.of(classes.wrapper);
    const progressBarClasses = StyleClassHelper.of(classes.progressbar);
    const progressBarTextClasses = StyleClassHelper.of(classes.progressBarText);
    const progressBarContainerStyle = { width, height };
    const progressBarStyle = { flexBasis: `${percentValue}%` };

    // change content density
    switch (theme.contentDensity) {
      case ContentDensity.Cozy:
        progressBarContainerStyle.height = height || '1.5rem';
        wrapperClasses.put(classes.cozy);
        break;
      default:
        progressBarContainerStyle.height = height || '1.125rem';
        wrapperClasses.put(classes.compact);
    }

    // change text color based on percent value
    if (percentValue <= 50) {
      progressBarTextClasses.put(classes.progressBarTextColorLow);
      progressBarTextClasses.put(classes.progressBarTextRight);
    } else {
      progressBarTextClasses.put(classes.progressBarTextColorHigh);
      progressBarTextClasses.put(classes.progressBarTextLeft);
    }

    // visibility handling
    if (!visible) wrapperClasses.put(classes.invisible);

    const progressBarTextSpan = <span className={progressBarTextClasses.valueOf()}> {displayValue} </span>;

    progressBarClasses.put(classes[`state${state}`]);

    if (className) {
      wrapperClasses.put(className);
    }

    if (style) {
      Object.assign(progressBarContainerStyle, style);
    }

    return (
      <div
        ref={innerRef}
        className={wrapperClasses.valueOf()}
        style={progressBarContainerStyle}
        title={tooltip}
        slot={slot}
      >
        <div className={progressBarClasses.valueOf()} style={progressBarStyle}>
          {percentValue <= 50 ? null : progressBarTextSpan}
        </div>
        <div className={classes.progressBarRemaining}>{percentValue <= 50 ? progressBarTextSpan : null}</div>
      </div>
    );
  }
}
