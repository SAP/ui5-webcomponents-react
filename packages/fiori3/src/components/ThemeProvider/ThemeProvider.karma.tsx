import { ThemeProvider } from '../../lib/ThemeProvider';
import { expect } from 'chai';
import { mount } from 'enzyme';
import React from 'react';
import { withStyles } from '@fiori-for-react/styles';

describe('ThemeProvider', () => {
  it('Provides Correct Context', (done) => {
    const InnerComponent = withStyles(() => {})(({ theme }) => {
      expect(theme.theme).to.equal('sap_fiori_3');
      expect(theme.contentDensity).to.equal('Cozy');
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
