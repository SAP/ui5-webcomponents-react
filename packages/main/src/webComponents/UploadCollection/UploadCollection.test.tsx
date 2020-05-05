import { UploadCollection } from '@ui5/webcomponents-react/lib/UploadCollection';
import { mount } from 'enzyme';
import React from 'react';

describe('UploadCollection', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<UploadCollection />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
