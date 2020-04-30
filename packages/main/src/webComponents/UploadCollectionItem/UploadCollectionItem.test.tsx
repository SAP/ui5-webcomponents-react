import { UploadCollectionItem } from '@ui5/webcomponents-react/lib/UploadCollectionItem';
import { mount } from 'enzyme';
import React from 'react';

describe('UploadCollectionItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<UploadCollectionItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
