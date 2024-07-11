import { ProductsTable } from '@sb/components/ProductsTable';
import type { Meta, StoryObj } from '@storybook/react';
import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import actionIcon from '@ui5/webcomponents-icons/dist/action.js';
import declineIcon from '@ui5/webcomponents-icons/dist/decline.js';
import exitFSIcon from '@ui5/webcomponents-icons/dist/exit-full-screen.js';
import fullscreenIcon from '@ui5/webcomponents-icons/dist/full-screen.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import { useRef } from 'react';
import {
  Bar,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  FlexBox,
  FlexBoxDirection,
  FlexBoxWrap,
  Label,
  MessageStrip,
  ObjectStatus,
  Tag,
  Title,
  ToolbarButton,
  Toolbar
} from '../..';
import { DynamicPageHeader } from '../DynamicPageHeader/index.js';
import { DynamicPageTitle } from '../DynamicPageTitle/index.js';
import { useGetHeaderHeight } from './helpers.js';
import type { DynamicPageDomRef } from './index.js';
import { DynamicPage } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / DynamicPage',
  component: DynamicPage,
  argTypes: {
    children: {
      control: { disable: true }
    },
    titleArea: {
      control: { disable: true }
    },
    headerArea: {
      control: { disable: true }
    },
    footerArea: {
      control: { disable: true }
    }
  },
  args: {
    style: { height: '600px' },
    titleArea: (
      <DynamicPageTitle
        heading={<Title style={{ fontSize: ThemingParameters.sapObjectHeader_Title_FontSize }}>Header Title</Title>}
        snappedHeading={
          <Title style={{ fontSize: ThemingParameters.sapObjectHeader_Title_SnappedFontSize }}>
            Snapped Header Title
          </Title>
        }
        subheading={
          <>
            <Label>Subheader</Label>
            <MessageStrip>Information (only visible if header content is expanded)</MessageStrip>
          </>
        }
        snappedSubheading={
          <>
            <Label>Snapped Subheader</Label>
            <MessageStrip>Information (only visible if header content is collapsed (snapped))</MessageStrip>
          </>
        }
        actionsBar={
          <Toolbar>
            <ToolbarButton design={ButtonDesign.Emphasized} text="Edit" />
            <ToolbarButton design={ButtonDesign.Transparent} text="Delete" />
            <ToolbarButton design={ButtonDesign.Transparent} text="Copy" />
            <ToolbarButton icon={actionIcon} design={ButtonDesign.Transparent} />
          </Toolbar>
        }
        navigationBar={
          <Toolbar>
            <ToolbarButton icon={fullscreenIcon} design={ButtonDesign.Transparent} />
            <ToolbarButton icon={exitFSIcon} design={ButtonDesign.Transparent} />
            <ToolbarButton icon={declineIcon} design={ButtonDesign.Transparent} />
          </Toolbar>
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
      >
        <Tag>Status: OK</Tag>
      </DynamicPageTitle>
    ),
    headerArea: (
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
            <ObjectStatus state={ValueState.Positive}>In Stock</ObjectStatus>
          </FlexBox>
        </FlexBox>
      </DynamicPageHeader>
    ),
    footerArea: (
      <Bar
        design={BarDesign.FloatingFooter}
        endContent={
          <>
            <Button design={ButtonDesign.Positive}>Accept</Button>
            <Button design={ButtonDesign.Negative}>Reject</Button>
          </>
        }
      />
    )
  },
  tags: ['package:@ui5/webcomponents-fiori']
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

export const StickyContentHeaders: Story = {
  render(args) {
    const dynamicPageRef = useRef<DynamicPageDomRef & { shadowRoot: ShadowRoot }>(null);
    const headerHeight = useGetHeaderHeight(dynamicPageRef);

    return (
      <DynamicPage {...args} ref={dynamicPageRef} className={clsx(args.className, 'dynamicPageStickyContent')}>
        <>
          <div
            style={{
              position: 'sticky',
              width: '100%',
              height: '4rem',
              background: 'lightgreen',
              insetBlockStart: `${headerHeight}px`
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
              insetBlockStart: `calc(${headerHeight}px + 4rem)`
            }}
          >
            Sticky Header 2
          </div>
          <div style={{ background: 'lightblue', height: '2000px', width: '100%' }}>Content</div>
        </>
      </DynamicPage>
    );
  }
};
