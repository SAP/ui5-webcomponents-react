import { mount } from 'enzyme';
import * as React from 'react';
import { dataset, label } from '../../resources/RechartProps';
import { RadarChart } from './RadarChart';

describe('RadarChart', () => {
  test('Renders with data', () => {
    expect(mount(<RadarChart width={'100%'} dataset={dataset} labelKey={label} />).render()).toMatchSnapshot();
  });

  test('loading placeholder', () => {
    const wrapper = mount(<RadarChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
