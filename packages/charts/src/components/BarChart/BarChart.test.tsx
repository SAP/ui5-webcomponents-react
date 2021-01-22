import { screen, render, fireEvent } from '@shared/tests';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { BarChart } from './BarChart';

const dimensions = [
  {
    accessor: 'name',
    interval: 0
  }
];
const measures = [
  {
    accessor: 'users',
    label: 'Users',
    formatter: (val) => val.toLocaleString()
  },
  {
    accessor: 'sessions',
    label: 'Active Sessions',
    formatter: (val) => `${val} sessions`,
    hideDataLabel: true
  },
  {
    accessor: 'volume',
    label: 'Vol.'
  }
];

describe('BarChart', () => {
  test('Renders with data', () => {
    const utils = render(<BarChart dataset={complexDataSet} dimensions={dimensions} measures={measures} />);
    expect(utils.asFragment()).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = render(<BarChart dimensions={[]} measures={[]} />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  test('onLegendClick', () => {
    const cb = jest.fn();
    render(<BarChart dataset={complexDataSet} dimensions={dimensions} measures={measures} onLegendClick={cb} />);
    fireEvent.click(screen.getByText('Users'));
    expect(cb).toBeCalled();
    expect(cb.mock.calls[0][0].detail.dataKey).toEqual('users');
  });
});
