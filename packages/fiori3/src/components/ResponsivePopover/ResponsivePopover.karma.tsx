import { Device } from '@ui5-webcomponents-react/utils';
import { ResponsivePopover } from '../../lib/ResponsivePopover';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

/*
 *  Only rudimentary tests as tests crash as soon as UI5 accesses the shadow dom
 */

const openBy = <div>test</div>;
const props = {
  children: <div>DialogContent</div>,
  footer: <div>Footer</div>,
  openBy
};

describe('ResponsivePopover', () => {
  let appRoot: HTMLElement;

  before(() => {
    appRoot = document.createElement('div');
    document.body.appendChild(appRoot);
  });

  after(() => {
    document.body.removeChild(appRoot);
  });

  it('render on Desktop', () => {
    const wrapper = mountThemedComponent(<ResponsivePopover {...props} />, { attachTo: appRoot });
    // wrapper.find('div').first().simulate('click');
    // wrapper.update();
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('render on Phone', () => {
    Device.system.phone = true;
    const wrapper = mountThemedComponent(<ResponsivePopover {...props} />);
    // wrapper.find('div').first().simulate('click');
    // wrapper.update();
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
