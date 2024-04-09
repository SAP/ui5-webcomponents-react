import type { Meta, StoryObj } from '@storybook/react';
import { CarouselArrowsPlacement } from '../../enums/CarouselArrowsPlacement';
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
        <img src="https://sap.github.io/ui5-webcomponents/images/sample1.jpg" alt="img-sample 1" />
        <img src="https://sap.github.io/ui5-webcomponents/images/sample2.jpg" alt="img-sample 2" />
        <img src="https://sap.github.io/ui5-webcomponents/images/sample3.jpg" alt="img-sample 3" />
      </Carousel>
    );
  }
};
