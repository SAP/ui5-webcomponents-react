import { createPassThroughPropsTest } from '@shared/tests/utils';
import { mount } from 'enzyme';
import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';
import { SideNavigationContext } from '@ui5/webcomponents-react/lib/SideNavigationContext';
import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState';
import React from 'react';

describe('SideNavigationListItem', () => {
  test('Basic', () => {
    const wrapper = mount(
      <SideNavigationContext.Provider
        value={{ expandedItems: [], selectedId: null, noIcons: false, openState: SideNavigationOpenState.Expanded }}
      >
        <SideNavigationListItem text="Overview" icon="home" id="home" />
      </SideNavigationContext.Provider>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  createPassThroughPropsTest(SideNavigationListItem);
});
