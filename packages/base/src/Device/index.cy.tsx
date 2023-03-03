import { useEffect } from 'react';
import {
  attachOrientationChangeHandler,
  attachResizeHandler,
  detachOrientationChangeHandler,
  detachResizeHandler
} from './index';

function ResizeTestComponent({ onChange }: { onChange: (event: { width: number; height: number }) => void }) {
  useEffect(() => {
    attachResizeHandler(onChange);
  }, []);

  const unregister = () => {
    detachResizeHandler(onChange);
  };

  return (
    <>
      <button onClick={unregister}>Unregister</button>
    </>
  );
}

function OrientationChangeComponent({
  onChange
}: {
  onChange: (event: { portrait: boolean; landscape: boolean }) => void;
}) {
  useEffect(() => {
    attachOrientationChangeHandler(onChange);
  }, []);

  const unregister = () => {
    detachOrientationChangeHandler(onChange);
  };

  return (
    <>
      <button onClick={unregister}>Unregister</button>
    </>
  );
}

describe('Device', () => {
  it('resize handler', () => {
    const callback = cy.spy().as('resize');
    cy.mount(<ResizeTestComponent onChange={callback} />);
    cy.wait(500);
    cy.viewport(200, 1080);
    cy.get('@resize').should('have.been.calledOnce').and('have.been.calledWith', {
      height: 1080,
      width: 200
    });

    cy.findByText('Unregister').click();
    cy.viewport(500, 1080);
    cy.get('@resize').should('have.been.calledOnce');
  });

  it('orientation change', () => {
    cy.viewport('iphone-x', 'portrait');
    cy.wait(500);
    const callback = cy.spy().as('orientation');
    cy.mount(<OrientationChangeComponent onChange={callback} />);
    cy.wait(500);
    cy.viewport('iphone-x', 'landscape');
    cy.get('@orientation').should('have.been.calledOnce').and('have.been.calledWith', {
      landscape: true,
      portrait: false
    });
    cy.viewport('iphone-x', 'portrait');
    cy.get('@orientation').should('have.been.calledTwice').and('have.been.calledWith', {
      landscape: true,
      portrait: false
    });

    cy.findByText('Unregister').click();
    cy.viewport('iphone-x', 'landscape');
    cy.get('@orientation').should('have.been.calledTwice');
  });
});
