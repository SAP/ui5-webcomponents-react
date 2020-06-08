import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';
import { GroupHeaderListItem } from '@ui5/webcomponents-react/lib/GroupHeaderListItem';
import { List } from '@ui5/webcomponents-react/lib/List';
import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { ListSeparators } from '@ui5/webcomponents-react/lib/ListSeparators';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export default {
  title: 'UI5 Web Components / List',
  component: List,
  parameters: {
    subcomponents: { StandardListItem, CustomListItem, GroupHeaderListItem }
  },
  argTypes: {
    ...createSelectArgTypes({ mode: ListMode, separators: ListSeparators })
  },
  args: {
    mode: ListMode.None,
    separators: ListSeparators.All
  }
};

export const generatedDefaultStory = (props) => (
  <List
    busy={props.busy}
    footerText={props.footerText}
    headerText={props.headerText}
    infiniteScroll={props.infiniteScrolll}
    inset={props.inset}
    mode={props.mode}
    noDataText={props.noDataText}
    separators={props.separators}
    onItemClick={props.onItemClick}
    onItemDelete={props.onItemDelete}
    onLoadMore={props.onLoadMore}
    onSelectionChange={props.onSelectionChange}
    header={null}
  >
    <StandardListItem info={'3'}>List Item 1</StandardListItem>
    <StandardListItem info={'2'}>List Item 2</StandardListItem>
    <StandardListItem info={'1'}>List Item 3</StandardListItem>
  </List>
);

generatedDefaultStory.storyName = 'Generated default story';
