import type { Meta, StoryObj } from '@storybook/react-vite';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import aiIcon from '@ui5/webcomponents-icons/dist/ai.js';
import navDownIcon from '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import stopIcon from '@ui5/webcomponents-icons/dist/stop.js';
import type { MenuPropTypes } from '@ui5/webcomponents-react';
import { Menu, MenuItem, MenuSeparator } from '@ui5/webcomponents-react';
import { useRef, useState } from 'react';
import { ButtonState } from '../ButtonState/index.js';
import type { ButtonDomRef, ButtonPropTypes } from './index.js';
import { Button } from './index.js';

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    design: ButtonDesign.Default,
  },
  tags: ['package:@ui5/webcomponents-ai', 'experimental'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const generationIdRef = useRef<NodeJS.Timeout | null>(null);
    const buttonRef = useRef<ButtonDomRef>(null);
    const [buttonState, setButtonState] = useState('generate');
    const [menuOpen, setMenuOpen] = useState(false);

    const startGeneration = () => {
      generationIdRef.current = setTimeout(() => {
        setButtonState('revise');
      }, 3000);
    };

    const handleClick: ButtonPropTypes['onClick'] = (e) => {
      const btn = e.target;
      args.onClick(e);

      setMenuOpen(false);
      switch (btn.state) {
        case 'generate':
          setButtonState('generating');
          startGeneration();
          break;
        case 'generating':
          if (generationIdRef.current) {
            clearTimeout(generationIdRef.current);
            generationIdRef.current = null;
          }
          setButtonState('generate');
          break;
        case 'revise':
          setMenuOpen(true);
          break;
      }
    };

    const handleMenuItemClick: MenuPropTypes['onItemClick'] = (e) => {
      if (e.detail.text === 'Regenerate') {
        setButtonState('generating');
        startGeneration();
      }
    };

    return (
      <>
        <Button {...args} onClick={handleClick} state={buttonState} ref={buttonRef}>
          <ButtonState name="generate" text="Generate" icon={aiIcon} />
          <ButtonState name="generating" text="Stop Generating" icon={stopIcon} />
          <ButtonState name="revise" text="Revise" icon={aiIcon} endIcon={navDownIcon} />
        </Button>
        {menuOpen && (
          <Menu
            opener={buttonRef.current}
            open
            onItemClick={handleMenuItemClick}
            onClose={() => {
              setMenuOpen(false);
            }}
          >
            <MenuItem text="Regenerate" />
            <MenuSeparator />
            <MenuItem text="Fix Spelling & Grammar" />
            <MenuItem text="Change Tone">
              <MenuItem text="Option 1" />
              <MenuItem text="Option 2" />
              <MenuItem text="Option 3" />
            </MenuItem>
            <MenuItem text="Adjust Length">
              <MenuItem text="Shorten text" />
              <MenuItem text="Lengthen text" />
            </MenuItem>
            <MenuItem text="Bulleted List" />
            <MenuItem text="Translate">
              <MenuItem text="English" />
              <MenuItem text="German" />
              <MenuItem text="Spanish" />
            </MenuItem>
          </Menu>
        )}
      </>
    );
  },
};
