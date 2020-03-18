import { mount } from 'enzyme';
import * as React from 'react';
import { datasets, labels, singleDataset } from '../../resources/ChartProps';
import { BarChart } from './index';

describe('BarChart', () => {
  test('Renders with data', () => {
    mount(<BarChart labels={labels} datasets={singleDataset} />);
  });

  test('custom colors', () => {
    mount(<BarChart labels={labels} datasets={singleDataset} colors={['#f0ab00']} />);
  });

  test('valueAxisFormatter', () => {
    mount(<BarChart labels={labels} datasets={singleDataset} valueAxisFormatter={(d) => `${d}%`} />);
  });

  test('with Ref', () => {
    const ref = React.createRef();
    mount(<BarChart ref={ref} labels={labels} datasets={singleDataset} />);
    expect(ref.current.hasOwnProperty('chartInstance')).toBe(true);
  });

  test('stacked', () => {
    mount(
      <BarChart
        labels={labels}
        datasets={datasets}
        options={{ scales: { yAxes: [{ stacked: true }], xAxes: [{ stacked: true }] } }}
      />
    );
  });

  test('loading placeholder', () => {
    const wrapper = mount(<BarChart labels={labels} datasets={[]} loading />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
