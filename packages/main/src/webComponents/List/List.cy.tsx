import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Button } from '../Button';
import { CustomListItem } from '../CustomListItem';
import { StandardListItem } from '../StandardListItem';
import { List } from './index';

describe('List', () => {
  it('Basic Test (generated)', () => {
    cy.mount(
      <List>
        {' '}
        <StandardListItem>Test 1</StandardListItem>
        <CustomListItem>
          Test 2<Button>a Button</Button>
        </CustomListItem>
      </List>
    );
    cy.get('[ui5-list]').should('exist');
  });

  cypressPassThroughTestsFactory(List);
});
