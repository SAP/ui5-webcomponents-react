## Usage

### When to use:

- The items you want to display are very different from each other.
- You want to display the items one after the other.

### When not to use:

- The items you want to display need to be visible at the same time.
- The items you want to display are uniform and very similar.

## Keyboard Handling

### Basic Navigation

When the `Carousel` is focused the user can navigate between the items with the following keyboard shortcuts:

- \[UP/DOWN\] - Navigates to previous and next item
- \[LEFT/RIGHT\] - Navigates to previous and next item

## Fast Navigation

This component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or `Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up`. In order to use this functionality, you need to import the following module: `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The `Carousel` exposes the following CSS Shadow Parts:

- content - Used to style the content of the component
