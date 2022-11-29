import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { CSSProperties } from 'react';
import TimeLineChartGrid from './TimeLineChartGrid';
import TimelineChartLayer from './TimelineChartLayer';
import TimelineChartRow from './TimelineChartRow';
import TimelineDepsContainer from './TimelineDependency';

interface TimelineChartBodyProps {
  width: number;
  height: number;
}

const TimelineChartBody: React.FC<TimelineChartBodyProps> = ({ width, height }) => {
  const style: CSSProperties = {
    width: width,
    height: height,
    position: 'relative'
  };

  return (
    <div style={style}>
      <TimelineChartLayer>
        <TimeLineChartGrid isDiscrete={true} numOfRows={5} numOfCols={8} />
      </TimelineChartLayer>
      <TimelineChartLayer>
        <TimelineDepsContainer />
      </TimelineChartLayer>
      <TimelineChartLayer>
        <TimelineChartRow height={20} yOffset={40}></TimelineChartRow>
      </TimelineChartLayer>
      <TimelineChartLayer></TimelineChartLayer>
    </div>
  );
};

interface TimelineChartTaskHeaderProps {
  width: number;
  height: number;
}

const TimelineChartTaskHeader: React.FC<TimelineChartTaskHeaderProps> = ({ width, height }) => {
  const style: CSSProperties = {
    width: width,
    height: height,
    borderRight: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };
  return <div style={style}>TaskLabel</div>;
};

interface TimelineChartDurationHeaderProps {
  width: number;
  height: number;
}

const TimelineChartDurationHeader: React.FC<TimelineChartDurationHeaderProps> = ({ width, height }) => {
  const style: CSSProperties = {
    width: width,
    height: height,
    borderBottom: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
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
    borderBottom: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    borderRight: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };
  return <div style={style}>LabelTitle</div>;
};

export { TimelineChartBody, TimelineChartDurationHeader, TimelineChartHeaderLabels, TimelineChartTaskHeader };
