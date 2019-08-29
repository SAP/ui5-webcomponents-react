import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { BusyIndicatorType } from '../..';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';

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
    const wrapper = mountThemedComponent(<BusyIndicator active size={BusyIndicatorType.Medium} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Size Small', () => {
    const wrapper = mountThemedComponent(<BusyIndicator active size={BusyIndicatorType.Small} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
