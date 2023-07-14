import { Text } from './index.js';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('Text', () => {
  it('wrapping & renderWhiteSpace', () => {
    cy.mount(<Text style={{ width: '100px' }}>Long Text {'       '}Content</Text>);
    cy.findByText('Long Text Content').should('have.css', 'white-space', 'pre-line');
    cy.mount(
      <Text style={{ width: '100px' }} wrapping={false}>
        Long Text {'       '}Content
      </Text>
    );
    cy.findByText('Long Text Content')
      .should('have.css', 'white-space', 'nowrap')
      .should('have.css', 'text-overflow', 'ellipsis')
      .should('have.css', 'overflow', 'hidden');
    cy.mount(
      <Text style={{ width: '100px' }} renderWhitespace>
        Long Text {'       '}Content
      </Text>
    );
    cy.findByText('Long Text Content').should('have.css', 'white-space', 'pre-wrap');
    cy.mount(
      <Text style={{ width: '100px' }} renderWhitespace wrapping={false}>
        Long Text {'       '}Content
      </Text>
    );
    cy.findByText('Long Text Content')
      .should('have.css', 'white-space', 'pre')
      .should('have.css', 'text-overflow', 'ellipsis')
      .should('have.css', 'overflow', 'hidden');
  });

  cypressPassThroughTestsFactory(Text);
});
