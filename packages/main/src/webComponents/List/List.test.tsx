import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Button } from '../Button';
import { CustomListItem } from '../CustomListItem';
import { StandardListItem } from '../StandardListItem';
import { List } from './index';

describe('List', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
      <List>
        <StandardListItem>Test 1</StandardListItem>
        <CustomListItem>
          Test 2<Button>a Button</Button>
        </CustomListItem>
      </List>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(List);
  createWaitForDefineTest(List);
});
