import { ContentDensity } from '@lib/ContentDensity';
import { ThemeProvider } from '@lib/ThemeProvider';
import { Themes } from '@lib/Themes';
import { expect } from 'chai';
import { mount } from 'enzyme';
import React from 'react';
import { withStyles } from '../../utils/withStyles';

describe('ThemeProvider', () => {
  it('Provides Correct Context', (done) => {
    const InnerComponent = withStyles(() => {})(({ theme }) => {
      expect(theme.theme).to.equal('sap_fiori3_light');
      expect(theme.contentDensity).to.equal('Cozy');
      done();
      return null;
    });

    mount(
      <ThemeProvider theme={Themes.sap_fiori3_light} contentDensity={ContentDensity.Cozy}>
        <InnerComponent />
      </ThemeProvider>
    );
  });
});
