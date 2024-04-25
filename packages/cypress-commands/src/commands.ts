declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Types a value into a ui5-webcomponent that offers a typeable input field.
       *
       * @param {string} text Text that will be typed into the input.
       * @example cy.get('[ui5-input]').typeIntoUi5Input('Hello World');
       */
      typeIntoUi5Input(text: string, options?: Partial<TypeOptions>): Chainable<Element>;
      /**
       * Clears a value from ui5-webcomponent that offers a typeable input field.
       *
       * @example cy.get('[ui5-input]').clearUi5Input();
       */
      clearUi5Input(options?: Partial<ClearOptions>): Chainable<Element>;
      /**
       * Types a value with a delay into an ui5-webcomponent that offers a typeable input field.
       *
       * __Note:__ Use this command if you render a component that should show suggestions while typing (e.g. `ComboBox`) but the corresponding popover does not open.
       * This command waits for the appropriate delay (in ms), giving the web component time to define all necessary customElements and boot web components.
       * The delay time can vary from environment to environment.
       *
       * @param {string} text Text that will be typed into the input.
       * @param {number} [delay=500] Delay in ms to wait for the web-component to be ready. Default: 500
       * @example cy.get('[ui5-combobox]').typeIntoUi5InputWithDelay('Hello World', 1000);
       */
      typeIntoUi5InputWithDelay(text: string, delay?: number, options?: Partial<TypeOptions>): Chainable<Element>;

      /**
       * Types a value into `ui5-textarea`.
       * @param {string} text Text that will be typed into the text-area.
       * @example cy.get('[ui5-textarea]').typeIntoUi5TextArea('Hello World');
       */
      typeIntoUi5TextArea(text: string, options?: Partial<TypeOptions>): Chainable<Element>;

      /**
       * Toggles the state of a `ui5-checkbox`.
       * @example cy.get('[ui5-checkbox]').toggleUi5Checkbox();
       */
      toggleUi5Checkbox(): Chainable<Element>;

      /**
       * Toggles the state of a `ui5-switch`
       * @example cy.get('[ui5-switch]').toggleUi5Switch();
       */
      toggleUi5Switch(): Chainable<Element>;

      /**
       * Click on a `ui5-radio-button`
       * @example cy.get('[ui5-radio-button]').clickUi5RadioButton();
       */
      clickUi5RadioButton(): Chainable<Element>;

      /**
       * Close ui5-webcomponents popups like `ui5-dialog` or `ui5-popover` by pressing the "Escape" key.
       * @example cy.closeUi5PopupWithEsc()
       */
      closeUi5PopupWithEsc(): Chainable<Element>;

      /**
       * Click on a list item of the `List` component by text.
       * @param {string} text The text of the list item that should be clicked.
       * @example cy.clickUi5ListItemByText("List Item")
       */
      clickUi5ListItemByText(text: string): Chainable<Element>;

      /**
       * @deprecated: This command is deprecated. Please use `clickDropdownMenuItemByText` instead.
       *
       * Click on an `ui5-option` of the `ui5-select` component by text.
       *
       * __Note:__ The select popover must be visible, otherwise it can lead to unwanted side effects.
       *
       * @param text text of the ui5-option that should be clicked
       * @param options
       * @example cy.get('[ui5-select]').clickUi5SelectOptionByText('Option2');
       *
       */
      clickUi5SelectOptionByText(text: string, options?: Partial<ClickOptions>): Chainable<Element>;

      /**
       * @deprecated: This command is deprecated. Please use `clickDropdownMenuItem` instead.
       *
       * Click on chained `ui5-option`.
       *
       * __Note:__ The select popover must be visible, otherwise it can lead to unwanted side effects.
       *
       * @example cy.get('[ui5-option]').clickUi5SelectOption();
       */
      clickUi5SelectOption(options?: Partial<ClickOptions>): Chainable<Element>;

      /**
       * Click on an option of "select-like" components by text. Currently supported components are `ui5-select`, `ui5-combobox` and `ui5-multi-combobox`.
       *
       * __Note:__ The popover must be visible, otherwise it can lead to unwanted side effects.
       *
       * @param text text of the option inside the popover that should be clicked
       * @param options Cypress.ClickOptions
       * @example cy.get('[ui5-select]').clickDropdownMenuItemByText('Option2');
       *
       */
      clickDropdownMenuItemByText(text: string, options?: Partial<ClickOptions>): Chainable<Element>;

      // todo: add `ui5-cb-item` once possible: https://github.com/SAP/ui5-webcomponents/issues/8841
      /**
       * Click on a chained option of "select-like" components. Currently supported components are `ui5-option` and `ui5-mcb-item`.
       *
       * __Note:__ The popover must be visible, otherwise it can lead to unwanted side effects.
       *
       * @example cy.get('[ui5-option]').clickDropdownMenuItem();
       */
      clickDropdownMenuItem(options?: Partial<ClickOptions>): Chainable<Element>;

      /**
       * Click on the open button in "select-like" components to open the popover. Currently supported components are `ui5-select`, `ui5-combobox` and `ui5-multi-combobox`.
       *
       * @example cy.get('[ui5-select]').openDropDownByClick();
       */
      openDropDownByClick(options?: Partial<ClickOptions>): Chainable<Element>;
    }
  }
}

Cypress.Commands.add('typeIntoUi5Input', { prevSubject: 'element' }, (subject, text, options = {}) => {
  cy.wrap(subject)
    .findShadowInput()
    .type(text, { force: true, ...options });
});

Cypress.Commands.add('clearUi5Input', { prevSubject: 'element' }, (subject, text, options = {}) => {
  cy.wrap(subject)
    .findShadowInput()
    .clear({ force: true, ...options });
});

Cypress.Commands.add(
  'typeIntoUi5InputWithDelay',
  { prevSubject: 'element' },
  (subject, text, delay = 500, options = {}) => {
    cy.wrap(subject)
      .findShadowInput()
      .wait(delay)
      .type(text, { force: true, ...options });
  }
);

Cypress.Commands.add('typeIntoUi5TextArea', { prevSubject: 'element' }, (subject, text, options = {}) => {
  cy.wrap(subject)
    .shadow()
    .find('textarea')
    .type(text, { force: true, ...options });
});

Cypress.Commands.add('toggleUi5Checkbox', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).findShadowInput().click({ force: true });
});

Cypress.Commands.add('toggleUi5Switch', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).findShadowInput().click({ force: true });
});

Cypress.Commands.add('clickUi5RadioButton', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).findShadowInput().click({ force: true });
});

Cypress.Commands.add('closeUi5PopupWithEsc', () => {
  cy.get('body').type('{esc}', { force: true });
});

Cypress.Commands.add('clickUi5ListItemByText', (text) => {
  cy.contains(text).find('li').click({ force: true });
});

Cypress.Commands.add('clickUi5SelectOptionByText', { prevSubject: 'element' }, (subject, text, options = {}) => {
  cy.wrap(subject).then(async ($select) => {
    // @ts-expect-error: cannot set $select to use SelectDomRef
    const domRef = await $select.get(0).getStaticAreaItemDomRef();
    cy.wrap(domRef).contains(text).click(options);
  });
});

Cypress.Commands.add('clickUi5SelectOption', { prevSubject: 'element' }, (subject, options = {}) => {
  cy.wrap(subject).then(($option) => {
    // @ts-expect-error: cannot set $option to use OptionDomRef
    const domRef = $option.get(0).getDomRef();
    cy.wrap(domRef).click(options);
  });
});

Cypress.Commands.add('clickDropdownMenuItemByText', { prevSubject: 'element' }, (subject, text, options = {}) => {
  cy.wrap(subject).then(async ($dropdown) => {
    // @ts-expect-error: ui5-webcomponent types are not bundled in
    const staticArea = await $dropdown.get(0).getStaticAreaItemDomRef();
    cy.wrap(staticArea).find('[ui5-responsive-popover][open]').should('be.visible');
    // necessary as otherwise focusing the ui5-li is fuzzy
    cy.wait(100);
    cy.wrap(staticArea)
      .contains(text)
      .then(async ($li) => {
        await $li.get(0).focus();
        cy.wrap($li)
          .find('li')
          .click({ force: true, ...options });
      });
  });
});

Cypress.Commands.add('clickDropdownMenuItem', { prevSubject: 'element' }, (subject, options = {}) => {
  cy.wrap(subject).then(($option) => {
    // @ts-expect-error: ui5-webcomponent types are not bundled in
    const domRef = $option.get(0).getDomRef();
    cy.wrap(domRef)
      .find('li')
      .click({ force: true, ...options });
  });
});

Cypress.Commands.add('openDropDownByClick', { prevSubject: 'element' }, (subject, options = {}) => {
  if (subject.get(0).hasAttribute('ui5-multi-combobox')) {
    // mcb needs a lot of calculation time to make the popover available
    cy.wait(500);
  }
  cy.wrap(subject).shadow().find('[input-icon]').click(options);
});

export {};
