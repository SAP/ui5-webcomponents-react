import type UI5Element from '@ui5/webcomponents-base/dist/UI5Element.js';

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
      clearUi5Input(options?: Partial<CheckClearOptions>): Chainable<Element>;

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
       * Click on an `ui5-option` of the `ui5-select` component by text.
       *
       * __Note:__ The select popover must be visible, otherwise it can lead to unwanted side effects.
       *
       * @param text text of the ui5-option that should be clicked
       * @param options ClickOptions
       *
       *
       * @example cy.get('[ui5-select]').clickUi5SelectOptionByText('Option2');*
       */
      clickUi5SelectOptionByText(text: string, options?: Partial<ClickOptions>): Chainable<Element>;

      /**
       * Click on chained `ui5-option`.
       *
       * __Note:__ The select popover must be visible, otherwise it can lead to unwanted side effects.
       *
       * @deprecated: This command is deprecated. Please use `clickDropdownMenuItem` instead.
       *
       * @example cy.get('[ui5-option]').clickUi5SelectOption();
       */
      clickUi5SelectOption(options?: Partial<ClickOptions>): Chainable<Element>;

      /**
       * Click on an option of "select-like" components by text.
       * Currently supported components: `ui5-select`, `ui5-combobox` and `ui5-multi-combobox`.
       *
       * __Note:__ The popover must be visible, otherwise it can lead to unwanted side effects.
       *
       * __Note:__ `ui5-select` currently does not support `cy.click()` on `ui5-options` (or elements in the shadow root).
       * Instead, the `ui5-option` is selected via an "Enter" press (`.trigger`).
       * Therefore, for `ui5-select`, the `options` parameter only accepts `TriggerOptions`.
       *
       * @param text The text of the item inside the popover that should be clicked.
       * @param options Default:`Cypress.ClickOptions`. For `ui5-select`, use `Cypress.TriggerOptions` (you can use the generic type to adjust accordingly).
       *
       * @example
       * cy.get('[ui5-select]').clickDropdownMenuItemByText<Cypress.TriggerOptions>('Option2');
       * cy.get('[ui5-multi-combobox]').clickDropdownMenuItemByText('Option2');
       *
       */
      clickDropdownMenuItemByText<T = ClickOptions>(text: string, options?: Partial<T>): Chainable<Element>;

      /**
       * Click on a chained option of "select-like" components.
       * Currently supported components: `ui5-option`, `ui5-mcb-item` and `ui5-cb-item` (since v1.24.3 of `@ui5/webcomponents`).
       *
       * __Note:__ The popover must be visible, otherwise it can lead to unwanted side effects.
       *
       * __Note:__ `ui5-select` currently does not support `cy.click()` on `ui5-options` (or elements in the shadow root).
       * Instead, the `ui5-option` is selected via an "Enter" press (`.trigger`).
       * Therefore, for `ui5-option`, the `options` parameter only accepts `TriggerOptions`.
       *
       * @param options Default: `Cypress.ClickOptions`. For `ui5-option`, use `Cypress.TriggerOptions` (you can use the generic type to adjust accordingly).
       *
       * @example
       * cy.get('[ui5-option]').clickDropdownMenuItem<Cypress.TriggerOptions>();
       * cy.get('[ui5-mcb-item]').clickDropdownMenuItem();
       */
      clickDropdownMenuItem<T = ClickOptions>(options?: Partial<T>): Chainable<Element>;

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
  cy.wrap(subject)
    .contains(text)
    .then(($option) => {
      $option.get(0).focus();
    })
    .click(options);
});

Cypress.Commands.add('clickUi5SelectOption', { prevSubject: 'element' }, (subject, options = {}) => {
  cy.wrap(subject).then(($option) => {
    // @ts-expect-error: cannot set $option to use OptionDomRef
    const domRef = $option.get(0).getDomRef();
    cy.wrap(domRef).click(options);
  });
});

Cypress.Commands.add('clickDropdownMenuItemByText', { prevSubject: 'element' }, (subject, text, options = {}) => {
  cy.wrap(subject).find('[ui5-responsive-popover]').should('have.attr', 'open');
  cy.wrap(subject).then(([$dropdown]) => {
    switch (true) {
      case $dropdown.hasAttribute('ui5-select'):
        cy.wrap($dropdown).contains(text).clickDropdownMenuItem<Cypress.TypeOptions>(options);
        break;
      default:
        cy.wrap($dropdown).get(`[text="${text}"]`).clickDropdownMenuItem(options);
        break;
    }
  });
});

Cypress.Commands.add('clickDropdownMenuItem', { prevSubject: 'element' }, (subject, options = {}) => {
  cy.wrap(subject).then(([$option]) => {
    const domRef = ($option as UI5Element).getDomRef();
    cy.wrap(domRef).focus();
    if ($option.hasAttribute('ui5-option')) {
      //todo: check if this can be refactored to use `click()` again.
      cy.wrap(domRef).trigger('keydown', {
        force: true,
        ...options,
        key: 'Enter',
        code: 'Enter',
        which: 13,
        keyCode: 13
      });
    } else {
      cy.wrap(domRef).click(options);
    }
  });
});

Cypress.Commands.add('openDropDownByClick', { prevSubject: 'element' }, (subject, options = {}) => {
  if (subject.get(0).hasAttribute('ui5-multi-combobox')) {
    // mcb needs a lot of calculation time to make the popover available
    cy.wait(500);
  }
  cy.wrap(subject).shadow().find('.inputIcon').click(options);
});

export {};
