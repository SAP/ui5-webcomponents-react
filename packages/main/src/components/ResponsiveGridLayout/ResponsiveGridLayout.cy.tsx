import type { ResponsiveGridLayoutPropTypes } from './index.js';
import { ResponsiveGridLayout } from './index.js';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

const TestComp = (props: ResponsiveGridLayoutPropTypes) => (
  <ResponsiveGridLayout data-testid="rgl" {...props}>
    <div style={{ height: '100px', background: 'lightblue' }} data-testid={'0'} />
    <div style={{ height: '100px', background: 'cadetblue' }} data-testid={'1'} />
    <div style={{ height: '100px', background: 'skyblue' }} data-testid={'2'} />
    <div style={{ height: '100px', background: 'lightskyblue' }} data-testid={'3'} />
    <div style={{ height: '100px', background: 'blueviolet' }} data-testid={'4'} />
    <div style={{ height: '100px', background: 'cornflowerblue' }} data-testid={'5'} />
    <div style={{ height: '100px', background: 'aliceblue' }} data-testid={'6'} />
    <div style={{ height: '100px', background: 'darkblue' }} data-testid={'7'} />
    <div style={{ height: '100px', background: 'deepskyblue' }} data-testid={'8'} />
    <div style={{ height: '100px', background: 'lightsteelblue' }} data-testid={'9'} />
    <div style={{ height: '100px', background: 'mediumblue' }} data-testid={'10'} />
    <div style={{ height: '100px', background: 'mediumslateblue' }} data-testid={'11'} />
    <div style={{ height: '100px', background: 'blue' }} data-testid={'12'} />
    <div style={{ height: '100px', background: 'midnightblue' }} data-testid={'13'} />
    <div style={{ height: '100px', background: 'powderblue' }} data-testid={'14'} />
    <div style={{ height: '100px', background: 'royalblue' }} data-testid={'15'} />
    <div style={{ height: '100px', background: 'steelblue' }} data-testid={'16'} />
    <div style={{ height: '100px', background: 'slateblue' }} data-testid={'17'} />
    <div style={{ height: '100px', background: 'dodgerblue' }} data-testid={'18'} />
  </ResponsiveGridLayout>
);
describe('ResponsiveGridLayout', () => {
  it('span & columns', () => {
    cy.viewport(1440, 1080);
    cy.mount(<TestComp />);
    cy.findByTestId('rgl').should(
      'have.css',
      'grid-template-columns',
      `81.5px 81.5px 81.5px 81.5px 81.5px 81.5px 81.5px 81.5px 81.5px 81.5px 81.5px 81.5px 81.5px 81.5px 81.5px 81.5px`
    );

    cy.viewport(1439, 1080);
    cy.mount(<TestComp />);
    cy.findByTestId('rgl').should(
      'have.css',
      'grid-template-columns',
      `111.25px 111.25px 111.25px 111.25px 111.25px 111.25px 111.25px 111.25px 111.25px 111.25px 111.25px 111.25px`
    );
    cy.viewport(1023, 1080);
    cy.mount(<TestComp />);
    cy.findByTestId('rgl').should(
      'have.css',
      'grid-template-columns',
      `118.875px 118.875px 118.875px 118.875px 118.875px 118.875px 118.875px 118.875px`
    );
    cy.viewport(599, 1080);
    cy.mount(<TestComp />);
    cy.findByTestId('rgl').should('have.css', 'grid-template-columns', `139.75px 139.75px 139.75px 139.75px`);

    cy.mount(
      <TestComp
        columnsXL={10}
        columnsL={10}
        columnsM={10}
        columnsS={10}
        columnSpanXL={5}
        columnSpanL={5}
        columnSpanM={5}
        columnSpanS={5}
      />
    );

    cy.findByTestId('rgl').then(($el) => {
      expect(getComputedStyle($el.get(0)).getPropertyValue('--_ui5wcr-rgl-columns-xl')).equal('10');
      expect(getComputedStyle($el.get(0)).getPropertyValue('--_ui5wcr-rgl-columns-l')).equal('10');
      expect(getComputedStyle($el.get(0)).getPropertyValue('--_ui5wcr-rgl-columns-m')).equal('10');
      expect(getComputedStyle($el.get(0)).getPropertyValue('--_ui5wcr-rgl-columns-s')).equal('10');
      expect(getComputedStyle($el.get(0)).getPropertyValue('--_ui5wcr-rgl-column-span-s')).equal('5');
      expect(getComputedStyle($el.get(0)).getPropertyValue('--_ui5wcr-rgl-column-span-m')).equal('5');
      expect(getComputedStyle($el.get(0)).getPropertyValue('--_ui5wcr-rgl-column-span-l')).equal('5');
      expect(getComputedStyle($el.get(0)).getPropertyValue('--_ui5wcr-rgl-column-span-xl')).equal('5');
    });
  });

  it('gaps', () => {
    cy.mount(<TestComp />);
    cy.findByTestId('rgl').should('have.css', 'grid-row-gap', '8px').should('have.css', 'grid-column-gap', '8px');
    cy.mount(<TestComp rowGap="1rem" columnGap="1rem" />);
    cy.findByTestId('rgl').should('have.css', 'grid-row-gap', '16px').should('have.css', 'grid-column-gap', '16px');
  });

  it('custom span', () => {
    cy.mount(
      <ResponsiveGridLayout data-testid="rgl">
        <div style={{ height: '100px', background: 'lightblue', gridColumn: 'span 2' }} data-testid={'0'} />
        <div style={{ height: '100px', background: 'cadetblue', gridColumn: 'span 5' }} data-testid={'1'} />
        <div style={{ height: '100px', background: 'skyblue' }} data-testid={'2'} />
      </ResponsiveGridLayout>
    );
    cy.findByTestId('0').should('have.css', 'grid-column', 'span 2');
    cy.findByTestId('1').should('have.css', 'grid-column', 'span 5');
    cy.findByTestId('2').should('have.css', 'grid-column', 'span 1');
  });

  cypressPassThroughTestsFactory(ResponsiveGridLayout);
});
