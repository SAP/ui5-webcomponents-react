import { ListItemTypes } from '@lib/ListItemTypes';
import { Select } from '@lib/Select';
import { StandardListItem } from '@lib/StandardListItem';
import { ValueState } from '@lib/ValueState';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('UI5 Web Components | Select', module).add('Generated default story', () => (
  <Select
    disabled={boolean('disabled', false)}
    valueState={select('valueState', ValueState, null)}
    onChange={action('onChange')}
  >
    <StandardListItem type={ListItemTypes.Active} key="1">
      Test 1
    </StandardListItem>
    <StandardListItem type={ListItemTypes.Active} key="2">
      Test 2
    </StandardListItem>
    <StandardListItem type={ListItemTypes.Active} key="3">
      Test 3
    </StandardListItem>
    <StandardListItem type={ListItemTypes.Active} key="4">
      Test 4
    </StandardListItem>
    <StandardListItem type={ListItemTypes.Active} key="5">
      Test 5
    </StandardListItem>
  </Select>
));
