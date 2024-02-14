import type { Meta, StoryObj } from '@storybook/react';
import '@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js';
import { ColorPaletteItem } from '../ColorPaletteItem/index.js';
import { ColorPalette } from './index.js';

const meta = {
  title: 'Data Display / ColorPalette',
  component: ColorPalette,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {},
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <ColorPalette {...args}>
        <ColorPaletteItem value="darkblue" />
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="#444444" />
        <ColorPaletteItem value="rgb(0,200,0)" />
        <ColorPaletteItem value="green" />
        <ColorPaletteItem value="darkred" />
        <ColorPaletteItem value="yellow" />
        <ColorPaletteItem value="blue" />
        <ColorPaletteItem value="cyan" />
        <ColorPaletteItem value="orange" />
        <ColorPaletteItem value="#5480e7" />
        <ColorPaletteItem value="#ff6699" />
      </ColorPalette>
    );
  }
};
