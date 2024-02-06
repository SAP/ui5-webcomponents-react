import type { Meta, StoryObj } from '@storybook/react';
import { SideContentFallDown } from '../../enums/SideContentFallDown';
import { SideContentPosition } from '../../enums/SideContentPosition';
import { SideContentVisibility } from '../../enums/SideContentVisibility';
import { MainContent, SideContent } from './CodeGen';
import { DynamicSideContent } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / DynamicSideContent',
  component: DynamicSideContent,
  argTypes: {
    children: { control: { disable: true } },
    sideContent: { control: { disable: true } }
  },
  args: {
    sideContentFallDown: SideContentFallDown.OnMinimumWidth,
    sideContentPosition: SideContentPosition.End,
    sideContentVisibility: SideContentVisibility.ShowAboveS
  },
  tags: ['package:@ui5/webcomponents-fiori']
} satisfies Meta<typeof DynamicSideContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return (
      <DynamicSideContent {...args} sideContent={SideContent}>
        {MainContent}
      </DynamicSideContent>
    );
  }
};
