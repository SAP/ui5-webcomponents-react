import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Tab } from '../Tab';
import { TabContainer } from './index';

describe('TabContainer', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
      <TabContainer>
        <Tab text={'Tab 1'} />
      </TabContainer>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TabContainer, { children: <Tab text={'Tab 1'} /> });
  createWaitForDefineTest(TabContainer, { children: <Tab text={'Tab 1'} /> });
});
