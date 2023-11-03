import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { useTheme } from 'react-jss';

describe('ThemeProvider', () => {
  it('Provides Correct Context', () => {
    const InnerComponent = () => {
      const theme = useTheme();
      expect(JSON.stringify(theme)).equal(JSON.stringify(ThemingParameters));

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
});
