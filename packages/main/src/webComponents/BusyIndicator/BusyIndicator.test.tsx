import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';

describe('BusyIndicator', () => {
  test('Basic Test', () => {
    const wrapper = mountThemedComponent(<BusyIndicator active />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Inactive', () => {
    const wrapper = mountThemedComponent(<BusyIndicator />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Size Medium', () => {
    const wrapper = mountThemedComponent(<BusyIndicator active size={BusyIndicatorSize.Medium} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Size Small', () => {
    const wrapper = mountThemedComponent(<BusyIndicator active size={BusyIndicatorSize.Small} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
