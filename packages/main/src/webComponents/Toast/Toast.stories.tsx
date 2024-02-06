import { isChromatic } from '@sb/utils';
import type { Meta } from '@storybook/react';
import { useRef, useEffect } from 'react';
import { ToastPlacement } from '../../enums/index.js';
import { Button } from '../Button/index.js';
import { Toast } from './CodeGen.js';
import { Toast as OriginalToast } from './index.js';

const meta = {
  title: 'Modals & Popovers / Toast',
  component: OriginalToast,
  args: {
    placement: ToastPlacement.BottomCenter,
    children: 'Toast Text'
  },
  argTypes: {
    children: { control: 'text' }
  },
  parameters: {
    chromatic: { delay: 1000 }
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof OriginalToast>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render(args) {
    const toast = useRef(null);
    const showToast = () => {
      toast.current.show();
    };
    useEffect(() => {
      if (isChromatic) {
        toast.current.show();
      }
    }, []);
    return (
      <>
        <Toast ref={toast} duration={args.duration} placement={args.placement}>
          {args.children}
        </Toast>
        <Button onClick={showToast}>Show Toast</Button>
      </>
    );
  }
};
