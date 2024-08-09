import { isChromatic } from '@sb/utils.js';
import type { Meta, StoryObj } from '@storybook/react';
import { useRef, useState } from 'react';
import { Button } from '../Button/index.js';
import { ColorPaletteItem } from '../ColorPaletteItem/index.js';
import { ColorPalettePopover } from './index.js';

const meta = {
  title: 'Modals & Popovers / ColorPalettePopover',
  component: ColorPalettePopover,
  argTypes: {
    children: { control: { disable: true } },
    defaultColor: { control: { type: 'color' } }
  },
  parameters: {
    chromatic: { delay: 1000 },
    open: isChromatic
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof ColorPalettePopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const btnRef = useRef(null);
    const [open, setOpen] = useState(args.open);
    const onButtonClick = (e) => {
      setOpen((prev) => !prev);
    };
    return (
      <>
        <Button onClick={onButtonClick} ref={btnRef}>
          Open ColorPalettePopover
        </Button>
        <ColorPalettePopover
          {...args}
          opener={btnRef.current}
          open={open}
          onClose={(e) => {
            args.onClose(e);
            setOpen(false);
          }}
        >
          <ColorPaletteItem value="black" />
          <ColorPaletteItem value="darkblue" />
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
        </ColorPalettePopover>
      </>
    );
  }
};
