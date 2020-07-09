import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MicroBarChart } from '@ui5/webcomponents-react-charts/lib/MicroBarChart';

const dataset = [
  { value: 10, label: 'Bar Number One' },
  { value: 100, label: 'Bar Number Two' },
  { value: 70, label: 'Bar Number Three' }
];

const text1 = 'Bar Number One';
const text2 = 'Bar Number Two';
const text3 = 'Bar Number Three';

describe('Micro Bar Chart', () => {
  test('Render with default Props', () => {
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

  test('With formatted dimension', () => {
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

  test('With custom colors', () => {
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

  test('Bar click', async () => {
    let internalDataset = dataset;

    const { getByText, findByText, rerender } = render(
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
});
