import { ExpandableText } from './index.js';

const longText = `             If renderWhitespace is set to true, there will be thirteen white spaces in front and after this sentence.             Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`;

describe('ExpandableText', () => {
  it('children as text', () => {
    cy.mount(<ExpandableText maxCharacters={Infinity}>{longText}</ExpandableText>);
    cy.get('[ui5-text]').should('have.text', longText).and('be.visible');
    cy.mount(
      <ExpandableText maxCharacters={Infinity} text={longText}>
        Short text
      </ExpandableText>
    );
    cy.get('[ui5-text]').should('have.text', longText).and('be.visible');
  });

  it('showOverflowInPopover', () => {
    cy.mount(<ExpandableText maxCharacters={20} text={longText} />);
    cy.get('[ui5-responsive-popover]').should('not.exist');

    cy.mount(<ExpandableText maxCharacters={20} text={longText} showOverflowInPopover />);
    cy.get('[ui5-responsive-popover]').should('exist');

    cy.mount(<ExpandableText maxCharacters={20} text={longText} showOverflowInPopover overflowMode="InPlace" />);
    cy.get('[ui5-responsive-popover]').should('not.exist');

    cy.mount(
      <ExpandableText maxCharacters={20} text={longText} showOverflowInPopover={false} overflowMode="Popover" />
    );
    cy.get('[ui5-responsive-popover]').should('exist');
  });

  it('renderWhiteSpace', () => {
    cy.mount(<ExpandableText text={longText} />);
    cy.get('[ui5-expandable-text]').should('not.have.attr', 'data-_render-whitespace');
    cy.get('[ui5-text]').should('have.css', 'white-space', 'normal');

    cy.mount(<ExpandableText text={longText} renderWhitespace />);
    cy.get('[ui5-expandable-text]').should('have.attr', 'data-_render-whitespace');
    cy.get('[ui5-text]').should('have.css', 'white-space', 'pre-wrap');
  });
});
