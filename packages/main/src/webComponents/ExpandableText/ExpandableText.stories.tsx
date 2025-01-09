import type { Meta, StoryObj } from '@storybook/react';
import ExpandableTextOverflowMode from '@ui5/webcomponents/dist/types/ExpandableTextOverflowMode.js';
import TextEmptyIndicatorMode from '@ui5/webcomponents/dist/types/TextEmptyIndicatorMode.js';
import { ExpandableText } from './index.js';

const meta = {
  title: 'Data Display / ExpandableText',
  component: ExpandableText,
  argTypes: {
    text: { control: 'text' },
    maxCharacters: { control: 'number' },
    children: { control: { disable: true } },
    showOverflowInPopover: { control: { disable: true } }
    //todo: uncomment once white-space can be applied w/o addCustomCSS
    // renderWhitespace: { control: { disable: true } }
  },
  args: {
    emptyIndicatorMode: TextEmptyIndicatorMode.Off,
    overflowMode: ExpandableTextOverflowMode.InPlace,
    text: `             If "renderWhitespace" is set to true, there will be thirteen white spaces in front and after this sentence.             Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`,
    maxCharacters: 100
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof ExpandableText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
