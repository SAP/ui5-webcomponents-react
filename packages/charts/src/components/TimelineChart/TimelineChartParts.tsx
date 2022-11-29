import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { CSSProperties } from 'react';
import TimeLineChartGrid from './TimeLineChartGrid';
import TimelineChartLayer from './TimelineChartLayer';
import TimelineChartRow from './TimelineChartRow';
import TimelineDepsContainer from './TimelineDependency';

interface TimelineChartBodyProps {
  width: number;
  height?: number;
  rowHeight: number;
  numOfItems: number;
  totalDuration: number;
}

const TimelineChartBody: React.FC<TimelineChartBodyProps> = ({
  width,
  height,
  rowHeight,
  numOfItems,
  totalDuration
}) => {
  const style: CSSProperties = {
    width: width,
    height: `${numOfItems * rowHeight}px`,
    position: 'relative',
    outline: `1px solid ${ThemingParameters.sapList_BorderColor}`
  };

  return (
    <div style={{ height: height }}>
      <div style={style}>
        <TimelineChartLayer>
          <TimeLineChartGrid isDiscrete={true} numOfRows={numOfItems} numOfCols={8} rowHeight={rowHeight} />
        </TimelineChartLayer>
        <TimelineChartLayer>
          <TimelineDepsContainer rowHeight={rowHeight} totalDuration={totalDuration} />
        </TimelineChartLayer>
        <TimelineChartLayer>
          <TimelineChartRow rowHeight={rowHeight} rowNumber={2} totalDuration={totalDuration} />
        </TimelineChartLayer>
        <TimelineChartLayer></TimelineChartLayer>
      </div>
    </div>
  );
};

interface TimelineChartTaskHeaderProps {
  width: number;
  height: number;
  rowHeight: number;
  numOfItems: number;
}

const TimelineChartTaskHeader: React.FC<TimelineChartTaskHeaderProps> = ({ width, height, rowHeight, numOfItems }) => {
  const style: CSSProperties = {
    width: width,
    height: `${numOfItems * rowHeight}px`,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
    // overflowY: 'scroll'
  };

  const itemStyle: CSSProperties = {
    width: '100%',
    height: `${rowHeight}px`,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    textAlign: 'center'
  };

  const itemPHolderArray = [];

  for (let i = 1; i <= numOfItems; i++) {
    itemPHolderArray.push(i);
  }
  return (
    <div style={{ height: height }}>
      <div style={style}>
        {itemPHolderArray.map((item) => {
          return (
            <div key={item} style={itemStyle}>
              Item {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface TimelineChartDurationHeaderProps {
  width: number;
  height: number;
}

const TimelineChartDurationHeader: React.FC<TimelineChartDurationHeaderProps> = ({ width, height }) => {
  const style: CSSProperties = {
    width: width,
    height: height,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };
  return <div style={style}>DurationLabel</div>;
};

interface TimelineChartHeaderLabelsProps {
  width: number;
  height: number;
}

const TimelineChartHeaderLabels: React.FC<TimelineChartHeaderLabelsProps> = ({ width, height }) => {
  const style: CSSProperties = {
    width: width,
    height: height,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };
  return <div style={style}>LabelTitle</div>;
};

export { TimelineChartBody, TimelineChartDurationHeader, TimelineChartHeaderLabels, TimelineChartTaskHeader };
