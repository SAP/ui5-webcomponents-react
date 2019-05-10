import { withStyles } from '@fiori-for-react/utils';
import React, { CSSProperties, PureComponent } from 'react';
import { ChartInternalProps } from '../../interfaces/ChartInternalProps';
import { CommonProps } from '../../interfaces/CommonProps';
import BelizeColors from '../../themes/sap_belize';
import { populateDataMicroChart } from '../../util/populateData';

const BarStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  labelContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  valueContainer: {
    display: 'flex'
  },
  valueBar: { height: '4px' },
  fillUp: {
    height: '4px',
    backgroundColor: BelizeColors.sapUiChartPaletteSemanticNeutralLight3,
    flexGrow: 1
  },
  label: {
    color: 'hsl(0, 0%, 40%)',
    display: 'block',
    overflow: 'hidden',
    fontFamily: "'72', Arial, Helvetica, sans-serif",
    fontWeight: 'normal',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: '12px'
  },
  text: {
    display: 'inline-block',
    fontSize: '14px',
    wordWrap: 'break-word',
    boxSizing: 'border-box',
    fontFamily: "'72', Arial, Helvetica, sans-serif",
    fontWeight: 'normal',
    whiteSpace: 'pre-line',
    color: '#333333'
  }
};

interface DataItems {
  value: number;
  label: string;
}

export interface MicroBarChartPropTypes extends CommonProps {
  dataset: DataItems[];
  maxWidth?: CSSProperties['width'];
  colors?: Array<CSSProperties['color']>;
  visibleDatasetCount?: number;
  valueFormatter?: (value: any) => string | number;
  labelFormatter?: (value: any) => string | number;
}

interface InternalProps extends MicroBarChartPropTypes, ChartInternalProps {}

@withStyles(BarStyles)
export class MicroBarChart extends PureComponent<InternalProps> {
  static defaultProps = {
    valueFormatter: (value) => value,
    labelFormatter: (value) => value
  };

  render() {
    const {
      className,
      dataset,
      colors,
      maxWidth,
      visibleDatasetCount,
      valueFormatter,
      labelFormatter,
      classes,
      style,
      theme
    } = this.props;
    const visibleDatasetArray = dataset.slice(0, !visibleDatasetCount ? dataset.length : visibleDatasetCount);
    const maxValue = Math.max(...dataset.map((item) => item.value));
    const colorPallets = populateDataMicroChart(colors, theme.theme);
    const setColor = (index) =>
      colorPallets[index] ? colorPallets[index] : populateDataMicroChart(null, theme.theme)[index];
    return (
      <div className={`${classes.container} ${className}`} style={{ maxWidth, ...style }}>
        {visibleDatasetArray.map((item, index) => {
          return (
            <div key={item.label}>
              <div className={classes.labelContainer}>
                <span className={classes.label}>{labelFormatter(item.label)}</span>
                <span
                  className={classes.text}
                  style={{
                    fontSize: '12px',
                    color: setColor(index)
                  }}
                >
                  {valueFormatter(item.value)}
                </span>
              </div>
              <div className={classes.valueContainer}>
                <div
                  className={classes.valueBar}
                  style={{
                    width: `${(item.value / maxValue) * 100}%`,
                    backgroundColor: setColor(index)
                  }}
                />
                <div className={classes.fillUp} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
