import { useState } from 'react';
import { TitleLevel } from '../../enums/index.js';
import { VariantItem } from './VariantItem';
import { WithCustomValidation as WithCustomValidationStory } from './VariantManagement.stories';
import type { VariantManagementPropTypes } from './index.js';
import { VariantManagement } from './index.js';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

const WithCustomValidation = WithCustomValidationStory.render;

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

    cy.get('[accessible-name="Use as standard view"]').eq(0).click();
    cy.get('[accessible-name="Apply Automatically"]').eq(0).click();

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

  for (let i = 0; i <= 20; i++) {
    it.only('saveViewInputProps & manageViewsInputProps', () => {
      // manageViewsInputProps
      cy.mount(<WithCustomValidation />);
      cy.contains('Max 12 chars').click();
      cy.findByText('Manage').click();
      cy.get('[ui5-dialog]').should('have.attr', 'open');
      cy.findByTestId('12chars').typeIntoUi5Input('A');
      cy.findByTestId('12chars').should('have.attr', 'value-state', 'Error');
      cy.realPress('Tab');
      // fallback
      cy.get('body').click({ force: true });
      cy.realPress('Escape');
      cy.get('[ui5-dialog]').should('not.exist');
      cy.findByText('Manage').click();
      cy.findByTestId('12chars').should('have.attr', 'value-state', 'None');
      cy.findByTestId('12chars').typeIntoUi5Input('A');
      cy.findByTestId('12chars').should('have.attr', 'value-state', 'Error');
      cy.findByText('Cancel').click();
      cy.findByText('Manage').click();
      cy.findByTestId('12chars').should('have.attr', 'value-state', 'None');
      cy.findByTestId('12chars').typeIntoUi5Input('A');
      cy.findByTestId('12chars').should('have.attr', 'value-state', 'Error');
      cy.findByText('Save').click();
      cy.get('[ui5-dialog]').should('have.attr', 'open');
      cy.findByTestId('12chars').typeIntoUi5Input('{backspace}');
      cy.findByTestId('12chars').typeIntoUi5Input('{backspace}B');
      cy.findByTestId('12chars').should('have.attr', 'value-state', 'None');
      cy.findByText('Save').click();
      cy.findByTestId('12chars').should('not.exist');
      cy.get('[ui5-dialog]').should('not.exist');
      cy.contains('Max 12 charB').should('be.visible');

      //saveViewInputProps
      // @ts-expect-error: not a real prop, just for testing
      cy.mount(<WithCustomValidation selectedByIndex={0} />);
      cy.contains('Only alphanumeric chars in Save View input').click();
      cy.findByText('Save As').click();
      cy.get('[ui5-dialog]').should('have.attr', 'open');
      cy.findByTestId('alphanumeric').typeIntoUi5Input('$');
      cy.findByTestId('alphanumeric').should('have.attr', 'value-state', 'Error');
      cy.realPress('Tab');
      cy.realPress('Escape');
      cy.get('[ui5-dialog]').should('not.exist');
      cy.contains('Only alphanumeric chars in Save View input').click();
      cy.findByText('Save As').click();
      cy.findByTestId('alphanumeric').should('have.attr', 'value-state', 'None');
      cy.findByTestId('alphanumeric').typeIntoUi5Input('$');
      cy.findByTestId('alphanumeric').should('have.attr', 'value-state', 'Error');
      cy.findByText('Cancel').click();
      cy.contains('Only alphanumeric chars in Save View input').click();
      cy.findByText('Save As').click();
      cy.findByTestId('alphanumeric').should('have.attr', 'value-state', 'None');
      cy.findByTestId('alphanumeric').typeIntoUi5Input('$');
      cy.findByTestId('alphanumeric').should('have.attr', 'value-state', 'Error');
      cy.findByText('Save').realClick();
      cy.get('[ui5-dialog]').should('have.attr', 'open');
      cy.get('[ui5-input]').should('be.focused').and('have.attr', 'value-state', 'Error');
      cy.findByTestId('alphanumeric').typeIntoUi5Input('{selectall}{backspace}A');
      cy.findByText('Save').click();
      cy.findByTestId('alphanumeric').should('not.exist');
      cy.get('[ui5-dialog]').should('not.exist');
    });
  }

  it('Selection', () => {
    const select = cy.spy().as('select');
    cy.mount(<VariantManagement onSelect={select}>{TwoVariantItems}</VariantManagement>);

    cy.get('[ui5-responsive-popover]').should('not.be.visible');
    cy.findAllByText('VariantItem 2').should('have.length', 2);
    cy.get('[ui5-title]').findByText('VariantItem 2').click();
    cy.get('[ui5-responsive-popover]').should('be.visible');

    cy.findAllByText('VariantItem 1').should('have.length', 1);
    cy.findByText('VariantItem 1').click();
    cy.findAllByText('VariantItem 1').should('have.length', 2);
    cy.findAllByText('VariantItem 2').should('have.length', 1);

    cy.get('@select').should('have.been.calledOnce');

    cy.mount(
      <VariantManagement onSelect={select} closeOnItemSelect>
        {TwoVariantItems}
      </VariantManagement>
    );

    cy.get('[ui5-responsive-popover]').should('not.be.visible');
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.get('[ui5-responsive-popover]').should('be.visible');
    cy.findByText('VariantItem 1').click();
    cy.get('[ui5-responsive-popover]').should('not.be.visible');

    cy.get('@select').should('have.been.calledTwice');
  });

  it('Disabled', () => {
    cy.mount(<VariantManagement disabled>{TwoVariantItems}</VariantManagement>);
    cy.get('[ui5-responsive-popover]').should('not.be.visible');
    cy.get('[ui5-title]').findByText('VariantItem 2').should('be.visible').click();
    cy.get('[ui5-responsive-popover]').should('not.be.visible');
    cy.get('[icon="navigation-down-arrow"]').should('have.attr', 'disabled', 'disabled').click({ force: true });
    cy.get('[ui5-responsive-popover]').should('not.be.visible');
  });

  it('Dirty state', () => {
    const save = cy.spy().as('save');
    const TestComp = ({
      onSave,
      dirtyStateText
    }: {
      onSave: VariantManagementPropTypes['onSave'];
      dirtyStateText?: VariantManagementPropTypes['dirtyStateText'];
    }) => {
      const [savedVariant, setSavedVariant] = useState(undefined);
      const handleSave = (e) => {
        onSave(e);
        setSavedVariant(e.detail.children);
      };
      return (
        <>
          Saved Variant:{savedVariant}
          <VariantManagement dirtyState onSave={handleSave} dirtyStateText={dirtyStateText}>
            <VariantItem>VariantItem 1</VariantItem>
            <VariantItem selected>VariantItem 2</VariantItem>
            <VariantItem readOnly>VariantItem 3</VariantItem>
          </VariantManagement>
        </>
      );
    };
    cy.mount(<TestComp onSave={save} />);

    cy.findByText('*').should('be.visible');
    cy.get('[ui5-title]').findByText('VariantItem 2').click();
    cy.findByText('Save').click();
    cy.get('@save').should('have.been.calledOnce');
    cy.findByText('Saved Variant:VariantItem 2');

    cy.findByText('VariantItem 3').click();
    cy.findByText('Save', { timeout: 200 }).should('not.exist');
    cy.findByText('VariantItem 1').click();
    cy.findByText('Save').should('be.visible');

    cy.mount(<TestComp onSave={save} dirtyStateText="Dirty state" />);
    cy.findByText('*', { timeout: 200 }).should('not.exist');
    cy.findByText('Dirty state').should('be.visible');
  });

  it('Show/Hide buttons', () => {
    cy.mount(<VariantManagement>{TwoVariantItems}</VariantManagement>);
    cy.get('[ui5-title]').findByText('VariantItem 2').click();
    cy.findByText('Save As').should('be.visible');
    cy.findByText('Manage').should('be.visible');

    cy.mount(<VariantManagement hideSaveAs>{TwoVariantItems}</VariantManagement>);
    cy.get('[ui5-title]').findByText('VariantItem 2').click();
    cy.findByText('Save As', { timeout: 200 }).should('not.exist');
    cy.findByText('Manage').should('be.visible');

    cy.mount(
      <VariantManagement hideSaveAs hideManageVariants>
        <VariantItem>VariantItem 1</VariantItem>
        <VariantItem selected>VariantItem 2</VariantItem>
      </VariantManagement>
    );
    cy.get('[ui5-title]').findByText('VariantItem 2').click();
    cy.findByText('Save As', { timeout: 200 }).should('not.exist');
    cy.findByText('Manage', { timeout: 200 }).should('not.exist');
  });

  it('In error state', () => {
    cy.mount(
      <VariantManagement inErrorState>
        <VariantItem>VariantItem 1</VariantItem>
        <VariantItem selected>VariantItem 2</VariantItem>
      </VariantManagement>
    );
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.get('[ui5-illustrated-message]').should('be.visible');
  });

  it('Search Input', () => {
    cy.mount(
      <VariantManagement>
        <VariantItem>VariantItem 1</VariantItem>
        <VariantItem selected>VariantItem 2</VariantItem>
        {...new Array(9)
          .fill(':)')
          .map((_, index) => <VariantItem key={index + 3}>{`VariantItem ${index + 3}`}</VariantItem>)}
      </VariantManagement>
    );
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.get('[ui5-li]').should('have.length', 11);
    cy.findByPlaceholderText('Search').typeIntoUi5Input('VariantItem 10');
    cy.get('[ui5-li]').should('have.length', 1).should('have.text', 'VariantItem 10');
    cy.get('[input-icon]').click();
    cy.get('[ui5-li]').should('have.length', 11);

    cy.mount(
      <VariantManagement>
        {TwoVariantItems}
        {new Array(8).fill(':)').map((_, index) => (
          <VariantItem key={index + 3}>{`VariantItem ${index + 3}`}</VariantItem>
        ))}
      </VariantManagement>
    );
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.get('[ui5-li]').should('have.length', 10);
    cy.findByPlaceholderText('Search', { timeout: 200 }).should('not.exist');
  });

  it('Show only favorite', () => {
    cy.mount(
      <VariantManagement showOnlyFavorites>
        <VariantItem>VariantItem 1</VariantItem>
        <VariantItem favorite selected>
          Favorite VariantItem
        </VariantItem>
        <VariantItem isDefault>Default VariantItem</VariantItem>
      </VariantManagement>
    );
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.findByText('VariantItem 1', { timeout: 200 }).should('not.exist');
    cy.findAllByText('Favorite VariantItem').should('have.length', 2);
    cy.findByText('Default VariantItem').should('be.visible');
  });

  it('Hide variant props', () => {
    cy.mount(<VariantManagement>{TwoVariantItems}</VariantManagement>);
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.findByText('Save As').click();
    cy.get('[text="Set as Default"]').should('be.visible');
    cy.get('[text="Public"]').should('be.visible');
    cy.get('[text="Apply Automatically"]').should('be.visible');
    cy.get('[ui5-checkbox]').should('have.length', 3);

    cy.mount(
      <VariantManagement hideApplyAutomatically hideSetAsDefault hideShare hideCreatedBy>
        {TwoVariantItems}
      </VariantManagement>
    );
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.findByText('Save As').click();
    cy.get('[text="Set as Default"]', { timeout: 200 }).should('not.exist');
    cy.get('[text="Public"]', { timeout: 50 }).should('not.exist');
    cy.get('[text="Apply Automatically"]', { timeout: 50 }).should('not.exist');
    cy.get('[ui5-checkbox]').should('not.exist');
  });

  it('Save As', () => {
    const TestComp = ({ onSaveAs }: { onSaveAs: VariantManagementPropTypes['onSaveAs'] }) => {
      const [saved, setSaved] = useState(undefined);
      const handleSaveAs = (e) => {
        onSaveAs(e);
        const { variantItem: _0, ...rest } = e.detail;
        setSaved(rest);
      };
      return (
        <>
          {saved && JSON.stringify(saved)}
          <VariantManagement onSaveAs={handleSaveAs}>{TwoVariantItems}</VariantManagement>
        </>
      );
    };
    const saveAs = cy.spy().as('saveAs');
    cy.mount(<TestComp onSaveAs={saveAs} />);
    cy.get('[icon="navigation-down-arrow"]').click();

    cy.findByText('Save As').click();
    cy.get('[ui5-dialog][header-text="Save View"]').should('be.visible');
    cy.get('[ui5-input]').should('have.value', 'VariantItem 2');
    cy.get('[ui5-checkbox]').each(($cb) => {
      cy.wrap($cb).should('not.be.checked').click();
    });

    // invalid entries
    cy.get('[ui5-input]').typeIntoUi5Input('{selectall}{backspace}');
    cy.get('[ui5-input]').should('have.attr', 'value-state', 'Error');
    cy.findByText('Please specify a view name');
    cy.get('[ui5-input]').typeIntoUi5Input('VariantItem 1');
    cy.get('[ui5-input]').should('have.attr', 'value-state', 'Error');
    cy.findByText('The view name already exists. Please enter a different name.');

    // valid entries & save
    cy.get('[ui5-input]').typeIntoUi5Input('{selectall}{backspace}Updated!');
    cy.findByText('Save').click();
    cy.findByText('{"selected":true,"children":"Updated!","isDefault":true,"global":true,"applyAutomatically":true}');
    cy.get('@saveAs').should('have.been.calledOnce');

    // cancel
    cy.findByText('Save As').click();
    cy.get('[ui5-input]').typeIntoUi5Input('{selectall}{backspace}Updated again!');
    cy.findByText('Cancel').click();
    cy.findByText('{"selected":true,"children":"Updated!","isDefault":true,"global":true,"applyAutomatically":true}');
    cy.get('@saveAs').should('have.been.calledOnce');
  });

  it('Manage Views - render variants', () => {
    const variantItems = [
      { rowId: 'Default VariantItem', props: {} },
      { rowId: 'LabelReadOnly', props: { labelReadOnly: true } },
      { rowId: 'Favorite', props: { favorite: true } },
      { rowId: 'Favorite & isDefault', props: { favorite: true, isDefault: true } },
      { rowId: 'IsDefault', props: { isDefault: true } },
      { rowId: 'HideDelete', props: { hideDelete: true } },
      { rowId: 'HideDelete - false & global - true', props: { hideDelete: false, global: true } },
      { rowId: 'Global', props: { global: true } },
      { rowId: 'Apply Automatically (List item)', props: { applyAutomatically: true } },
      {
        rowId: 'Apply Automatically with text',
        props: { applyAutomatically: true, applyAutomaticallyText: 'applyAutomaticallyText' }
      },
      {
        rowId: 'Apply Automatically (false) with text',
        props: { applyAutomatically: false, applyAutomaticallyText: 'applyAutomaticallyText' }
      },
      { rowId: 'Author', props: { author: 'author' } },
      {
        rowId: 'All props',
        props: {
          labelReadOnly: true,
          favorite: true,
          isDefault: true,
          hideDelete: true,
          global: true,
          applyAutomatically: true,
          author: 'bla'
        }
      }
    ];
    const TestComp = ({
      onSaveManageViews,
      showOnlyFavorites
    }: {
      onSaveManageViews: VariantManagementPropTypes['onSaveManageViews'];
      showOnlyFavorites?: VariantManagementPropTypes['showOnlyFavorites'];
    }) => {
      const [save, setSave] = useState(undefined);
      const handleSave = (e) => {
        onSaveManageViews(e);
        setSave({
          ...e.detail,
          variants: e.detail.variants.map((item) => {
            const { variantItem: _0, ...rest } = item;
            return rest;
          })
        });
      };
      return (
        <>
          {save && JSON.stringify(save)}
          <VariantManagement onSaveManageViews={handleSave} showOnlyFavorites={showOnlyFavorites}>
            {variantItems.map((item, index) => (
              <VariantItem key={index} {...item.props}>
                {item.rowId}
              </VariantItem>
            ))}
          </VariantManagement>
        </>
      );
    };
    const manageViewsRowTest = (variantItems, showOnlyFavorites) => {
      variantItems.forEach((item) => {
        const { rowId, props } = item;
        const {
          favorite,
          labelReadOnly,
          isDefault,
          hideDelete,
          global,
          applyAutomatically,
          applyAutomaticallyText,
          author
        } = props;

        cy.get(`[ui5-table-row][data-id="${rowId}"]`).as('row');
        if (showOnlyFavorites) {
          if (labelReadOnly) {
            if (favorite || isDefault) {
              cy.findAllByText(rowId).should('have.length', 2);
            } else {
              cy.findAllByText(rowId).should('have.length', 1);
            }
          } else {
            if (favorite || isDefault) {
              cy.findAllByText(rowId).should('have.length', 1);
              cy.get('@row').find('[ui5-input]').findShadowInput().should('have.value', rowId);
            } else {
              cy.findByText(rowId, { timeout: 100 }).should('not.exist');
              cy.get('@row').find('[ui5-input]').findShadowInput().should('have.value', rowId);
            }
          }
        } else {
          if (labelReadOnly) {
            cy.findAllByText(rowId).should('have.length', 2);
          } else {
            cy.findAllByText(rowId).should('have.length', 1);
            cy.get('@row').find('[ui5-input]').findShadowInput().should('have.value', rowId);
          }
        }

        if (showOnlyFavorites) {
          if (isDefault) {
            cy.get('@row').find(`[ui5-icon][name="favorite"]`).should('not.have.attr', 'title', 'Selected as Favorite');
            cy.get('@row').find(`[ui5-icon][name="unfavorite"]`, { timeout: 100 }).should('not.exist');
          } else {
            if (favorite) {
              cy.get('@row').find(`[ui5-icon][name="favorite"]`).should('have.attr', 'title', 'Selected as Favorite');
            } else {
              cy.get('@row')
                .find(`[ui5-icon][name="unfavorite"]`)
                .should('have.attr', 'title', 'Unselected as Favorite');
            }
          }
        }

        if (hideDelete) {
          cy.get('@row').find('[ui5-button]', { timeout: 100 }).should('not.exist');
        } else {
          if (global && hideDelete !== false) {
            cy.get('@row').find('[ui5-button]', { timeout: 100 }).should('not.exist');
          } else {
            cy.get('@row').find('[ui5-button]').should('have.attr', 'tooltip', 'Delete view');
          }
        }

        if (applyAutomatically) {
          cy.get('@row').find('[ui5-checkbox]').findShadowInput().should('be.checked');
        } else {
          cy.get('@row').find('[ui5-checkbox]').findShadowInput().should('not.be.checked');
        }
        if (applyAutomaticallyText) {
          cy.get('@row').find('[ui5-checkbox]').should('have.attr', 'text', 'applyAutomaticallyText');
        }

        if (author) {
          cy.get('@row').findByText(author).should('be.visible');
        }
      });
    };
    const onSaveView = cy.spy().as('saveView');

    cy.mount(<TestComp onSaveManageViews={onSaveView} />);
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.findByText('Manage').click();
    cy.get('[ui5-dialog][header-text="Manage Views"]').should('be.visible');

    manageViewsRowTest(variantItems, false);
    cy.findByText('Save').click();
    cy.get('@saveView').should('have.been.calledOnce');
    cy.findByText(
      '{"deletedVariants":[],"prevVariants":[{"children":"Default VariantItem"},{"labelReadOnly":true,"children":"LabelReadOnly"},{"favorite":true,"children":"Favorite"},{"favorite":true,"isDefault":true,"children":"Favorite & isDefault"},{"isDefault":true,"children":"IsDefault"},{"hideDelete":true,"children":"HideDelete"},{"hideDelete":false,"global":true,"children":"HideDelete - false & global - true"},{"global":true,"children":"Global"},{"applyAutomatically":true,"children":"Apply Automatically (List item)"},{"applyAutomatically":true,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically with text"},{"applyAutomatically":false,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically (false) with text"},{"author":"author","children":"Author"},{"labelReadOnly":true,"favorite":true,"isDefault":true,"hideDelete":true,"global":true,"applyAutomatically":true,"author":"bla","children":"All props"}],"updatedVariants":[],"variants":[{"children":"Default VariantItem"},{"labelReadOnly":true,"children":"LabelReadOnly"},{"favorite":true,"children":"Favorite"},{"favorite":true,"isDefault":true,"children":"Favorite & isDefault"},{"isDefault":true,"children":"IsDefault"},{"hideDelete":true,"children":"HideDelete"},{"hideDelete":false,"global":true,"children":"HideDelete - false & global - true"},{"global":true,"children":"Global"},{"applyAutomatically":true,"children":"Apply Automatically (List item)"},{"applyAutomatically":true,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically with text"},{"applyAutomatically":false,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically (false) with text"},{"author":"author","children":"Author"},{"labelReadOnly":true,"favorite":true,"isDefault":true,"hideDelete":true,"global":true,"applyAutomatically":true,"author":"bla","children":"All props"}]}'
    );

    cy.mount(<TestComp onSaveManageViews={onSaveView} showOnlyFavorites />);
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.findByText('Manage').click();
    cy.get('[ui5-dialog][header-text="Manage Views"]').should('be.visible');
    manageViewsRowTest(variantItems, true);
    cy.findByText('Save').click();
    cy.get('@saveView').should('have.been.calledTwice');
    cy.findByText(
      '{"deletedVariants":[],"prevVariants":[{"children":"Default VariantItem"},{"labelReadOnly":true,"children":"LabelReadOnly"},{"favorite":true,"children":"Favorite"},{"favorite":true,"isDefault":true,"children":"Favorite & isDefault"},{"isDefault":true,"children":"IsDefault"},{"hideDelete":true,"children":"HideDelete"},{"hideDelete":false,"global":true,"children":"HideDelete - false & global - true"},{"global":true,"children":"Global"},{"applyAutomatically":true,"children":"Apply Automatically (List item)"},{"applyAutomatically":true,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically with text"},{"applyAutomatically":false,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically (false) with text"},{"author":"author","children":"Author"},{"labelReadOnly":true,"favorite":true,"isDefault":true,"hideDelete":true,"global":true,"applyAutomatically":true,"author":"bla","children":"All props"}],"updatedVariants":[],"variants":[{"children":"Default VariantItem"},{"labelReadOnly":true,"children":"LabelReadOnly"},{"favorite":true,"children":"Favorite"},{"favorite":true,"isDefault":true,"children":"Favorite & isDefault"},{"isDefault":true,"children":"IsDefault"},{"hideDelete":true,"children":"HideDelete"},{"hideDelete":false,"global":true,"children":"HideDelete - false & global - true"},{"global":true,"children":"Global"},{"applyAutomatically":true,"children":"Apply Automatically (List item)"},{"applyAutomatically":true,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically with text"},{"applyAutomatically":false,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically (false) with text"},{"author":"author","children":"Author"},{"labelReadOnly":true,"favorite":true,"isDefault":true,"hideDelete":true,"global":true,"applyAutomatically":true,"author":"bla","children":"All props"}]}'
    );
  });

  it('Delete variants', () => {
    const TestComp = ({
      onSaveManageViews
    }: {
      onSaveManageViews: VariantManagementPropTypes['onSaveManageViews'];
    }) => {
      const [save, setSave] = useState(undefined);
      const handleSave = (e) => {
        onSaveManageViews(e);
        setSave({
          ...e.detail,
          variants: e.detail.variants.map((item) => {
            const { variantItem: _0, ...rest } = item;
            return rest;
          })
        });
      };
      return (
        <>
          {save && JSON.stringify(save)}
          <VariantManagement onSaveManageViews={handleSave}>
            {TwoVariantItems}
            <VariantItem isDefault key="2">
              VariantItem 3
            </VariantItem>
          </VariantManagement>
        </>
      );
    };
    const saveView = cy.spy().as('saveView');
    cy.mount(<TestComp onSaveManageViews={saveView} />);

    cy.get('[icon="navigation-down-arrow"]').click();
    cy.findByText('Manage').click();

    cy.get('[ui5-button][tooltip="Delete view"]').each(($btn) => {
      if ($btn[0].getAttribute('data-children') !== 'VariantItem 3') {
        cy.wrap($btn).click();
      }
    });
    cy.findByText('Save').click();
    cy.get('@saveView').should('have.been.calledOnce');
    cy.findByText(
      '{"deletedVariants":[{"children":"VariantItem 1"},{"selected":true,"children":"VariantItem 2"}],"prevVariants":[{"children":"VariantItem 1"},{"selected":true,"children":"VariantItem 2"},{"isDefault":true,"children":"VariantItem 3"}],"updatedVariants":[],"variants":[{"isDefault":true,"children":"VariantItem 3"}]}'
    );
  });

  it('Manage Views input validation', () => {
    const saveView = cy.spy().as('saveView');
    cy.mount(
      <VariantManagement onSaveManageViews={saveView}>
        {TwoVariantItems}
        <VariantItem isDefault key="2">
          VariantItem 3
        </VariantItem>
      </VariantManagement>
    );
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.findByText('Manage').click();

    cy.get('[data-id="VariantItem 1"] [ui5-input]').typeIntoUi5Input('{selectall}{backspace}A');
    cy.get('[data-id="VariantItem 2"] [ui5-input]').typeIntoUi5Input('{selectall}{backspace}A');
    cy.get('[data-id="VariantItem 3"] [ui5-input]').typeIntoUi5Input('{selectall}{backspace}A');
    cy.findByText('Save').click();
    cy.get('@saveView').should('not.be.called');
    cy.get('[data-id="VariantItem 1"] [ui5-input]').typeIntoUi5Input('{selectall}{backspace}AB');
    cy.get('[data-id="VariantItem 2"] [ui5-input]').typeIntoUi5Input('{selectall}{backspace}B');
    cy.get('[data-id="VariantItem 3"] [ui5-input]').typeIntoUi5Input('{selectall}{backspace}');
    cy.findByText('Save').click();
    cy.get('@saveView').should('not.be.called');
    cy.get('[data-id="VariantItem 3"] [ui5-input]').typeIntoUi5Input('C');
    cy.findByText('Save').click();
    cy.get('@saveView').should('have.been.calledOnce');
  });

  cypressPassThroughTestsFactory(VariantManagement);
});
