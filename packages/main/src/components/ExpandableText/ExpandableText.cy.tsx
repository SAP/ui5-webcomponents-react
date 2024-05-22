import { ExpandableText } from './index.js';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

const longText = `             If renderWhitespace is set to true, there will be thirteen white spaces in front and after this sentence.             Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`;

function getText(text) {
  cy.findByTestId('et').should('be.visible').and('have.text', text);
}

describe('ExpandableText', () => {
  it('maxCharacters', () => {
    [false, true].forEach((renderWhitespace) => {
      cy.mount(
        <ExpandableText data-testid="et" renderWhitespace={renderWhitespace}>
          {longText}
        </ExpandableText>
      );
      getText(
        renderWhitespace
          ? '             If renderWhitespace is set to true, there will be thirteen white spaces in front and af… Show more'
          : 'If renderWhitespace is set to true, there will be thirteen white spaces in front and after this sent… Show more'
      );
      cy.mount(
        <ExpandableText
          data-testid="et"
          maxCharacters={200}
          style={{ width: '300px' }}
          renderWhitespace={renderWhitespace}
        >
          {longText}
        </ExpandableText>
      );
      getText(
        renderWhitespace
          ? '             If renderWhitespace is set to true, there will be thirteen white spaces in front and after this sentence.             Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonu… Show more'
          : 'If renderWhitespace is set to true, there will be thirteen white spaces in front and after this sentence. Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt… Show more'
      );

      cy.mount(
        <ExpandableText data-testid="et" maxCharacters={2000} renderWhitespace={renderWhitespace}>
          {longText}
        </ExpandableText>
      );
      getText(
        '             If renderWhitespace is set to true, there will be thirteen white spaces in front and after this sentence.             Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'
      );
    });
  });

  it('expand/collapse', () => {
    cy.mount(<ExpandableText data-testid="et">{longText}</ExpandableText>);
    cy.findByText('Show more').click();
    getText(
      '             If renderWhitespace is set to true, there will be thirteen white spaces in front and after this sentence.             Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Show less'
    );
    cy.findByText('Show less').click();
    getText(
      'If renderWhitespace is set to true, there will be thirteen white spaces in front and after this sent… Show more'
    );
  });

  it('showOverflowInPopover', () => {
    cy.mount(
      <ExpandableText data-testid="et" showOverflowInPopover>
        {longText}
      </ExpandableText>
    );
    cy.findByText('Show more').should('have.attr', 'accessible-name', 'Show the full text').click();

    getText(
      'If renderWhitespace is set to true, there will be thirteen white spaces in front and after this sent… Show less'
    );
    cy.get('[ui5-responsive-popover]').should('have.attr', 'open');
    cy.findByText('Show less').should('have.attr', 'accessible-name', 'Close the popover').click();
    cy.realPress('Escape');
    getText(
      'If renderWhitespace is set to true, there will be thirteen white spaces in front and after this sent… Show more'
    );
    cy.findByText('Show more').should('have.attr', 'accessible-name', 'Show the full text');
  });

  cypressPassThroughTestsFactory(ExpandableText);
});
