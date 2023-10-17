# Migration Guide Archive for older versions

## From 0.19.x to 0.20.0

### Changed TypeScript `interfaces` for `ref`

TypeScript `interfaces` that can be used for accessing the DOM-`ref` of a component have been updated:

- The `Ui5` prefix has been removed
- The `interfaces` can now be imported from the component itself

Migration Path:

```tsx
import { Dialog } from '@ui5/webcomponents-react';
import { Ui5DialogDomRef } from '@ui5/webcomponents-react/interfaces/Ui5DialogDomRef';
import { useRef } from 'react';

function MyOldComponent() {
  const ref = useRef<Ui5DialogDomRef>(null);
  return <Dialog ref={ref} />;
}

// becomes

import { Dialog } from '@ui5/webcomponents-react';
import { DialogDomRef } from '@ui5/webcomponents-react/dist/Dialog';
import { useRef } from 'react';

function MyNewComponent() {
  const ref = useRef<DialogDomRef>(null);
  return <Dialog ref={ref} />;
}
```

Affected Interfaces:

- `Ui5BarcodeScannerDialogDomRef` <br />
  new import: `import { BarcodeScannerDialogDomRef } from '@ui5/webcomponents-react/dist/BarcodeScannerDialog';`
- `Ui5CarouselDomRef`<br />
  new import: `import { CarouselDomRef } from '@ui5/webcomponents-react/dist/Carousel';`
- `Ui5DatePickerDomRef`<br />
  new import: `import { DatePickerDomRef } from '@ui5/webcomponents-react/dist/DatePicker';`
- `Ui5DateRangePickerDomRef`<br />
  new import: `import { DateRangePickerDomRef } from '@ui5/webcomponents-react/dist/DateRangePicker';`
- `Ui5DateTimePickerDomRef`<br />
  new import: `import { DateTimePickerDomRef } from '@ui5/webcomponents-react/dist/DateTimePicker';`
- `Ui5DialogDomRef`<br />
  new import: `import { DialogDomRef } from '@ui5/webcomponents-react/dist/Dialog';`
- `Ui5PopoverDomRef`<br />
  new import: `import { PopoverDomRef } from '@ui5/webcomponents-react/dist/Popover';`
- `Ui5ResponsivePopoverDomRef`<br />
  new import: `import { ResponsivePopoverDomRef } from '@ui5/webcomponents-react/dist/ResponsivePopover';`
- `Ui5ShellBarDomRef`<br />
  new import: `import { ShellBarDomRef } from '@ui5/webcomponents-react/dist/ShellBar';`
- `Ui5TimePickerDomRef`<br />
  new import: `import { TimePickerDomRef } from '@ui5/webcomponents-react/dist/TimePicker';`
- `Ui5ToastDomRef`<br />
  new import: `import { ToastDomRef } from '@ui5/webcomponents-react/dist/Toast';`
- `Ui5TreeDomRef`<br />
  new import: `import { TreeDomRef } from '@ui5/webcomponents-react/dist/Tree';`
- `Ui5TreeItemDomRef`<br />
  new import: `import { TreeItemDomRef } from '@ui5/webcomponents-react/dist/TreeItem';`

- `AnalyticalTableDomRef`<br />
  new import: `import { AnalyticalTableDomRef } from '@ui5/webcomponents-react/dist/AnalyticalTable';`
- `MessageViewDomRef`<br />
  new import: `import { MessageViewDomRef } from '@ui5/webcomponents-react/dist/MessageView';`

## From 0.18.x to 0.19.0

### VariantManagement

The variant management was completely overhauled to comply with the UX guidelines.

- `variantItems` has been removed. Please pass the `VariantItem` component for each variant instead.
- `selectedKey` has been removed. To mark a variant as selected, please pass the `selected` prop to the corresponding `VariantItem` component.
- Per default no "Cancel" button is displayed in the popover. If you want to add it again, you can set the `showCancelButton` prop to `true`.
- Per default the "Save As" and "Manage" buttons are displayed in the popover. If you want to hide them, you can set the `hideSaveAs` and `hideManageVariants` props to `true`.

```jsx
// with 0.18.x
<VariantManagement
  selectedKey="2"
  variantItems={[
    {
      key: '1',
      label: 'Variant 1'
    },
    {
      key: '2',
      label: 'Variant 2'
    }
  ]}
/>

// with 0.19.x
<VariantManagement showCancelButton hideManageVariants hideSaveAs>
  <VariantItem>Variant 1</VariantItem>
  <VariantItem selected>Variant 2</VariantItem>
</VariantManagement>
```

### ObjectPage

The deprecated `onSelectedSectionChanged` event handler has been removed. Please use `onSelectedSectionChange` instead.

### Removed all caps enum keys and values

Removed all deprecated values and enum keys that consisted of uppercase letters only (`SCREAMING_SNAKE_CASE`).

- **`MessageBoxActions`**: `ABORT`, `CANCEL`, `CLOSE`, `DELETE`, `IGNORE`, `NO`,`RETRY`,`YES` has been transformed to PascalCase notation.
- **`MessageBoxTypes`**: `CONFIRM`, `ERROR`, `INFORMATION`, `SUCCESS`, `WARNING`, `HIGHLIGHT` has been transformed to PascalCase notation.

- **`TableSelectionBehavior`:** `ROW`, `ROW_ONLY`, `ROW_SELECTOR` has been transformed to PascalCase notation.
- **`TableSelectionMode`:** `NONE`, `SINGLE_SELECT`, `MULTI_SELECT` has been transformed to PascalCase notation.
- **`TableVisibleRowCountMode`:** `FIXED`, `AUTO`, `INTERACTIVE` has been transformed to PascalCase notation.

## From 0.17.x to 0.18.0

In this release, the UI5 Web Components have renamed lots of properties in order to pave the way to the 1.0.0 release.
You can check the list of all breaking changes of the UI5 Web Components [here](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.15).<br />
To make your update more convenient, we are providing a codemod that helps you to rename (most) of the props.

**Requirement**: You have to install `@ui5/webcomponents-react@^0.18.0` or `@ui5/webcomponents-react-base@^0.18.0` before running the codemod!

```bash
# rename src with the directory where your sources are located
npx ui5wcr-codemod renamePropsV18 src

# if you are using TypeScript: rename src with the directory where your sources are located
npx ui5wcr-codemod renamePropsV18 src --typescript
```

> **Note**
> Please make sure that you have committed all changes before running this codemod.
> Keep in mind that the codemod output will not always match your project’s coding style, so you might want to run [Prettier](https://prettier.io) after the codemod finishes for consistent formatting.

### Avatar

The `Avatar` component does no longer have an `img` prop but expects you to pass an `<img />` element as children.
In addition, the `imageFitType` prop is replaced by using the `objectFit` style property on the image:

```jsx
// with 0.17.x
<Avatar img={"urlToMyImage"} />
<Avatar img={"urlToMyImage"} imageFitType={AvatarFitType.Contain} />
<Avatar img={"urlToMyImage"} imageFitType={AvatarFitType.Cover} />

// with 0.18.x
<Avatar>
  <img src={"urlToMyImage"} />
</Avatar>
<Avatar>
  <img src={"urlToMyImage"} style={{objectFit: 'contain' }} />
</Avatar>
<Avatar>
  <img src={"urlToMyImage"} style={{objectFit: 'cover' }} />
</Avatar>
```

### Breadcrumbs

The `Breadcrumbs` component has been replaced with the official UI5 Web Component, so it has now a slightly different API:

```jsx
// with v0.17.x with current location
<Breadcrumbs separatorStyle={BreadcrumbsSeparatorStyle.Slash} currentLocationText="Current Location">
  <Link href="https://www.sap.com">Link 1</Link>
  <Link>Link 2</Link>
  <Link>Link 3</Link>
</Breadcrumbs>
// with v0.17.x without current location
<Breadcrumbs separatorStyle={BreadcrumbsSeparatorStyle.Slash}>
  <Link href="https://www.sap.com">Link 1</Link>
  <Link>Link 2</Link>
  <Link>Link 3</Link>
</Breadcrumbs>

// with v0.18.x with current location
<Breadcrumbs separatorStyle={BreadcrumbsSeparatorStyle.Slash}>
  <BreadcrumbsItem href="https://www.sap.com">Link 1</BreadcrumbsItem>
  <BreadcrumbsItem>Link 2</BreadcrumbsItem>
  <BreadcrumbsItem>Link 3</BreadcrumbsItem>
  <BreadcrumbsItem>Current Location</BreadcrumbsItem>
</Breadcrumbs>
// with v0.18.x without current location
<Breadcrumbs separatorStyle={BreadcrumbsSeparatorStyle.Slash} design={BreadcrumbsDesign.NoCurrentPage}>
  <BreadcrumbsItem href="https://www.sap.com">Link 1</BreadcrumbsItem>
  <BreadcrumbsItem>Link 2</BreadcrumbsItem>
  <BreadcrumbsItem>Link 3</BreadcrumbsItem>
</Breadcrumbs>
```

### Card

The header part of the `Card` component has been extracted into an own component:

```jsx
// with 0.17.x
<Card
  header={"My Header"}
  subheading={"My Sub Heading"}
  status={"Status"}
  headerInteractive
  action={<Button>Go</Button>}
  avatar={<Icon name="person-placeholder" />}
  onHeaderClick={console.log}
>
 My Card Content
</Card>

// with 0.18.x
<Card
  header={
      <CardHeader
        titleText={"My Header"}
        subtitleText={"My Sub Heading"}
        status={"Status"}
        interactive
        onClick={console.log}
        avatar={<Icon name="person-placeholder" />}
        action={<Button>Go</Button>}
      />
  }
>
 My Card Content
</Card>
```

### Opening Dialogs & Popovers

You can open `Dialogs` using the `show` method:

```js
// with 0.17.x
function MyOldComponent() {
  const ref = useRef(null);
  const openDialog = () => {
    ref.current.open();
  };
  return <Dialog ref={ref}>Content</Dialog>;
}

// with 0.18.x
function MyNewComponent() {
  const ref = useRef(null);
  const openDialog = () => {
    ref.current.show();
  };
  return <Dialog ref={ref}>Content</Dialog>;
}
```

You can open all Popovers (`ActionSheet`, `Popover`, `ResponsivePopover`) using the `.showAt` method:

```js
// with 0.17.x
function MyOldComponent() {
  const ref = useRef(null);
  const openPopover = (event) => {
    ref.current.open(event.target); // ActionSheet and ResponsivePopover
    ref.current.openBy(event.target); // Popover
  };
  return <Popover ref={ref}>Content</Popover>;
}

// with 0.18.x
function MyNewComponent() {
  const ref = useRef(null);
  const openPopover = (event) => {
    ref.current.showAt(event.target);
  };
  return <Poppver ref={ref}>Content</Poppver>;
}
```

### SegmentedButton

The SegmentedButton no longer accepts `ToggleButton` as children but expects `SegmentedButtonItem`

```jsx
// with 0.17.x
<SegmentedButton>
  <ToggleButton pressed>Button 1</ToggleButton>
  <ToggleButton>Button 2</ToggleButton>
  <ToggleButton>Button 3</ToggleButton>
</SegmentedButton>

// with 0.18.x
<SegmentedButton>
  <SegmentedButtonItem pressed>Button 1</SegmentedButtonItem>
  <SegmentedButtonItem>Button 2</SegmentedButtonItem>
  <SegmentedButtonItem>Button 3</SegmentedButtonItem>
</SegmentedButton>
```

### Other changes:

- **Carousel**: `selectedIndex`, `infiniteScrollOffset`, and `onLoadMore` are removed, use the `onNavigate` event to load more items.
- **ComboBox**: The `filterValue` property has been removed. The `value` property should be used as now it represents the "live" value of the component.
- **DurationPicker**: Component was made private by the UI5 Web Components, hence it's removed here as well.
- **RadioButton**: the `onSelect` event has been renamed to `onChange`. Read the state of the Radio Button in the event handler with `event.target.checked`.
- **SuggestionItem**: prop `group` is not longer supported. Please use the `SuggestionItemGroup` component instead for creating groups.
- **Wizard**: the `onSelectionChange` event has been renamed to `onStepChange`. In addition, the event param `selectedStep` has been renamed to `step` and `previouslySelectedStep` has been renamed to `previousStep`.

### Renamed or deleted enums

- rename `AvatarBackgroundColor` to `AvatarColorScheme`
- rename `PlacementType` to `PopoverPlacementType`
- rename `PanelAccessibleRoles` to `PanelAccessibleRole`
- rename `ListItemTypes` to `ListItemType`
- rename `MessageStripType` to `MessageStripDesign`
- delete `AvatarFitType`
- delete `TabContainerTabsPlacement`
- delete unused `SearchFunctions` enum
- delete unused `TabContainerHeaderMode` enum
- delete unused `TabDesignMode` enum
- `PageBackgroundDesign.Standard` has been removed, please use `PageBackgroundDesign.Solid` instead

<br />

## From 0.16.x to 0.17.0

### Consolidate API of ObjectPage and DynamicPage

The DynamicPage and the ObjectPage are very similar but had completely different APIs and props.
We streamlined those APIs by adding components used by the `DynamicPage` to the `ObjectPage`.

#### DynamicPage changes

- `title` has been renamed to `headerTitle`.
- `header` has been renamed to `headerContent`.
- **`DynamicPageTitle`:** `subHeading` has been renamed to `subheading`.
- **`DynamicPageHeader`:** `children` are no longer displayed as `flex` items to support other display types like `grid`. To align children you now need to add the container (like `FlexBox`) and CSS yourself.
  <br />
  <br />
  Example for aligning items next to each other:

```jsx
// Before
<DynamicPageHeader>
  <div>Content 1</div>
  <div>Content 2</div>
</DynamicPageHeader>

// Now
<DynamicPageHeader>
  <FlexBox>
    <div>Content 1</div>
    <div>Content 2</div>
  </FlexBox>
</DynamicPageHeader>
```

#### ObjectPage changes

- **`ObjectPageSection`:** `title` and `titleUppercase` has been renamed. Please use `heading` and `headingUppercase` instead.
- **`ObjectPageSubSection`:** `title` has been renamed to `heading`.
- `title` has been renamed to `headerTitle` and is now defining the upper, static, title section of the `ObjectPage`. It expects to receive the `DynamicPageTitle` component.
- `headerContent` now expects the `DynamicPageHeader` component to be passed.
- `noHeader` has been removed. It is now sufficient not to set `headerTitle` and `headerContent` to achieve the same behavior.
- `title`, `subTitle`, `headerActions`, `breadcrumbs` and `keyInfos` should now be passed to the corresponding `DynamicPageTitle` props.

Setting the title section of the `ObjectPage`:

```jsx
//Before
<ObjectPage
  title="Heading"
  subTitle="Subheading"
  breadcrumbs={
    <Breadcrumbs currentLocationText="current Breadcrumb">
      <Link>Breadcrumb 1</Link>
      <Link>Breadcrumb 2</Link>
    </Breadcrumbs>
  }
  headerActions={
    <>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </>
  }
  keyInfos={<ObjectStatus>keyInfo</ObjectStatus>}
>
  ObjectPage Content
</ObjectPage>

//Now
<ObjectPage
  headerTitle={
    <DynamicPageTitle
      heading="Heading" // replaces `title`
      subheading="Subheading" // replaces `subTitle`
      breadcrumbs={
        <Breadcrumbs currentLocationText="current Breadcrumb">
          <Link>Breadcrumb 1</Link>
          <Link>Breadcrumb 2</Link>
        </Breadcrumbs>
      }
      actions={ /* replaces `headerActions`*/
        <>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </>
      }
    >
      <ObjectStatus>keyInfo</ObjectStatus>  {/* replaces `keyInfos` */}
    </DynamicPageTitle>
  }
>
  ObjectPage Content
</ObjectPage>
```

### Device Cleanup

> **Warning**
> As the `Device` was never mentioned as a public module in our documentation, most of those changes will most probably not affect you. They are mainly mentioned for the sake of completeness.

The `@ui5/webcomponents-react-base Device` was initially copied from the OpenUI5 project, but most of the methods were unused. In this release, we are cleaning up unused methods:

- `getWindowSize` has been removed. In case you need the current window size, you can access it by using `window.innerWidth` and `window.innerHeight`.

#### Media Range Sets

The Device had several Range Sets integrated, but we only used the `SAP_STANDARD_EXTENDEND` range set which is also used
for all responsive breakpoints. Thus, all other range sets as well as the possibility to create custom range sets have been removed.
In addition to that, the current range is not longer added as CSS Class to the `<html>` tag.

The following exports of the `Device` have been removed without any replacement:

- `RANGESETS` (Range set names)
- `DEFAULT_RANGE_SET` (`= SAP_STANDARD`)
- `DEFAULT_RANGESETS` (enumeration of all possible breakpoints)
- `hasRangeSet` (check whether a range set was initialized)
- `initRangeSet` (initialization of custom range sets)
- `removeRangeSet` (removal of custom range sets)

The signatures of the following methods have changed:

- `attachMediaHandler` - The second, optional argument `rangesetName` is removed (we are only supporting one default range set now)
- `detachMediaHandler` - The second, optional argument `rangesetName` is removed (we are only supporting one default range set now)
- `getCurrentRange` - The first argument `rangesetName` is removed (we are only supporting one default range set now)

Following those changes, we removed the `rangeSetName` parameter from the `useViewportRange` hook (imported from `@ui5/webcomponents-react-base`) as well.

#### Support Checks

All the following checks are always returning `true` in our supported browser, so we have removed:

- `supportPointerEvents`<br />
  [CanIUse](https://caniuse.com/?search=pointer%20events)<br />
  Replacement: `'onpointerdown' in window`
- `supportInputPlaceholder`<br />
  [CanIUse Input](https://caniuse.com/?search=input%20placeholder), [CanIUse TextArea](https://caniuse.com/?search=text%20area%20placeholder)<br />
  Replacement: `'placeholder' in document.createElement('input') && 'placeholder' in document.createElement('textarea')`
- `supportWebSocket`<br />
  [CanIUse](https://caniuse.com/?search=web%20socket)<br />
  Replacement: `'WebSocket' in window && window.WebSocket.CLOSING === 2`
- `supportMatchMedia`<br />
  [CanIUse](https://caniuse.com/?search=matchMedia)<br />
  Replacement: `'matchMedia' in window`
- `supportMatchMediaListener`<br />
  [CanIUse](https://caniuse.com/mdn-api_mediaquerylistevent_matches)<br />
  Replacement: `'matchMedia' in window && window.matchMedia('all and (max-width:0px)'))`
- `supportOrientation`<br />
  [CanIUse](https://caniuse.com/mdn-api_window_deviceorientation_event)<br />
  Replacement: `'DeviceOrientationEvent' in window`

In addition to that, we removed the `supportRetina` check as it was never used in our codebase.
If you need this check, you'll need to replace it with `window.retina || window.devicePixelRatio >= 2`.

### Removal of `Logger` and `LogLevel`

The `Logger` and `LogLevel` have been removed without any replacement, you can use `console.log/warn/info/error` as replacements.
In case you need the full functionality of the `Logger`, feel free to copy the [source code](https://github.com/SAP/ui5-webcomponents-react/blob/7e060c85d9a247ceb296a9e720d8d393ed68782e/packages/base/src/utils/Logger.ts) into your project.

## From 0.15.x to 0.16.0

<br />

### Changed import path for `ComposedChartPlaceholder`

The import path of the `ComposedChartPlaceholder` has changed. You can now import the placeholder from `@ui5/webcomponents-react-charts/dist/ComposedChartPlaceholder` or directly from `@ui5/webcomponents-react-charts`.

```jsx
import { ComposedChartPlaceholder } from '@ui5/webcomponents-react-charts/dist/ComposedChartPlaceholder';
//or
import { ComposedChartPlaceholder } from '@ui5/webcomponents-react-charts';
```

### API Updates

#### FilterBar

If `useToolbar` is set to false, the entire toolbar above the filter items is hidden. The search input, variants, and the "Show/Hide FilterBar" button is not available with this mode. The rest of the buttons are displayed next to the filter items.

If you have used the `useToolbar` prop to hide the "Show/Hide Filters" button, but still want to display the search or variants, you can now use the `hideToggleFiltersButton`.

Before:

```jsx
<FilterBar search={<Input placeholder={'Search'} />} useToolbar={false}>
  ...
</FilterBar>
```

Now:

```jsx
<FilterBar search={<Input placeholder={'Search'} />} hideToggleFiltersButton>
  ...
</FilterBar>
```

## From 0.14.x to 0.15.0

<br />

### Replaced `lib` folder with `dist` folder

UI5 Web Components for React was publishing the individual components in a `lib` folder, while our Assets were published
in `dist`. As UI5 Web Components is also publishing all files in the `dist` directory, we have now dropped our `lib` folder and publish everything to `dist`.

In case you are importing directly from `@ui5/webcomponents-react`, `@ui5/webcomponents-react-charts` or `@ui5/webcomponents-react-base`
(e.g. `import { Button } from '@ui5/webcomponents-react';`) no action is required.

If you are importing from the `lib` folders, e.g. `import { Button } from '@ui5/webcomponents-react/lib/Button';` you will have to modify your codebase:

You can either change all imports manually:

- replace `@ui5/webcomponents-react/lib/` with `@ui5/webcomponents-react/dist/`
- replace `@ui5/webcomponents-react-base/lib/` with `@ui5/webcomponents-react-base/dist/`
- replace `@ui5/webcomponents-react-charts/lib/` with `@ui5/webcomponents-react-charts/dist/`

or use [jscodeshift](https://github.com/facebook/jscodeshift) with our codemod by running this command in your project

```bash
# replace 'src' with the directory where your src files are located
npx jscodeshift --transform node_modules/@ui5/webcomponents-react-base/codemods/transformLibToDist.js --extensions js,jsx src

# in case you are using typescript
npx jscodeshift --transform node_modules/@ui5/webcomponents-react-base/codemods/transformLibToDist.js --extensions js,jsx,ts,tsx --parser tsx src
```

> **Note**
> Please make sure that you have committed all changes before running this codemod.
> Keep in mind that the codemod output will not always match your project’s coding style, so you might want to run [Prettier](https://prettier.io) after the codemod finishes for consistent formatting.

## From 0.13.x to 0.14.0

<br />

### Replaced Component: Page

We replaced our custom `Page` component with the official `ui5-page` web component, thus the props of that component have changed.
As the new `Page` component does not offer a header by default, the convenience props `title`, `showBackButton`,
`showHeader` and `onNavButtonPress` have been removed without replacement.
You must now always deliver your own header, we would recommend using a `Bar` component for that.<br />

The props `customHeader` and `customFooter` have been renamed to `header` and `footer`.

Migration Example:

```jsx
import { Page } from '@ui5/webcomponents-react';

function MyOldComponent() {
  return (
    <Page title="Title" showBackButton onNavButtonPress={() => alert('click!')}>
      Any children go here.
    </Page>
  );
}

// becomes

import { Bar, ButtonDesign, Label, Page } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/navigation-left-arrow';

function MyNewComponent() {
  return (
    <Page
      header={
        <Bar
          startContent={
            <Button icon="navigation-left-arrow" design={ButtonDesign.Transparent} onClick={() => alert('click!')} />
          }
          middleContent={<Label>Title</Label>}
        />
      }
    >
      Any children go here.
    </Page>
  );
}
```

### API Updates

#### ThemeProvider Context Changes

The `ThemeProvider` was provided with a nested styles object including the properties `theme`, `contentDensity`, `parameters` and `rtl`. It has now been
flattened to provide only the `ThemingParameters`.

The old API had several issues, including outdated values (the properties were not updated after they changed) and
e.g. `contentDensity` would have led to wrong results in case only a small part of your application was running on e.g. `compact` mode.

Migration Path:

```js
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((context) => ({
  myClass: {
    color: context.parameters.sapContent_LabelColor
  }
}));
```

becomes

```js
import { createUseStyles } from 'react-jss';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

const useStyles = createUseStyles((context) => ({
  myClass: {
    color: context.sapContent_LabelColor
  }
}));

// as the `context` is now static and will always have the values from `ThemingParameters`,
// you can also omit the function completely and use the `ThemingParameters` directly:
const useStyles = createUseStyles({
  myClass: {
    color: ThemingParameters.sapContent_LabelColor
  }
});
```

Replacements for the other properties

```js
// theme
import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme';

getTheme(); // will return e.g. sap_fiori_3

// rtl
import { useRef } from 'react';
import { useIsRTL } from '@ui5/webcomponents-react-base/dist/hooks';

const MyComponent = () => {
  const ref = useRef(null);

  useIsRTL(ref); // return true when current element is rendered right to left - otherwise false

  return <div ref={ref}>My Div</div>;
};

// contentDensity
const MyComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    getComputedStyle(ref.current).getPropertyValue('--_ui5_content_density'); // this will return either cozy or compact
  }, []);

  return <div ref={ref}>My Div</div>;
};
```

### Deleted Hooks

The deprecated `useI18nText` hook has been removed and replaced by the `useI18nBundle` hook. <br />
Migration Path:

```js
import { useI18nText } from '@ui5/webcomponents-react-base/dist/hooks';
// ...
const [pleaseWaitText, withParameters] = useI18nText('myApp', 'PLEASE_WAIT', ['CAROUSEL_DOT_TEXT', 5, 20]);

// becomes

import { useI18nBundle } from '@ui5/webcomponents-react-base/dist/hooks';
// ...
const i18nBundle = useI18nBundle('myApp');
const pleaseWaitText = i18nBundle.getText('PLEASE_WAIT');
const withParameters = i18nBundle.getText('CAROUSEL_DOT_TEXT', 5, 20);
```

## From 0.12.x to 0.13.0

<br />

### API Updates

#### Bar

The `Bar` component has been replaced by the corresponding UI5 Web Component.

Migration Example:

```jsx
<Bar contentLeft={<span>Left</span>} contentMiddle={<span>Middle</span>} contentRight={<span>Right</span>} />
```

will become

```jsx
<Bar startContent={<span>Left</span>} middleContent={<span>Middle</span>} endContent={<span>Right</span>} />
```

#### Toolbar

The `Toolbar` was firing an event `onToolbarClick`. This event has been replaced with `onClick`.

#### NotificationOverflowAction

`NotificationOverflowAction` has been renamed to `NotificationAction`.

#### Device API

The deprecated, class-based `Device` API is now removed. Please don't be shocked by this extensive list, most of the APIs
were only used internally and are mentioned here for the sake of completeness.

- `Device.os` is replaced by `getOS()` (`'import { getOS } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.browser` is replaced by `getBrowser()` (`'import { getBrowser } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.system` is replaced by `getSystem()` (`'import { getSystem } from '@ui5/webcomponents-react-base/lib/Device';`)

<br />

- `Device.support.touch` is replaced by `supportTouch()` (`'import { supportTouch } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.support.pointer` is replaced by `supportPointerEvents()` (`'import { supportPointerEvents } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.support.matchmedia` is replaced by `supportMatchMedia()` (`'import { supportMatchMedia } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.support.matchmedialistener` is replaced by `supportMatchMediaListener()` (`'import { supportMatchMediaListener } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.support.orientation` is replaced by `supportOrientation()` (`'import { supportOrientation } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.support.retina` is replaced by `supportRetina()` (`'import { supportRetina } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.support.websocket` is replaced by `supportWebSocket()` (`'import { supportWebSocket } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.support.input.placeholder` is replaced by `supportInputPlaceholder()` (`'import { supportInputPlaceholder } from '@ui5/webcomponents-react-base/lib/Device';`)

<br />

- `Device.orientation.landscape` is replaced by `getOrientation().landscape` (`'import { getOrientation } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.orientation.portrait` is replaced by `getOrientation().portrait` (`'import { getOrientation } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.orientation.attachHandler` is replaced by `attachOrientationChangeHandler` (`'import { attachOrientationChangeHandler } from '@ui5/webcomponents-react-base/lib/Device';`)<br />
  In addition, the second, optional parameter `oListener` got removed from `attachOrientationChangeHandler`.
- `Device.orientation.detachHandler` is replaced by `detachOrientationChangeHandler` (`'import { detachOrientationChangeHandler } from '@ui5/webcomponents-react-base/lib/Device';`)<br />
  In addition, the second, optional parameter `oListener` got removed from `detachOrientationChangeHandler`.
- `Device.resize.width` is replaced by `getWindowSize().width` (`'import { getWindowSize } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.resize.height` is replaced by `getWindowSize().height` (`'import { getWindowSize } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.resize.attachHandler` is replaced by `attachResizeHandler` (`'import { attachResizeHandler } from '@ui5/webcomponents-react-base/lib/Device';`)<br />
  In addition, the second, optional parameter `oListener` got removed from `attachResizeHandler`.
- `Device.resize.detachHandler` is replaced by `detachResizeHandler` (`'import { detachResizeHandler } from '@ui5/webcomponents-react-base/lib/Device';`)<br />
  In addition, the second, optional parameter `oListener` got removed from `detachResizeHandler`.

<br />

- `Device.media.getCurrentRange` is replaced by `getCurrentRange` (`'import { getCurrentRange } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.media.hasRangeSet` is replaced by `hasRangeSet` (`'import { hasRangeSet } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.media.initRangeSet` is replaced by `initRangeSet` (`'import { initRangeSet } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.media.removeRangeSet` is replaced by `removeRangeSet` (`'import { removeRangeSet } from '@ui5/webcomponents-react-base/lib/Device';`)
- `Device.media.attachHandler` is replaced by `attachHandler` (`'import { attachHandler } from '@ui5/webcomponents-react-base/lib/Device';`)<br />
  In addition, the second, optional parameter `oListener` got removed from `attachHandler`.
- `Device.media.detachHandler` is replaced by `detachHandler` (`'import { detachHandler } from '@ui5/webcomponents-react-base/lib/Device';`)<br />
  In addition, the second, optional parameter `oListener` got removed from `detachHandler`.

<br />

### Deleted Components

<br />

#### Spinner

The deprecated `Spinner` component has been removed in favor of the [BusyIndicator](https://sap.github.io/ui5-webcomponents-react/?path=/docs/ui5-web-components-busyindicator) component.

Migration Example:

```jsx
<Spinner size={Size.Large} delay={1000} />
```

will become

```jsx
<BusyIndicator size={BusyIndicatorSize.Large} active />
```

#### Tokenizer

The deprecated `Tokenizer` component has been removed in favor of the [MultiInput](https://sap.github.io/ui5-webcomponents-react/?path=/docs/ui5-web-components-multiinput) component.

Migration Example:

```jsx
<Tokenizer onTokenDelete={myHandler} disabled={false}>
  <Token text="Token 1" />
  <Token text="Token 2" />
  <Token text="Token 3" />
</Tokenizer>
```

will become

```jsx
<MultiInput
  disabled={false}
  onTokenDelete={myHandler}
  tokens={
    <>
      <Token text="Token 1" />
      <Token text="Token 2" />
      <Token text="Token 3" />
    </>
  }
/>
```

## From 0.11.x to 0.12.0

<br />

### Updated import paths for `icons`

All icons imports are changed. The individual icons modules are available in the icon package's `dist` folder.
If you previously had `import "@ui5/webcomponents-icons/dist/icons/accept.js"`, you now need `import "@ui5/webcomponents-icons/dist/accept.js";`.

<br />

## From 0.10.x to 0.11.0

<br />

### Deleted Components

The `FilterItem` component (which was deprecated in 0.10.0) and `FilterType` enum are now deleted. Please use the `FilterGroupItem` component instead. <br />
In addition to that, the `FilterBar` is now only accepting `FilterGroupItems` as children.

If you have the following `FilterItem` in your codebase

```jsx
<FilterItem
  filterItems={[
    { text: 'Text 1', key: '1' },
    { text: 'Text 2', key: '2' }
  ]}
  label="My Filter Item"
  key="filter_item"
  type={FilterType.Select}
  loading
/>
```

this will become

```jsx
<FilterGroupItem label="My Filter Item" loading>
  <Select>
    <Option data-key="1">Text 1</Option>
    <Option data-key="2">Text 2</Option>
  </Select>
</FilterGroupItem>
```

The same pattern applies for other FilterTypes like `Default` or `MultiSelect`.

### Components with changed API

The `Token` component is now officially a public component, and its API has changed.
The text content of a `Token` was previously defined via `children`, now you have to use `text` instead.

Example:
`<Token>My Token</Token>` will become `<Token text="My Token" />`

Furthermore, the `onDelete` event is removed as the Token shouldn’t be used as a standalone component.
Most probably, you will use the `Token` as child of `MultiInput` - there you can listen to the `onTokenDelete` event.

## From 0.9.x to 0.10.0

<br />

### Replaced Components with UI5 Web Components

Those components were custom built in this repository and have now been replaced with the offical UI5 Web Components.
This might lead to a changed API. Please consult our documentation for details on the new API.

- `Notification` is replaced by `NotificationListItem`
- `NotificationGroup` is replaced by `NotificationGroupListItem`
- `ProgressIndicator`
- `SideNavigation`

### API Consolidation (unified styling)

Some components had special props like `width` and `height` to change their size. In order to unify how the size of a
component can be changed, these special props where dropped and all components can now be styles by using the `style`
and/or the `className` prop.
This affects the following components:

- AnalyticalCard
- Text
- ProgressIndicator
- FlexBox
- Grid

### Removal of deprecated props and components

With version `0.9.0` we have deprecated a couple of props like the render-props (please check the [Migration Guide for 0.9.0](#replace-render-props-with-slots)).
This affects the following components:

| Component       | old prop                                                         | new prop                                       |
| --------------- | ---------------------------------------------------------------- | ---------------------------------------------- |
| AnalyticalTable | `renderExtension`                                                | `extension`                                    |
| Bar             | `renderContentLeft`, `renderContentMiddle`, `renderContentRight` | `contentLeft`, `contentMiddle`, `contentRight` |
| FormItem        | `labelText`                                                      | `label`                                        |
| FilterBar       | `renderSearch`, `renderVariants`                                 | `search`, `variants`                           |
| ObjectPage      | `renderHeaderContent`, `renderBreadcrumbs`, `renderKeyInfos`     | `headerContent`, `breadcrumbs`, `keyInfos`     |
| Page            | `renderCustomHeader`, `renderCustomFooter`                       | `customHeader`, `customFooter`                 |

In addition to that, we have cleaned up our base package (deletion of `Event`, `font72`, `HSLColor`, `Optional`, `Scroller`, and `sap_fiori_3` exports).
As those components were most probably only used internally this should not affect your upgrade.

### Removal of old event-api

The [event-system](#event-system) that was deprecated in `0.9.0` is now removed.

### Other Breaking Changes

- **AnalyticalTable**: Remove prop `busyIndicatorEnabled` as this was duplicate to `loading`. The visibility of the busy indicator is now solely controlled by the prop loading.
- **FormItem** / **FormGroup**: Those two components are now abstract components, so you can't add any styles, refs, classNames, etc them.
- **ShellBar**: the prop `logo` is now accepting a `ReactNode` instead of a `string` which is pointing to an image.
  Example:

```js
<ShellBar logo={<img slot="logo" src="../../../assets/images/sap-logo-svg.svg" />} />
```

### Charts

With version v0.9.5 of `@ui5/webcomponents-react-charts` we replace the canvas based charts with SVG based charts and
streamlined the ChartAPI to work similar to the `AnalyticalTable` API.
This requires a couple of changes on your side:

1. Change the import from `@ui5/webcomponents-react-charts/lib/[ChartType]` to `@ui5/webcomponents-react-charts/lib/[ChartType]`
2. Don't split the dataset into labels and single dataset entries as before, you can pass your dataset "as-is" to the chart.
3. Your labels are now part of the dataset, but you need to tell the chart which element of the data is your dimension
   Use the `dimensions` prop for that.
4. Instead of passing multiple datasets with their own data into the datasets prop, define your `measures` by specifying at least the `accessor`.

To illustrate the required changes, you can find the migration of a bar chart with two bars per dimension below:

Old Bar Chart:

```jsx
import React from 'react';
import { BarChart } from '@ui5/webcomponents-react-charts/lib/BarChart';

const MyComponent = () => {
  return (
    <BarChart
      labels={['January', 'February', 'March']}
      datasets={[
        {
          label: 'Existing Customers',
          data: [65, 59, 80]
        },

        {
          label: 'New Customers',
          data: [5, 9, 8]
        }
      ]}
    />
  );
};
```

New Bar Chart:

```jsx
import React from 'react';
import { BarChart } from '@ui5/webcomponents-react-charts/lib/next/BarChart';

const MyComponent = () => {
  return (
    <BarChart
      dimensions={[
        {
          accessor: 'month'
        }
      ]}
      measures={[
        {
          accessor: 'existingCustomers',
          label: 'Existing Customers'
        },
        {
          accessor: 'newCustomers',
          label: 'New Customers'
        }
      ]}
      dataset={[
        {
          month: 'January',
          existingCustomers: 65,
          newCustomers: 5
        },
        {
          month: 'February',
          existingCustomers: 59,
          newCustomers: 9
        },
        {
          month: 'March',
          existingCustomers: 80,
          newCustomers: 8
        }
      ]}
    />
  );
};
```

## From 0.8.x to 0.9.0

Migrating your app from 0.8.x to 0.9.0 requires a few updates to the API properties, this includes dependencies, theming, event handling and prop changes.

### Breaking changes

For a complete list of breaking changes from 0.8.X to 0.9.0, please refer to [the list of releases](https://github.com/SAP/ui5-webcomponents-react/releases) or the [changelog](https://github.com/SAP/ui5-webcomponents-react/blob/main/CHANGELOG.md).
Most important breaking changes:

- configuring of compact size is removed, use the ui5-content-density-compact CSS class to apply compact size.
- `@ui5/webcomponents`, `@ui5/webcomponents-icons` and `@ui5/webcomponents-fiori` are now `peerDependencies`
- **Replaced Components with potential new API**
- Avatar
- Carousel
- SegmentedButton
- Toast (replaces MessageToast)
- **ThemeProvider**:
- does not longer render a `JSSProvider` and the `jss`-prop is removed. If you need a custom JSS setup, please render your own JSSProvider.
- remove prop `withToastContainer`
- **AnalyticalTable**:
- replace `noSelectionColumn` prop with `selectionBehavior` enum
- column option `groupable` replaced by `disableGroupBy`: boolean
- column option `sortable` replaced by `disableSortBy`: boolean
- column option `filterable` replaced by `disableFilters`: boolean
- Enabling grouping, sorting or filtering on column level by e.g disableGroupBy: false will not overwrite the table overall setting in case e.g. groupable={false}
- **ButtonDesign**: RenameAccept to Positive
- **ButtonDesign**: RenameReject to Negative
- **InputType**: Rename Url to URL
- **BusyIndicator** : change default size of busy dots to Medium
- **MessageStrip** : replace icon property with icon slot to allow setting arbitrary content by the user
- **MultiComboBox** : Does not longer accept StandardListItem as child, use MultiComboBoxItem instead
- **ShellBar** : profile property is removed in favour of profile slot
- **TabContainer** : onItemSelect event is renamed to onTabSelect and the item event parameter is renamed to tab.
- **Card** : the property subtitle has been renamed to subheading
- **TextArea** : the property maxLength has been renamed to maxlength
- **Popover/Dialog**
- Removed custom API for opening, please see details at [Opening Popovers](#opening-popovers)
- **Deleted Components**
- SegmentedButtonItem: replaced by ToggleButton

### Dependencies

The dependencies `@ui5/webcomponents`, `@ui5/webcomponents-fiori` and `@ui5/webcomponents-icons` are now `peerDependencies` and have to be installed next to `@ui5/webcomponents-react`.

npm:

```sh
npm install @ui5/webcomponents --save
npm install @ui5/webcomponents-fiori --save
npm install @ui5/webcomponents-icons --save
```

yarn:

```sh
yarn add @ui5/webcomponents
yarn add @ui5/webcomponents-fiori
yarn add @ui5/webcomponents-icons
```

### Configure content density

Configuration of compact size is removed.
The default configuration is `Cozy`, to enable `Compact`, provide the `ui5-content-density-compact` CSS class to any of your HTML elements, and it applies compact size to all of its children.

Add `ui5-content-density-compact` to your `<body>` element to apply compact setting to the whole app:

```html
<body class="ui5-content-density-compact">
  <div>
    <ShellBar />
    <button />
  </div>
</body>
```

Or just to a single container or component:

```html
<button className="ui5-content-density-compact">Compact Button</button>
```

### Theming

UI5 Web Components and UI5 Web Components for React are both coming with the `sap_fiori_3` a.k.a. `Quartz` Theme built in.
In case you want to change your applications' theme, you have to import a couple of modules:

```js
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import '@ui5/webcomponents/dist/Assets';
import '@ui5/webcomponents-fiori/dist/Assets'; // only if you are using the ShellBar, Product Switch or UploadCollection
```

Now you can call `setTheme` with a string parameter of the new theme.
Available Themes:

- `sap_fiori_3` (default)
- `sap_fiori_dark`
- `sap_belize`
- `sap_belize_hcb`
- `sap_belize_hcw`

Example for applying the `sap_fiori_3_dark` theme:

```jsx
setTheme(Themes.sap_fiori_3_dark);

const App = () => {
  return (
    <ThemeProvider>
      <ShellBar />
      <Page showHeader={false}>
        <Text>Some Content</Text>
      </Page>
    </ThemeProvider>
  );
};
```

### Style custom components

If you want to use our central styling approach with your custom components you can now use the `ThemingParameters`.
With these parameters you get all available CSS Variables as a static import. As a consequence, you can now define your `react-jss` styles as a static object.

```JSX
import React from 'react';
import { createUseStyles } from 'react-jss';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';

const styles = {
  container: {
    backgroundColor: ThemingParameters.sapBackgroundColor,
    fontFamily: ThemingParameters.sapFontFamily,
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const useStyles = createUseStyles(styles, {name: "MyCustomElement"});

const MyCustomElement = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span style={{ color: ThemingParameters.sapNegativeColor, fontSize: ThemingParameters.sapFontLargeSize }}>
        My Text
      </span>
    </div>
  );
};
```

### Opening Popovers

Our library used to provide a custom API on top of all UI5 Web Components Popovers/Dialogs.
For the sake of consistency, we removed that extension and now handle popovers the same way as UI5 Web Components does.
Popovers like the `Dialog`, `Popover` and `ResponsivePopover` now only can be opened by attaching a `ref` to the component
and then call the corresponding `open` method:

- Dialog - `.open()`:

```JSX
const DialogComponent = () => {
  const dialogRef = useRef(null);
  const onButtonClick = useCallback(() => {
    dialogRef.current.open();
  }, [dialogRef]);

  return (
    <>
      <Button onClick={onButtonClick}>Open Dialog</Button>
      <Dialog ref={dialogRef}>Some Content</Dialog>
    </>
  );
};
```

- Popover - `.openBy(event.target)`:

```JSX
const PopoverComponent = () => {
  const popoverRef = useRef(null);
  const onButtonClick = useCallback(
    (e) => {
      popoverRef.current.openBy(e.target);
    },
    [popoverRef]
  );
  return (
    <>
      <Button onClick={onButtonClick}>Open Popover</Button>
      <Popover ref={popoverRef}>Some Content</Popover>
    </>
  );
};
```

- ResponsivePopover - `.open(event.target)`:

```JSX
const ResponsivePopoverComponent = () => {
  const popoverRef = useRef(null);
  const onButtonClick = useCallback(
    (e) => {
      popoverRef.current.open(e.target);
    },
    [popoverRef]
  );
  return (
    <>
      <Button onClick={onButtonClick}>Open Responsive Popover</Button>
      <ResponsivePopover ref={popoverRef}>Some Content</ResponsivePopover>
    </>
  );
};
```

### Event System

The custom API for events is deprecated as it's incompatible with the UI5 Web Components API and will be removed in `0.10.0`.

Now, all event handlers are called with an Object which is compatible with the `CustomEvent` API.
Sometimes a UI5 Custom Event is passed, sometimes a React SyntheticEvent and all details are in the `detail` object.

**The legacy event API is still supported but will be removed with `0.10.0`**

Examples:

- Access selected option in `Select` component:

```JSX
export const SelectComponent = () => {
  const handleSelect = (event) => {
    const selectedOption = event.detail.selectedOption; //new
    const selectedOption = event.parameters.selectedOption; //deprecated
  };
  return (
    <Select onChange={handleSelect}>
      <Option>Option 1</Option>
      <Option>Option 2</Option>
    </Select>
  );
};
```

- Get state of `CheckBox`:

```JSX
export const CheckBoxComponent = () => {
  const handleChange = (event) => {
    const isChecked = event.target.checked; //new
    const isChecked = event.parameters.checked; //deprecated
  };
  return <CheckBox onChange={handleChange} />;
};
```

### Replace render props with slots

UI5 Web Components for React used to have `renderXYZ` props for adding custom content into components, e.g. `renderCustomHeader`.
For providing a unified API, these props have been deprecated and corresponding slots have been added.
Slots can be passed a `ReactNode` and depending on the case also a `ReactNode[]`.

**The `renderXYZ` props are still supported but will be removed with `0.10.0`**

```JSX
export const BarComponent = () => {
  return (
    <Bar
      contentLeft={<Label>Content Left</Label>} //new
      contentMiddle={<Label>Content Middle</Label>} //new
      contentRight={<Label>Content Right</Label>} //new
      renderContentLeft={() => <Label>Content Left</Label>} //deprecated
      renderContentMiddle={() => <Label>Content Middle</Label>} //deprecated
      renderContentRight={() => <Label>Content Right</Label>} //deprecated
    />
  );
};
```

### New components with different API

Avatar:

- props:
- `onClick`: Has been removed.
- `customDisplaySize` and `customFontSize`: Has been replaced by `size`. Uses `AvatarSize` enum.
- `backgroundColor`: Defines the background color. Uses `AvatarBackgroundColor` enum.
- `icon`: Defines the name of the UI5 Icon as string. _Remember that icons have to be imported first._
- `imageFitType`: Defines the fit type of the desired image. Uses `AvatarFitType` enum.

Carousel:

- props:
- `onPageChanged`: Has been replaced by `onNavigate`
- `width`: Has been removed.
- `height`: Has been removed.
- `showPageIndicator`: Has been removed. _To hide the navigation-bar use `hideNavigation`._
- `pageIndicatorPlacement`: Has been removed.
- `loop`: Has been replaced by `cyclic`.
- `activePage`: Has been replaced by `selectedIndex`.

MessageToast:

- Has been replaced by the `Toast` component.

MultiComboBox:

- Does not accept `StandardListItem` as children anymore. Use `MultiComboBoxItem` instead.

SegmentedButton:

- `SegementedButtonItem` has been replaced by `ToggleButton`
- props:
- `disabled`: Has been removed.
- `selectedKey`: Has been removed. _To initially select a button set the `pressed` prop of the `ToggleButton` to `true`._
- `onItemSelected`: Has been replaced by `onSelectionChange` and is fired when the button selection changes. To get the selected button you can use the following function:

```JSX
const onSelectionChange = (event) => {
    const selectedButton = event.detail.selectedButton;
};
```

ShellBar:

- props:
- `profile`: Is now a slot where you should use the `Avatar` component.
