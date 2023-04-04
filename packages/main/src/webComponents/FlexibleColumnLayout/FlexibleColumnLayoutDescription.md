## Usage

Use this component for applications that need to display several logical levels of related information side by side (e.g. list of items, item, sub-item, etc.). The Component is flexible in a sense that the application can focus the user's attention on one particular column.

## Responsive Behavior

The `FlexibleColumnLayout` automatically displays the maximum possible number of columns based on `layout` property and the window size. The component would display 1 column for window size smaller than 599px, up to two columns between 599px and 1023px, and 3 columns for sizes bigger than 1023px.

## Keyboard Handling

### Basic Navigation

- \[SPACE, ENTER, RETURN\] - If focus is on the layout toggle button (arrow button), once activated, it triggers the associated action (such as expand/collapse the column).
- This component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or `Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up`. In order to use this functionality, you need to import the following module: `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`

### Fast Navigation

This component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or `Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up`. In order to use this functionality, you need to import the following module: `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
