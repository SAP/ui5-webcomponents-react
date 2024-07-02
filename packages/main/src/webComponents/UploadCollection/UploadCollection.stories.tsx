import type { Meta, StoryObj } from '@storybook/react';
import ListSelectionMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';
import UploadState from '@ui5/webcomponents-fiori/dist/types/UploadState.js';
import documentIcon from '@ui5/webcomponents-icons/dist/document.js';
import { Children, cloneElement, useState } from 'react';
import { FlexBox } from '../../components/FlexBox/index.js';
import { FlexBoxAlignItems } from '../../enums/index.js';
import { Text } from '../../webComponents/Text/index.js';
import { Button } from '../Button/index.js';
import { Icon } from '../Icon/index.js';
import { Title } from '../Title/index.js';
import { UploadCollectionItem } from '../UploadCollectionItem/index.js';
import { UploadCollection } from './index.js';

const meta = {
  title: 'Inputs / UploadCollection',
  component: UploadCollection,
  argTypes: {
    children: { control: { disable: true } },
    header: { control: { disable: true } }
  },
  args: {
    selectionMode: ListSelectionMode.None
  },
  tags: ['package:@ui5/webcomponents-fiori']
} satisfies Meta<typeof UploadCollection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [children, setChildren] = useState([]);
    const handleDrop = (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      files.forEach((file) => {
        setChildren((prev) => [
          ...prev,
          <UploadCollectionItem
            key={file.name}
            file={file}
            fileName={file.name}
            thumbnail={<Icon name={documentIcon} />}
          >
            <Text>{`Last modified: ${file.lastModifiedDate} · Size: ${(file.size / 1000).toFixed(2)}KB`}</Text>
          </UploadCollectionItem>
        ]);
      });
    };
    return (
      <UploadCollection {...args} onDrop={handleDrop}>
        {children}
      </UploadCollection>
    );
  }
};

export const SimulateUpload: Story = {
  render: () => {
    const [children, setChildren] = useState([
      <UploadCollectionItem
        key={'0'}
        file={null}
        fileName={'file-name.txt'}
        thumbnail={<img src="https://sap.github.io/ui5-webcomponents/img/logo.png" />}
      >
        <Text>Uploaded by: Susanne Schmitt · Uploaded On: 2019-04-20</Text>
      </UploadCollectionItem>
    ]);
    const handleDrop = (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      files.forEach((file) => {
        setChildren((prev) => [
          ...prev,
          <UploadCollectionItem
            key={file.name}
            file={file}
            fileName={file.name}
            thumbnail={<Icon name={documentIcon} />}
          >
            <Text>{`Last modified: ${file.lastModifiedDate} · Size: ${(file.size / 1000).toFixed(2)}KB`}</Text>
          </UploadCollectionItem>
        ]);
      });
    };
    const simulateUpload = () => {
      if (children.length > 0) {
        Children.forEach(children, (child, index) => {
          if (child.props.uploadState === UploadState.Ready) {
            let progress = 0;
            const recTimeout = () => {
              setTimeout(
                () => {
                  progress += Math.floor(Math.random() * 4) + 1;
                  setChildren((prev) => {
                    const updatedChildren = [...prev];
                    updatedChildren[index] = cloneElement(prev[index], {
                      uploadState: UploadState.Uploading,
                      progress: Math.min(progress, 100)
                    });
                    return updatedChildren;
                  });
                  if (progress < 100) {
                    recTimeout();
                  } else {
                    setChildren((prev) => {
                      const updatedChildren = [...prev];
                      updatedChildren[index] = cloneElement(prev[index], {
                        uploadState: UploadState.Complete
                      });
                      return updatedChildren;
                    });
                  }
                },
                Math.floor(Math.random() * (1000 - 100 + 1)) + 100
              );
            };
            recTimeout();
          }
        });
      }
    };
    return (
      <UploadCollection
        onDrop={handleDrop}
        header={
          <FlexBox alignItems={FlexBoxAlignItems.Center}>
            <Title>Start upload:</Title>
            <Button onClick={simulateUpload}>Upload!</Button>
          </FlexBox>
        }
      >
        {children}
      </UploadCollection>
    );
  }
};
