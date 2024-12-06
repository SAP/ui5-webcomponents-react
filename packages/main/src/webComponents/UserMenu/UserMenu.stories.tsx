import type { Meta, StoryObj } from '@storybook/react';
import { useRef } from 'react';
import { Avatar } from '../Avatar/index.js';
import { ShellBar } from '../ShellBar/index.js';
import { UserMenuAccount } from '../UserMenuAccount/index.js';
import { UserMenuItem } from '../UserMenuItem/index.js';
import type { UserMenuDomRef } from './index.js';
import { UserMenu } from './index.js';

const meta = {
  title: 'Modals & Popovers / UserMenu',
  component: UserMenu,
  argTypes: {
    children: { control: { disable: true } },
    opener: { control: { disable: true } },
    accounts: { control: { disable: true } },
    //todo: enable again once `close` event is exposed and the story is adjusted accordingly
    open: { control: { disable: true } }
  },
  args: {
    accounts: (
      <>
        <UserMenuAccount
          avatarSrc="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png"
          titleText="Alaina Chevalier"
          subtitleText="aliana.chevalier@sap.com"
          description="Delivery Manager, SAP SE"
          selected
        ></UserMenuAccount>
        <UserMenuAccount
          avatarSrc="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png"
          titleText="Alaina Chevalier I"
          subtitleText="aliana.chevalier1@sap.com"
          description="Delivery Manager, SAP SE"
        ></UserMenuAccount>
        <UserMenuAccount
          avatarSrc="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png"
          titleText="Alaina Chevalier II"
          subtitleText="aliana.chevalier2@sap.com"
          description="Delivery Manager, SAP SE"
        ></UserMenuAccount>
      </>
    ),
    children: (
      <>
        <UserMenuItem icon="action-settings" text="Setting" data-id="setting"></UserMenuItem>
        <UserMenuItem icon="globe" text="Product-specific account action" data-id="account-action1"></UserMenuItem>
        <UserMenuItem icon="official-service" text="Legal Information">
          <UserMenuItem icon="private" text="Private Policy" data-id="privacy-policy"></UserMenuItem>
          <UserMenuItem icon="accelerated" text="Terms of Use" data-id="terms-of-use"></UserMenuItem>
        </UserMenuItem>
      </>
    )
  }
} satisfies Meta<typeof UserMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    const userMenuRef = useRef<UserMenuDomRef>(null);
    return (
      <>
        <ShellBar
          primaryTitle={'Corporate Portal'}
          logo={<img src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />}
          profile={
            <Avatar>
              <img
                src="https://sap.github.io/ui5-webcomponents/images/avatars/woman_avatar_3.png"
                alt={'Avatar of the current user'}
              />
            </Avatar>
          }
          onProfileClick={(event) => {
            userMenuRef.current.opener = event.detail.targetRef;
            userMenuRef.current.open = true;
          }}
        />
        <UserMenu ref={userMenuRef} {...args} />
      </>
    );
  }
};
