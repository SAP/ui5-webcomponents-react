import { Label } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Label', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Label />);
    cy.get('[ui5-label]').should('exist');
  });

  cypressPassThroughTestsFactory(Label);
});
