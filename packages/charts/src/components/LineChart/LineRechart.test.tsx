import { renderThemedComponent } from '@shared/tests/utils';
import { mount } from 'enzyme';
import * as React from 'react';
import { dataset, label } from '../../resources/RechartProps';
import { LineChart } from './LineChart';

describe('LineChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<LineChart width={'100%'} dataset={dataset} labelKey={label} />);
  });

  test('loading placeholder', () => {
    const wrapper = mount(<LineChart width={'50%'} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
