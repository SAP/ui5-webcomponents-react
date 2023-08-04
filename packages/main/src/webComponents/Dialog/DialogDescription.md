## Structure

A `Dialog` consists of a header, content, and a footer for action buttons. The `Dialog` is usually displayed at the center of the screen. Its position can be changed by the user. To enable this, you need to set the property `draggable` accordingly.

## Responsive Behavior

The `stretch` property can be used to stretch the `Dialog` on full screen.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The `Dialog` exposes the following CSS Shadow Parts:

- header - Used to style the header of the component
- content - Used to style the content of the component
- footer - Used to style the footer of the component

**Note:** When a `Bar` is used in the header or in the footer, you should remove the default dialog's paddings.  
For more information see the sample "Bar in Header/Footer".
