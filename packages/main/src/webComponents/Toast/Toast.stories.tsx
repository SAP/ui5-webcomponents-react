import { isChromatic } from '@sb/utils';
import type { Meta } from '@storybook/react';
import { useRef, useEffect, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { ToastPlacement } from '../../enums/index.js';
import { Button } from '../Button/index.js';
import type { ToastDomRef, ToastPropTypes } from './index.js';
import { Toast as OriginalToast } from './index.js';

// todo remove once portals are supported inline, or popovers are supported w/o having to mount them to the body
const Toast = forwardRef<ToastDomRef, ToastPropTypes>((args, ref) =>
  createPortal(<OriginalToast {...args} ref={ref} />, document.body)
);
Toast.displayName = 'Toast';

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
