import { createPassThroughPropsTest, mountThemedComponent } from '@shared/tests/utils';
import { ObjectStatus } from '@ui5/webcomponents-react/lib/ObjectStatus';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

const testFactory = () => {
  Object.values(ValueState).forEach((state) => {
    test(`ObjectStatus: state: ${state}`, () => {
      const wrapper = mountThemedComponent(<ObjectStatus state={state} showDefaultIcon />);
      expect(wrapper.render()).toMatchSnapshot();
    });
  });
};

describe('ObjectStatus', () => {
  test('Render without Crashing', () => {
    const wrapper = mountThemedComponent(
      <ObjectStatus state={ValueState.Error} showDefaultIcon>
        Hello
      </ObjectStatus>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Text Deprecation', () => {
    const wrapper = mountThemedComponent(
      <ObjectStatus state={ValueState.Error} showDefaultIcon>
        Hello
      </ObjectStatus>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  testFactory();

  test('Renders correct ObjectStatus text', () => {
    const el = 'My Text';
    const wrapper = mountThemedComponent(<ObjectStatus>{el}</ObjectStatus>);
    expect(wrapper.text()).toEqual(el);
  });

  createPassThroughPropsTest(ObjectStatus);
});
