# Migration Guide

## Migrating from 0.8.X to 0.9.0
Migrating your app from 0.8.X to 0.9.0 requires a few updates to the API properties, this includes dependencies, theming, event handling and prop changes.

### Breaking changes
For a complete list of breaking changes from 0.8.X to 0.9.0, please refer to [the list of releases](https://github.com/SAP/ui5-webcomponents-react/releases) or the [changelog](https://github.com/SAP/ui5-webcomponents-react/blob/master/CHANGELOG.md).
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

## Dependencies
The dependencies `@ui5/webcomponents`, `@ui5/webcomponents-fiori` and `@ui5/webcomponents-icons` are now  `peerDependencies` and have to be installed next to `@ui5/webcomponents-react`.

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

## Configure content density
Configuration of compact size is removed.  
The default configuration is `Cozy`, to enable `Compact`, provide the `ui5-content-density-compact` CSS class to any of your HTML elements, and it applies compact size to all of its children.

Add `ui5-content-density-compact` to your `<body>` element to apply compact setting to the whole app:
```html
<body class="ui5-content-density-compact">
    <div>
        <ShellBar />
        <Button />
    </div>
</body>
```
Or just to a single container or component:
```html
<Button className="ui5-content-density-compact">Compact Button</Button>
```

## Theming
UI5 Web Components and UI5 Web Components for React are both coming with the `sap_fiori_3` a.k.a. `Quartz` Theme built in.
In case you want to change your applications' theme, you have to import a couple of modules:
```js
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import '@ui5/webcomponents-theme-base/dist/Assets';
import '@ui5/webcomponents/dist/generated/json-imports/Themes';
import '@ui5/webcomponents-fiori/dist/generated/json-imports/Themes'; // only if you are using the ShellBar, Product Switch or UploadCollection
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

## Style custom components
If you want to use our central styling approach with your custom components you can now use the `ThemingParameters`. 
With these parameters you get all available CSS Variables as a static import. As a consequence, you can now define your `react-jss` styles as a static object.

```JSX
import React from 'react';
import { createUseStyles } from 'react-jss';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

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

const useStyles = createUseStyles(styles);

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

## Opening Popovers
Our library used to provide a custom API on top of all UI5 Web Components Popovers/Dialogs. 
For the sake of consistency, we removed that extension and now handle popovers the same way as UI5 Web Components does.
Popovers like the `Dialog`, `Popover` and `ResponsivePopover` now only can be opened by attaching a `ref` to the component
and then call the corresponding `open` method:

* Dialog - `.open()`:
    ```JSX
    const DialogComponent = () => {
      const dialogRef = useRef();
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
* Popover - `.openBy(event.target)`:
    ```JSX
    const PopoverComponent = () => {
      const popoverRef = useRef();
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
* ResponsivePopover - `.open(event.target)`:
    ```JSX
    const ResponsivePopoverComponent = () => {
      const popoverRef = useRef();
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
  
## Event System
The custom API for events is deprecated as it's incompatible with the UI5 Web Components API and will be removed in `0.10.0`.

Now, all event handlers are called with an Object which is compatible with the `CustomEvent` API.
Sometimes a UI5 Custom Event is passed, sometimes a React SyntheticEvent and all details are in the `detail` object.

**The legacy event API is still supported but will be removed with `0.10.0`**

Examples:

* Access selected option in `Select` component:
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
  
* Get state of `CheckBox`:
    ```JSX
    export const CheckBoxComponent = () => {
      const handleChange = (event) => {
        const isChecked = event.target.checked; //new
        const isChecked = event.parameters.checked; //deprecated
      };
      return <CheckBox onChange={handleChange} />;
    };
    ```

## Replace render props with slots
UI5 Web Components for React used to have `renderXYZ` props for adding custom content into components, e.g. `renderCustomHeader`.
For providing a unified API, these props have been deprecated and corresponding slots have been added.
Slots can be passed a `ReactNode` and depending on the case also a `ReactNodeArray`.
 
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

## New components with different API
Avatar:
* props:
    * `onClick`: Has been removed.
    * `customDisplaySize` and `customFontSize`: Has been replaced by `size`. Uses `AvatarSize` enum.
    * `backgroundColor`: Defines the background color. Uses `AvatarBackgroundColor` enum.
    * `icon`: Defines the name of the UI5 Icon as string. _Remember that icons have to be imported first._
    * `imageFitType`: Defines the fit type of the desired image. Uses `AvatarFitType` enum.
    
Carousel:
* props:
    * `onPageChanged`: Has been replaced by `onNavigate`
    * `width`: Has been removed.
    * `height`: Has been removed.
    * `showPageIndicator`: Has been removed. _To hide the navigation-bar use `hideNavigation`._
    * `pageIndicatorPlacement`: Has been removed.
    * `loop`: Has been replaced by `cyclic`.
    * `activePage`: Has been replaced by `selectedIndex`.
    
MessageToast:
* Has been replaced by the `Toast` component.

MultiComboBox:
* Does not accept `StandardListItem` as children anymore. Use `MultiComboBoxItem` instead.

SegmentedButton:
* `SegementedButtonItem` has been replaced by `ToggleButton`
* props:
    * `disabled`: Has been removed.
    * `selectedKey`: Has been removed. _To initially select a button set the `pressed` prop of the `ToggleButton` to `true`._
    * `onItemSelected`: Has been replaced by `onSelectionChange` and is fired when the button selection changes. To get the selected button you can use the following function:
    ```JSX
    const onSelectionChange = (event) => {
        const selectedButton = event.detail.selectedButton;
    };
    ```
    
ShellBar:
* props:
    * `profile`: Is now a slot where you should use the `Avatar` component.

