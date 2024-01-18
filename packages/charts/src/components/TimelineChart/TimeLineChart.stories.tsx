import type { Meta, StoryObj } from '@storybook/react';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { Invention, TimingFigure } from './examples/Annotations.js';
import { dummyDataSet, dummyDiscreteDataSet, inventionDataset, schedulingEDFData } from './examples/Dataset.js';
import { TimelineChart } from './TimelineChart.js';
import { TimelineChartAnnotation } from './TimelineChartAnnotation.js';

const meta = {
  title: 'TimelineChart (experimental)',
  component: TimelineChart,
  argTypes: {
    dataset: {
      control: { disable: true }
    }
  }
} satisfies Meta<typeof TimelineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dataset: dummyDiscreteDataSet,
    totalDuration: 36,
    isDiscrete: true,
    start: 1,
    showConnection: true
  }
};

export const WithAnnotations: Story = {
  args: {
    dataset: schedulingEDFData,
    totalDuration: 15,
    showConnection: true,
    showAnnotation: true,
    rowHeight: 35,
    unit: 'ms',
    valueFormat: (x) => x.toFixed(2)
  },
  render(props) {
    return (
      <TimelineChart
        {...props}
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
      />
    );
  }
};

export const WithAnnotationsOnly: Story = {
  args: {
    dataset: inventionDataset,
    totalDuration: 6000,
    showAnnotation: true,
    rowHeight: 80,
    valueFormat: (x) => x.toFixed(1)
  },
  render(props) {
    return (
      <TimelineChart
        {...props}
        annotations={
          <>
            <TimelineChartAnnotation
              rowIndex={0}
              figure={
                <>
                  <Invention
                    name={'internet'}
                    rowHeight={80}
                    time={50}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_9}
                  />
                  <Invention
                    name={'penicillin'}
                    rowHeight={80}
                    time={82}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_2}
                  />
                  <Invention
                    name={'airplane'}
                    rowHeight={80}
                    time={118}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_1}
                  />
                  <Invention
                    name={'lightbulb'}
                    rowHeight={80}
                    time={143}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_3}
                  />
                  <Invention
                    name={'telephone'}
                    rowHeight={80}
                    time={146}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_4}
                  />
                  <Invention
                    name={'steamengine'}
                    rowHeight={80}
                    time={258}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_5}
                  />
                  <Invention
                    name={'printingpress'}
                    rowHeight={80}
                    time={582}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_6}
                  />
                  <Invention
                    name={'compass'}
                    rowHeight={80}
                    time={1100}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_7}
                  />
                  <Invention
                    name={'wheel'}
                    rowHeight={80}
                    time={5500}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_8}
                  />
                </>
              }
            />
          </>
        }
      />
    );
  }
};

export const WithMoreCustomization: Story = {
  args: {
    dataset: dummyDataSet,
    totalDuration: 150,
    showConnection: true,
    showAnnotation: true,
    unit: 'ms'
  }
};

export const LoadingPlaceholder: Story = {
  render() {
    return <TimelineChart />;
  }
};
