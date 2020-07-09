import { mount } from 'enzyme';
import * as React from 'react';
import { MicroBarChart } from '../MicroBarChartOld';

const dataset = [
  { value: 10, label: 'Bar Number One' },
  { value: 100, label: 'Bar Number Two' }
];
//todo
describe('Micro Bar Chart', () => {
  test('Renders with data', () => {
    expect(mount(<MicroBarChart dataset={dataset} />).render()).toMatchSnapshot();
  });

  test('custom colors', () => {
    expect(mount(<MicroBarChart dataset={dataset} colors={['#f0ab00']} />)).toMatchSnapshot();
  });

  test('element selection', () => {
    expect(mount(<MicroBarChart dataset={dataset} visibleDatasetCount={1} />)).toMatchSnapshot();
  });

  test('maxWidth selection', () => {
    expect(mount(<MicroBarChart dataset={dataset} maxWidth={'200px'} />)).toMatchSnapshot();
  });
});
