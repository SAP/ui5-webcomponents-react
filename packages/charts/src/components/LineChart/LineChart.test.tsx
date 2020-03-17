import { renderThemedComponent } from '@shared/tests/utils';
import { mount } from 'enzyme';
import * as React from 'react';
import { labels, singleDataset } from '../../resources/ChartProps';
import { LineChart } from './index';

describe('LineChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<LineChart labels={labels} datasets={singleDataset} />);
  });

  test('loading placeholder', () => {
    const wrapper = mount(<LineChart labels={labels} datasets={[]} loading />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
