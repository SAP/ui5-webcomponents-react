import type { ButtonPropTypes } from '../../webComponents/index.js';
import { Button, Label } from '../../webComponents/index.js';
import type { ActionSheetPropTypes } from './index.js';
import { ActionSheet } from './index.js';

interface TestCompProptypes extends ActionSheetPropTypes {
  onBtnClick?: ButtonPropTypes['onClick'];
}

const TestComp = (props: TestCompProptypes) => {
  const { onBtnClick, open, children } = props;
  return (
    <>
      <button id="opener">Opener</button>
      <ActionSheet className="myCustomClass" open={open} opener="opener">
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
    cy.mount(<TestComp onBtnClick={onBtnClick} open />);

    cy.get('[ui5-responsive-popover]').should('be.visible');

    cy.findByText('Accept').click();
    cy.get('[ui5-responsive-popover]').should('not.be.visible');
    cy.get('@onBtnClick').should('have.been.calledOnce');
  });

  it('does not crash with other component', () => {
    cy.mount(
      <TestComp open>
        <Label>I should not crash</Label>
      </TestComp>
    );
    cy.findByText('I should not crash').should('be.visible');
  });
});
