import { screen, render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import React from 'react';
import {
  Avatar,
  Bar,
  BarDesign,
  DynamicPageHeader,
  DynamicPageTitle,
  IllustratedMessage,
  IllustrationMessageType,
  Label,
  ObjectPage,
  ObjectPageMode,
  ObjectPageSection,
  ObjectPageSubSection,
  Text
} from '../..';

const headerContent = <DynamicPageHeader>HeaderContent</DynamicPageHeader>;
const headerTitle = <DynamicPageTitle>HeaderTitle</DynamicPageTitle>;
const footer = <Bar design={BarDesign.FloatingFooter} endContent={<div>Footer</div>} />;

const renderComponent = (props = {}) => (
  <ObjectPage {...props}>
    <ObjectPageSection titleText="Title Section 1" id="1">
      <Label>Content Section 1</Label>
    </ObjectPageSection>
    <ObjectPageSection titleText="Title Section 2" id="2">
      <div>Content Section 2</div>
    </ObjectPageSection>
    <ObjectPageSection titleText="Title Section 3" id="3">
      <ObjectPageSubSection titleText="Title SubSection 3.1" id="3.1">
        Content Section 3.1
      </ObjectPageSubSection>
      <ObjectPageSubSection titleText="Title SubSection 3.2" id="3.2">
        Content Section 3.2
      </ObjectPageSubSection>
      <ObjectPageSubSection titleText="Title SubSection 3.3" id="3.3">
        Content Section 3.3
      </ObjectPageSubSection>
    </ObjectPageSection>
    <ObjectPageSection titleText="Title Section 4" id="4">
      <ObjectPageSubSection titleText="Title SubSection 4.1" id="4.1">
        Content Section 4.1
      </ObjectPageSubSection>
      <ObjectPageSubSection titleText="Title SubSection 4.2" id="4.2">
        Content Section 4.2
      </ObjectPageSubSection>
      <ObjectPageSubSection titleText="Title SubSection 4.3" id="4.3">
        Content Section 4.3
      </ObjectPageSubSection>
    </ObjectPageSection>
  </ObjectPage>
);

const renderComponentWithSections = (props = {}) => (
  <ObjectPage {...props}>
    <ObjectPageSection titleText="Title 1" id="1">
      Content 1
    </ObjectPageSection>
    <ObjectPageSection titleText="Title 2" id="2">
      <Label>Content 2</Label>
    </ObjectPageSection>
    <ObjectPageSection titleText="Title 3" id="3">
      <Text>Content 3</Text>
    </ObjectPageSection>
  </ObjectPage>
);
let original;
beforeAll(() => {
  original = Element.prototype.scrollTo;
  Element.prototype.scrollTo = Element.prototype.scrollTo || jest.fn();
});

afterAll(() => {
  Element.prototype.scrollTo = original;
});
describe('ObjectPage', () => {
  test('Default with SubSections', () => {
    const { asFragment, getByText } = render(renderComponent());
    expect(getByText('Title Section 1')).not.toBeVisible();
    expect(getByText('Content Section 1')).toBeVisible();
    expect(getByText('Title Section 2')).toBeVisible();
    expect(getByText('Content Section 2')).toBeVisible();
    expect(getByText('Title Section 4')).toBeVisible();
    expect(getByText('Title SubSection 4.1')).toBeVisible();
    expect(getByText('Content Section 4.1')).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  test('Default with Sections', () => {
    const { asFragment, getByText } = render(renderComponentWithSections());
    expect(getByText('Title 1')).not.toBeVisible();
    expect(getByText('Title 2')).toBeVisible();
    expect(getByText('Content 1')).toBeVisible();
    expect(getByText('Content 2')).toBeVisible();
    expect(getByText('Content 3')).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  test('IconTabBar Mode', () => {
    const cb = jest.fn();
    const { asFragment, getByText, queryByText, container, rerender } = render(
      renderComponent({ mode: ObjectPageMode.IconTabBar, onSelectedSectionChange: cb })
    );
    expect(getByText('Title Section 1')).not.toBeVisible();
    expect(getByText('Content Section 1')).toBeVisible();
    expect(queryByText('Title Section 3')).toBeNull();
    expect(queryByText('Content Section 3')).toBeNull();

    const tabs = container.querySelector('ui5-tabcontainer').children;
    Array.from(tabs).forEach((tab, index) => {
      expect(tab).toHaveAttribute('text', `Title Section ${index + 1}`);
    });
    //does not work due to shadow-DOM
    // fireEvent.click(tabs[2]);
    // expect(cb).toHaveBeenCalled();
    rerender(renderComponent({ mode: ObjectPageMode.IconTabBar, onSelectedSectionChange: cb, selectedSectionId: '3' }));
    expect(getByText('Title Section 3')).not.toBeVisible();
    expect(getByText('Content Section 3.1')).toBeVisible();
    expect(queryByText('Title Section 1')).toBeNull();
    expect(queryByText('Content Section 1')).toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  test('Not crashing with 1 section - Default Mode', () => {
    const { asFragment } = render(
      <ObjectPage>
        <ObjectPageSection id={'1'}>Test</ObjectPageSection>
      </ObjectPage>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Not crashing with 1 section - IconTabBar Mode', () => {
    const { asFragment } = render(
      <ObjectPage mode={ObjectPageMode.IconTabBar}>
        <ObjectPageSection id={'1'}>Test</ObjectPageSection>
      </ObjectPage>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('Not crashing with 0 sections', () => {
    const { asFragment } = render(<ObjectPage mode={ObjectPageMode.IconTabBar} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with header', () => {
    const { asFragment, getByText, queryByRole } = render(renderComponent({ headerContent }));
    expect(getByText('HeaderContent')).toBeVisible();
    expect(queryByRole('navigation')).toBeNull();

    expect(asFragment()).toMatchSnapshot();
  });

  test('with title', () => {
    const { asFragment, getByText, queryByRole } = render(renderComponent({ headerTitle }));
    expect(getByText('HeaderTitle')).toBeVisible();
    expect(queryByRole('navigation')).toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  test('with footer', () => {
    const { asFragment, getByText } = render(renderComponent({ footer }));
    expect(getByText('Footer')).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  test('with title, header & footer', () => {
    const { asFragment, getByText } = render(renderComponent({ headerTitle, headerContent, footer }));
    expect(getByText('HeaderTitle')).toBeVisible();
    expect(getByText('HeaderContent')).toBeVisible();
    expect(getByText('Footer')).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  test('with anchor-bar', () => {
    const { asFragment, container, rerender } = render(renderComponent({ headerTitle, headerContent, footer }));
    expect(container.querySelector('[tooltip="Expand Header"]')).toBeNull();
    expect(container.querySelector('[tooltip="Pin Header"]')).toBeNull();
    rerender(renderComponent({ headerTitle, headerContent, footer, showHideHeaderButton: true }));
    expect(container.querySelector('[tooltip="Expand Header"]')).toBeVisible();
    expect(container.querySelector('[tooltip="Pin Header"]')).toBeNull();

    //needs mocking, otherwise won't work
    /* rerender(renderComponent({ headerTitle, headerContent, footer, showHideHeaderButton: true, headerContentPinnable: true }));
    expect(queryByTitle('Expand Header')).toBeVisible();
    expect(queryByTitle('Pin Header')).toBeVisible();
    rerender(renderComponent({ headerTitle, headerContent, footer, headerContentPinnable: true }));
    expect(queryByTitle('Expand Header')).toBeNull();
    expect(queryByTitle('Pin Header')).toBeVisible(); */
    expect(asFragment()).toMatchSnapshot();
  });

  test('with img', () => {
    const { asFragment, container, rerender } = render(renderComponent({ headerTitle, headerContent, footer }));
    const headerContainerChildren = container.querySelector(
      'div[data-component-name="ObjectPageHeaderContainer"]'
    ).children;
    expect(headerContainerChildren.length).toBe(1);
    rerender(renderComponent({ headerTitle, headerContent, footer, image: 'not_a_real_path.orly' }));
    expect(headerContainerChildren.length).toBe(2);
    rerender(
      renderComponent({ headerTitle, headerContent, footer, image: 'not_a_real_path.orly', imageShapeCircle: true })
    );
    expect(headerContainerChildren[0]).toHaveStyle(`border-radius: 50%; overflow: hidden;`);
    expect(asFragment()).toMatchSnapshot();
    rerender(renderComponent({ headerTitle, headerContent, footer, image: <Avatar /> }));
    expect(headerContainerChildren.length).toBe(2);
    expect(headerContainerChildren[0]).toHaveAttribute('size', 'L');
    expect(asFragment()).toMatchSnapshot();
  });

  //todo: needs mocking
  test.skip('title in header', () => {
    const { container } = render(
      renderComponent({ headerTitle, headerContent, footer, image: <Avatar />, showTitleInHeaderContent: true })
    );
  });

  test('with IllustratedMessage', () => {
    const { getByTestId, queryByText, rerender, queryByTestId, asFragment, container } = render(
      renderComponent({
        headerTitle,
        headerContent,
        placeholder: <IllustratedMessage data-testid="no-data" name={IllustrationMessageType.NoData} />
      })
    );
    expect(queryByText('Title Section 2')).toBeNull();
    expect(queryByText('Content Section 1')).toBeNull();
    getByTestId('no-data');
    expect(container.querySelector("[data-component-name='ObjectPageTabContainer']")).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
    rerender(
      renderComponent({
        headerTitle,
        headerContent,
        placeholder: undefined
      })
    );
    expect(queryByText('Title Section 2')).toBeVisible();
    expect(queryByText('Content Section 1')).toBeVisible();
    expect(queryByTestId('no-data')).toBeNull();
    expect(container.querySelector("[data-component-name='ObjectPageTabContainer']")).toBeInTheDocument();
  });

  createCustomPropsTest(ObjectPage);
});
