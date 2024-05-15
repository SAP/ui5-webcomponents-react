import { ProductsTable } from '@sb/components/ProductsTable';
import { isChromatic } from '@sb/utils';
import type { Meta, StoryObj } from '@storybook/react';
import actionIcon from '@ui5/webcomponents-icons/dist/action.js';
import declineIcon from '@ui5/webcomponents-icons/dist/decline.js';
import exitFSIcon from '@ui5/webcomponents-icons/dist/exit-full-screen.js';
import fullscreenIcon from '@ui5/webcomponents-icons/dist/full-screen.js';
import menu2Icon from '@ui5/webcomponents-icons/dist/menu2';
import navDownArrowIcon from '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import { useReducer, useState } from 'react';
import {
  Bar,
  BarDesign,
  Breadcrumbs,
  BreadcrumbsItem,
  BusyIndicator,
  Button,
  ButtonDesign,
  DynamicPageHeader,
  DynamicPageTitle,
  FlexBox,
  FlexBoxDirection,
  FlexBoxWrap,
  Label,
  MessageStrip,
  ObjectStatus,
  PageBackgroundDesign,
  Panel,
  Tag,
  Title,
  ToggleButton,
  ValueState,
  VariantItem,
  VariantManagement
} from '../..';
import { DynamicPage } from './index.js';
import React from 'react';

const meta = {
  title: 'Layouts & Floorplans / DynamicPage',
  component: DynamicPage,
  argTypes: {
    headerTitle: {
      control: { disable: true }
    },
    headerContent: {
      control: { disable: true }
    },
    children: {
      control: { disable: true }
    },
    footer: {
      control: { disable: true }
    },
    a11yConfig: { table: { category: 'A11y props' } }
  },
  args: {
    backgroundDesign: PageBackgroundDesign.Solid,
    style: { maxHeight: '700px' },
    headerTitle: (
      <DynamicPageTitle
        actions={
          <>
            <Button key={'edit'} design={ButtonDesign.Emphasized}>
              Edit
            </Button>
            <Button key={'delete'} design={ButtonDesign.Transparent}>
              Delete
            </Button>
            <Button key={'copy'} design={ButtonDesign.Transparent}>
              Copy
            </Button>
            <Button key={'action'} icon={actionIcon} design={ButtonDesign.Transparent} />
          </>
        }
        navigationActions={
          <>
            <Button key={'fullscreen'} icon={fullscreenIcon} design={ButtonDesign.Transparent} />
            <Button key={'exitFullscreen'} icon={exitFSIcon} design={ButtonDesign.Transparent} />
            <Button key={'decline'} icon={declineIcon} design={ButtonDesign.Transparent} />
          </>
        }
        breadcrumbs={
          <Breadcrumbs>
            <BreadcrumbsItem>Home</BreadcrumbsItem>
            <BreadcrumbsItem>Page 1</BreadcrumbsItem>
            <BreadcrumbsItem>Page 2</BreadcrumbsItem>
            <BreadcrumbsItem>Page 3</BreadcrumbsItem>
            <BreadcrumbsItem>Page 4</BreadcrumbsItem>
            <BreadcrumbsItem>Page 5</BreadcrumbsItem>
          </Breadcrumbs>
        }
        header={<Title>Header Title</Title>}
        subHeader={<Label>This is a sub header</Label>}
        expandedContent={<MessageStrip>Information (only visible if header content is expanded)</MessageStrip>}
        snappedContent={<MessageStrip>Information (only visible if header content is collapsed/snapped)</MessageStrip>}
      >
        <Tag>Status: OK</Tag>
      </DynamicPageTitle>
    ),
    headerContent: (
      <DynamicPageHeader>
        <FlexBox wrap={FlexBoxWrap.Wrap}>
          <FlexBox direction={FlexBoxDirection.Column}>
            <Label>Location: Warehouse A</Label>
            <Label>Halway: 23L</Label>
            <Label>Rack: 34</Label>
          </FlexBox>
          <span style={{ width: '1rem' }} />
          <FlexBox direction={FlexBoxDirection.Column}>
            <Label>Availability:</Label>
            <ObjectStatus state={ValueState.Success}>In Stock</ObjectStatus>
          </FlexBox>
        </FlexBox>
      </DynamicPageHeader>
    )
  }
} satisfies Meta<typeof DynamicPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return (
      <DynamicPage {...args}>
        <ProductsTable />
      </DynamicPage>
    );
  }
};

export const AlwaysShowHeaderContent: Story = {
  name: 'Always show header content',
  args: { alwaysShowContentHeader: true, showHideHeaderButton: true, headerContentPinnable: true },
  render(args) {
    const [collapsed, setCollapsed] = useReducer((coll) => !coll, !isChromatic);
    return (
      <Panel collapsed={collapsed} onToggle={setCollapsed} headerText="Display DynamicPage with fixed header.">
        {collapsed ? (
          <BusyIndicator active style={{ width: '100%' }}>
            <span style={{ height: '700px' }} />
          </BusyIndicator>
        ) : (
          <DynamicPage {...args}>
            <ProductsTable />
          </DynamicPage>
        )}
      </Panel>
    );
  }
};

export const WithVariants: Story = {
  name: 'with Variants',
  render(args) {
    const [headerVariant, setHeaderVariant] = useState('Header Variant 1');
    const [navigationItems, setNavigationItems] = useState([
      <Button key={'decline'} icon={declineIcon} design={ButtonDesign.Transparent} />
    ]);
    const [actionItems, setActionItems] = useState([
      <Button key={'edit'} design={ButtonDesign.Emphasized}>
        Edit
      </Button>,
      <Button key={'delete'} design={ButtonDesign.Transparent}>
        Delete
      </Button>
    ]);
    const selectVariant = (e) => {
      const selectedVariant = e.detail.selectedVariant.children;
      setHeaderVariant(selectedVariant);
      setNavigationItems(
        selectedVariant === 'Header Variant 2'
          ? [
              <Button key={'fullscreen'} icon={fullscreenIcon} design={ButtonDesign.Transparent} />,
              <Button key={'exitFullscreen'} icon={exitFSIcon} design={ButtonDesign.Transparent} />,
              <Button key={'decline'} icon={declineIcon} design={ButtonDesign.Transparent} />
            ]
          : [<Button key={'decline'} icon={declineIcon} design={ButtonDesign.Transparent} />]
      );
      setActionItems(
        selectedVariant === 'Header Variant 1'
          ? [
              <Button key={'edit'} design={ButtonDesign.Emphasized}>
                Edit
              </Button>,
              <Button key={'delete'} design={ButtonDesign.Transparent}>
                Delete
              </Button>
            ]
          : [
              <Button key={'copy'} design={ButtonDesign.Transparent}>
                Copy
              </Button>,
              <Button key={'action'} icon={actionIcon} design={ButtonDesign.Transparent} />
            ]
      );
    };
    const [collapsed, setCollapsed] = useReducer((coll) => !coll, !isChromatic);
    const handleClick = (e) => {
      e.stopPropagation();
    };
    return (
      <Panel collapsed={collapsed} onToggle={setCollapsed} headerText="Display DynamicPage with Variants">
        {collapsed ? (
          <BusyIndicator active style={{ width: '100%' }}>
            <span style={{ height: '700px' }} />
          </BusyIndicator>
        ) : (
          <DynamicPage
            {...args}
            headerTitle={
              <DynamicPageTitle
                actions={actionItems}
                navigationActions={navigationItems}
                breadcrumbs={
                  <Breadcrumbs>
                    <BreadcrumbsItem>Home</BreadcrumbsItem>
                    <BreadcrumbsItem>Page 1</BreadcrumbsItem>
                    <BreadcrumbsItem>Page 2</BreadcrumbsItem>
                    <BreadcrumbsItem>Page 3</BreadcrumbsItem>
                    <BreadcrumbsItem>Page 4</BreadcrumbsItem>
                    <BreadcrumbsItem>Page 5</BreadcrumbsItem>
                  </Breadcrumbs>
                }
                header={
                  <VariantManagement onSelect={selectVariant} onClick={handleClick}>
                    <VariantItem selected={headerVariant === 'Header Variant 1'}>Header Variant 1</VariantItem>
                    <VariantItem selected={headerVariant === 'Header Variant 2'}>Header Variant 2</VariantItem>
                  </VariantManagement>
                }
                subHeader={<Label>This is a sub header</Label>}
              >
                <Tag>Status: OK</Tag>
              </DynamicPageTitle>
            }
          >
            <ProductsTable />
          </DynamicPage>
        )}
      </Panel>
    );
  }
};

export const WithFloatingFooter: Story = {
  name: 'with floating footer',
  render(args) {
    const [collapsed, setCollapsed] = useReducer((coll) => !coll, !isChromatic);
    return (
      <Panel collapsed={collapsed} onToggle={setCollapsed} headerText="Display DynamicPage with floating footer">
        {collapsed ? (
          <BusyIndicator active style={{ width: '100%' }}>
            <span style={{ height: '700px' }} />
          </BusyIndicator>
        ) : (
          <DynamicPage
            {...args}
            footer={
              <Bar
                design={BarDesign.FloatingFooter}
                endContent={
                  <>
                    <Button design={ButtonDesign.Positive}>Accept</Button>
                    <Button design={ButtonDesign.Negative}>Reject</Button>
                  </>
                }
              />
            }
          >
            <ProductsTable />
          </DynamicPage>
        )}
      </Panel>
    );
  }
};

export const WithCustomOverflowButton: Story = {
  name: 'with custom overflow button',
  render() {
    const titleProps = {
      actionsToolbarProps: {
        overflowButton: <ToggleButton design={ButtonDesign.Transparent} icon={navDownArrowIcon} />
      },
      navigationActionsToolbarProps: {
        overflowButton: <ToggleButton design={ButtonDesign.Transparent} icon={menu2Icon} />
      },
      actions: (
        <>
          <Button key={'edit'} design={ButtonDesign.Emphasized}>
            Edit
          </Button>
          <Button key={'delete'} design={ButtonDesign.Transparent}>
            Delete
          </Button>
          <Button key={'copy'} design={ButtonDesign.Transparent}>
            Copy
          </Button>
          <Button key={'action'} icon={actionIcon} design={ButtonDesign.Transparent}>
            Action
          </Button>
          <Button design={ButtonDesign.Transparent}>Create</Button>
          <Button design={ButtonDesign.Transparent}>Loooooong actions Button</Button>
        </>
      ),
      navigationActions: (
        <>
          <Button key={'fullscreen'} icon={fullscreenIcon} design={ButtonDesign.Transparent} />
          <Button key={'exitFullscreen'} icon={exitFSIcon} design={ButtonDesign.Transparent} />
          <Button key={'decline'} icon={declineIcon} design={ButtonDesign.Transparent} />
          <Button design={ButtonDesign.Transparent}>UI5 Web Components For React</Button>
          <Button design={ButtonDesign.Transparent}>Navigation Actions Button</Button>
          <Button design={ButtonDesign.Transparent}>
            Loooooooooooooooooooooooooooooooooooong navigation actions Button
          </Button>
        </>
      )
    };
    return (
      <>
        <DynamicPage
          style={{ width: '1000px' }}
          showHideHeaderButton={false}
          headerTitle={
            <DynamicPageTitle
              {...titleProps}
              header={
                <Title wrappingType="Normal">
                  Custom overflow buttons for navigationActions and actions (width: 1000px)
                </Title>
              }
            />
          }
        />
        <DynamicPage
          style={{ width: '1300px' }}
          showHideHeaderButton={false}
          headerTitle={
            <DynamicPageTitle
              {...titleProps}
              header={<Title>Custom overflow buttons for actions (width: 1300px)</Title>}
            />
          }
        />
      </>
    );
  }
};

export const StickySubHeaders: Story = {
  name: 'with sticky sub-headers',
  render(args) {
    return (
      <DynamicPage
        {...args}
        footer={
          <Bar
            design={BarDesign.FloatingFooter}
            endContent={
              <>
                <Button design={ButtonDesign.Positive}>Accept</Button>
                <Button design={ButtonDesign.Negative}>Reject</Button>
              </>
            }
          />
        }
      >
        {({ stickyHeaderHeight }) => (
          <>
            <div
              style={{
                position: 'sticky',
                width: '100%',
                height: '4rem',
                background: 'lightgreen',
                top: `${stickyHeaderHeight}px`
              }}
            >
              Sticky Header
            </div>
            <div style={{ width: '100%', background: 'orange', height: '10rem' }}>Content</div>
            <div
              style={{
                position: 'sticky',
                width: '100%',
                height: '8rem',
                background: 'lightgreen',
                top: `calc(${stickyHeaderHeight}px + 4rem)`
              }}
            >
              Sticky Header 2
            </div>
            <div style={{ background: 'lightblue', height: '2000px', width: '100%' }}>Content</div>
          </>
        )}
      </DynamicPage>
    );
  }
};
