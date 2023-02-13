import { createChartRenderTest, createLoadingPlaceholderTest, createOnClickChartTest } from '@shared/tests/chartUtils';
import { fireEvent, render, screen } from '@shared/tests/index';
import { createCustomPropsTest } from '@shared/tests/utils';
import * as React from 'react';
import { MicroBarChart } from './MicroBarChart.js';

const text1 = 'January';
const text2 = 'February';
const text3 = 'March';

const dataset = [
  { value: 10, label: text1 },
  { value: 100, label: text2 },
  { value: 70, label: text3 }
];

describe('Micro Bar Chart', () => {
  it('Render with default Props', () => {
    const utils = render(
      <MicroBarChart
        dimension={{
          accessor: 'label'
        }}
        measure={{
          accessor: 'value'
        }}
        dataset={dataset}
      />
    );
    expect(screen.getByText(text1).textContent).toEqual(text1);
    expect(screen.getByText(text2).textContent).toEqual(text2);
    expect(screen.getByText(text3).textContent).toEqual(text3);

    expect(utils.asFragment()).toMatchSnapshot();
  });

  it('With formatted dimension', () => {
    render(
      <MicroBarChart
        dimension={{
          accessor: 'label',
          formatter: (label) => `${label} - formatted`
        }}
        measure={{
          accessor: 'value'
        }}
        dataset={dataset}
      />
    );
    expect(screen.getByText('January - formatted').textContent).toEqual('January - formatted');
    expect(screen.getByText('February - formatted').textContent).toEqual('February - formatted');
  });

  it('With custom colors', () => {
    expect(
      render(
        <MicroBarChart
          dimension={{
            accessor: 'label',
            formatter: (label) => `${label} - formatted`
          }}
          measure={{
            accessor: 'value',
            colors: ['black', 'yellow']
          }}
          dataset={dataset}
        />
      ).asFragment()
    ).toMatchSnapshot();
  });

  it('Bar click', () => {
    let internalDataset = dataset;

    const { getByText, rerender } = render(
      <MicroBarChart
        dimension={{
          accessor: 'label'
        }}
        onDataPointClick={() =>
          (internalDataset = [
            { value: 10, label: 'January' },
            { value: 100, label: 'February - clicked' },
            { value: 70, label: 'March' }
          ])
        }
        measure={{
          accessor: 'value'
        }}
        dataset={internalDataset}
      />
    );
    fireEvent.click(getByText('February'));

    rerender(
      <MicroBarChart
        dimension={{
          accessor: 'label'
        }}
        measure={{
          accessor: 'value'
        }}
        dataset={internalDataset}
      />
    );
    expect(screen.getByText('February - clicked').textContent).toEqual('February - clicked');
  });

  createChartRenderTest(MicroBarChart, {
    dataset,
    measure: {
      accessor: 'value'
    },
    dimension: {
      accessor: 'label'
    }
  });

  createOnClickChartTest(MicroBarChart, {
    dataset,
    noLegend: true,
    measure: {
      accessor: 'value'
    },
    dimension: {
      accessor: 'label'
    }
  });

  createLoadingPlaceholderTest(MicroBarChart, { dimension: [], measure: [] });

  createCustomPropsTest(MicroBarChart, { dimension: [], measure: [] });
});
