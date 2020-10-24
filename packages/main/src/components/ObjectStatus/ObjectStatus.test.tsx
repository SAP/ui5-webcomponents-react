import { render } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { ObjectStatus } from '@ui5/webcomponents-react/lib/ObjectStatus';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

const testFactory = () => {
  Object.values(ValueState).forEach((state) => {
    test(`ObjectStatus: state: ${state}`, () => {
      const { asFragment } = render(<ObjectStatus state={state} showDefaultIcon />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
};

describe('ObjectStatus', () => {
  test('Render without Crashing', () => {
    const { asFragment } = render(
      <ObjectStatus state={ValueState.Error} showDefaultIcon>
        Hello
      </ObjectStatus>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Text Deprecation', () => {
    const { asFragment } = render(
      <ObjectStatus state={ValueState.Error} showDefaultIcon>
        Hello
      </ObjectStatus>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  testFactory();

  test('Renders correct ObjectStatus text', () => {
    const el = 'My Text';
    const { container } = render(<ObjectStatus>{el}</ObjectStatus>);
    expect(container).toHaveTextContent(el);
  });

  createPassThroughPropsTest(ObjectStatus);
});
