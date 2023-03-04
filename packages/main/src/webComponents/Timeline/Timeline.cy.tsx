import { Timeline } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Timeline', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Timeline />);
    cy.get('[ui5-timeline]').should('exist');
  });

  cypressPassThroughTestsFactory(Timeline);
});
