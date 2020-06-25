import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { UploadCollection } from '@ui5/webcomponents-react/lib/UploadCollection';
import { UploadCollectionItem } from '@ui5/webcomponents-react/lib/UploadCollectionItem';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export default {
  title: 'UI5 Web Components / UploadCollection',
  component: UploadCollection,
  parameters: {
    subcomponents: { UploadCollectionItem }
  },
  argTypes: {
    ...createSelectArgTypes({ mode: ListMode }),
    ref: {
      type: null
    },
    children: {
      type: null
    },
    header: {
      type: null
    }
  },
  args: {
    mode: ListMode.None
  }
};

export const generatedDefaultStory = (props) => (
  <UploadCollection
    mode={props.mode}
    noDataDescription={props.noDataDescription}
    noDataText={props.noDataText}
    noDnd={props.noDnd}
    onFileDeleted={props.onFileDeleted}
    onSelectionChange={props.onSelectionChange}
    header={<Title>Attachments</Title>}
    style={{ height: '20rem' }}
  >
    Some Content
  </UploadCollection>
);

generatedDefaultStory.storyName = 'Generated default story';
