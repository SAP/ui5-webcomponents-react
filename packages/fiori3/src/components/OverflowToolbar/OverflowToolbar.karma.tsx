import React from 'react';
import { OverflowToolbar } from './index';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { ToolbarAlignment } from '../../lib/ToolbarAlignment';
import { ToolbarDesign } from '../../lib/ToolbarDesign';
import { Button } from '../../lib/Button';
import { Label } from '../../lib/Label';
import { Switch } from '../../lib/Switch';
import { matchSnapshot } from 'chai-karma-snapshot';

use(matchSnapshot);

const alignDesignFactory = () => {
  Object.values(ToolbarDesign).forEach((design) => {
    Object.values(ToolbarAlignment).forEach((align) => {
      it(`Toolbar with Align:${align} and Design:${design}`, () => {
        // console.log(align + design);
        expect(
          mountThemedComponent(
            <OverflowToolbar align={align} toolbarDesign={design}>
              Test
            </OverflowToolbar>
          ).debug()
        ).to.matchSnapshot();
      });
    });
  });
};

describe('OverflowToolbar', () => {
  alignDesignFactory();

  it(`Overflow Toolbar with Spacer`, () => {
    const wrapper = mountThemedComponent(
      <OverflowToolbar overflow>
        <span>Test</span>
        <span style={{ flexGrow: 1 }} />
        <span>Test 2</span>
      </OverflowToolbar>
    );
    expect(wrapper.render().children().length).equal(3);
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it(`Overflow Toolbar collapsed Elements`, () => {
    const wrapper = mountThemedComponent(
      <OverflowToolbar overflow width="50px">
        <Label style={{ minWidth: '20px' }}>Label</Label>
        <Button>Button1</Button>
        <Button>Btn2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Switch />
      </OverflowToolbar>
    );
    expect(wrapper.update().children().length).equal(1);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
