import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { TextArea } from './index';

describe('TextArea', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TextArea />);
    cy.get('[ui5-textarea]').should('exist');
  });

  cypressPassThroughTestsFactory(TextArea);
});
