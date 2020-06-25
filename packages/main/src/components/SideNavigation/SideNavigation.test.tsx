import { createPassThroughPropsTest } from '@shared/tests/utils';
import { act, fireEvent, render, screen, cleanup } from '@tests/index';
import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';
import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';
import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState';
import { mount } from 'enzyme';
import React, { createRef } from 'react';
import { SideNavigationRef } from './index';

const sideNavigationContent = (
  <>
    <SideNavigationListItem text="Overview" icon="home" id="home" tooltip="Nav To Home Tooltip" />
    <SideNavigationListItem text="Calendar" icon="calendar" id="calendar" />
    <SideNavigationListItem text="Customers" icon="employee" id="customers" />
    <SideNavigationListItem text="Sales" icon="lead" id="sales">
      <SideNavigationListItem text="My Opportunities" icon="home" id="sales-opportunities" />
      <SideNavigationListItem text="My Leads" icon="home" id="sales-leads" />
      <SideNavigationListItem text="My CPQS" icon="home" id="sales-cpqs" />
    </SideNavigationListItem>
    <SideNavigationListItem text="Deliveries" icon="add-product" id="delivieries" />
  </>
);

describe('SideNavigation', () => {
  afterEach(cleanup);

  test('expand and collapse via ref', async () => {
    const ref = createRef<SideNavigationRef>();
    render(<SideNavigation ref={ref}>{sideNavigationContent}</SideNavigation>);

    // all items should be expanded initially
    expect(screen.getByText('My Leads')).toBeInTheDocument();

    // now collapse sales
    act(() => {
      ref.current.collapseItem('sales');
    });
    expect(screen.queryByText('My Leads')).not.toBeInTheDocument();

    // expand it again
    act(() => {
      ref.current.expandItem('sales');
    });
    expect(screen.getByText('My Leads')).toBeInTheDocument();

    // toggle
    act(() => {
      ref.current.toggleItem('sales');
    });
    expect(screen.queryByText('My Leads')).not.toBeInTheDocument();
    act(() => {
      ref.current.toggleItem('sales');
    });
    expect(screen.getByText('My Leads')).toBeInTheDocument();
  });

  test('Expanded', () => {
    const wrapper = mount(
      <SideNavigation
        openState={SideNavigationOpenState.Expanded}
        selectedId={'sales-leads'}
        footerItems={[
          <SideNavigationListItem id="1" text="Legal Information" icon="compare" />,
          <SideNavigationListItem id="2" text="Useful Links" icon="chain-link" />
        ]}
      >
        {sideNavigationContent}
        <SideNavigationListItem text="Support Tickets" icon="add-product" id="support" />
      </SideNavigation>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Expanded without Icons', () => {
    const wrapper = mount(
      <SideNavigation
        openState={SideNavigationOpenState.Expanded}
        selectedId={'sales-leads'}
        noIcons
        footerItems={[
          <SideNavigationListItem id="1" text="Legal Information" icon="compare" />,
          <SideNavigationListItem id="2" text="Useful Links" icon="chain-link" />
        ]}
      >
        {sideNavigationContent}
      </SideNavigation>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Condensed', () => {
    const wrapper = mount(
      <SideNavigation
        openState={SideNavigationOpenState.Condensed}
        selectedId={'sales-leads'}
        footerItems={[
          <SideNavigationListItem id="1" text="Legal Information" icon="compare" />,
          <SideNavigationListItem id="2" text="Useful Links" icon="chain-link" />
        ]}
      >
        {sideNavigationContent}
      </SideNavigation>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test.skip('item selection', async () => {
    const onListItemSelect = jest.fn();
    const onListItemClick = jest.fn();

    render(
      <SideNavigation selectedId="sales-leads" onItemClick={onListItemClick} onItemSelect={onListItemSelect}>
        {sideNavigationContent}
      </SideNavigation>
    );

    const customers = screen.getByText('Customers');
    fireEvent.click(customers.parentElement.shadowRoot.querySelector('li'));

    // screen.debug();

    expect(onListItemClick).toBeCalled();
    expect(onListItemSelect).toBeCalled();

    fireEvent.click(screen.getByText('Customers'));
    expect(onListItemClick).toBeCalledTimes(2);
    expect(onListItemSelect).toBeCalledTimes(1);
  });

  createPassThroughPropsTest(SideNavigation, { children: sideNavigationContent });
});
