import { mountThemedComponent } from '@shared/tests/utils';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';
import React from 'react';

describe('SideNavigationListItem', () => {
  test('Basic', () => {
    const wrapper = mountThemedComponent(<SideNavigationListItem text="Overview" icon="home" id="home" />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('custom class name and style', () => {
    const wrapper = mountThemedComponent(
      <SideNavigationListItem
        text="Overview"
        icon="home"
        id="home"
        className="myClass"
        style={{ backgroundColor: 'pink' }}
      />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('compact size', () => {
    const wrapper = mountThemedComponent(<SideNavigationListItem text="Overview" icon="home" id="home" />, {
      contentDensity: ContentDensity.Compact
    });
    expect(wrapper.render()).toMatchSnapshot();
  });
});
