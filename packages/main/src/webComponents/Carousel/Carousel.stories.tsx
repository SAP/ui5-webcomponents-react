import type { Meta, StoryObj } from '@storybook/react';
import { CarouselArrowsPlacement } from '../../enums/CarouselArrowsPlacement';
import { Img1, Img2, Img3 } from './CodeGen';
import { Carousel } from './index';

const meta = {
  title: 'Layouts & Floorplans / Carousel',
  component: Carousel,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {
    arrowsPlacement: CarouselArrowsPlacement.Content
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Carousel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return (
      <Carousel {...args}>
        {Img1}
        {Img2}
        {Img3}
      </Carousel>
    );
  }
};
