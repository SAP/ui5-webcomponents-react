import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import { Breadcrumbs } from './index';
import { BreadcrumbsItem } from '../BreadcrumbsItem';
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
  createWaitForDefineTest(Breadcrumbs);
});
