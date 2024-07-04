import { GridPosition } from '../../enums/index.js';
import { Grid } from './index.js';
import type { GridPropTypes } from './index.js';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils.js';

const style = { height: '6rem', width: '100%' };

const GridContent = (
  <>
    <div
      data-testid="grid-item"
      style={{
        ...style,
        backgroundColor: 'cadetblue'
      }}
    />
    <div
      data-testid="grid-item"
      style={{
        ...style,
        backgroundColor: 'lightblue'
      }}
    />
    <div
      data-testid="grid-item"
      style={{
        ...style,
        backgroundColor: 'skyblue'
      }}
    />
    <div
      data-testid="grid-item"
      style={{
        ...style,
        backgroundColor: 'cornflowerblue'
      }}
    />
  </>
);

const CustomItems = (
  <>
    <div
      data-testid="custom-span"
      style={{
        ...style,
        backgroundColor: 'tomato'
      }}
      data-layout-span="XL12 L12 M12 S12"
    />
    <div
      data-testid="custom-indent"
      style={{
        ...style,
        backgroundColor: 'blanchedalmond'
      }}
      data-layout-indent="XL1 L1 M1 S1"
    />
  </>
);

describe('Grid', () => {
  it('Ranges & Custom', () => {
    document.body.style.margin = '0px';
    [
      { vp: 599, defaultSpan: 12, defaultIndent: 0, customSpan: 1, customIndent: 7 },
      { vp: 1023, defaultSpan: 6, defaultIndent: 0, customSpan: 2, customIndent: 6 },
      { vp: 1439, defaultSpan: 3, defaultIndent: 0, customSpan: 3, customIndent: 5 },
      { vp: 1920, defaultSpan: 3, defaultIndent: 0, customSpan: 4, customIndent: 4 }
    ].forEach((range) => {
      cy.viewport(range.vp, 1080);
      cy.mount(
        <Grid>
          {GridContent}
          {CustomItems}
        </Grid>
      );
      cy.findAllByTestId('grid-item').parent().should('have.css', 'grid-column', `span ${range.defaultSpan}`);
      cy.findByTestId('custom-span').parent().should('have.css', 'grid-column', `span 12`);
      cy.get('[data-component-name="GridIndentSpacer"]')
        .should('have.length', '1')
        .should('have.css', 'grid-column', 'span 1');
      cy.mount(
        <Grid defaultSpan="XL4 L3 M2 S1" defaultIndent="XL4 L5 M6 S7">
          {GridContent}
          {CustomItems}
        </Grid>
      );
      cy.findAllByTestId('grid-item').parent().should('have.css', 'grid-column', `span ${range.customSpan}`);
      cy.findByTestId('custom-span').parent().should('have.css', 'grid-column', `span 12`);
      cy.get('[data-component-name="GridIndentSpacer"]').each(($el, index, arr) => {
        if (arr.length - 1 === index) {
          cy.wrap($el).should('have.css', 'grid-column', 'span 1');
        } else {
          cy.wrap($el).should('have.css', 'grid-column', `span ${range.customIndent}`);
        }
      });
    });
  });

  it('spacing', () => {
    cy.mount(<Grid data-testid="grid">{GridContent}</Grid>);
    cy.findByTestId('grid').should('have.css', 'grid-row-gap', '16px').should('have.css', 'grid-column-gap', '16px');
    cy.mount(
      <Grid data-testid="grid" hSpacing="7px" vSpacing="42px">
        {GridContent}
        {CustomItems}
      </Grid>
    );
    cy.findByTestId('grid').should('have.css', 'grid-row-gap', '42px').should('have.css', 'grid-column-gap', '7px');
  });
  [...Object.values(GridPosition), undefined].forEach((pos: GridPropTypes['position'] | undefined) => {
    it(`position-${pos}`, () => {
      cy.mount(
        <div style={{ width: '400px' }}>
          <Grid data-testid="grid" position={pos} style={{ width: '200px' }}>
            {GridContent}
          </Grid>
        </div>
      );
      switch (pos) {
        case 'Center':
          cy.findByTestId('grid').should('satisfy', ($el) => {
            const classList = Array.from($el[0].classList);
            return classList.some((item) => item.includes('positionCenter'));
          });
          break;
        case 'Right':
          cy.findByTestId('grid').should('satisfy', ($el) => {
            const classList = Array.from($el[0].classList);
            return classList.some((item) => item.includes('positionRight'));
          });
          break;
        default:
          cy.findByTestId('grid').should('satisfy', ($el) => {
            const classList = Array.from($el[0].classList);
            return classList.every((item) => !item.includes('position'));
          });
          break;
      }
    });
  });
  cypressPassThroughTestsFactory(Grid, { children: <div>Hello World!</div> });
});
