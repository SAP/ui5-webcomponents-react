import { createPassThroughPropsTest, renderThemedComponent } from '@shared/tests/utils';
import { Size } from '@ui5/webcomponents-react/lib/Size';
import { Spinner } from '@ui5/webcomponents-react/lib/Spinner';
import React from 'react';

describe('Spinner', () => {
  test('small', () => {
    const wrapper = renderThemedComponent(<Spinner size={Size.Small} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('medium', () => {
    const wrapper = renderThemedComponent(<Spinner size={Size.Medium} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('large', () => {
    const wrapper = renderThemedComponent(<Spinner size={Size.Large} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('with custom class name', () => {
    const wrapper = renderThemedComponent(<Spinner size={Size.Large} className="testClassName1337" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('with delay', () => {
    const wrapper = renderThemedComponent(<Spinner size={Size.Large} delay={2000} />);
    expect(wrapper).toMatchSnapshot();
  });

  createPassThroughPropsTest(Spinner);
});
