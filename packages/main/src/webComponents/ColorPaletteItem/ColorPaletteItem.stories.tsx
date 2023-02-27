import { StoryObj } from '@storybook/react';
import React from 'react';
import { ColorPaletteItem } from './index';

const meta = {
  title: '__hiddenstory__ColorPaletteItem',
  component: ColorPaletteItem
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render() {
    return null;
  }
};
