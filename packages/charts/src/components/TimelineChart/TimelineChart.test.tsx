import assert from 'assert';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { TimelineChartBody } from './chartbody/TimelineChartBody';
import TimelineChartRowGroup from './chartbody/TimelineChartRow';
import { TimingFigure } from './examples/Annotations';
import { dummyDataSet, illegalConnDataset, illegalConnDataset2, schedulingEDFData } from './examples/Dataset';
import { TimelineChart } from './TimelineChart';
import { TimelineChartAnnotation } from './TimelineChartAnnotation';
import { ITimelineChartRow } from './types/TimelineChartTypes';
import { DEFAULT_CHART_VERTICAL_COLS } from './util/constants';
import { IllegalConnectionError, InvalidDiscreteLabelError } from './util/error';

describe('TimelineChart', () => {
  it('renders PlaceHolder without dataset', () => {
    const { asFragment, container } = render(<TimelineChart totalDuration={10} />);
    expect(container.childElementCount).toBe(1);
    expect(container.firstElementChild?.tagName).toBe('svg');
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders TimelineChart with dataset', () => {
    const { asFragment, container } = render(<TimelineChart dataset={dummyDataSet} totalDuration={150} />);
    expect(container.childElementCount).toBe(1);
    expect(container.firstElementChild?.id).toBe('timeline-chart');
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls the valueFormat callback', () => {
    const valueFormat = jest.fn((x: number) => x.toString());
    const { asFragment } = render(
      <TimelineChart dataset={dummyDataSet} totalDuration={150} valueFormat={valueFormat} />
    );
    expect(valueFormat).toBeCalledTimes(DEFAULT_CHART_VERTICAL_COLS + 1);
    expect(asFragment()).toMatchSnapshot();
  });

  it('does not render connection layer when showConnection is false', () => {
    const { asFragment, container } = render(<TimelineChart dataset={dummyDataSet} totalDuration={150} />);
    expect(container.querySelectorAll('.timeline-chart-connection-layer').length).toBe(0);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders connection layer when showConnection is set true', () => {
    const { asFragment, container } = render(
      <TimelineChart dataset={dummyDataSet} totalDuration={150} showConnection />
    );
    expect(container.querySelectorAll('.timeline-chart-connection-layer').length).toBe(1);
    expect(asFragment()).toMatchSnapshot();
  });

  it('does not render annotation layer when showAnnotation is false', () => {
    const { asFragment, container } = render(<TimelineChart dataset={dummyDataSet} totalDuration={150} />);
    expect(container.querySelectorAll('.timeline-chart-annotation-layer').length).toBe(0);
    expect(asFragment()).toMatchSnapshot();
  });

  it('does not render annotation layer when there are no annotations', () => {
    const { asFragment, container } = render(
      <TimelineChart dataset={dummyDataSet} totalDuration={150} showAnnotation />
    );
    expect(container.querySelectorAll('.timeline-chart-annotation-layer').length).toBe(0);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders annotation layer when showRelationship is set true and annotations added', () => {
    const component = (
      <TimelineChart
        dataset={schedulingEDFData}
        totalDuration={15}
        rowHeight={35}
        annotations={
          <>
            <TimelineChartAnnotation
              rowIndex={0}
              rowHeight={35}
              figure={<TimingFigure arrival={0} period={4} deadline={4} totalDuration={15} />}
            />
            <TimelineChartAnnotation
              rowIndex={1}
              rowHeight={35}
              figure={<TimingFigure arrival={4} period={5} deadline={5} totalDuration={15} />}
            />
            <TimelineChartAnnotation
              rowIndex={2}
              rowHeight={35}
              figure={<TimingFigure arrival={0} period={7} deadline={6} totalDuration={15} />}
            />
          </>
        }
        showAnnotation
      />
    );
    const { asFragment, container } = render(component);
    expect(container.querySelectorAll('.timeline-chart-annotation-layer').length).toBe(1);
    expect(asFragment()).toMatchSnapshot();
  });

  it('throws InvalidDiscreteLabelError', () => {
    const component = (
      <TimelineChart dataset={schedulingEDFData} totalDuration={15} discreteLabels={['label1', 'label2']} isDiscrete />
    );
    expect(() => render(component)).toThrow(InvalidDiscreteLabelError);
  });

  it('throws IllegalConnectionError', () => {
    const component = <TimelineChart dataset={illegalConnDataset} totalDuration={10} showConnection />;
    expect(() => render(component)).toThrow(IllegalConnectionError);
    const component2 = <TimelineChart dataset={illegalConnDataset2} totalDuration={10} showConnection />;
    expect(() => render(component2)).toThrow(IllegalConnectionError);
  });
});

describe('TimelineChartAnotation', () => {
  it('postions itself correctly in the parent', () => {
    const component = <TimelineChartAnnotation rowIndex={2} rowHeight={20} figure={<div></div>} />;
    const { asFragment, container } = render(component);
    expect(container.children.length).toBe(1);
    expect((container.firstElementChild as HTMLDivElement).style.top).toBe('40px');
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('TimelineChartRow', () => {
  it('calls showTooltip and hideTooltip when mouse moves on task or milestone', () => {
    const showTooltip = jest.fn(() => {});
    const hideTooltip = jest.fn(() => {});
    const rowData: ITimelineChartRow = {
      label: 'row',
      tasks: [
        {
          start: 0,
          duration: 5
        }
      ],
      milestones: [
        {
          start: 7
        }
      ]
    };

    const component = (
      <TimelineChartRowGroup
        timelineStart={0}
        totalDuration={10}
        rowHeight={40}
        dataset={[rowData]}
        showTooltip={showTooltip}
        hideTooltip={hideTooltip}
        postRender={() => {}}
      />
    );

    const { container } = render(component);
    const task = container.querySelector('.timeline-chart-task');
    assert(task);
    fireEvent.mouseMove(task);
    expect(showTooltip).toBeCalled();
    fireEvent.mouseLeave(task);
    expect(hideTooltip).toBeCalled();

    const milestone = container.querySelector('.timeline-chart-milestone');
    assert(milestone);
    fireEvent.mouseMove(milestone);
    expect(showTooltip).toBeCalled();
    fireEvent.mouseLeave(milestone);
    expect(hideTooltip).toBeCalled();
  });
});

describe('TimelineChartBody', () => {
  it('shows tooltip when task is hovered', () => {
    const { container } = render(<TimelineChart dataset={dummyDataSet} totalDuration={150} />);
    expect(container.querySelectorAll('.timeline-chart-tooltip').length).toBe(0);
    const task = container.querySelector('.timeline-chart-task');
    assert(task);
    fireEvent.mouseMove(task);
    expect(container.querySelectorAll('.timeline-chart-tooltip').length).toBe(1);
    fireEvent.mouseLeave(task);
    expect(container.querySelectorAll('.timeline-chart-tooltip').length).toBe(0);
  });

  it('scales when the mouse wheel event happens', () => {
    const scaleChart = jest.fn(() => {});
    const { container } = render(
      <TimelineChartBody
        start={0}
        rowHeight={30}
        dataset={dummyDataSet}
        totalDuration={150}
        numOfItems={3}
        isDiscrete={false}
        unit={''}
        onScale={scaleChart}
        resetScroll={() => {}}
      />
    );
    const body = container.querySelector('.timeline-chart-body');
    assert(body);
    fireEvent.wheel(body);
    expect(scaleChart).toBeCalledTimes(1);
  });
});
