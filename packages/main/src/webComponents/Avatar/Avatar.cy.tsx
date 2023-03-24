import { Avatar } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Avatar', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Avatar />);
    cy.get('[ui5-avatar]').should('exist');
  });

  cypressPassThroughTestsFactory(Avatar);
});
