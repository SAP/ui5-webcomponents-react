import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Breadcrumbs } from '@ui5/webcomponents-react/dist/Breadcrumbs';
import { BreadcrumbsItem } from '@ui5/webcomponents-react/dist/BreadcrumbsItem';
import React from 'react';

describe('Breadcrumbs', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
      <Breadcrumbs>
        <BreadcrumbsItem>Hello World!</BreadcrumbsItem>
      </Breadcrumbs>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Breadcrumbs, { children: <BreadcrumbsItem>Hello World!</BreadcrumbsItem> });
});
