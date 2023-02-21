import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { useTheme } from 'react-jss';
import { ThemingParameters } from '@/packages/base';

describe('ThemeProvider', () => {
  it('Provides Correct Context', () => {
    const InnerComponent = () => {
      const theme = useTheme();
      expect(JSON.stringify(theme)).equal(JSON.stringify(ThemingParameters));

      return (
        <button
          onClick={() => {
            setTheme('sap_horizon');
          }}
        >
          Change Theme
        </button>
      );
    };
    // cy.mount wraps component in ThemeProvider
    cy.mount(<InnerComponent />);

    cy.get('html').should('have.attr', 'data-sap-theme', 'sap_fiori_3');
    cy.findByText('Change Theme').click();
    cy.get('html').should('have.attr', 'data-sap-theme', 'sap_horizon');

    cy.window().its('@ui5/webcomponents-react').should('not.be.empty');
  });
});
