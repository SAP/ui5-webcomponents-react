import type { ButtonPropTypes, ResponsivePopoverDomRef } from '../../webComponents/index.js';
import { Button, Label } from '../../webComponents/index.js';
import type { ActionSheetPropTypes } from './index.js';
import { ActionSheet } from './index.js';

interface TestCompProptypes extends ActionSheetPropTypes {
  onBtnClick?: ButtonPropTypes['onClick'];
}

const TestComp = (props: TestCompProptypes) => {
  const { onBtnClick, open = true, children, ...rest } = props;
  return (
    <>
      <button id="opener">Opener</button>
      <ActionSheet className="myCustomClass" open={open} opener="opener" {...rest}>
        {children || (
          <>
            <Button onClick={onBtnClick}>Accept</Button>
            <Button>Reject</Button>
            <Button>This is my super long text!</Button>
          </>
        )}
      </ActionSheet>
    </>
  );
};

describe('ActionSheet', () => {
  it('Click Action', () => {
    const onBtnClick = cy.spy().as('onBtnClick');
    cy.mount(<TestComp onBtnClick={onBtnClick} />);

    cy.get('[ui5-responsive-popover]').should('be.visible');

    cy.findByText('Accept').realClick();
    cy.get('[ui5-responsive-popover]').should('not.be.visible');
    cy.get('@onBtnClick').should('have.been.calledOnce');
  });

  it('does not crash with other component', () => {
    cy.mount(
      <TestComp>
        <Label>I should not crash</Label>
      </TestComp>
    );
    cy.findByText('I should not crash').should('be.visible');
  });

  it('keyboard navigation', () => {
    cy.mount(
      <TestComp open={false}>
        {new Array(15).fill('O.o').map((_, index) => (
          <Button key={index}>{`Button${index}`}</Button>
        ))}
      </TestComp>
    );
    cy.get<ResponsivePopoverDomRef>('.myCustomClass').then(([actionSheet]) => {
      actionSheet.open = true;
    });
    cy.wait(400);
    cy.get('[ui5-responsive-popover]').should('be.visible').and('have.attr', 'open');
    cy.focused().parent().should('have.text', 'Button0');
    cy.realPress('ArrowDown');
    cy.focused().parent().should('have.text', 'Button1');
    cy.realPress('ArrowRight');
    cy.realPress('ArrowRight');
    cy.focused().parent().should('have.text', 'Button3');
    cy.realPress('PageUp');
    cy.focused().parent().should('have.text', 'Button0');
    cy.realPress('PageDown');
    cy.focused().parent().should('have.text', 'Button5');
    cy.realPress('End');
    cy.focused().parent().should('have.text', 'Button14');
    cy.realPress('ArrowUp');
    cy.focused().parent().should('have.text', 'Button13');
    cy.realPress('ArrowLeft');
    cy.realPress('ArrowLeft');
    cy.focused().parent().should('have.text', 'Button11');
    cy.realPress('PageDown');
    cy.focused().parent().should('have.text', 'Button14');
    cy.realPress('Home');
    cy.focused().parent().should('have.text', 'Button0');

    // todo: rtl detection of wcr and ui5wc doesn't work for some reason in cypress
    // cy.mount(
    //   <TestComp dir="rtl">
    //     {new Array(15).fill('O.o').map((_, index) => (
    //       <Button key={index}>{`Button${index}`}</Button>
    //     ))}
    //   </TestComp>
    // );
    // cy.focused().should('have.text', 'Button0');
    // cy.realPress('ArrowLeft');
    // cy.focused().should('have.text', 'Button1');
    // cy.realPress('ArrowRight');
    // cy.focused().should('have.text', 'Button0');
  });
});
