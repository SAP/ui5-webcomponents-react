import React, { cloneElement, Component } from 'react';
import { withStyles } from './index';
import { mountThemedComponent } from '@shared/tests/utils';
import sinon from 'sinon';

const testAttribute = 'TEST';

class UnitTestDemo extends Component<any> {
  static testAttribute = testAttribute;
  render() {
    const { classes } = this.props;
    if (!classes) {
      throw 'No classes passed down';
    }
    return <div />;
  }
}

const UnitTestDemoSfc = (props) => {
  const { classes } = props;
  if (!classes) {
    throw 'No classes passed down';
  }
  return <div />;
};

// @ts-ignore
UnitTestDemoSfc.testAttribute = testAttribute;

const FaultyComponent = withStyles(() => ({}))((props) => {
  if (props.fail) {
    throw 'Oooops';
  }

  return <div>All fine!</div>;
});

const styles = () => ({
  testClass: {
    color: 'green'
  }
});

describe('withStyles', () => {
  test('Extend Class Component with Styles and check statics', () => {
    const DemoWithStyles = withStyles(styles)(UnitTestDemo);
    expect(DemoWithStyles.testAttribute).toBe(testAttribute);
    expect(DemoWithStyles.InnerComponent).toBe(UnitTestDemo);

    const ExtendedDemo = DemoWithStyles.withCustomStyles({ testClass: { color: 'black' } });
    expect(ExtendedDemo.testAttribute).toBe(testAttribute);
    expect(ExtendedDemo.InnerComponent).toBe(UnitTestDemo);
  });

  test('render styled component without crashing', () => {
    const DemoWithStyles = withStyles(styles)(UnitTestDemo);
    mountThemedComponent(<DemoWithStyles />);
    const ExtendedDemo = DemoWithStyles.withCustomStyles({ testClass: { color: 'black' } });
    mountThemedComponent(<ExtendedDemo />);
  });

  test('innerComponentRef', () => {
    const callback = sinon.spy();
    const DemoWithStyles = withStyles(styles)(UnitTestDemo);
    mountThemedComponent(<DemoWithStyles innerComponentRef={callback} />);
    expect(callback.callCount).toBe(1);
  });

  test('test with SFC', () => {
    const DemoWithStyles = withStyles(styles)(UnitTestDemoSfc);
    mountThemedComponent(<DemoWithStyles />);
    expect(DemoWithStyles.testAttribute).toBe(testAttribute);
    const ExtendedDemo = DemoWithStyles.withCustomStyles({ testClass: { color: 'black' } });
    mountThemedComponent(<ExtendedDemo />);
    expect(ExtendedDemo.testAttribute).toBe(testAttribute);
  });

  test('Error Boundary', () => {
    const wrapper = mountThemedComponent(<FaultyComponent fail />);
    expect((wrapper.find('WithStyles(Component)').instance().state as any).error).toBe(true);
    wrapper.setProps({
      children: cloneElement(wrapper.props().children, { fail: false })
    });
    expect((wrapper.find('WithStyles(Component)').instance().state as any).error).toBe(false);
  });
});
