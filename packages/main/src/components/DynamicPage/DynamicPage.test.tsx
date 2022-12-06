import { render, screen } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import '@ui5/webcomponents-icons/dist/action.js';
import '@ui5/webcomponents-icons/dist/decline.js';
import '@ui5/webcomponents-icons/dist/exit-full-screen.js';
import '@ui5/webcomponents-icons/dist/full-screen.js';
import '@ui5/webcomponents-icons/dist/question-mark.js';
import React from 'react';
import {
  Badge,
  Bar,
  BarDesign,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  ButtonDesign,
  DynamicPage,
  DynamicPageHeader,
  DynamicPageTitle,
  Form,
  FormGroup,
  FormItem,
  Label,
  ObjectStatus,
  Text,
  Title,
  ToggleButton,
  ValueState
} from '../..';

const renderComponent = () => (
  <DynamicPage
    headerTitle={
      <DynamicPageTitle
        actions={[
          <Button key={0} design={ButtonDesign.Emphasized}>
            Edit
          </Button>,
          <Button key={1} design={ButtonDesign.Transparent}>
            Delete
          </Button>,
          <Button key={2} design={ButtonDesign.Transparent}>
            Copy
          </Button>,
          <Button key={3} design={ButtonDesign.Transparent}>
            Toggle Footer
          </Button>,
          <Button key={4} icon="action" design={ButtonDesign.Transparent}></Button>
        ]}
        navigationActions={[
          <Button key={0} icon="full-screen" design={ButtonDesign.Transparent} />,
          <Button key={1} icon="exit-full-screen" design={ButtonDesign.Transparent} />,
          <Button key={2} icon="decline" design={ButtonDesign.Transparent} />
        ]}
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
      >
        <Badge>Status: OK</Badge>
      </DynamicPageTitle>
    }
    headerContent={
      <DynamicPageHeader>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Label>Location: Warehouse A</Label>
          <Label>Halway: 23L</Label>
          <Label>Rack: 34</Label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2vw' }}>
          <Label>Availability:</Label>
          <ObjectStatus state={ValueState.Success}>In Stock</ObjectStatus>
        </div>
      </DynamicPageHeader>
    }
  >
    <Form style={{ paddingBottom: '2rem', zIndex: 0 }} columnsXL={4} columnsL={4}>
      <FormGroup titleText="Phone Numbers">
        <FormItem label="Home">
          <Text>+1 234-567-8901</Text>
        </FormItem>
        <FormItem label="">
          <Text>+1 234-567-5555</Text>
        </FormItem>
      </FormGroup>
      <FormGroup titleText="Social Accounts">
        <FormItem label="LinkedIn">
          <Text>/DeniseSmith</Text>
        </FormItem>
        <FormItem label="Twitter">
          <Text>@DeniseSmith</Text>
        </FormItem>
      </FormGroup>
    </Form>
    <Form style={{ paddingBottom: '2rem' }} columnsXL={4} columnsL={4}>
      <FormGroup titleText="Addresses">
        <FormItem label="Home Address">
          <Text>2096 Mission Street</Text>
        </FormItem>
        <FormItem label="Mailing Address">
          <Text>PO Box 32114</Text>
        </FormItem>
      </FormGroup>
      <FormGroup titleText="Mailing Address">
        <FormItem label="Work">
          <Text>DeniseSmith@sap.com</Text>
        </FormItem>
      </FormGroup>
    </Form>
    <Form style={{ paddingBottom: '2rem' }} columnsXL={4} columnsL={4}>
      <FormGroup titleText="Phone Numbers">
        <FormItem label="Home">
          <Text>+1 234-567-8901</Text>
        </FormItem>
        <FormItem label="">
          <Text>+1 234-567-5555</Text>
        </FormItem>
      </FormGroup>
      <FormGroup titleText="Social Accounts">
        <FormItem label="LinkedIn">
          <Text>/DeniseSmith</Text>
        </FormItem>
        <FormItem label="Twitter">
          <Text>@DeniseSmith</Text>
        </FormItem>
      </FormGroup>
    </Form>
    <Form style={{ paddingBottom: '2rem' }} columnsXL={4} columnsL={4}>
      <FormGroup titleText="Addresses">
        <FormItem label="Home Address">
          <Text>2096 Mission Street</Text>
        </FormItem>
        <FormItem label="Mailing Address">
          <Text>PO Box 32114</Text>
        </FormItem>
      </FormGroup>
      <FormGroup titleText="Mailing Address">
        <FormItem label="Work">
          <Text>DeniseSmith@sap.com</Text>
        </FormItem>
      </FormGroup>
    </Form>
    <Form style={{ paddingBottom: '2rem', zIndex: 0 }} columnsXL={4} columnsL={4}>
      <FormGroup titleText="Phone Numbers">
        <FormItem label="Home">
          <Text>+1 234-567-8901</Text>
        </FormItem>
        <FormItem label="">
          <Text>+1 234-567-5555</Text>
        </FormItem>
      </FormGroup>
      <FormGroup titleText="Social Accounts">
        <FormItem label="LinkedIn">
          <Text>/DeniseSmith</Text>
        </FormItem>
        <FormItem label="Twitter">
          <Text>@DeniseSmith</Text>
        </FormItem>
      </FormGroup>
    </Form>
    <Form style={{ paddingBottom: '2rem' }} columnsXL={4} columnsL={4}>
      <FormGroup titleText="Addresses">
        <FormItem label="Home Address">
          <Text>2096 Mission Street</Text>
        </FormItem>
        <FormItem label="Mailing Address">
          <Text>PO Box 32114</Text>
        </FormItem>
      </FormGroup>
      <FormGroup titleText="Mailing Address">
        <FormItem label="Work">
          <Text>DeniseSmith@sap.com</Text>
        </FormItem>
      </FormGroup>
    </Form>
    <Form style={{ paddingBottom: '2rem' }} columnsXL={4} columnsL={4}>
      <FormGroup titleText="Phone Numbers">
        <FormItem label="Home">
          <Text>+1 234-567-8901</Text>
        </FormItem>
        <FormItem label="">
          <Text>+1 234-567-5555</Text>
        </FormItem>
      </FormGroup>
      <FormGroup titleText="Social Accounts">
        <FormItem label="LinkedIn">
          <Text>/DeniseSmith</Text>
        </FormItem>
        <FormItem label="Twitter">
          <Text>@DeniseSmith</Text>
        </FormItem>
      </FormGroup>
    </Form>
    <Form style={{ paddingBottom: '2rem' }} columnsXL={4} columnsL={4}>
      <FormGroup titleText="Addresses">
        <FormItem label="Home Address">
          <Text>2096 Mission Street</Text>
        </FormItem>
        <FormItem label="Mailing Address">
          <Text>PO Box 32114</Text>
        </FormItem>
      </FormGroup>
      <FormGroup titleText="Mailing Address">
        <FormItem label="Work">
          <Text>DeniseSmith@sap.com</Text>
        </FormItem>
      </FormGroup>
    </Form>
  </DynamicPage>
);

const renderComponentWithoutContent = () => (
  <DynamicPage
    headerTitle={
      <DynamicPageTitle
        actions={[
          <Button key={0} design={ButtonDesign.Emphasized}>
            Edit
          </Button>,
          <Button key={1} design={ButtonDesign.Transparent}>
            Delete
          </Button>,
          <Button key={2} design={ButtonDesign.Transparent}>
            Copy
          </Button>,
          <Button key={3} design={ButtonDesign.Transparent}>
            Toggle Footer
          </Button>,
          <Button key={4} icon="action" design={ButtonDesign.Transparent}></Button>
        ]}
        navigationActions={[
          <Button key={0} icon="full-screen" design={ButtonDesign.Transparent} />,
          <Button key={1} icon="exit-full-screen" design={ButtonDesign.Transparent} />,
          <Button key={2} icon="decline" design={ButtonDesign.Transparent} />
        ]}
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
      >
        <Badge>Status: OK</Badge>
      </DynamicPageTitle>
    }
    headerContent={
      <DynamicPageHeader>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Label>Location: Warehouse A</Label>
          <Label>Halway: 23L</Label>
          <Label>Rack: 34</Label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2vw' }}>
          <Label>Availability:</Label>
          <ObjectStatus state={ValueState.Success}>In Stock</ObjectStatus>
        </div>
      </DynamicPageHeader>
    }
  />
);

const renderComponentWithAlwaysShowContentHeader = () => (
  <DynamicPage
    alwaysShowContentHeader={true}
    headerTitle={
      <DynamicPageTitle
        actions={[
          <Button key={0} design={ButtonDesign.Emphasized}>
            Edit
          </Button>,
          <Button key={1} design={ButtonDesign.Transparent}>
            Delete
          </Button>,
          <Button key={2} design={ButtonDesign.Transparent}>
            Copy
          </Button>,
          <Button key={3} design={ButtonDesign.Transparent}>
            Toggle Footer
          </Button>,
          <Button key={4} icon="action" design={ButtonDesign.Transparent}></Button>
        ]}
        navigationActions={[
          <Button key={0} icon="full-screen" design={ButtonDesign.Transparent} />,
          <Button key={1} icon="exit-full-screen" design={ButtonDesign.Transparent} />,
          <Button key={2} icon="decline" design={ButtonDesign.Transparent} />
        ]}
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
      >
        <Badge>Status: OK</Badge>
      </DynamicPageTitle>
    }
    headerContent={
      <DynamicPageHeader>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Label>Location: Warehouse A</Label>
          <Label>Halway: 23L</Label>
          <Label>Rack: 34</Label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2vw' }}>
          <Label>Availability:</Label>
          <ObjectStatus state={ValueState.Success}>In Stock</ObjectStatus>
        </div>
      </DynamicPageHeader>
    }
  />
);

const renderComponentHideHeaderButton = () => (
  <DynamicPage
    showHideHeaderButton={false}
    alwaysShowContentHeader={true}
    headerTitle={
      <DynamicPageTitle
        actions={[
          <Button key={0} design={ButtonDesign.Emphasized}>
            Edit
          </Button>,
          <Button key={1} design={ButtonDesign.Transparent}>
            Delete
          </Button>,
          <Button key={2} design={ButtonDesign.Transparent}>
            Copy
          </Button>,
          <Button key={3} design={ButtonDesign.Transparent}>
            Toggle Footer
          </Button>,
          <Button key={4} icon="action" design={ButtonDesign.Transparent}></Button>
        ]}
        header={<Title>Header Title</Title>}
        subHeader={<Label>This is a sub header</Label>}
      />
    }
    headerContent={
      <DynamicPageHeader>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Label>Location: Warehouse A</Label>
          <Label>Halway: 23L</Label>
          <Label>Rack: 34</Label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2vw' }}>
          <Label>Availability:</Label>
          <ObjectStatus state={ValueState.Success}>In Stock</ObjectStatus>
        </div>
      </DynamicPageHeader>
    }
  >
    <Form style={{ paddingBottom: '2rem' }} columnsXL={4} columnsL={4}>
      <FormGroup titleText="Phone Numbers">
        <FormItem label="Home">
          <Text>+1 234-567-8901</Text>
        </FormItem>
        <FormItem label="">
          <Text>+1 234-567-5555</Text>
        </FormItem>
      </FormGroup>
      <FormGroup titleText="Social Accounts">
        <FormItem label="LinkedIn">
          <Text>/DeniseSmith</Text>
        </FormItem>
        <FormItem label="Twitter">
          <Text>@DeniseSmith</Text>
        </FormItem>
      </FormGroup>
    </Form>
    <Form style={{ paddingBottom: '2rem' }} columnsXL={4} columnsL={4}>
      <FormGroup titleText="Addresses">
        <FormItem label="Home Address">
          <Text>2096 Mission Street</Text>
        </FormItem>
        <FormItem label="Mailing Address">
          <Text>PO Box 32114</Text>
        </FormItem>
      </FormGroup>
      <FormGroup titleText="Mailing Address">
        <FormItem label="Work">
          <Text>DeniseSmith@sap.com</Text>
        </FormItem>
      </FormGroup>
    </Form>
  </DynamicPage>
);

describe('DynamicPage', () => {
  test('with content', () => {
    const { asFragment } = render(renderComponent());
    expect(asFragment()).toMatchSnapshot();
  });
  test('without content', () => {
    const { asFragment } = render(renderComponentWithoutContent());
    expect(asFragment()).toMatchSnapshot();
  });
  test('always show content header', () => {
    const { asFragment } = render(renderComponentWithAlwaysShowContentHeader());
    expect(asFragment()).toMatchSnapshot();
  });
  test('hider header button', () => {
    const { asFragment, queryByTitle } = render(renderComponentHideHeaderButton());
    expect(queryByTitle('Expand Header')).toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });
  test('render footer', () => {
    const { asFragment, getByText } = render(
      <DynamicPage footer={<Bar design={BarDesign.FloatingFooter} endContent={<Text>Footer</Text>} />} />
    );
    getByText('Footer');
    expect(asFragment()).toMatchSnapshot();
  });
  test('a11y config', () => {
    const { rerender } = render(
      <DynamicPage
        headerTitle={<DynamicPageTitle />}
        headerContent={<DynamicPageHeader />}
        footer={<Bar data-testid="footer" design={BarDesign.FloatingFooter} />}
      />
    );
    expect(document.querySelector('[data-component-name="DynamicPageFooter"]')).toHaveAttribute('role', 'contentinfo');
    expect(document.querySelector('[data-component-name="DynamicPageFooter"]')).not.toHaveAttribute('aria-label');
    expect(document.querySelector('[data-component-name="DynamicPageFooter"]')).not.toHaveAttribute('aria-labelledby');
    expect(document.querySelector('[data-component-name="DynamicPageAnchorBar"]')).toHaveAttribute(
      'role',
      'navigation'
    );

    rerender(
      <DynamicPage
        headerTitle={<DynamicPageTitle />}
        headerContent={<DynamicPageHeader />}
        footer={<Bar data-testid="footer" design={BarDesign.FloatingFooter} />}
        a11yConfig={{
          dynamicPageAnchorBar: { role: 'anchorbar' },
          dynamicPageFooter: { role: 'footer', 'aria-label': 'label', 'aria-labelledby': 'labelledby' }
        }}
      />
    );
    expect(document.querySelector('[data-component-name="DynamicPageFooter"]')).toHaveAttribute('role', 'footer');
    expect(document.querySelector('[data-component-name="DynamicPageFooter"]')).toHaveAttribute('aria-label', 'label');
    expect(document.querySelector('[data-component-name="DynamicPageFooter"]')).toHaveAttribute(
      'aria-labelledby',
      'labelledby'
    );
    expect(document.querySelector('[data-component-name="DynamicPageAnchorBar"]')).toHaveAttribute('role', 'anchorbar');
  });

  test('with custom overflow toolbar buttons', () => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());

    HTMLElement.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        width: parseFloat(getComputedStyle(this).width || 50),
        height: 10,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      };
    });

    render(
      <DynamicPage
        style={{ width: '50px' }}
        headerTitle={
          <DynamicPageTitle
            actionsToolbarProps={{ overflowButton: <ToggleButton data-testid="actionBtn" icon="question-mark" /> }}
            navigationActionsToolbarProps={{
              overflowButton: <ToggleButton data-testid="navActionBtn" icon="question-mark" />
            }}
            actions={
              <>
                <Button>Actions Button 1</Button>
                <Button>Actions Button 2</Button>
              </>
            }
            navigationActions={
              <>
                <Button>Navigation Actions Button 1</Button>
                <Button>Navigation Actions Button 2</Button>
              </>
            }
          />
        }
      />
    );
    // never goes into resize observer -> only one the actions toolbar is rendered
    expect(screen.getByTestId('actionBtn')).toBeInTheDocument();
  });

  createCustomPropsTest(DynamicPage);
});
