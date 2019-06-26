import { Event, StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, { Fragment, PureComponent } from 'react';
import { ClassProps } from '../../../interfaces/ClassProps';
import { CommonProps } from '../../../interfaces/CommonProps';
import { BusyIndicator } from '../../../lib/BusyIndicator';
import { DeviationIndicator } from '../../../lib/DeviationIndicator';
import { Label } from '../../../lib/Label';
import { Text } from '../../../lib/Text';
import { ValueState } from '../../../lib/ValueState';
import styles from './AnalyticalCardHeader.jss';

export interface AnalyticalCardHeaderPropTypes extends CommonProps {
  title?: string;
  subTitle?: string;
  arrowIndicator?: DeviationIndicator;
  showIndicator?: boolean;
  indicatorState?: ValueState;
  value?: string;
  unit?: string;
  valueState?: ValueState;
  target?: string;
  deviation?: string;
  onHeaderPress?: (event: Event) => void;
  loading?: boolean;
  description?: string;
}

interface AnalyticalCardHeaderInternalProps extends AnalyticalCardHeaderPropTypes, ClassProps {}

interface AnalyticalCardHeaderState {
  helpVisible: boolean;
}

@withStyles(styles)
export class AnalyticalCardHeader extends PureComponent<AnalyticalCardHeaderPropTypes, AnalyticalCardHeaderState> {
  static defaultProps = {
    title: null,
    subTitle: null,
    arrowIndicator: DeviationIndicator.None,
    showIndicator: true,
    indicatorState: ValueState.None,
    value: null,
    unit: null,
    valueState: ValueState.None,
    target: null,
    deviation: null,
    onHeaderPress: null,
    loading: false,
    description: null
  };

  state = {
    helpVisible: false
  };

  private handleHelpPress = (e) => {
    e.stopPropagation();
    this.setState({ helpVisible: true });
  };

  private onCloseHelp = () => {
    this.setState({ helpVisible: false });
  };

  private onClick = (e) => {
    if (this.props.onHeaderPress) {
      this.props.onHeaderPress(Event.of(this, e));
    }
  };

  private getIndicatorIcon = () => {
    const { indicatorState, arrowIndicator, classes } = this.props as AnalyticalCardHeaderInternalProps;

    const arrowClasses = StyleClassHelper.of(classes.arrowIndicatorShape);

    switch (arrowIndicator) {
      case DeviationIndicator.Up:
        arrowClasses.put(classes.arrowUp);
        break;
      case DeviationIndicator.Down:
        arrowClasses.put(classes.arrowDown);
        break;
      default:
        arrowClasses.put(classes.arrowRight);
        break;
    }

    switch (indicatorState) {
      case ValueState.Success:
        arrowClasses.put(classes.good);
        break;
      case ValueState.Error:
        arrowClasses.put(classes.error);
        break;
      case ValueState.Warning:
        arrowClasses.put(classes.critical);
        break;
      default:
        arrowClasses.put(classes.none);

        break;
    }
    return <div className={arrowClasses.valueOf()} />;
  };

  render() {
    const {
      title,
      subTitle,
      value,
      unit,
      target,
      deviation,
      valueState,
      onHeaderPress,
      loading,
      classes,
      showIndicator,
      tooltip,
      className,
      description,
      style
    } = this.props as AnalyticalCardHeaderInternalProps;

    const headerClasses = StyleClassHelper.of(classes.cardHeader);
    if (onHeaderPress) {
      headerClasses.put(classes.cardHeaderClickable);
    }

    const valueAndUnitClasses = StyleClassHelper.of(classes.valueAndUnit);
    if (valueState === ValueState.Error) {
      valueAndUnitClasses.put(classes.error);
    }
    if (valueState === ValueState.Warning) {
      valueAndUnitClasses.put(classes.critical);
    }
    if (valueState === ValueState.Success) {
      valueAndUnitClasses.put(classes.good);
    }

    if (className) {
      headerClasses.put(className);
    }
    const shouldRenderContent = [value, unit, deviation, target].some((v) => v !== null) || loading === true;

    return (
      <Fragment>
        <div onClick={this.onClick} className={headerClasses.valueOf()} title={tooltip} style={style}>
          <div className={classes.headerContent}>
            <div className={classes.headerText}>
              <span>{title}</span>
              <div className={classes.subHeaderText}>{subTitle}</div>
            </div>
            {shouldRenderContent && (
              <div className={classes.kpiContent}>
                <div className={classes.leftContent}>
                  <div className={valueAndUnitClasses.valueOf()}>
                    <div className={classes.value}>{value}</div>
                    <div className={classes.indicatorAndUnit}>
                      {showIndicator && this.getIndicatorIcon()}
                      <div className={classes.unit}>{unit}</div>
                    </div>
                    {loading && (
                      <span style={{ verticalAlign: 'super', display: 'inline-block' }}>
                        <BusyIndicator />
                      </span>
                    )}
                  </div>
                </div>

                <div className={classes.targetAndDeviation}>
                  {target !== null && (
                    <div>
                      <Label>Target</Label>
                      <div>
                        <Text>{target}</Text>
                      </div>
                    </div>
                  )}
                  {deviation !== null && (
                    <div className={classes.deviation}>
                      <Label>Deviation</Label>
                      <div>
                        <Text>{deviation}</Text>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className={classes.subHeaderText}>{description}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}
