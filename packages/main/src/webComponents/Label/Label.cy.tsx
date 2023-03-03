import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Label } from './index';

describe('Label', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Label />);
    cy.get('[ui5-label]').should('exist');
  });

  cypressPassThroughTestsFactory(Label);
});
