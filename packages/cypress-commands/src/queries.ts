declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      // TabContainer
      /**
       * Returns the tab of the `ui5-tabcontainer` by its text.
       *
       * __Note:__ Has to be chained to a `ui5-tabcontainer`.
       * __Note:__ This will not work for sub-tabs.
       *
       * @example cy.get('[ui5-tab-container]').findUi5TabByText('Tab 1');
       * @param {string} text The text of the tab that should be queried.
       */
      findUi5TabByText(text: string): Chainable<Element>;

      /**
       * Returns the open-popover button for sub-tabs by its text.
       *
       * __Note:__ Has to be chained to a `ui5-tabcontainer`.
       * __Note:__ The tab only renders a button fur sub-tabs if the tab itself has content, otherwise the whole tab is responsible for opening the popover.
       *
       * @example cy.get('[ui5-tab-container]').findUi5TabOpenPopoverButtonByText('Tab 1.1');
       * @param {string} text The text of the sub-tab that should be queried.
       */
      findUi5TabOpenPopoverButtonByText(text: string, options?: Partial<ClickOptions>): Chainable<Element>;
      // private
      /**
       * Returns the internal input element inside the shadow-root.
       *
       * @private
       * @example cy.get('[ui5-checkbox]').findShadowInput();
       */
      findShadowInput(): Chainable<Element>;
    }
  }
}

Cypress.Commands.addQuery('findShadowInput', function () {
  const getShadow = cy.now('shadow');
  const getInput = cy.now('find', 'input');
  return (subject) => {
    if (!subject?.[0].tagName.startsWith('UI5')) {
      const err = `findShadowInput() needs to be chained to a ui5-webcomponent`;
      throw new TypeError(err);
    }
    // @ts-expect-error: recommended approach per cypress docs
    const shadow = getShadow(subject);
    // @ts-expect-error: recommended approach per cypress docs
    return getInput(shadow);
  };
});

Cypress.Commands.addQuery('findUi5TabByText', function (text) {
  const getTabList = cy.now('find', '[role="tablist"]');
  const getText = cy.now('contains', text);
  const getParent = cy.now('parents', '[role="tab"]');

  return (subject) => {
    if (!subject?.[0]?.hasAttribute('ui5-tabcontainer')) {
      const err = `findUi5TabByText() needs to be chained to a \`ui5-tabcontainer\``;
      throw new TypeError(err);
    }
    // @ts-expect-error: recommended approach per cypress docs
    const tabList = getTabList(subject);
    // @ts-expect-error: recommended approach per cypress docs
    const text = getText(tabList);
    // @ts-expect-error: recommended approach per cypress docs
    const parent = getParent(text);

    return parent;
  };
});

Cypress.Commands.addQuery('findUi5TabOpenPopoverButtonByText', function (text) {
  const getTabList = cy.now('find', '[role="tablist"]');
  const getText = cy.now('contains', text);
  const getParent = cy.now('parents', '[role="tab"]');
  const getButton = cy.now('find', '[ui5-button]');

  return (subject) => {
    if (!subject?.[0]?.hasAttribute('ui5-tabcontainer')) {
      const err = `findUi5TabOpenPopoverButtonByText() needs to be chained to a \`ui5-tabcontainer\``;
      throw new TypeError(err);
    }
    // @ts-expect-error: recommended approach per cypress docs
    const tabList = getTabList(subject);
    // @ts-expect-error: recommended approach per cypress docs
    const text = getText(tabList);
    // @ts-expect-error: recommended approach per cypress docs
    const parent = getParent(text);
    // @ts-expect-error: recommended approach per cypress docs
    const button = getButton(parent);

    return button;
  };
});

export {};
