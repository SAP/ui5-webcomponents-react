import addIcon from '@ui5/webcomponents-icons/dist/add.js';
import { Button, Icon, MessageBoxAction, MessageBoxType } from '../..';
import { MessageBox } from './index.js';

describe('MessageBox', () => {
  [
    [MessageBoxType.Confirm, MessageBoxAction.OK],
    [MessageBoxType.Success, MessageBoxAction.OK],
    [MessageBoxType.Warning, MessageBoxAction.OK],
    [MessageBoxType.Error, MessageBoxAction.Close],
    [MessageBoxType.Information, MessageBoxAction.OK]
  ].forEach(([type, buttonText]: [MessageBoxType, MessageBoxAction]) => {
    it(type, () => {
      const callback = cy.spy();
      cy.mount(
        <MessageBox type={type} open onClose={callback}>
          My Message Box Content
        </MessageBox>
      );
      cy.findByText(buttonText).click();
      cy.wrap(callback).should(
        'have.been.calledWith',
        Cypress.sinon.match({
          detail: {
            action: buttonText
          }
        })
      );
    });
  });

  it('Custom Button', () => {
    const click = cy.spy().as('onButtonClick');
    const close = cy.spy().as('onMessageBoxClose');
    cy.mount(
      <MessageBox
        open
        onClose={close}
        actions={[
          MessageBoxAction.Cancel,
          <Button onClick={click} key="0">
            Custom
          </Button>,
          'Custom Text Action',
          MessageBoxAction.OK
        ]}
      >
        My Message Box Content
      </MessageBox>
    );

    cy.findByText('Cancel').should('be.visible');
    cy.findByText('Custom Text Action').should('be.visible');
    cy.findByText('OK').should('be.visible');

    cy.findByText('Custom').click();
    cy.get('@onMessageBoxClose')
      .should('have.been.calledOnce')
      .should(
        'have.been.calledWith',
        Cypress.sinon.match({
          detail: {
            action: `1: custom action`
          }
        })
      );
    cy.get('@onButtonClick').should('have.been.calledOnce');
  });

  it('Confirm - Cancel', () => {
    const callback = cy.spy().as('onMessageBoxClose');
    cy.mount(
      <MessageBox type={MessageBoxType.Confirm} open onClose={callback}>
        Confirm
      </MessageBox>
    );

    cy.findByText('Cancel').click();
    cy.get('@onMessageBoxClose')
      .should('have.been.calledOnce')
      .should(
        'have.been.calledWith',
        Cypress.sinon.match({
          detail: {
            action: MessageBoxAction.Cancel
          }
        })
      );
  });

  it('Show', () => {
    const callback = cy.spy().as('onMessageBoxClose');
    cy.mount(
      <MessageBox open onClose={callback} titleText="Custom" actions={[MessageBoxAction.Yes, MessageBoxAction.No]}>
        Custom
      </MessageBox>
    );

    cy.findByText('Yes').click();
    cy.get('@onMessageBoxClose')
      .should('have.been.calledOnce')
      .should(
        'have.been.calledWith',
        Cypress.sinon.match({
          detail: {
            action: MessageBoxAction.Yes
          }
        })
      );

    cy.findByText('No').click();
    cy.get('@onMessageBoxClose')
      .should('have.been.calledTwice')
      .should(
        'have.been.calledWith',
        Cypress.sinon.match({
          detail: {
            action: MessageBoxAction.No
          }
        })
      );
  });

  it('Success w/ custom title', () => {
    const callback = cy.spy().as('onMessageBoxClose');
    cy.mount(
      <MessageBox
        type={MessageBoxType.Success}
        open
        onClose={callback}
        titleText="Custom Success"
        icon={<Icon name={addIcon} />}
      >
        Custom Success
      </MessageBox>
    );
    cy.findAllByText('Custom Success').should('have.length', 2);
    cy.findByText('OK').click();
    cy.get('@onMessageBoxClose')
      .should('have.been.calledOnce')
      .should(
        'have.been.calledWith',
        Cypress.sinon.match({
          detail: {
            action: MessageBoxAction.OK
          }
        })
      );
  });

  it('No Title', () => {
    const callback = cy.spy().as('onMessageBoxClose');
    cy.mount(
      <MessageBox open onClose={callback}>
        No Title
      </MessageBox>
    );

    cy.findByText('Confirmation').should('be.visible');
  });

  it('Custom Action Text', () => {
    const callback = cy.spy().as('onMessageBoxClose');
    cy.mount(
      <MessageBox
        open
        type={MessageBoxType.Confirm}
        actions={[MessageBoxAction.OK, 'My Custom Action']}
        onClose={callback}
      >
        My Message Box Content
      </MessageBox>
    );

    cy.findByText(MessageBoxAction.OK).should('be.visible').click();
    cy.get('@onMessageBoxClose')
      .should('have.been.calledOnce')
      .should(
        'have.been.calledWith',
        Cypress.sinon.match({
          detail: {
            action: MessageBoxAction.OK
          }
        })
      );
    cy.findByText('My Custom Action').should('be.visible').click();
    cy.get('@onMessageBoxClose')
      .should('have.been.calledTwice')
      .should(
        'have.been.calledWith',
        Cypress.sinon.match({
          detail: {
            action: 'My Custom Action'
          }
        })
      );
  });

  it("Don't crash on unknown type", () => {
    const callback = cy.spy().as('onMessageBoxClose');
    cy.mount(
      // @ts-expect-error: testing an invalid type
      <MessageBox open onClose={callback} type="FOO_BAR">
        Unknown Type!
      </MessageBox>
    );
    cy.findByText('Unknown Type!').should('be.visible');
  });

  it('initial focus', () => {
    cy.mount(
      <MessageBox open type={MessageBoxType.Confirm} initialFocus={MessageBoxAction.Cancel} data-testid="Dialog">
        Content
      </MessageBox>
    );

    cy.focused()
      .parent()
      .then(([el]) => {
        const focusedElementId = el.id;
        cy.findByText('Cancel').should('have.id', focusedElementId);
        cy.findByTestId('Dialog').should('have.attr', 'initial-focus', focusedElementId);
      });
  });

  it('display custom header', () => {
    cy.mount(
      <MessageBox open header={<span>Custom Header</span>}>
        Content
      </MessageBox>
    );

    cy.findByText('Confirmation').should('not.exist');
    cy.findByText('Custom Header').should('be.visible');
  });
});
