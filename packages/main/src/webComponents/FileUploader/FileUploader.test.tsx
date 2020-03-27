import { mount } from 'enzyme';
import React from 'react';
import { FileUploader } from '@ui5/webcomponents-react/lib/FileUploader';

describe('FileUploader', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<FileUploader />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
