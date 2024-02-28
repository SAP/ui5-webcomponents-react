import type { MountOptions, MountReturn } from 'cypress/react18';
import { mount } from 'cypress/react18';
import type { ReactNode } from 'react';
import type { ThemeProviderPropTypes } from '@ui5/webcomponents-react';
import { ThemeProvider } from '@ui5/webcomponents-react';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Cypress mount with ThemeProvider
       */
      mount: (
        jsx: ReactNode,
        options?: MountOptions & {
          themeProviderProps?: Omit<ThemeProviderPropTypes, 'children'>;
        },
        rerenderKey?: string
      ) => Cypress.Chainable<MountReturn>;

      /**
       * Assert that the subject is not clickable.
       *
       * @param done The Mocha `done` callback.
       * @param [clickOptions] Options passed to `.click()`. By default, the timeout is 100 ms.
       *
       * @example
       it("should not be clickable", (done) => {
         cy.get('[ui5-button]').shouldNotBeClickable(done);
       });
       */
      shouldNotBeClickable(
        done: Mocha.Done,
        clickOptions?: Partial<Cypress.ClickOptions> & {
          position?: Cypress.PositionType;
        }
      ): Chainable<Element>;
    }
  }
}

/**
 * Cypress mount with ThemeProvider
 */
Cypress.Commands.add('mount', (component, { themeProviderProps = {}, ...options } = {}) => {
  return mount(<ThemeProvider {...themeProviderProps}>{component}</ThemeProvider>, options);
});

// copied from https://github.com/cypress-io/cypress/discussions/21150#discussioncomment-2620947 and edited slightly
Cypress.Commands.add(
  'shouldNotBeClickable',
  { prevSubject: 'element' },
  (subject, done, { position, timeout = 100, ...clickOptions } = {}) => {
    cy.once('fail', (err) => {
      expect(err.message).to.include('`cy.click()` failed because this element');
      expect(err.message).to.include('is being covered by another element');
      done();
    });

    const chainable = position
      ? cy.wrap(subject).click(position, { timeout, ...clickOptions })
      : cy.wrap(subject).click({ timeout, ...clickOptions });

    chainable.then(() => done(new Error('Expected element NOT to be clickable, but click() succeeded')));
  }
);
