import { debounce } from './debounce';

describe('debounce', function () {
  it('will be called debounced', () => {
    const mock = cy.spy().as('handler');
    const callback = debounce(mock, 300);
    callback('H');
    cy.wait(100);
    callback('He');
    cy.wait(100);
    callback('Hell');
    cy.wait(100);
    callback('Hello');
    cy.wait(100);
    cy.get('@handler')
      .should('have.been.calledOnce')
      .and('have.been.calledWith', 'Hello')
      .then(() => {
        callback('Hello 123');
        cy.wait(400);
        cy.get('@handler').should('have.been.calledTwice').and('have.been.calledWith', 'Hello 123');
      });
  });

  it('cancel debounce', () => {
    const mock = cy.spy().as('handler');
    const callback = debounce(mock, 300);
    callback('H');
    cy.wait(100);
    callback.cancel();
    cy.wait(400);
    cy.get('@handler').should('not.have.been.called');
  });
});
