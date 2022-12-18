import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { CSSProperties, useEffect, useRef } from 'react';
import { ITimelineChartRow } from './util/TimelineChartTypes';

interface TimelineChartTaskHeaderProps {
  width: number;
  height: number;
  rowHeight: number;
  dataset: ITimelineChartRow[];
}

const TimelineChartTaskHeader: React.FC<TimelineChartTaskHeaderProps> = ({ width, height, rowHeight, dataset }) => {
  const rowLabels = dataset.map((data) => data.label);
  const style: CSSProperties = {
    width: width,
    height: `${rowLabels.length * rowHeight}px`,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };

  const itemStyle: CSSProperties = {
    width: '100%',
    height: `${rowHeight}px`,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    fontSize: '10px',
    lineHeight: `${rowHeight}px`,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  return (
    <div style={{ height: height }}>
      <div style={style}>
        {rowLabels.map((label, index) => {
          return (
            <div key={index} style={itemStyle}>
              <span style={{ paddingLeft: '10px', paddingRight: '10px' }} title={`Item ${label}`}>
                {label}
              </span>
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
  isDiscrete: boolean;
  totalDuration: number;
  unit: string;
  durationHeaderLabel: string;
  columnLabels?: string[];
  start: number;
  scale: number;
  valueFormat?: (value: number) => string;
}

const TimelineChartDurationHeader: React.FC<TimelineChartDurationHeaderProps> = ({
  width,
  height,
  isDiscrete,
  totalDuration,
  columnLabels,
  start,
  scale,
  valueFormat
}) => {
  const tickRef = useRef<HTMLCanvasElement>();

  const style: CSSProperties = {
    width: width,
    height: height,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };

  const halfHeaderHeight = 0.5 * height;
  let labelArray: string[];
  if (isDiscrete) {
    labelArray = columnLabels ? columnLabels : Array.from(Array(totalDuration).keys()).map((num) => `${num + start}`);
  }

  useEffect(() => {
    if (tickRef.current != null) {
      const canvas = tickRef.current;
      canvas.width = canvas.getBoundingClientRect().width;
      canvas.height = canvas.getBoundingClientRect().height;

      const ctx = canvas.getContext('2d');

      const width = canvas.width;
      const height = canvas.height;
      const tickLength = 5;
      const spacing = 2;

      ctx.lineWidth = 4;
      const textColor = getComputedStyle(document.documentElement).getPropertyValue('--sapTextColor');
      const lineColor = getComputedStyle(document.documentElement).getPropertyValue('--sapList_BorderColor');
      ctx.strokeStyle = lineColor;
      ctx.fillStyle = textColor;
      ctx.moveTo(0, height);
      ctx.lineTo(0, height - tickLength);
      ctx.font = '8px Helvetica';
      ctx.textBaseline = 'bottom';
      const startText = valueFormat != null ? valueFormat(start) : start.toString();
      ctx.fillText(startText, spacing, height - tickLength - spacing);

      ctx.moveTo(width, height);
      ctx.lineTo(width, height - tickLength);
      const endText = valueFormat != null ? valueFormat(totalDuration + start) : (totalDuration + start).toString();
      const endMsr = ctx.measureText(endText);
      ctx.fillText(endText, width - endMsr.width - spacing, height - tickLength - spacing);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 2;
      const segments = Math.floor(5 * scale);
      for (let i = 1; i < segments; i++) {
        const xPos = (width / segments) * i;
        ctx.moveTo(xPos, height);
        ctx.lineTo(xPos, height - tickLength);
        const val = (totalDuration / segments) * i + start;
        const text = valueFormat != null ? valueFormat(val) : val.toString();
        const msr = ctx.measureText(text);
        ctx.fillText(text, xPos - msr.width / spacing, height - tickLength - spacing);
      }

      ctx.stroke();
    }
  }, [width]);

  return (
    <div style={style}>
      <div
        style={{
          height: `${halfHeaderHeight}px`,
          textAlign: 'center',
          borderBottom: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
          fontSize: '13px',
          lineHeight: `${halfHeaderHeight}px`
        }}
      ></div>
      {isDiscrete ? (
        <div
          style={{
            height: `${halfHeaderHeight}px`,
            fontSize: '10px',
            display: 'grid',
            gridTemplateColumns: `repeat(${totalDuration}, 1fr)`,
            textAlign: 'center',
            lineHeight: `${halfHeaderHeight}px`
          }}
        >
          {labelArray.map((label, index) => {
            return (
              <span
                key={index}
                style={{ outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}` }}
                title={`${label}`}
              >
                {label}
              </span>
            );
          })}
        </div>
      ) : (
        <canvas
          ref={tickRef}
          style={{ height: `${halfHeaderHeight}px`, width: '100%' }}
          width={width}
          height={halfHeaderHeight}
        ></canvas>
      )}
    </div>
  );
};

interface TimelineChartHeaderLabelsProps {
  width: number;
  height: number;
  activitiesTitle: string;
}

const TimelineChartHeaderLabels: React.FC<TimelineChartHeaderLabelsProps> = ({ width, height, activitiesTitle }) => {
  const style: CSSProperties = {
    width: width,
    height: height,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };
  return (
    <div style={style}>
      <div style={{ height: '50%' }}></div>
      <div style={{ height: '50%', textAlign: 'center', fontSize: '13px' }}>{activitiesTitle}</div>
    </div>
  );
};

export { TimelineChartDurationHeader, TimelineChartHeaderLabels, TimelineChartTaskHeader };
