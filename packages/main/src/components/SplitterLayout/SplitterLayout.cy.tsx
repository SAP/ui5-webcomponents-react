import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { useState } from 'react';
import type { SplitterLayoutPropTypes } from '../..';
import { Button, Label, SplitterElement, SplitterLayout } from '../..';

function TestComp({ vertical, dir }: { vertical: SplitterLayoutPropTypes['vertical']; dir: string }) {
  const [mount, setMount] = useState(false);
  const [dep, setDep] = useState(false);
  return (
    <SplitterLayout
      dir={dir}
      vertical={vertical}
      style={{
        width: '100vw',
        height: '100vh'
      }}
      options={{ resetOnSizeChange: true, resetOnChildrenChange: true, resetOnCustomDepsChange: [dep] }}
    >
      <SplitterElement size="70%" data-testid="se1">
        <Label>Left</Label>
        <Button onClick={() => setMount(true)}>Add child</Button>
        <Button onClick={() => setDep(true)}>Trigger dep</Button>
      </SplitterElement>
      <SplitterElement size={mount ? '25%' : '30%'} data-testid="se2">
        <Label>Right</Label>
      </SplitterElement>
      {mount && (
        <SplitterElement size="5%" data-testid="se3">
          Additional Child
        </SplitterElement>
      )}
    </SplitterLayout>
  );
}

function moveSpacer(dir: string, vertical: boolean) {
  cy.findAllByRole('separator').eq(0).click();
  cy.wait(50);
  const rtlSafeLeft = `Arrow${dir === 'rtl' && !vertical ? 'Right' : 'Left'}`;
  const rtlSafeUp = `Arrow${dir === 'rtl' && !vertical ? 'Down' : 'Up'}`;
  for (let i = 0; i < 5; i++) {
    cy.findAllByRole('separator').eq(0).trigger('keydown', { code: rtlSafeLeft, force: true });
    cy.findAllByRole('separator').eq(0).trigger('keyup', { code: rtlSafeLeft, force: true });
    cy.wait(50);
    cy.findAllByRole('separator').eq(0).trigger('keydown', { code: rtlSafeUp, force: true });
    cy.findAllByRole('separator').eq(0).trigger('keyup', { code: rtlSafeUp, force: true });
    cy.wait(50);
  }
}

describe('SplitterLayout', () => {
  ['ltr', 'rtl'].forEach((dir) => {
    [false, true].forEach((vertical) => {
      it(`Splitter Move & Reset - ${dir} - vertical: ${vertical}`, () => {
        cy.viewport(2000, 2000);
        cy.mount(<TestComp vertical={vertical} dir={dir} />);

        cy.findByTestId('se1').should('have.css', 'flex', '0 1 calc(70% - 16px)');
        cy.findByTestId('se2').should('have.css', 'flex', '0 1 30%');

        moveSpacer(dir, vertical);
        cy.findByTestId('se1').should('have.css', 'flex', '0 0 1184px');
        cy.findByTestId('se2').should('have.css', 'flex', '0 0 800px');

        cy.findByText('Trigger dep').click({ force: true });

        cy.findByTestId('se1').should('have.css', 'flex', '0 1 calc(70% - 16px)');
        cy.findByTestId('se2').should('have.css', 'flex', '0 1 30%');

        moveSpacer(dir, vertical);
        cy.findByTestId('se1').should('have.css', 'flex', '0 0 1184px');
        cy.findByTestId('se2').should('have.css', 'flex', '0 0 800px');

        cy.findByText('Add child').click({ force: true });
        cy.findByTestId('se1').should('have.css', 'flex', '0 1 calc(70% - 16px)');
        cy.findByTestId('se2').should('have.css', 'flex', '0 1 calc(25% - 16px)');
        cy.findByTestId('se3').should('have.css', 'flex', '0 1 5%');

        moveSpacer(dir, vertical);

        cy.viewport(1000, 1000);

        cy.findByTestId('se1').should('have.css', 'flex', '0 1 calc(70% - 16px)');
        cy.findByTestId('se2').should('have.css', 'flex', '0 1 calc(25% - 16px)');
        cy.findByTestId('se3').should('have.css', 'flex', '0 1 5%');
      });
    });
  });

  it.skip('SplitterLayout w/ multiple SplitterElements', () => {
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
        .should('have.css', 'border', '2px solid rgb(0, 50, 165)');
      cy.findByTestId('sl').should('have.css', 'width', '800px').should('have.css', 'height', '800px');
      cy.findByTestId('se2')
        .should('have.css', 'flex', '0 1 400px')
        .should('have.css', vertical ? 'min-height' : 'min-width', '300px');
      cy.findByTestId('se3')
        .should('have.css', 'flex', '0 0 200px')
        .should('have.css', vertical ? 'min-height' : 'min-width', '0px');
    });
    cy.get('@click').should('have.been.calledTwice');
  });

  it('empty content', () => {
    cy.mount(<SplitterLayout data-testid="sl" />);
    cy.findByTestId('sl').should('not.be.visible').should('exist');
  });

  cypressPassThroughTestsFactory(SplitterLayout, { children: <SplitterElement>Content</SplitterElement> });
});
