import type { ThemeProviderPropTypes } from '@ui5/webcomponents-react';
import { ThemeProvider } from '@ui5/webcomponents-react';
import type { MountOptions, MountReturn } from 'cypress/react';
import { mount } from 'cypress/react';
import type { ReactNode } from 'react';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Cypress mount with ThemeProvider.
       *
       * __Note:__ Per default `options.strict` is enabled
       */
      mount: (
        jsx: ReactNode,
        options?: MountOptions & {
          themeProviderProps?: Omit<ThemeProviderPropTypes, 'children'>;
        },
        rerenderKey?: string,
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
        },
      ): Chainable<Element>;
      /**
       * Asserts that the element never gains the given attribute.
       *
       * __Note:__ An error is thrown if the attribute is not found, therefore it does not block the test if the subject
       * never includes the given attribute.
       *
       *
       * @param attributeName - The name of the attribute which must not appear.
       * @param observerTime - How long (in ms) to watch for mutations (default: 500).
       * @example
       * cy.get('button').shouldNeverHaveAttribute('disabled', 1000);
       */
      shouldNeverHaveAttribute(attributeName: string, observerTime?: number): Chainable<JQuery<HTMLElement>>;
    }
  }
}

/**
 * Cypress mount with ThemeProvider
 */
Cypress.Commands.add('mount', (component, { themeProviderProps = {}, ...options } = {}) => {
  return mount(<ThemeProvider {...themeProviderProps}>{component}</ThemeProvider>, { strict: true, ...options });
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
  },
);

Cypress.Commands.add(
  'shouldNeverHaveAttribute',
  { prevSubject: 'element' },
  (subject, attributeName, observerTime = 500) => {
    cy.wrap(subject).then(($el) => {
      const el = $el[0];
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.attributeName === attributeName) {
            Cypress.log({
              name: 'shouldNeverHaveAttribute',
              message: `${attributeName} was found!`,
              consoleProps: () => ({
                attributeName,
                element: el,
              }),
            });

            observer.disconnect();
            throw new Error(`${attributeName} was found!`);
          }
        }
      });

      observer.observe(el, { attributes: true });

      setTimeout(() => {
        observer.disconnect();
      }, observerTime);
    });
  },
);
