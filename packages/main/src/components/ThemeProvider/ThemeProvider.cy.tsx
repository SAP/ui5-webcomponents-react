import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';

describe('ThemeProvider', () => {
  it('Provides Correct Context', () => {
    const InnerComponent = () => {
      return (
        <button
          onClick={() => {
            setTheme('sap_horizon_dark');
          }}
        >
          Change Theme
        </button>
      );
    };
    // cy.mount wraps component in ThemeProvider
    cy.mount(<InnerComponent />);

    cy.get('html').should('have.attr', 'data-sap-theme', 'sap_horizon');
    cy.findByText('Change Theme').click();
    cy.get('html').should('have.attr', 'data-sap-theme', 'sap_horizon_dark');

    cy.window().its('@ui5/webcomponents-react').should('not.be.empty');
  });

  it('injects css via JS', () => {
    cy.mount(<span>Hello World</span>);
    cy.get('html').should('have.css', '--_ui5wcr_ObjectPage_SectionTitleLineHeight', '4rem');
  });

  it('does not inject CSS when staticCssInjected is true', () => {
    cy.mount(<span>Hello World</span>, { themeProviderProps: { staticCssInjected: true } });
    cy.get('html').should('not.have.css', '--_ui5wcr_ObjectPage_SectionTitleLineHeight');
  });
});
