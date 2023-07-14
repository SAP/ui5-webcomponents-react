import { isChromatic } from '@sb/utils';
import type { StoryObj } from '@storybook/react';
import React, { forwardRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button';
import { ColorPaletteItem } from '../ColorPaletteItem';
import type { ColorPalettePopoverDomRef, ColorPalettePopoverPropTypes } from './index';
import { ColorPalettePopover as OriginalColorPalettePopover } from './index';

const meta = {
  title: 'Modals & Popovers / ColorPalettePopover',
  component: OriginalColorPalettePopover,
  argTypes: {
    children: { control: { disable: true } },
    defaultColor: { control: { type: 'color' } }
  },
  parameters: {
    chromatic: { delay: 1000 }
  }
};

// todo remove once portals are supported inline, or general popovers are supported w/o having to mount them to the body
const ColorPalettePopover = forwardRef<ColorPalettePopoverDomRef, ColorPalettePopoverPropTypes>((args, ref) =>
  createPortal(<OriginalColorPalettePopover {...args} ref={ref} />, document.body)
);

ColorPalettePopover.displayName = 'ColorPalettePopover';

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const popoverRef = useRef(null);
    const btnRef = useRef(null);
    useEffect(() => {
      if (isChromatic) {
        popoverRef.current.showAt(btnRef.current);
      }
    }, []);
    const onButtonClick = (e) => {
      popoverRef.current.showAt(e.target);
    };
    return (
      <>
        <Button onClick={onButtonClick} ref={btnRef}>
          Open ColorPalettePopover
        </Button>
        <ColorPalettePopover {...args} ref={popoverRef}>
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
