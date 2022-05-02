import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { BreadcrumbsItem } from '../BreadcrumbsItem';
import { Breadcrumbs } from './index';

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
