import { renderThemedComponent } from '@shared/tests/utils';
import { mount } from 'enzyme';
import * as React from 'react';
import { labels, singleDataset } from '../../resources/ChartProps';
import { ColumnChart } from './index';

describe('ColumnChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<ColumnChart labels={labels} datasets={singleDataset} />);
  });

  test('loading placeholder', () => {
    const wrapper = mount(<ColumnChart labels={labels} datasets={[]} loading />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
