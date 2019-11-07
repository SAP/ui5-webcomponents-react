import React from 'react';
import { Timeline } from '@ui5/webcomponents-react/lib/Timeline';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Timeline', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Timeline />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
