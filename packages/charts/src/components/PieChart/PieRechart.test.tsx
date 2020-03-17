import { renderThemedComponent } from '@shared/tests/utils';
import { mount } from 'enzyme';
import * as React from 'react';
import { dataset, label } from '../../resources/RechartProps';
import { PieChart } from './PieChart';

describe('PieChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<PieChart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mount(<PieChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
