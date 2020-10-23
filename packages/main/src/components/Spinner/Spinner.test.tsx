import { render } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { Size } from '@ui5/webcomponents-react/lib/Size';
import { Spinner } from '@ui5/webcomponents-react/lib/Spinner';
import React from 'react';

describe('Spinner', () => {
  test('small', () => {
    const { asFragment } = render(<Spinner size={Size.Small} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('medium', () => {
    const { asFragment } = render(<Spinner size={Size.Medium} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('large', () => {
    const { asFragment } = render(<Spinner size={Size.Large} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with custom class name', () => {
    const { asFragment } = render(<Spinner size={Size.Large} className="testClassName1337" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with delay', () => {
    const { asFragment } = render(<Spinner size={Size.Large} delay={2000} />);
    expect(asFragment()).toMatchSnapshot();
  });

  createPassThroughPropsTest(Spinner);
});
