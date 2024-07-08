import { isChromatic } from '@sb/utils';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import { ColorPaletteItem } from '../ColorPaletteItem';
import { ColorPalettePopover } from './index';

const meta = {
  title: 'Modals & Popovers / ColorPalettePopover',
  component: ColorPalettePopover,
  argTypes: {
    children: { control: { disable: true } },
    defaultColor: { control: { type: 'color' } }
  },
  parameters: {
    chromatic: { delay: 1000 }
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof ColorPalettePopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const popoverRef = useRef(null);
    const btnRef = useRef(null);
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      if (isChromatic) {
        popoverRef.current.showAt(btnRef.current);
      }
    }, []);
    const onButtonClick = (e) => {
      popoverRef.current.opener = e.currentTarget;
      setOpen((prev) => !prev);
    };
    return (
      <>
        <Button onClick={onButtonClick} ref={btnRef}>
          Open ColorPalettePopover
        </Button>
        <ColorPalettePopover
          {...args}
          ref={popoverRef}
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
