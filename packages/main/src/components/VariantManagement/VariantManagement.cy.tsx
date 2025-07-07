import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { useState } from 'react';
import type { VariantItemPropTypes } from './VariantItem';
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
  </VariantItem>,
];

describe('VariantManagement', () => {
  it('render btn with tooltip', () => {
    cy.mount(<VariantManagement />);
    cy.get('[ui5-button]').shadow().findByTitle('Select View').should('be.visible');
  });

  it('two children', () => {
    cy.mount(<VariantManagement>{TwoVariantItems}</VariantManagement>);
    cy.get('[tooltip="Select View"]').click();

    cy.get('[ui5-li][text="VariantItem 1"]').should('be.visible');
    cy.get('[ui5-li][text="VariantItem 2"]').should('be.visible');
    cy.findByText('VariantItem 2').should('be.visible');
  });

  it('Headings customization', () => {
    cy.mount(
      <VariantManagement titleText="Popover Heading" level={TitleLevel.H1}>
        {TwoVariantItems}
      </VariantManagement>,
    );

    cy.findByText('VariantItem 2').should('have.attr', 'level', TitleLevel.H1).click();
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
          </VariantItem>,
        ]}
      </VariantManagement>,
      { strict: false },
    );

    cy.contains('VariantItem 2').click();
    cy.findByText('Manage').click();

    cy.findAllByTitle('Unselected as Favorite').eq(0).click();
    cy.findAllByPlaceholderText('View').eq(0).shadow().find('input').type(' Updated!', { force: true });

    cy.get('[accessible-name="Use as Standard View"]').eq(0).click();
    cy.get('[accessible-name="Apply Automatically"]').eq(0).click();

    cy.findByText('Save').click();
    cy.get('@onSaveManageViews').should('have.been.calledOnce');
    //todo: investigate why this matcher fails in React strict mode
    cy.get('@onSaveManageViews').should(
      'have.been.calledWith',
      Cypress.sinon.match({
        detail: Cypress.sinon.match({
          updatedVariants: [
            Cypress.sinon.match({
              children: 'VariantItem 1 Updated!',
              isDefault: true,
              favorite: true,
              applyAutomatically: true,
            }),
            Cypress.sinon.match.object,
          ],
          variants: [
            Cypress.sinon.match.object,
            Cypress.sinon.match.object,
            Cypress.sinon.match({
              isDefault: false,
            }),
          ],
        }),
      }),
    );

    cy.findByText('Manage Views').should('not.exist');
    cy.contains('VariantItem 2').click();
    cy.findByText('Manage').click();
    cy.findByText('Manage Views').should('be.visible');
    cy.findByText('Cancel').click();
    cy.findByText('Manage Views').should('not.exist');
    cy.get('@onSaveManageViews').should('have.been.calledOnce');
  });

  it('saveViewInputProps & manageViewsInputProps', () => {
    // manageViewsInputProps
    cy.mount(<WithCustomValidation />);
    cy.findByText('Max 12 chars').click();
    cy.findByText('Manage').click();
    cy.get('[ui5-dialog]').should('have.attr', 'open');
    cy.findByTestId('12chars').typeIntoUi5Input('A');
    cy.findByTestId('12chars').should('have.attr', 'value-state', ValueState.Negative);
    cy.realPress('Tab');
    // fallback
    cy.get('body').click({ force: true });
    cy.realPress('Escape');
    cy.get('[ui5-dialog]').should('not.exist');
    cy.findByText('Max 12 chars').click();
    cy.findByText('Manage').click();
    cy.findByTestId('12chars').should('have.attr', 'value-state', 'None');
    cy.findByTestId('12chars').typeIntoUi5Input('A');
    cy.findByTestId('12chars').should('have.attr', 'value-state', ValueState.Negative);
    cy.findByText('Cancel').click();
    cy.findByText('Max 12 chars').click();
    cy.findByText('Manage').click();
    cy.findByTestId('12chars').should('have.attr', 'value-state', 'None');
    cy.findByTestId('12chars').typeIntoUi5Input('A');
    cy.findByTestId('12chars').should('have.attr', 'value-state', ValueState.Negative);
    cy.findByText('Save').click();
    cy.get('[ui5-dialog]').should('have.attr', 'open');
    cy.findByTestId('12chars').typeIntoUi5Input('{backspace}');
    cy.findByTestId('12chars').typeIntoUi5Input('{backspace}B');
    cy.findByTestId('12chars').should('have.attr', 'value-state', 'None');
    cy.findByText('Save').click();
    cy.findByTestId('12chars').should('not.exist');
    cy.get('[ui5-dialog]').should('not.exist');
    cy.findByText('Max 12 charB').should('be.visible');

    //saveViewInputProps
    // @ts-expect-error: not a real prop, just for testing
    cy.mount(<WithCustomValidation selectedByIndex={0} />);
    cy.findByText('Only alphanumeric chars in Save View input').click();
    cy.findByText('Save As').click();
    cy.get('[ui5-dialog]').should('have.attr', 'open');
    cy.findByTestId('alphanumeric').typeIntoUi5Input('$');
    cy.findByTestId('alphanumeric').should('have.attr', 'value-state', ValueState.Negative);
    // Fallback: click on the Apply Automatically checkbox to prevent strange behavior in CI tests because of valueStateMessage popover
    cy.get('[text="Apply Automatically"]').realClick();
    cy.realPress('Escape');
    cy.get('[ui5-dialog]').should('not.exist');
    cy.findByText('Only alphanumeric chars in Save View input').click();
    cy.findByText('Save As').click();
    cy.findByTestId('alphanumeric').should('have.attr', 'value-state', 'None');
    cy.findByTestId('alphanumeric').typeIntoUi5Input('$');
    cy.findByTestId('alphanumeric').should('have.attr', 'value-state', ValueState.Negative);
    cy.findByText('Cancel').click();
    cy.findByText('Only alphanumeric chars in Save View input').click();
    cy.findByText('Save As').click();
    cy.findByTestId('alphanumeric').should('have.attr', 'value-state', 'None');
    cy.findByTestId('alphanumeric').typeIntoUi5Input('$');
    cy.findByTestId('alphanumeric').should('have.attr', 'value-state', ValueState.Negative);
    cy.findByText('Save').realClick();
    cy.get('[ui5-dialog]').should('have.attr', 'open');
    cy.wait(50);
    cy.get('[ui5-input]').should('be.focused').and('have.attr', 'value-state', ValueState.Negative);
    cy.findByTestId('alphanumeric').typeIntoUi5Input('{selectall}{backspace}A');
    cy.findByText('Save').click();
    cy.findByTestId('alphanumeric').should('not.exist');
    cy.get('[ui5-dialog]').should('not.exist');
  });

  it('Selection', () => {
    const select = cy.spy().as('select');
    cy.mount(<VariantManagement onSelect={select}>{TwoVariantItems}</VariantManagement>);

    cy.get('[ui5-responsive-popover]').should('not.be.visible');
    cy.get('[ui5-li][text="VariantItem 2"]').should('exist');
    cy.findByText('VariantItem 2').should('be.visible');
    cy.get('[ui5-title]').contains('VariantItem 2').click();
    cy.get('[ui5-responsive-popover]').should('be.visible');

    cy.get('[ui5-li][text="VariantItem 1"]').should('be.visible');
    cy.findByText('VariantItem 1').should('not.exist');
    cy.get('[ui5-list]').clickUi5ListItemByText('VariantItem 1');
    cy.get('[ui5-li][text="VariantItem 1"]').should('be.visible');
    cy.findByText('VariantItem 1').should('be.visible');
    cy.get('[ui5-li][text="VariantItem 2"]').should('be.visible');
    cy.findByText('VariantItem 2').should('not.exist');

    cy.get('@select').should('have.been.calledOnce');

    cy.mount(
      <VariantManagement onSelect={select} closeOnItemSelect>
        {TwoVariantItems}
      </VariantManagement>,
    );

    cy.get('[ui5-responsive-popover]').should('not.be.visible');
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.get('[ui5-responsive-popover]').should('be.visible');
    cy.get('[ui5-list]').clickUi5ListItemByText('VariantItem 1');
    cy.get('[ui5-responsive-popover]').should('not.be.visible');

    cy.get('@select').should('have.been.calledTwice');
  });

  it('Disabled', () => {
    cy.mount(<VariantManagement disabled>{TwoVariantItems}</VariantManagement>);
    cy.get('[ui5-responsive-popover]').should('not.be.visible');
    cy.get('[ui5-title]').contains('VariantItem 2').should('be.visible').click();
    cy.get('[ui5-responsive-popover]').should('not.be.visible');
    cy.get('[icon="navigation-down-arrow"]').should('have.attr', 'disabled', 'disabled').click({ force: true });
    cy.get('[ui5-responsive-popover]').should('not.be.visible');
  });

  it('Dirty state', () => {
    const save = cy.spy().as('save');
    const TestComp = ({
      onSave,
      dirtyStateText,
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
            <VariantItem readOnly={false}>VariantItem 4</VariantItem>
            <VariantItem readOnly={true}>VariantItem 5</VariantItem>
            <VariantItem readOnly={null}>VariantItem 6</VariantItem>
            <VariantItem readOnly={undefined}>VariantItem 7</VariantItem>
          </VariantManagement>
        </>
      );
    };
    cy.mount(<TestComp onSave={save} />);

    cy.findByText('*').should('be.visible');
    cy.get('[ui5-title]').contains('VariantItem 2').click();
    cy.findByText('Save').click();
    cy.get('@save').should('have.been.calledOnce');
    cy.findByText('Saved Variant:VariantItem 2');

    cy.get('[ui5-list]').clickUi5ListItemByText('VariantItem 3');
    cy.findByText('Save', { timeout: 200 }).should('not.exist');
    cy.get('[ui5-list]').clickUi5ListItemByText('VariantItem 1');
    cy.findByText('Save').should('be.visible');
    cy.get('[ui5-list]').clickUi5ListItemByText('VariantItem 4');
    cy.findByText('Save').should('be.visible');
    cy.get('[ui5-list]').clickUi5ListItemByText('VariantItem 5');
    cy.findByText('Save', { timeout: 200 }).should('not.exist');
    cy.get('[ui5-list]').clickUi5ListItemByText('VariantItem 6');
    cy.findByText('Save').should('be.visible');
    cy.get('[ui5-list]').clickUi5ListItemByText('VariantItem 7');
    cy.findByText('Save').should('be.visible');

    cy.mount(<TestComp onSave={save} dirtyStateText="Dirty state" />);
    cy.findByText('*', { timeout: 200 }).should('not.exist');
    cy.findByText('Dirty state').should('be.visible');
  });

  it('Show/Hide buttons', () => {
    cy.mount(<VariantManagement>{TwoVariantItems}</VariantManagement>);
    cy.get('[ui5-title]').contains('VariantItem 2').click();
    cy.findByText('Save As').should('be.visible');
    cy.findByText('Manage').should('be.visible');

    cy.mount(<VariantManagement hideSaveAs>{TwoVariantItems}</VariantManagement>);
    cy.get('[ui5-title]').contains('VariantItem 2').click();
    cy.findByText('Save As', { timeout: 200 }).should('not.exist');
    cy.findByText('Manage').should('be.visible');

    cy.mount(
      <VariantManagement hideSaveAs hideManageVariants>
        <VariantItem>VariantItem 1</VariantItem>
        <VariantItem selected>VariantItem 2</VariantItem>
      </VariantManagement>,
    );
    cy.get('[ui5-title]').contains('VariantItem 2').click();
    cy.findByText('Save As', { timeout: 200 }).should('not.exist');
    cy.findByText('Manage', { timeout: 200 }).should('not.exist');
  });

  it('In error state', () => {
    cy.mount(
      <VariantManagement inErrorState>
        <VariantItem>VariantItem 1</VariantItem>
        <VariantItem selected>VariantItem 2</VariantItem>
      </VariantManagement>,
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
      </VariantManagement>,
    );
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.get('[ui5-li]').should('have.length', 11);
    cy.findByPlaceholderText('Search').typeIntoUi5Input('VariantItem 10');
    cy.get('[ui5-li]').should('have.length', 1).should('have.attr', 'text', 'VariantItem 10');
    cy.get('.ui5-input-clear-icon').click();
    cy.get('[ui5-li]').should('have.length', 11);

    cy.mount(
      <VariantManagement>
        {TwoVariantItems}
        {new Array(8).fill(':)').map((_, index) => (
          <VariantItem key={index + 3}>{`VariantItem ${index + 3}`}</VariantItem>
        ))}
      </VariantManagement>,
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
      </VariantManagement>,
    );
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.findByText('VariantItem 1', { timeout: 200 }).should('not.exist');
    cy.get('[ui5-li][text="Favorite VariantItem"]').should('be.visible');
    cy.findByText('Favorite VariantItem').should('be.visible');
    cy.get('[ui5-li][text="Default VariantItem"]').should('be.visible');
  });

  it('Hide variant props', () => {
    cy.mount(<VariantManagement>{TwoVariantItems}</VariantManagement>);
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.findByText('Save As').click();
    cy.get('[text="Set as Default"]').should('be.visible');
    cy.get('[text="Public"]').should('be.visible');
    cy.get('[text="Apply Automatically"]').should('be.visible');
    cy.get('[ui5-checkbox]').should('have.length', 3);

    cy.realPress('Escape');

    cy.get('[icon="navigation-down-arrow"]').click();
    cy.findByText('Manage').click();
    cy.get('[ui5-table]').contains('Apply Automatically').should('be.visible');
    cy.get('[ui5-table]').contains('Default').should('be.visible');
    cy.get('[ui5-table]').contains('Sharing').should('be.visible');
    cy.get('[ui5-table]').contains('Created By').should('be.visible');

    cy.mount(
      <VariantManagement hideApplyAutomatically hideSetAsDefault hideShare hideCreatedBy>
        {TwoVariantItems}
      </VariantManagement>,
    );
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.findByText('Save As').click();
    cy.get('[text="Set as Default"]', { timeout: 200 }).should('not.exist');
    cy.get('[text="Public"]', { timeout: 50 }).should('not.exist');
    cy.get('[text="Apply Automatically"]', { timeout: 50 }).should('not.exist');
    cy.get('[ui5-checkbox]').should('not.exist');

    cy.realPress('Escape');

    cy.get('[icon="navigation-down-arrow"]').click();
    cy.findByText('Manage').click();
    cy.get('[ui5-table]').contains('Apply Automatically').should('not.exist');
    cy.get('[ui5-table]').contains('Default').should('not.exist');
    cy.get('[ui5-table]').contains('Sharing').should('not.exist');
    cy.get('[ui5-table]').contains('Created By').should('not.exist');
  });

  it('Save As', () => {
    const TestComp = ({ onSaveAs }: { onSaveAs: VariantManagementPropTypes['onSaveAs'] }) => {
      const [saved, setSaved] = useState(undefined);
      const handleSaveAs: VariantManagementPropTypes['onSaveAs'] = (e) => {
        onSaveAs(e);
        const { variantItem: _0, children, global, isDefault, nativeDetail, selected, applyAutomatically } = e.detail;
        setSaved({ nativeDetail, selected, children, isDefault, global, applyAutomatically });
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
    cy.get('[ui5-input]').should('have.attr', 'value-state', ValueState.Negative);
    cy.findByText('Please specify a view name.');
    cy.get('[ui5-input]').typeIntoUi5Input('VariantItem 1');
    cy.get('[ui5-input]').should('have.attr', 'value-state', ValueState.Negative);
    cy.findByText('The view name already exists. Please enter a different name.');

    // valid entries & save
    cy.get('[ui5-input]').typeIntoUi5Input('{selectall}{backspace}Updated!');
    cy.findByText('Save').click();
    cy.findByText(
      '{"nativeDetail":1,"selected":true,"children":"Updated!","isDefault":true,"global":true,"applyAutomatically":true}',
    );
    cy.get('@saveAs').should('have.been.calledOnce');

    // cancel
    cy.contains('Updated!').click();
    cy.findByText('Save As').click();
    cy.get('[ui5-input]').typeIntoUi5Input('{selectall}{backspace}Updated again!');
    cy.findByText('Cancel').click();
    cy.findByText(
      '{"nativeDetail":1,"selected":true,"children":"Updated!","isDefault":true,"global":true,"applyAutomatically":true}',
    );
    cy.get('@saveAs').should('have.been.calledOnce');
  });

  it('Manage Views - render variants', () => {
    const variantItems: VariantItemPropTypes[] = [
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
        props: { applyAutomatically: true, applyAutomaticallyText: 'applyAutomaticallyText' },
      },
      {
        rowId: 'Apply Automatically (false) with text',
        props: { applyAutomatically: false, applyAutomaticallyText: 'applyAutomaticallyText' },
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
          author: 'bla',
        },
      },
      {
        rowId: 'All props false',
        props: {
          labelReadOnly: false,
          favorite: false,
          isDefault: false,
          hideDelete: false,
          global: false,
          applyAutomatically: false,
          author: 'All false',
        },
      },
    ];
    const TestComp = ({
      onSaveManageViews,
      showOnlyFavorites,
    }: {
      onSaveManageViews: VariantManagementPropTypes['onSaveManageViews'];
      showOnlyFavorites?: VariantManagementPropTypes['showOnlyFavorites'];
    }) => {
      const [save, setSave] = useState(undefined);
      const handleSave: VariantManagementPropTypes['onSaveManageViews'] = (e) => {
        const { deletedVariants, prevVariants, updatedVariants, variants, nativeDetail } = e.detail;
        onSaveManageViews(e);
        setSave({
          nativeDetail,
          deletedVariants,
          prevVariants,
          updatedVariants,
          variants: variants.map((item) => {
            const { variantItem: _0, ...rest } = item;
            return rest;
          }),
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
          author,
        } = props;

        cy.get(`[ui5-table-row][data-id="${rowId}"]`).as('row');
        if (showOnlyFavorites) {
          if (labelReadOnly) {
            if (favorite || isDefault) {
              cy.findAllByText(rowId).should('be.visible');
              cy.get(`[ui5-li][text="${rowId}"]`).should('exist').and('not.be.visible');
            } else {
              cy.findAllByText(rowId).should('have.length', 1);
            }
          } else {
            if (favorite || isDefault) {
              cy.get(`[ui5-li][text="${rowId}"]`).should('exist').and('not.be.visible');
              cy.get('@row').find('[ui5-input]').findShadowInput().should('have.value', rowId);
            } else {
              cy.findByText(rowId, { timeout: 100 }).should('not.exist');
              cy.get('@row').find('[ui5-input]').findShadowInput().should('have.value', rowId);
            }
          }
        } else {
          if (labelReadOnly) {
            cy.findAllByText(rowId).should('be.visible');
            cy.get(`[ui5-li][text="${rowId}"]`).should('exist').and('not.be.visible');
          } else {
            cy.get(`[ui5-li][text="${rowId}"]`).should('exist').and('not.be.visible');
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
            cy.get('@row').find('[ui5-button]').should('have.attr', 'tooltip', 'Delete View');
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
      '{"nativeDetail":1,"deletedVariants":[],"prevVariants":[{"children":"Default VariantItem"},{"labelReadOnly":true,"children":"LabelReadOnly"},{"favorite":true,"children":"Favorite"},{"favorite":true,"isDefault":true,"children":"Favorite & isDefault"},{"isDefault":true,"children":"IsDefault"},{"hideDelete":true,"children":"HideDelete"},{"hideDelete":false,"global":true,"children":"HideDelete - false & global - true"},{"global":true,"children":"Global"},{"applyAutomatically":true,"children":"Apply Automatically (List item)"},{"applyAutomatically":true,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically with text"},{"applyAutomatically":false,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically (false) with text"},{"author":"author","children":"Author"},{"labelReadOnly":true,"favorite":true,"isDefault":true,"hideDelete":true,"global":true,"applyAutomatically":true,"author":"bla","children":"All props"},{"labelReadOnly":false,"favorite":false,"isDefault":false,"hideDelete":false,"global":false,"applyAutomatically":false,"author":"All false","children":"All props false"}],"updatedVariants":[],"variants":[{"children":"Default VariantItem"},{"labelReadOnly":true,"children":"LabelReadOnly"},{"favorite":true,"children":"Favorite"},{"favorite":true,"isDefault":true,"children":"Favorite & isDefault"},{"isDefault":true,"children":"IsDefault"},{"hideDelete":true,"children":"HideDelete"},{"hideDelete":false,"global":true,"children":"HideDelete - false & global - true"},{"global":true,"children":"Global"},{"applyAutomatically":true,"children":"Apply Automatically (List item)"},{"applyAutomatically":true,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically with text"},{"applyAutomatically":false,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically (false) with text"},{"author":"author","children":"Author"},{"labelReadOnly":true,"favorite":true,"isDefault":true,"hideDelete":true,"global":true,"applyAutomatically":true,"author":"bla","children":"All props"},{"labelReadOnly":false,"favorite":false,"isDefault":false,"hideDelete":false,"global":false,"applyAutomatically":false,"author":"All false","children":"All props false"}]}',
    );

    cy.mount(<TestComp onSaveManageViews={onSaveView} showOnlyFavorites />);
    cy.get('[icon="navigation-down-arrow"]').click();
    cy.findByText('Manage').click();
    cy.get('[ui5-dialog][header-text="Manage Views"]').should('be.visible');
    manageViewsRowTest(variantItems, true);
    cy.findByText('Save').click();
    cy.get('@saveView').should('have.been.calledTwice');
    cy.findByText(
      '{"nativeDetail":1,"deletedVariants":[],"prevVariants":[{"children":"Default VariantItem"},{"labelReadOnly":true,"children":"LabelReadOnly"},{"favorite":true,"children":"Favorite"},{"favorite":true,"isDefault":true,"children":"Favorite & isDefault"},{"isDefault":true,"children":"IsDefault"},{"hideDelete":true,"children":"HideDelete"},{"hideDelete":false,"global":true,"children":"HideDelete - false & global - true"},{"global":true,"children":"Global"},{"applyAutomatically":true,"children":"Apply Automatically (List item)"},{"applyAutomatically":true,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically with text"},{"applyAutomatically":false,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically (false) with text"},{"author":"author","children":"Author"},{"labelReadOnly":true,"favorite":true,"isDefault":true,"hideDelete":true,"global":true,"applyAutomatically":true,"author":"bla","children":"All props"},{"labelReadOnly":false,"favorite":false,"isDefault":false,"hideDelete":false,"global":false,"applyAutomatically":false,"author":"All false","children":"All props false"}],"updatedVariants":[],"variants":[{"children":"Default VariantItem"},{"labelReadOnly":true,"children":"LabelReadOnly"},{"favorite":true,"children":"Favorite"},{"favorite":true,"isDefault":true,"children":"Favorite & isDefault"},{"isDefault":true,"children":"IsDefault"},{"hideDelete":true,"children":"HideDelete"},{"hideDelete":false,"global":true,"children":"HideDelete - false & global - true"},{"global":true,"children":"Global"},{"applyAutomatically":true,"children":"Apply Automatically (List item)"},{"applyAutomatically":true,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically with text"},{"applyAutomatically":false,"applyAutomaticallyText":"applyAutomaticallyText","children":"Apply Automatically (false) with text"},{"author":"author","children":"Author"},{"labelReadOnly":true,"favorite":true,"isDefault":true,"hideDelete":true,"global":true,"applyAutomatically":true,"author":"bla","children":"All props"},{"labelReadOnly":false,"favorite":false,"isDefault":false,"hideDelete":false,"global":false,"applyAutomatically":false,"author":"All false","children":"All props false"}]}',
    );
  });

  it('Delete variants', () => {
    const TestComp = ({
      onSaveManageViews,
    }: {
      onSaveManageViews: VariantManagementPropTypes['onSaveManageViews'];
    }) => {
      const [save, setSave] = useState(undefined);
      const handleSave: VariantManagementPropTypes['onSaveManageViews'] = (e) => {
        const { deletedVariants, prevVariants, updatedVariants, variants, nativeDetail } = e.detail;
        onSaveManageViews(e);
        setSave({
          nativeDetail,
          deletedVariants,
          prevVariants,
          updatedVariants,
          variants: variants.map((item) => {
            const { variantItem: _0, ...rest } = item;
            return rest;
          }),
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

    cy.get('[ui5-table-row-action][text="Delete View"]').each(($action) => {
      if ($action.parent().attr('data-id') !== 'VariantItem 3') {
        cy.wrap($action).click();
      }
    });

    cy.findByText('Save').click();
    cy.get('@saveView').should('have.been.calledOnce');
    cy.findByText(
      '{"nativeDetail":1,"deletedVariants":[{"children":"VariantItem 1"},{"selected":true,"children":"VariantItem 2"}],"prevVariants":[{"children":"VariantItem 1"},{"selected":true,"children":"VariantItem 2"},{"isDefault":true,"children":"VariantItem 3"}],"updatedVariants":[],"variants":[{"isDefault":true,"children":"VariantItem 3"}]}',
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
      </VariantManagement>,
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

  it('Programatically change selection', () => {
    const TestComp = () => {
      const [selected, setSelected] = useState('Item1');
      return (
        <>
          <VariantManagement
            onSelect={(e) => {
              setSelected(e.detail.selectedVariant.children);
            }}
          >
            <VariantItem selected={selected === 'Item1'}>Item1</VariantItem>
            <VariantItem selected={selected === 'Item2'}>Item2</VariantItem>
            <VariantItem selected={selected === 'Item3'}>Item3</VariantItem>
            <VariantItem selected={selected === 'Item4'}>Item4</VariantItem>
            <VariantItem selected={selected === 'Item5'}>Item5</VariantItem>
          </VariantManagement>
          <button
            onClick={() => {
              setSelected('Item3');
            }}
          >
            Select Item3
          </button>
          <button
            onClick={() => {
              setSelected('Item5');
            }}
          >
            Select Item5
          </button>
          <button
            onClick={() => {
              setSelected('Item1');
            }}
          >
            Select Item1
          </button>
        </>
      );
    };
    cy.mount(<TestComp />);

    cy.get('[ui5-title]').contains('Item1').should('be.visible');
    cy.findByText('Select Item3').click();
    cy.get('[ui5-title]').contains('Item3').should('be.visible').click();
    cy.get('[ui5-responsive-popover]').should('be.visible');
    cy.get('[ui5-li][text="Item3"]').should('have.attr', 'selected', 'selected');
    cy.get('[ui5-list]').clickUi5ListItemByText('Item1');
    cy.get('[ui5-li][text="Item3"]').should('not.have.attr', 'selected');
    cy.get('[ui5-li][text="Item1"]').should('have.attr', 'selected', 'selected');
    cy.realPress('Escape');
    cy.findByText('Select Item5').click();
    cy.get('[ui5-title]').contains('Item5').should('be.visible').click();
    cy.get('[ui5-li][text="Item1"]').should('not.have.attr', 'selected');
    cy.get('[ui5-li][text="Item5"]').should('have.attr', 'selected', 'selected');
  });

  cypressPassThroughTestsFactory(VariantManagement);
});
