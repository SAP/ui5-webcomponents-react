import { createPassThroughPropsTest } from '@shared/tests/utils';
import { render } from '@shared/tests';
import { Breadcrumbs } from '@ui5/webcomponents-react/lib/Breadcrumbs';
import { BreadcrumbsSeparatorStyle } from '@ui5/webcomponents-react/lib/BreadcrumbsSeparatorStyle';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import React from 'react';

describe('Breadcrumbs', () => {
  Object.values(BreadcrumbsSeparatorStyle).forEach((style) => {
    test(`separatorStyle: '${style}'`, () => {
      const { asFragment } = render(
        <Breadcrumbs separatorStyle={style}>
          <Link>Link 1</Link>
          <Link>Link 2</Link>
          <Link>Link 3</Link>
        </Breadcrumbs>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  test('with currentLocationText', () => {
    const { asFragment } = render(
      <Breadcrumbs currentLocationText="Current Location">
        <Link>Link 1</Link>
        <Link>Link 2</Link>
        <Link>Link 3</Link>
      </Breadcrumbs>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  createPassThroughPropsTest(Breadcrumbs);
});
