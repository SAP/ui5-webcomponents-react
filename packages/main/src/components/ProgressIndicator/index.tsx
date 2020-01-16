import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React, { FC, forwardRef, Ref, useMemo } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
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

const useStyles = createUseStyles<keyof ReturnType<typeof styles>>(styles, { name: 'ProgressIndicator' });

/**
 * <code>import { ProgressIndicator } from '@ui5/webcomponents-react/lib/ProgressIndicator';</code>
 */
const ProgressIndicator: FC<ProgressIndicatorPropTypes> = forwardRef(
  (props: ProgressIndicatorPropTypes, ref: Ref<HTMLDivElement>) => {
    const { percentValue, displayValue, width, height, className, style, tooltip, state, slot } = props;

    const classes = useStyles();

    // CSS classes
    const wrapperClasses = StyleClassHelper.of(classes.wrapper);
    const progressBarClasses = StyleClassHelper.of(classes.progressbar);
    const progressBarTextClasses = StyleClassHelper.of(classes.progressBarText);

    const progressBarStyle = { flexBasis: `${percentValue}%` };

    // change content density
    const theme = useTheme() as JSSTheme;
    if (theme.contentDensity === ContentDensity.Compact) {
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

    const progressBarTextSpan = <span className={progressBarTextClasses.valueOf()}> {displayValue} </span>;

    progressBarClasses.put(classes[`state${state}`]);

    if (className) {
      wrapperClasses.put(className);
    }

    const progressBarContainerStyle = useMemo(() => ({ ...style, width, height }), [style, width, height]);

    const passThroughProps = usePassThroughHtmlProps(props);

    return (
      <div
        ref={ref}
        className={wrapperClasses.valueOf()}
        style={progressBarContainerStyle}
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
  width: 'auto',
  height: '',
  state: ValueState.None
};

export { ProgressIndicator };
