import React, { Component } from 'react';
import { withStyles } from './index';
import { mountThemedComponent } from '@shared/tests/utils';
import sinon from 'sinon';

class UnitTestDemo extends Component<any> {
  render() {
    const { classes } = this.props;
    if (!classes) {
      throw 'No classes passed down';
    }
    return <div />;
  }
}

const styles = () => ({
  testClass: {
    color: 'green'
  }
});

describe('withStyles', () => {
  test('component ref', () => {
    const callback = sinon.spy();
    const DemoWithStyles = withStyles(styles)(UnitTestDemo);
    mountThemedComponent(<DemoWithStyles ref={callback} />);
    expect(callback.callCount).toBe(1);
  });
});
