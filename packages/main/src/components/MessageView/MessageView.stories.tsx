import { generateMessageItems } from '@sb/mockData/generateMessageItems.js';
import type { Meta, StoryObj } from '@storybook/react';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import arrowLeftIcon from '@ui5/webcomponents-icons/dist/slim-arrow-left.js';
import { useRef, useState } from 'react';
import { FlexBoxAlignItems, FlexBoxJustifyContent } from '../../enums/index.js';
import { Bar } from '../../webComponents/Bar/index.js';
import { Button } from '../../webComponents/Button/index.js';
import { Dialog } from '../../webComponents/Dialog/index.js';
import { Link } from '../../webComponents/Link/index.js';
import { ResponsivePopover } from '../../webComponents/ResponsivePopover/index.js';
import { Title } from '../../webComponents/Title/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { MessageViewButton } from '../MessageViewButton/index.js';
import { MessageItem } from './MessageItem.js';
import { MessageView } from './index.js';

// TODO: check docs for outdated info

const meta = {
  title: 'User Feedback / MessageView',
  component: MessageView,
  argTypes: {
    showDetailsPageHeader: { description: 'Defines whether the header of the details page will be shown.' },
    groupItems: { description: 'Defines whether the messages are grouped or not.' },
    onItemSelect: { description: 'Event is fired when the details of a message are shown.', action: 'onItemSelect' },
    children: {
      description: `A list with message items. If only one item is provided, the initial page will be the details page for the item.\n\n
**Note:** Although this prop accepts all HTML Elements, it is strongly recommended that you only use \`Message\` in order to preserve the intended design.`,
      control: { disable: true }
    }
  },
  args: {
    showDetailsPageHeader: true,
    groupItems: false,
    children: [
      <MessageItem
        key={1}
        titleText={'Error Message Type'}
        subtitleText={'Some bad error occurred'}
        type={ValueState.Negative}
        counter={1}
        groupName={'Products'}
      >
        First Error Message Description.
      </MessageItem>,
      <MessageItem
        key={2}
        titleText={'Success Message Type'}
        subtitleText={'You can also use subtitles'}
        type={ValueState.Positive}
        counter={2}
      >
        This is a success message! You can even use{' '}
        <Link href={'https://github.com/SAP/ui5-webcomponents-react'}>links here</Link>.
      </MessageItem>,
      <MessageItem
        key={3}
        titleText={'Warning Message Type'}
        subtitleText={'Warnign without details'}
        type={ValueState.Critical}
        counter={3}
      />,
      <MessageItem
        key={4}
        titleText={
          'Long Empty Message Type (no title, no subtitle, no children/details) - The details view is only available if the `titleText` is not fully visible. It is NOT recommended to use long titles!'
        }
        groupName={'Products'}
      />,
      <MessageItem
        key={5}
        titleText={'Information Message Type without subtitle'}
        type={ValueState.Information}
        groupName={'Products'}
      />,
      <MessageItem
        key={6}
        titleText={'None Message Type'}
        subtitleText={'Value State None will be handled as Information'}
        type={ValueState.None}
        groupName={'Employees'}
      >
        Informative message
      </MessageItem>
    ]
  }
} satisfies Meta<typeof MessageView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MessageViewInDialog: Story = {
  name: 'MessageView in Dialog',
  render(args) {
    const [open, setOpen] = useState(false);
    const messageViewRef = useRef(null);
    const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
    return (
      <>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Dialog
        </Button>
        <Dialog
          resizable
          style={{ width: '500px' }}
          className="contentPartNoPadding headerPartNoPadding"
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          header={
            <Bar
              startContent={
                <FlexBox alignItems={FlexBoxAlignItems.Center}>
                  {isOnDetailsPage && (
                    <Button
                      icon={arrowLeftIcon}
                      design={ButtonDesign.Transparent}
                      onClick={() => {
                        setIsOnDetailsPage(false);
                        messageViewRef.current.navigateBack();
                      }}
                      style={{ marginInline: '0 0.5rem' }}
                    />
                  )}
                  <Title level={TitleLevel.H4}>Messages</Title>
                </FlexBox>
              }
            />
          }
          footer={
            <FlexBox
              alignItems={FlexBoxAlignItems.Center}
              justifyContent={FlexBoxJustifyContent.End}
              style={{
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              <Button
                design={ButtonDesign.Transparent}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Close
              </Button>
            </FlexBox>
          }
        >
          <MessageView
            ref={messageViewRef}
            {...args}
            showDetailsPageHeader={false}
            onItemSelect={() => {
              setIsOnDetailsPage(true);
            }}
          />
        </Dialog>
      </>
    );
  }
};

export const WithMessageViewButton: Story = {
  name: 'with MessageViewButton & Popover',
  render() {
    const ref = useRef(null);
    const messageViewRef = useRef(null);
    const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
    const [open, setOpen] = useState(false);
    const numberOfItems = {
      information: 2,
      warning: 5,
      success: 3,
      error: 3
    };
    return (
      <>
        <MessageViewButton
          counter={3}
          type={ValueState.Negative}
          onClick={(e) => {
            ref.current.opener = e.currentTarget;
            setOpen(true);
          }}
        />
        <ResponsivePopover
          ref={ref}
          open={open}
          headerText="Messages"
          className="contentPartNoPadding headerPartNoPadding"
          onClose={() => {
            setOpen(false);
          }}
          header={
            <Bar
              startContent={
                <FlexBox alignItems={FlexBoxAlignItems.Center}>
                  {isOnDetailsPage && (
                    <Button
                      design={ButtonDesign.Transparent}
                      icon="slim-arrow-left"
                      onClick={() => {
                        setIsOnDetailsPage(false);
                        messageViewRef.current.navigateBack();
                      }}
                      style={{ marginInline: '0 0.5rem' }}
                    />
                  )}
                  <Title level={TitleLevel.H4}>Messages</Title>
                </FlexBox>
              }
            />
          }
          footer={
            <FlexBox
              alignItems={FlexBoxAlignItems.Center}
              justifyContent={FlexBoxJustifyContent.End}
              style={{
                paddingBlock: '0.25rem',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              <Button
                design={ButtonDesign.Transparent}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Close
              </Button>
            </FlexBox>
          }
        >
          <MessageView
            style={{ height: '500px', maxWidth: '600px' }}
            ref={messageViewRef}
            showDetailsPageHeader={false}
            groupItems
            onItemSelect={() => {
              setIsOnDetailsPage(true);
            }}
          >
            {generateMessageItems(numberOfItems)}
          </MessageView>
        </ResponsivePopover>
      </>
    );
  }
};
