import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import '@ui5/webcomponents-icons/dist/calendar.js';
import '@ui5/webcomponents-icons/dist/chain-link.js';
import '@ui5/webcomponents-icons/dist/group.js';
import '@ui5/webcomponents-icons/dist/history.js';
import '@ui5/webcomponents-icons/dist/home.js';
import '@ui5/webcomponents-icons/dist/locate-me.js';
import { SideNavigationItem } from '../SideNavigationItem';
import { SideNavigationSubItem } from '../SideNavigationSubItem';
import { SideNavigation } from './index';

describe('SideNavigation', () => {
  it('Basic Test (generated)', () => {
    cy.mount(
      <SideNavigation
        fixedItems={
          <>
            <SideNavigationItem text="Useful Links" icon="chain-link" />
            <SideNavigationItem text="History" icon="history" />
          </>
        }
      >
        <SideNavigationItem text="Home" icon="home" />
        <SideNavigationItem text="People" expanded icon="group">
          <SideNavigationSubItem text="From My Team" />
          <SideNavigationSubItem text="From Other Teams" />
        </SideNavigationItem>
        <SideNavigationItem text="Locations" icon="locate-me" selected />
        <SideNavigationItem text="Events" icon="calendar">
          <SideNavigationSubItem text="Local" />
          <SideNavigationSubItem text="Others" />
        </SideNavigationItem>
      </SideNavigation>
    );
    cy.get('[ui5-side-navigation]').should('exist');
  });

  cypressPassThroughTestsFactory(SideNavigation);
});
