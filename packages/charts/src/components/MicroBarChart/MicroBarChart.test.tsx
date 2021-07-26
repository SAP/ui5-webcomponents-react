import * as React from 'react';
import { render, screen, fireEvent } from '@shared/tests/index';
import { MicroBarChart } from '@ui5/webcomponents-react-charts/dist/MicroBarChart';
import { createChartRenderTest, createLoadingPlaceholderTest } from '@shared/tests/chartUtils';
import { createPassThroughPropsTest } from '@shared/tests/utils';

const text1 = 'Bar Number One';
const text2 = 'Bar Number Two';
const text3 = 'Bar Number Three';

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
    expect(screen.getByText('Bar Number One - formatted').textContent).toEqual('Bar Number One - formatted');
    expect(screen.getByText('Bar Number Two - formatted').textContent).toEqual('Bar Number Two - formatted');
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

  it('Bar click', async () => {
    let internalDataset = dataset;

    const { getByText, rerender } = render(
      <MicroBarChart
        dimension={{
          accessor: 'label'
        }}
        onDataPointClick={() =>
          (internalDataset = [
            { value: 10, label: 'Bar Number One' },
            { value: 100, label: 'Bar Number Two - clicked' },
            { value: 70, label: 'Bar Number Three' }
          ])
        }
        measure={{
          accessor: 'value'
        }}
        dataset={internalDataset}
      />
    );
    fireEvent.click(getByText('Bar Number Two'));

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
    expect(screen.getByText('Bar Number Two - clicked').textContent).toEqual('Bar Number Two - clicked');
  });

  createChartRenderTest(MicroBarChart, {
    dataset,
    measures: {
      accessor: 'value'
    },
    dimension: {
      accessor: 'label'
    }
  });

  createLoadingPlaceholderTest(MicroBarChart, { dimensions: [], measures: [] });

  createPassThroughPropsTest(MicroBarChart, { dimensions: [], measures: [] });
});
