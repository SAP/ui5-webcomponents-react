import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';
import { setFetchDefaultLanguage, setLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base';
import { useEffect, useRef } from 'react';

const TestComponent = () => {
  const i18nBundle = useI18nBundle('myApp');
  return <div>1: {i18nBundle.getText('TEST1')}</div>;
};
const TestComponent2 = () => {
  const i18nBundle = useI18nBundle('myApp');
  return <div>2: {i18nBundle.getText('TEST1')}</div>;
};
const TestComponent3 = () => {
  const i18nBundle = useI18nBundle('myApp');
  return <div>3: {i18nBundle.getText('TEST1')}</div>;
};

describe('I18nProvider', () => {
  before(() => {
    registerI18nLoader('myApp', 'en', async () => {
      return Promise.resolve({ TEST1: 'test text resource' });
    });
    registerI18nLoader('myApp', 'de', async () => {
      return Promise.resolve({ TEST1: 'Donaudampfschifffahrtsgesellschaft' });
    });
    setFetchDefaultLanguage(true);
  });
  after(() => {
    setFetchDefaultLanguage(false);
  });
  afterEach(() => {
    setLanguage('en');
  });

  it('translate components', () => {
    cy.mount(<TestComponent />);
    cy.findByText('1: test text resource');
    cy.mount(
      <>
        <TestComponent />
        <TestComponent2 />
        <TestComponent3 />
        <button
          onClick={() => {
            setLanguage('de');
          }}
        >
          Switch to German
        </button>
      </>
    );
    cy.findByText('1: test text resource');
    cy.findByText('2: test text resource');
    cy.findByText('3: test text resource');

    cy.findByText('Switch to German').click();

    cy.findByText('1: Donaudampfschifffahrtsgesellschaft');
    cy.findByText('2: Donaudampfschifffahrtsgesellschaft');
    cy.findByText('3: Donaudampfschifffahrtsgesellschaft');
  });

  it('Should update after changing the language', () => {
    const TranslationComponent = () => {
      const renderCounter = useRef(0);

      useEffect(() => {
        renderCounter.current++;
      });
      const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
      return (
        <>
          <span>{i18nBundle.getText('PLEASE_WAIT')}</span>
          <span data-testid="counter">{renderCounter.current}</span>
        </>
      );
    };
    cy.mount(<TranslationComponent />);
    cy.findByTestId('counter').should('have.text', 1);
    cy.findByText('Please wait')
      .then(() => {
        setLanguage('de');
      })
      .then(() => {
        cy.findByTestId('counter').should('have.text', 2);
        cy.findByText('Bitte warten')
          .then(() => {
            setLanguage('de');
          })
          .then(() => {
            // should not rerender again
            cy.findByTestId('counter').should('have.text', 2);
          });
      });
  });
  it('should fill placeholders', () => {
    const PlaceholderComponent = () => {
      const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
      return <span>{i18nBundle.getText('X_OF_Y', 13, 37)}</span>;
    };
    cy.mount(<PlaceholderComponent />);
    cy.findByText('Item 13 of 37').should('be.visible');
  });
});
