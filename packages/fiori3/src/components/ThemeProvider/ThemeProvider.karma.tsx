import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { ThemeProvider } from './index';
import { Themes } from '@fiori-for-react/core/enums/Themes';
import { ContentDensity } from '@fiori-for-react/core/enums/ContentDensity';
import { withStyles } from '@fiori-for-react/core/utils/withStyles';

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
