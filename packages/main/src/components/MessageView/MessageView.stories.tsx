import { generateMessageItems } from '@sb/mockData/generateMessageItems';
import type { Meta, StoryObj } from '@storybook/react';
import arrowLeftIcon from '@ui5/webcomponents-icons/dist/slim-arrow-left.js';
import { useRef, useState } from 'react';
import { ButtonDesign, FlexBoxAlignItems, FlexBoxJustifyContent, TitleLevel, ValueState } from '../../enums/index.js';
import { Bar } from '../../webComponents/Bar/index.js';
import { Button } from '../../webComponents/Button/index.js';
// todo replace once `createPortal` is supported
import { Dialog } from '../../webComponents/Dialog/CodeGen.js';
import { Link } from '../../webComponents/Link/index.js';
// todo replace once `createPortal` is supported
import { ResponsivePopover } from '../../webComponents/ResponsivePopover/CodeGen.js';
import { Title } from '../../webComponents/Title/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { MessageViewButton } from '../MessageViewButton/index.js';
import { MessageItem } from './MessageItem.js';
import { MessageView } from './index.js';

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
        type={ValueState.Error}
        counter={1}
        groupName={'Products'}
      >
        First Error Message Description.
      </MessageItem>,
      <MessageItem
        key={2}
        titleText={'Success Message Type'}
        subtitleText={'You can also use subtitles'}
        type={ValueState.Success}
        counter={2}
      >
        This is a success message! You can even use{' '}
        <Link href={'https://github.com/SAP/ui5-webcomponents-react'}>links here</Link>.
      </MessageItem>,
      <MessageItem
        key={3}
        titleText={'Warning Message Type'}
        subtitleText={'Warnign without details'}
        type={ValueState.Warning}
        counter={3}
      />,
      <MessageItem key={4} titleText={'Empty Message Type'} groupName={'Products'} />,
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
    const dialogRef = useRef(null);
    const messageViewRef = useRef(null);
    const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
    return (
      <>
        <Button
          onClick={() => {
            dialogRef.current.show();
          }}
        >
          Open Dialog
        </Button>
        <Dialog
          ref={dialogRef}
          style={{ width: '400px' }}
          className="contentPartNoPadding headerPartNoPadding"
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
                  dialogRef.current?.close();
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
          type={ValueState.Error}
          onClick={(e) => {
            ref.current.showAt(e.target);
          }}
        />
        <ResponsivePopover
          ref={ref}
          headerText="Messages"
          className="contentPartNoPadding headerPartNoPadding"
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
                  ref.current?.close();
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
