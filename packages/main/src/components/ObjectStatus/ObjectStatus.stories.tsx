import type { Meta, StoryObj } from '@storybook/react';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import cancelIcon from '@ui5/webcomponents-icons/dist/sys-cancel.js';
import { Icon, IndicationColor, Label } from '../..';
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
        <ObjectStatus showDefaultIcon state={ValueState.Positive}>
          ValueState.Positive
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Critical}>
          ValueState.Critical
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Negative}>
          ValueState.Negative
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
        <ObjectStatus inverted state={ValueState.Positive}>
          ValueState.Positive
        </ObjectStatus>
        <ObjectStatus inverted state={ValueState.Critical}>
          ValueState.Critical
        </ObjectStatus>
        <ObjectStatus inverted state={ValueState.Negative}>
          ValueState.Negative
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
          <code>interactive</code> mode:
        </Label>
        <ObjectStatus interactive inverted state={ValueState.None}>
          ValueState.None
        </ObjectStatus>
        <ObjectStatus interactive inverted state={ValueState.Positive}>
          ValueState.Positive
        </ObjectStatus>
        <ObjectStatus interactive inverted state={ValueState.Critical}>
          ValueState.Critical
        </ObjectStatus>
        <ObjectStatus interactive inverted state={ValueState.Negative}>
          ValueState.Negative
        </ObjectStatus>
        <ObjectStatus interactive inverted state={ValueState.Information}>
          ValueState.Information
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication01}>
          IndicationColor.Indication01
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication02}>
          IndicationColor.Indication02
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication03}>
          IndicationColor.Indication03
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication04}>
          IndicationColor.Indication04
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication05}>
          IndicationColor.Indication05
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication06}>
          IndicationColor.Indication06
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication07}>
          IndicationColor.Indication07
        </ObjectStatus>
        <ObjectStatus interactive inverted state={IndicationColor.Indication08}>
          IndicationColor.Indication08
        </ObjectStatus>
      </div>
    );
  }
};
