import { mountThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { datasets, labels, singleDataset } from '../../test/resources/ChartProps';
import { BarChart } from './index';

describe('BarChart', () => {
  test('Renders with data', () => {
    mountThemedComponent(<BarChart labels={labels} datasets={singleDataset} />);
  });

  test('custom colors', () => {
    mountThemedComponent(<BarChart labels={labels} datasets={singleDataset} colors={['#f0ab00']} />);
  });

  test('valueAxisFormatter', () => {
    mountThemedComponent(<BarChart labels={labels} datasets={singleDataset} valueAxisFormatter={(d) => `${d}%`} />);
  });

  test('with Ref', () => {
    const ref = React.createRef();
    mountThemedComponent(<BarChart ref={ref} labels={labels} datasets={singleDataset} />);
    expect(ref.current.hasOwnProperty('chartInstance')).toBe(true);
  });

  test('stacked', () => {
    mountThemedComponent(
      <BarChart
        labels={labels}
        datasets={datasets}
        options={{ scales: { yAxes: [{ stacked: true }], xAxes: [{ stacked: true }] } }}
      />
    );
  });

  test('loading placeholder', () => {
    const wrapper = mountThemedComponent(<BarChart labels={labels} datasets={[]} loading />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
