import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React, { FC, forwardRef, Ref } from 'react';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { CommonProps } from '../../interfaces/CommonProps';
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
   * State of indicator (using ValueState)
   */
  state?: ValueState;
}

const useStyles = createComponentStyles(styles, { name: 'ProgressIndicator' });

/**
 * <code>import { ProgressIndicator } from '@ui5/webcomponents-react/lib/ProgressIndicator';</code>
 */
const ProgressIndicator: FC<ProgressIndicatorPropTypes> = forwardRef(
  (props: ProgressIndicatorPropTypes, ref: Ref<HTMLDivElement>) => {
    const { percentValue, displayValue, className, style, tooltip, state, slot } = props;

    const classes = useStyles();

    // CSS classes
    const wrapperClasses = StyleClassHelper.of(classes.wrapper);
    const progressBarClasses = StyleClassHelper.of(classes.progressbar);
    const progressBarTextClasses = StyleClassHelper.of(classes.progressBarText);

    const progressBarStyle = { flexBasis: `${percentValue}%` };

    // change text color based on percent value
    if (percentValue <= 50) {
      progressBarTextClasses.put(classes.progressBarTextColorLow);
      progressBarTextClasses.put(classes.progressBarTextRight);
    } else {
      progressBarTextClasses.put(classes.progressBarTextColorHigh);
      progressBarTextClasses.put(classes.progressBarTextLeft);
    }

    const progressBarTextSpan = <span className={progressBarTextClasses.valueOf()}> {displayValue} </span>;

    progressBarClasses.put(classes[`state${state}`]);

    if (className) {
      wrapperClasses.put(className);
    }

    const passThroughProps = usePassThroughHtmlProps(props);

    return (
      <div
        ref={ref}
        className={wrapperClasses.valueOf()}
        style={style}
        title={tooltip}
        slot={slot}
        {...passThroughProps}
      >
        <div className={progressBarClasses.valueOf()} style={progressBarStyle}>
          {percentValue <= 50 ? null : progressBarTextSpan}
        </div>
        <div className={classes.progressBarRemaining}>{percentValue <= 50 ? progressBarTextSpan : null}</div>
      </div>
    );
  }
);

ProgressIndicator.displayName = 'ProgressIndicator';

ProgressIndicator.defaultProps = {
  percentValue: 0,
  displayValue: '',
  state: ValueState.None
};

export { ProgressIndicator };
