import { useReducer } from 'react';
import { ObjectStatus } from '@/packages/main/src';

interface CondRenderCompProps {
  testid?: string;
}
const CondRenderComp = ({ testid }: CondRenderCompProps) => {
  const [visible, toggle] = useReducer((prev) => !prev, true);
  return (
    <>
      <button onClick={toggle} data-testid={`btn-${testid}`}>
        Toggle
      </button>
      {visible && <ObjectStatus data-testid={`os-${testid}`}>Content</ObjectStatus>}
    </>
  );
};
describe('useStyleSheet', () => {
  it('cleanup styles', () => {
    cy.mount(
      <>
        <CondRenderComp testid="1" />
        <CondRenderComp testid="2" />
      </>
    );
    cy.findAllByText('Content').should('be.visible').and('have.length', 2);
    cy.findAllByText('Object Status').should('not.be.visible');
    cy.findAllByText('Object Status').should('have.length', 2);

    cy.findByTestId('btn-1').click();
    cy.findAllByText('Content').should('be.visible').and('have.length', 1);
    cy.findAllByText('Object Status').should('not.be.visible');
    cy.findAllByText('Object Status').should('have.length', 1);
  });
});
