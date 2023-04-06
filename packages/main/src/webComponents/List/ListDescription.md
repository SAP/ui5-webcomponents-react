## Keyboard Handling

### Basic Navigation

The `List` provides advanced keyboard handling. When a list is focused the user can use the following keyboard shortcuts in order to perform a navigation:

- \[UP/DOWN\] - Navigates up and down the items
- \[HOME\] - Navigates to first item
- \[END\] - Navigates to the last item

The user can use the following keyboard shortcuts to perform actions (such as select, delete), when the `mode` property is in use:

- \[SPACE\] - Select an item (if `type` is 'Active') when `mode` is selection
- \[DELETE\] - Delete an item if `mode` property is `Delete`

### Fast Navigation

This component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or `Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up`. In order to use this functionality, you need to import the following module: `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
