import type { Meta, StoryObj } from '@storybook/react';
import { BreadcrumbsDesign, BreadcrumbsSeparatorStyle } from '../../enums/index.js';
import { BreadcrumbsItem } from '../BreadcrumbsItem/index.js';
import { Breadcrumbs } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {
    design: BreadcrumbsDesign.Standard,
    separatorStyle: BreadcrumbsSeparatorStyle.Slash
  }
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Breadcrumbs {...args}>
        <BreadcrumbsItem>Products</BreadcrumbsItem>
        <BreadcrumbsItem>Hardware</BreadcrumbsItem>
        <BreadcrumbsItem>Notebooks</BreadcrumbsItem>
      </Breadcrumbs>
    );
  }
};
