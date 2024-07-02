import type { StoryObj, Meta } from '@storybook/react';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { Text } from '../../webComponents/Text/index.js';
import { ResponsiveGridLayout } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / ResponsiveGridLayout',
  component: ResponsiveGridLayout,
  argTypes: {
    children: { control: { disable: true } }
  }
} satisfies Meta<typeof ResponsiveGridLayout>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div
          style={{ gridColumn: 'span 2', background: ThemingParameters.sapAccentColor1 }}
          className="responsiveGridLayoutItem"
        >
          <Text>Item 1</Text>
          <br />
          <code>{`style={{ gridColumn: 'span 2' }}`}</code>
        </div>
        <div
          style={{ gridColumn: 'span 3', background: ThemingParameters.sapAccentColor2 }}
          className="responsiveGridLayoutItem"
        >
          <Text>Item 2</Text>
          <br />
          <code>{`style={{ gridColumn: 'span 3' }}`}</code>
        </div>
        <div
          style={{ gridColumn: 'span 4', background: ThemingParameters.sapAccentColor3 }}
          className="responsiveGridLayoutItem"
        >
          <Text>Item 3</Text>
          <br />
          <code>{`style={{ gridColumn: 'span 4' }}`}</code>
        </div>
        <div
          style={{ gridColumn: 'span 5', background: ThemingParameters.sapAccentColor4 }}
          className="responsiveGridLayoutItem"
        >
          <Text>Item 4</Text>
          <br />
          <code>{`style={{ gridColumn: 'span 5' }}`}</code>
        </div>
        <div style={{ background: ThemingParameters.sapAccentColor5 }} className="responsiveGridLayoutItem">
          <Text>Item 5</Text>
        </div>
        <div style={{ background: ThemingParameters.sapAccentColor6 }} className="responsiveGridLayoutItem">
          <Text>Item 6</Text>
        </div>
        <div style={{ background: ThemingParameters.sapAccentColor7 }} className="responsiveGridLayoutItem">
          <Text>Item 7</Text>
        </div>
        <div
          style={{ gridColumn: 'span 4', background: ThemingParameters.sapAccentColor8 }}
          className="responsiveGridLayoutItem"
        >
          <Text>Item 8</Text>
          <br />
          <code>{`style={{ gridColumn: 'span 4' }}`}</code>
        </div>
        <div style={{ background: ThemingParameters.sapAccentColor9 }} className="responsiveGridLayoutItem">
          <Text>Item 9</Text>
        </div>
        <div style={{ background: ThemingParameters.sapAccentColor10 }} className="responsiveGridLayoutItem">
          <Text>Item 10</Text>
        </div>
        <div style={{ background: ThemingParameters.sapAccentColor1 }} className="responsiveGridLayoutItem">
          <Text>Item 11</Text>
        </div>
        <div style={{ background: ThemingParameters.sapAccentColor2 }} className="responsiveGridLayoutItem">
          <Text>Item 12</Text>
        </div>
        <div style={{ background: ThemingParameters.sapAccentColor3 }} className="responsiveGridLayoutItem">
          <Text>Item 13</Text>
        </div>
        <div style={{ background: ThemingParameters.sapAccentColor4 }} className="responsiveGridLayoutItem">
          <Text>Item 14</Text>
        </div>
        <div style={{ background: ThemingParameters.sapAccentColor5 }} className="responsiveGridLayoutItem">
          <Text>Item 15</Text>
        </div>
        <div style={{ background: ThemingParameters.sapAccentColor6 }} className="responsiveGridLayoutItem">
          <Text>Item 16</Text>
        </div>
      </>
    )
  }
};
