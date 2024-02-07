import type { Meta, StoryObj } from '@storybook/react';
import copyIcon from '@ui5/webcomponents-icons/dist/copy.js';
import dlCloutIcon from '@ui5/webcomponents-icons/dist/download-from-cloud.js';
import sunIcon from '@ui5/webcomponents-icons/dist/general-leave-request.js';
import pasteIcon from '@ui5/webcomponents-icons/dist/paste.js';
import { useState } from 'react';
import { Text } from '../../components/Text/index.js';
import { ListMode } from '../../enums/index.js';
import { BusyIndicator } from '../BusyIndicator/index.js';
import { Button } from '../Button/index.js';
import { Icon } from '../Icon/index.js';
import { TreeItem } from '../TreeItem/index.js';
import { TreeItemCustom } from '../TreeItemCustom/index.js';
import { Tree } from './index.js';

const meta = {
  title: 'Data Display / Tree',
  component: Tree,
  argTypes: {
    children: { control: { disable: true } },
    header: { control: { disable: true } }
  },
  args: {
    mode: ListMode.None
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Tree {...args}>
        <TreeItem expanded text="Tree 1" icon={pasteIcon} selected>
          <TreeItem expanded text="Tree 1.1" selected>
            <TreeItem text="Tree 1.1.1" />
            <TreeItem text="Tree 1.1.2" />
          </TreeItem>
        </TreeItem>
        <TreeItem text="Tree 2" icon={copyIcon}>
          <TreeItem text="Tree 2.1">
            <TreeItem text="Tree 2.1.1" />
            <TreeItem text="Tree 2.1.2">
              <TreeItem text="Tree 2.1.2.1" />
              <TreeItem text="Tree 2.1.2.2" />
              <TreeItem text="Tree 2.1.2.3" />
              <TreeItem text="Tree 2.1.2.5" />
            </TreeItem>
          </TreeItem>
          <TreeItem text="Tree 2.2" />
        </TreeItem>
        <TreeItem text="Tree 3 (no icon)" />
        <TreeItemCustom
          content={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Icon name={sunIcon} style={{ marginInlineEnd: '2rem' }} />
              <Text>I'm a fully customizable TreeItemCustom!</Text>
              <Button>Btn</Button>
              <Icon name={sunIcon} style={{ marginInlineStart: '2rem' }} />
            </div>
          }
        />
      </Tree>
    );
  }
};

export const LazyLoading: Story = {
  render: (args) => {
    const [lazyChildren, setLazyChildren] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleItemToggle = (e) => {
      if (e.detail.item.dataset.id === 'lazychildren' && !lazyChildren) {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setLazyChildren(
            <>
              <TreeItem text="Tree 3.1" />
              <TreeItem text="Tree 3.2" />
            </>
          );
          e.detail.item.toggle();
        }, 3000);
      }
    };
    return (
      <BusyIndicator active={loading} style={{ width: '100%' }}>
        <Tree {...args} onItemToggle={handleItemToggle}>
          <TreeItem text="Has pre-loaded children">
            <TreeItem text="Tree 1.1" />
            <TreeItem text="Tree 1.2" />
          </TreeItem>
          <TreeItem text="Has no children" />
          <TreeItem text="Has children but not yet loaded" hasChildren icon={dlCloutIcon} data-id="lazychildren">
            {lazyChildren}
          </TreeItem>
        </Tree>
      </BusyIndicator>
    );
  }
};
