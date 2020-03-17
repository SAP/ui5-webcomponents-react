import { mount } from 'enzyme';
import { Badge } from '@ui5/webcomponents-react/lib/Badge';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React from 'react';

describe('Badge', () => {
  test('Basic Test', () => {
    const wrapper = mount(<Badge>My Badge</Badge>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('with Icon', () => {
    const wrapper = mount(<Badge icon={<Icon name="employee" />}>My Badge</Badge>);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
