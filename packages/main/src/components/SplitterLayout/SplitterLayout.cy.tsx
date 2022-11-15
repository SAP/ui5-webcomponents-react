import React from 'react';
import { SplitterElement, SplitterLayout, Label } from '../..';

describe('SplitterLayout', () => {
  it('Reset on size change', async () => {
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
});
