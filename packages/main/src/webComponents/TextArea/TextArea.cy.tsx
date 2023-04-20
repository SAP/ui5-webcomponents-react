import { TextArea } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('TextArea', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TextArea />);
    cy.get('[ui5-textarea]').should('exist');
  });

  cypressPassThroughTestsFactory(TextArea);
});
