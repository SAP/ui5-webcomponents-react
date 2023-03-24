import addIcon from '@ui5/webcomponents-icons/dist/add.js';
import { Icon } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Icon', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<Icon name={addIcon} />);
    cy.get('[ui5-icon]').should('exist');
  });

  cypressPassThroughTestsFactory(Icon);
});
