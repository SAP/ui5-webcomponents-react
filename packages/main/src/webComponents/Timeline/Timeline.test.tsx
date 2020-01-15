import { mountThemedComponent } from '@shared/tests/utils';
import { Timeline } from '@ui5/webcomponents-react/lib/Timeline';
import React from 'react';

describe('Timeline', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Timeline />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
