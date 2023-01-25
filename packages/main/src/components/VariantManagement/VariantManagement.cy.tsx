import { TitleLevel } from '../../enums';
import { VariantManagement } from './index';
import { VariantItem } from './VariantItem';

const TwoVariantItems = [
  <VariantItem key="0">VariantItem 1</VariantItem>,
  <VariantItem selected key="1">
    VariantItem 2
  </VariantItem>
];

describe('VariantManagement', () => {
  it('render btn with tooltip', () => {
    cy.mount(<VariantManagement />);
    cy.get('[ui5-button]').shadow().findByTitle('Select view').should('be.visible');
  });

  it('two children', () => {
    cy.mount(<VariantManagement>{TwoVariantItems}</VariantManagement>);
    cy.get('[tooltip="Select view"]').click();

    cy.findByText('VariantItem 1').should('be.visible');
    cy.findAllByText('VariantItem 2').should('have.length', 2);
  });

  it('Headings customization', () => {
    cy.mount(
      <VariantManagement titleText="Popover Heading" level={TitleLevel.H1}>
        {TwoVariantItems}
      </VariantManagement>
    );
    cy.contains('VariantItem 2').should('have.attr', 'level', TitleLevel.H1);
    cy.contains('VariantItem 2').click();
    cy.get('[role="dialog"]').contains('Popover Heading').should('be.visible');
  });

  it('Manage Views interactions', () => {
    const cb = cy.spy().as('onSaveManageViews');
    cy.mount(
      <VariantManagement onSaveManageViews={cb} showOnlyFavorites>
        {[
          ...TwoVariantItems,
          <VariantItem isDefault key="2">
            VariantItem 3
          </VariantItem>
        ]}
      </VariantManagement>
    );

    cy.contains('VariantItem 2').click();
    cy.findByText('Manage').click();

    cy.findAllByTitle('Unselected as Favorite').eq(0).click();
    cy.findAllByPlaceholderText('View').eq(0).shadow().find('input').type(' Updated!', { force: true });

    cy.findAllByLabelText('Use as standard view').eq(0).click();
    cy.findAllByLabelText('Apply Automatically').eq(0).click();

    cy.findByText('Save').click();
    cy.get('@onSaveManageViews').should('have.been.calledOnce');

    cy.get('@onSaveManageViews').should(
      'have.been.calledWith',
      Cypress.sinon.match({
        detail: Cypress.sinon.match({
          updatedVariants: [
            Cypress.sinon.match({
              children: 'VariantItem 1 Updated!',
              isDefault: true,
              favorite: true,
              applyAutomatically: true
            }),
            Cypress.sinon.match.object
          ],
          variants: [
            Cypress.sinon.match.object,
            Cypress.sinon.match.object,
            Cypress.sinon.match({
              isDefault: false
            })
          ]
        })
      })
    );

    cy.findByText('Manage Views').should('not.exist');
    cy.findByText('Manage').click();
    cy.findByText('Manage Views').should('be.visible');
    cy.findByText('Cancel').click();
    cy.findByText('Manage Views').should('not.exist');
    cy.get('@onSaveManageViews').should('have.been.calledOnce');
  });
});
