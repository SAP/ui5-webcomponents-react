import { render } from '@shared/tests';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React from 'react';
import { useTheme } from 'react-jss';
import { ThemeProvider } from './index';

describe('ThemeProvider', () => {
  it('Provides Correct Context', (done) => {
    const InnerComponent = () => {
      const theme = useTheme();
      expect(JSON.stringify(theme)).toEqual(JSON.stringify(ThemingParameters));
      done();
      return null;
    };

    render(
      <ThemeProvider>
        <InnerComponent />
      </ThemeProvider>
    );
  });
});
