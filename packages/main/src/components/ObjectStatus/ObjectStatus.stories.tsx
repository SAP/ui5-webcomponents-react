import type { Meta, StoryObj } from '@storybook/react';
import IconMode from '@ui5/webcomponents/dist/types/IconMode.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import cancelIcon from '@ui5/webcomponents-icons/dist/sys-cancel.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { IndicationColor } from '../../enums/IndicationColor.js';
import { Icon } from '../../webComponents/Icon/index.js';
import { Label } from '../../webComponents/Label/index.js';
import { Text } from '../../webComponents/Text/index.js';
import type { ObjectStatusPropTypes } from './index.js';
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
  args: { icon: <Icon name={cancelIcon} mode={IconMode.Decorative} /> }
};

export const WithIconOnly: Story = {
  args: { icon: <Icon name={cancelIcon} mode={IconMode.Decorative} />, children: null, title: 'Cancel' }
};

const States = { ...ValueState, ...IndicationColor };
export const InvertedObjectStatus: Story = {
  name: 'All States',
  render() {
    const renderStatuses = (interactive = false, inverted = false) => {
      return Object.values(States).map((state: ObjectStatusPropTypes['state']) => {
        const indicationNumber = parseInt(state.replace('Indication', ''), 10);
        if (!inverted && !isNaN(indicationNumber) && indicationNumber > 10) {
          return null;
        }
        return (
          <ObjectStatus
            key={`${state}-${interactive ? 'interactive' : ''}-${inverted ? 'inverted' : ''}`}
            interactive={interactive}
            inverted={inverted}
            state={state}
          >
            {state}
          </ObjectStatus>
        );
      });
    };
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
        {renderStatuses()}
        <Label style={{ gridColumn: 'span 5' }}>
          <code>interactive</code> mode:
        </Label>
        {renderStatuses(true)}
        <div style={{ gridColumn: 'span 5', borderBlockStart: `1px solid ${ThemingParameters.sapList_BorderColor}` }} />
        <Text
          style={{
            gridColumn: 'span 5',
            fontFamily: ThemingParameters.sapFontBoldFamily,
            fontSize: ThemingParameters.sapFontLargeSize
          }}
        >
          Inverted
        </Text>
        <Label
          style={{
            gridColumn: 'span 5'
          }}
        >
          The ObjectStatus has an inverted visualisation, which is used in cases when the information is crucial for the
          user’s actions and needs to stand out visually.
        </Label>
        <Label style={{ gridColumn: 'span 5' }}>Standard mode:</Label>
        {renderStatuses(false, true)}
        <Label style={{ gridColumn: 'span 5' }}>
          <code>interactive</code> mode:
        </Label>
        {renderStatuses(true, true)}
      </div>
    );
  }
};
