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

  it('maxLines', () => {
    cy.mount(
      <Text data-testid="text" style={{ width: '300px' }}>
        {longText}
      </Text>
    );
    cy.findByTestId('text').invoke('outerHeight').should('equal', 240);

    cy.mount(
      <Text data-testid="text" style={{ width: '300px' }} maxLines={0}>
        {longText}
      </Text>
    );
    cy.findByTestId('text').invoke('outerHeight').should('equal', 240);
    cy.mount(
      <Text data-testid="text" style={{ width: '300px' }} maxLines={1}>
        {longText}
      </Text>
    );
    cy.findByTestId('text').invoke('outerHeight').should('equal', 16);
    cy.mount(
      <Text data-testid="text" style={{ width: '300px' }} maxLines={4}>
        {longText}
      </Text>
    );
    cy.findByTestId('text').invoke('outerHeight').should('equal', 64);
  });

  it('emptyIndicator', () => {
    cy.mount(<Text data-testid="text" />);
    cy.findByTestId('text').children().should('have.length', 0);
    cy.mount(<Text data-testid="text" emptyIndicator />);
    cy.findByTestId('text').children().should('have.length', 2);
    cy.findByText('–').should('be.visible');
  });

  it('hyphenated', () => {
    cy.mount(<Text>Text</Text>);
    cy.findByText('Text').should('not.have.css', 'hyphens', 'auto');
    cy.mount(<Text hyphenated>Text</Text>);
    cy.findByText('Text').should('have.css', 'hyphens', 'auto');
  });

  cypressPassThroughTestsFactory(Text);
});

const longText = `If "renderWhitespace" is set to true, there will be thirteen white spaces after this sentence.             Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`;
