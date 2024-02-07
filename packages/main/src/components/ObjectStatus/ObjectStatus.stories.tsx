import type { Meta, StoryObj } from '@storybook/react';
import cancelIcon from '@ui5/webcomponents-icons/dist/sys-cancel.js';
import { Icon, IndicationColor, Label, ValueState } from '../..';
import { ObjectStatus } from './index.js';

const meta = {
  title: 'Data Display / ObjectStatus',
  component: ObjectStatus,
  argTypes: {
    children: { control: 'text' },
    icon: { control: { disable: true } }
  },
  args: {
    state: ValueState.None,
    children: 'ObjectStatus',
    showDefaultIcon: true
  }
} satisfies Meta<typeof ObjectStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDefaultIcons: Story = {
  render: function () {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr)',
          rowGap: '1rem',
          columnGap: '1rem'
        }}
      >
        <ObjectStatus showDefaultIcon state={ValueState.None}>
          ValueState.None
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Success}>
          ValueState.Success
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Warning}>
          ValueState.Warning
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Error}>
          ValueState.Error
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Information}>
          ValueState.Information
        </ObjectStatus>
      </div>
    );
  }
};

export const WithCustomIcon: Story = {
  args: { icon: <Icon name={cancelIcon} /> }
};

export const WithIconOnly: Story = {
  args: { icon: <Icon name={cancelIcon} />, children: null }
};

export const InvertedObjectStatus: Story = {
  name: 'Inverted ObjectStatus',
  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr)',
          rowGap: '1rem',
          columnGap: '1rem'
        }}
      >
        <Label style={{ gridColumn: 'span 5' }}>Standard mode:</Label>
        <ObjectStatus inverted state={ValueState.None}>
          ValueState.None
        </ObjectStatus>
        <ObjectStatus inverted state={ValueState.Success}>
          ValueState.Success
        </ObjectStatus>
        <ObjectStatus inverted state={ValueState.Warning}>
          ValueState.Warning
        </ObjectStatus>
        <ObjectStatus inverted state={ValueState.Error}>
          ValueState.Error
        </ObjectStatus>
        <ObjectStatus inverted state={ValueState.Information}>
          ValueState.Information
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication01}>
          IndicationColor.Indication01
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication02}>
          IndicationColor.Indication02
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication03}>
          IndicationColor.Indication03
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication04}>
          IndicationColor.Indication04
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication05}>
          IndicationColor.Indication05
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication06}>
          IndicationColor.Indication06
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication07}>
          IndicationColor.Indication07
        </ObjectStatus>
        <ObjectStatus inverted state={IndicationColor.Indication08}>
          IndicationColor.Indication08
        </ObjectStatus>
        <Label style={{ gridColumn: 'span 5' }}>
          <code>active</code> mode:
        </Label>
        <ObjectStatus active inverted state={ValueState.None}>
          ValueState.None
        </ObjectStatus>
        <ObjectStatus active inverted state={ValueState.Success}>
          ValueState.Success
        </ObjectStatus>
        <ObjectStatus active inverted state={ValueState.Warning}>
          ValueState.Warning
        </ObjectStatus>
        <ObjectStatus active inverted state={ValueState.Error}>
          ValueState.Error
        </ObjectStatus>
        <ObjectStatus active inverted state={ValueState.Information}>
          ValueState.Information
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication01}>
          IndicationColor.Indication01
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication02}>
          IndicationColor.Indication02
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication03}>
          IndicationColor.Indication03
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication04}>
          IndicationColor.Indication04
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication05}>
          IndicationColor.Indication05
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication06}>
          IndicationColor.Indication06
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication07}>
          IndicationColor.Indication07
        </ObjectStatus>
        <ObjectStatus active inverted state={IndicationColor.Indication08}>
          IndicationColor.Indication08
        </ObjectStatus>
      </div>
    );
  }
};
