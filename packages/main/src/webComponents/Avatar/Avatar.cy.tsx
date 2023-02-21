import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Avatar } from './index';

describe('Avatar', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Avatar />);
    cy.get('[ui5-avatar]').should('exist');
  });

  cypressPassThroughTestsFactory(Avatar);
});
