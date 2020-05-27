import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { UploadCollection } from '@ui5/webcomponents-react/lib/UploadCollection';
import { UploadCollectionItem } from '@ui5/webcomponents-react/lib/UploadCollectionItem';
import React from 'react';

export default {
  title: 'UI5 Web Components / UploadCollection',
  component: UploadCollection,
  parameters: {
    subcomponents: { UploadCollectionItem }
  }
};

export const generatedDefaultStory = () => (
  <UploadCollection
    mode={select('mode', ListMode, ListMode.None)}
    noDataDescription={text('noDataDescription', '')}
    noDataText={text('noDataText', '')}
    noDnd={boolean('noDnd', false)}
    header={<Title>Attachments</Title>}
    onFileDeleted={action('onFileDeleted')}
    onSelectionChange={action('onSelectionChange')}
    style={{ height: '20rem' }}
  >
    Some Content
  </UploadCollection>
);

generatedDefaultStory.storyName = 'Generated default story';
