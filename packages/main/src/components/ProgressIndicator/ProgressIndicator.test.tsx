import { createPassThroughPropsTest } from '@shared/tests/utils';
import { mount } from 'enzyme';
import { ProgressIndicator } from '@ui5/webcomponents-react/lib/ProgressIndicator';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

const testFactory = () => {
  Object.values(ValueState).forEach((state) => {
    test(`ProgressIndicator with state ${state}`, () => {
      const wrapper = mount(<ProgressIndicator state={state} />);
      expect(wrapper.render()).toMatchSnapshot();
    });
  });
};

describe('ProgressIndicator', () => {
  test('Custom', () => {
    const wrapper = mount(
      <ProgressIndicator displayValue="sdf" style={{ width: '50%', height: '50%' }} percentValue={40} />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('State', () => {
    const wrapper = mount(<ProgressIndicator percentValue={85} state={ValueState.Error} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  testFactory();

  createPassThroughPropsTest(ProgressIndicator);
});
