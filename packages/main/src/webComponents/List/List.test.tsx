import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Button } from '../Button';
import { CustomListItem } from '../CustomListItem';
import { List } from './index';
import { StandardListItem } from '../StandardListItem';
import React from 'react';

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
});
