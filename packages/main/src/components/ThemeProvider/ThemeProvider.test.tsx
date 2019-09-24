import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import { mount } from 'enzyme';
import React from 'react';
import { useTheme } from 'react-jss';
import { JSSTheme } from '../../interfaces/JSSTheme';

describe('ThemeProvider', () => {
  it('Provides Correct Context', (done) => {
    const InnerComponent = () => {
      const theme = useTheme() as JSSTheme;
      expect(theme.theme).toEqual('sap_fiori_3');
      expect(theme.contentDensity).toEqual('Cozy');
      done();
      return null;
    };

    mount(
      <ThemeProvider>
        <InnerComponent />
      </ThemeProvider>
    );
  });
});
