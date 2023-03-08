import React from 'react';
import { SplitterElement, SplitterLayout, Label, Button } from '../..';

describe('SplitterLayout', () => {
  it('Reset on size change', () => {
    cy.mount(
      <SplitterLayout
        style={{
          width: '100vw',
          height: '100vh'
        }}
        options={{ resetOnSizeChange: true }}
      >
        <SplitterElement size="70%" data-testid="se1">
          <Label>Left</Label>
        </SplitterElement>
        <SplitterElement size="30%" data-testid="se2">
          <Label>Right</Label>
        </SplitterElement>
      </SplitterLayout>
    );

    cy.findByTestId('se1').should('have.css', 'flex', '0 0 calc(70% - 16px)');
    cy.findByTestId('se2').should('have.css', 'flex', '0 0 30%');

    cy.findByRole('separator').click();
    cy.wait(50);
    for (let i = 0; i < 30; i++) {
      cy.findByRole('separator').trigger('keydown', { code: 'ArrowLeft', force: true });
      cy.wait(50);
    }
    cy.findByRole('separator').trigger('keyup', { code: 'ArrowLeft', force: true });

    cy.findByTestId('se1').should('have.css', 'flex', '0 0 728px');
    cy.findByTestId('se2').should('have.css', 'flex', '0 0 1176px');

    cy.viewport(1024, 768);

    cy.findByTestId('se1').should('have.css', 'flex', '0 0 calc(70% - 16px)');
    cy.findByTestId('se2').should('have.css', 'flex', '0 0 30%');
  });

  it('Vertical SplitterLayout w/ multiple SplitterElements', () => {
    const click = cy.spy().as('click');
    [true, false].forEach((vertical) => {
      cy.mount(
        <SplitterLayout vertical={vertical} style={{ width: '800px', height: '800px' }} data-testid={'sl'}>
          <SplitterElement size={'200px'} data-testid={'se1'}>
            <Button data-testid={'btn'} onClick={click}>
              Button 1
            </Button>
          </SplitterElement>
          <SplitterElement minSize={300} size={'400px'} data-testid={'se2'}>
            <Button>Button 2</Button>
          </SplitterElement>
          <SplitterElement resizable={false} data-testid={'se3'}>
            <Button>Button 3</Button>
          </SplitterElement>
        </SplitterLayout>
      );
      cy.findByTestId('btn').click();
      cy.get('[role="separator"]').first().click();
      // fallback click to prevent fuzzyness
      cy.get('[role="separator"]')
        .first()
        .click()
        .should('have.length', 1)
        .should('have.css', 'border-style', 'dotted');
      cy.findByTestId('sl').should('have.css', 'width', '800px').should('have.css', 'height', '800px');
      cy.findByTestId('se2')
        .should('have.css', 'flex', '0 0 400px')
        .should('have.css', vertical ? 'min-height' : 'min-width', '300px');
      cy.findByTestId('se3')
        .should('have.css', 'flex', vertical ? '0 0 800px' : '0 0 200px')
        .should('have.css', vertical ? 'min-height' : 'min-width', '0px');
    });
    cy.get('@click').should('have.been.calledTwice');
  });

  it('empty content', () => {
    cy.mount(<SplitterLayout data-testid="sl" />);
    cy.findByTestId('sl').should('not.be.visible').should('exist');
  });

  //todo wip
  it('Splitter click, move, focus - vertical', () => {
    cy.mount(
      <div style={{ width: '800px', height: '800px' }}>
        <SplitterLayout vertical data-testid={'sl'}>
          <SplitterElement data-testid={'se1'}>
            <div>Content 1</div>
          </SplitterElement>
          <SplitterElement data-testid={'se2'}>
            <div>Content 2</div>
          </SplitterElement>
          <SplitterElement data-testid={'se3'}>
            <div> Content 3</div>
          </SplitterElement>
          <SplitterElement data-testid={'se4'}>
            <div> Content 4</div>
          </SplitterElement>
        </SplitterLayout>
      </div>
    );
  });
});
