## Stable DOM Refs

You can use the following stable DOM refs for the `ShellBar`:

- logo
- copilot
- notifications
- overflow
- profile
- product-switch

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The `ShellBar` exposes the following CSS Shadow Parts:

- root - Used to style the outermost wrapper of the `ShellBar`

## Keyboard Handling

### Fast Navigation

This component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or `Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up`. In order to use this functionality, you need to import the following module: `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
