import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Tab } from '../Tab';
import { TabContainer } from './index';

describe('TabContainer', () => {
  it('Basic Test (generated)', () => {
    cy.mount(
      <TabContainer>
        <Tab text={'Tab 1'} />
      </TabContainer>
    );
    cy.get('[ui5-tabcontainer]').should('exist');
  });

  cypressPassThroughTestsFactory(TabContainer, { children: <Tab text={'Tab 1'} /> });
});
