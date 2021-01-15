import { render } from '@shared/tests';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import React from 'react';
import { useTheme } from 'react-jss';
import { JSSTheme } from '../../interfaces/JSSTheme';

describe('ThemeProvider', () => {
  it('Provides Correct Context', (done) => {
    const InnerComponent = () => {
      const theme = useTheme() as JSSTheme;
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
