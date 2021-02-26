import { render } from '@shared/tests';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { CustomListItem } from '@ui5/webcomponents-react/dist/CustomListItem';
import { List } from '@ui5/webcomponents-react/dist/List';
import { StandardListItem } from '@ui5/webcomponents-react/dist/StandardListItem';
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
});
