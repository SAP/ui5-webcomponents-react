import { render } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { Loader } from '@ui5/webcomponents-react/lib/Loader';
import { LoaderType } from '@ui5/webcomponents-react/lib/LoaderType';
import React from 'react';

describe('Loader', () => {
  test('indeterminate', () => {
    const { asFragment } = render(<Loader type={LoaderType.Indeterminate} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('determinate', () => {
    const { asFragment } = render(<Loader type={LoaderType.Determinate} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('determinate with progress prop', () => {
    const { asFragment } = render(<Loader type={LoaderType.Determinate} progress="42%" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('default', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with Custom Class Name', () => {
    const { asFragment } = render(<Loader className="myTestClass" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with delay', () => {
    const { asFragment } = render(<Loader delay={1000} />);
    expect(asFragment()).toMatchSnapshot();
  });

  createPassThroughPropsTest(Loader);
});
