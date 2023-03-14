import { throttle } from './throttle';

const throttledHello = (options?) => {
  const mockFn = cy.spy().as('throttle');
  const cb = throttle(mockFn, 400, { ...options });

  cb('H');
  cy.wait(100).then(() => {
    cb('He');
  });
  cy.wait(100).then(() => {
    cb('Hell');
  });
  cy.wait(100).then(() => {
    cb('Hello');
  });
};

describe('throttle', function () {
  it('will be called throttled with leading edge', () => {
    throttledHello({ trailing: false });
    cy.wait(400).then(() => {
      cy.get('@throttle').should('have.been.calledOnce');
      cy.get('@throttle').should('have.been.calledWith', 'H');
    });
  });

  it('will be called throttled with trailing edge', () => {
    throttledHello({ leading: false });
    cy.wait(400).then(() => {
      cy.get('@throttle').should('have.been.calledOnce');
      cy.get('@throttle').should('have.been.calledWith', 'Hello');
    });
  });

  it('will be called throttled with leading and trailing edges by default', () => {
    throttledHello();
    cy.wait(400).then(() => {
      cy.get('@throttle').should('have.been.calledTwice');
      cy.get('@throttle').should('have.been.calledWith', 'H');
      cy.get('@throttle').should('have.been.calledWith', 'Hello');
    });
  });

  it('cancels the throttling', () => {
    const mockFn = cy.spy().as('throttle');
    const cb = throttle(mockFn, 400, { leading: false });
    cb('H');
    cb.cancel();
    cy.wait(400).then(() => {
      cy.get('@throttle').should('not.have.been.called');
    });
  });
});
