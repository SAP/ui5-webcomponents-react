import { withStyles } from '@ui5/webcomponents-react-base';
import { mount } from 'enzyme';
import React from 'react';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';

describe('ThemeProvider', () => {
  it('Provides Correct Context', (done) => {
    const InnerComponent = withStyles(() => {})(({ theme }) => {
      expect(theme.theme).toEqual('sap_fiori_3');
      expect(theme.contentDensity).toEqual('Cozy');
      done();
      return null;
    });

    mount(
      <ThemeProvider>
        <InnerComponent />
      </ThemeProvider>
    );
  });
});
