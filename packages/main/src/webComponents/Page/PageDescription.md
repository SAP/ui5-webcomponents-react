## Structure

### Header

The top most area of the page is occupied by the header. The standard header includes a navigation button and a title.

### Content

The content occupies the main part of the page. Only the content area is scrollable by default. This can be prevented by setting `enableScrolling` to `false`.

### Footer

The footer is optional and occupies the fixed bottom part of the page. Alternatively, the footer can be floating above the bottom part of the content. This is enabled with the `floatingFooter` property. **Note:** `Page` occipues the whole available space of its parent. In order to achieve the intended design you have to make sure that there is enough space for the `Page` to be rendered. **Note:** In order for the `Page` to be displayed, the parent element should have fixed height.

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The `Page` exposes the following CSS Shadow Parts:

- content - Used to style the content section of the component
