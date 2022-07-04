## Structure

### Header

The top most area of the page is occupied by the header. The standard header includes a navigation button and a title.

### Content

The content occupies the main part of the page. Only the content area is scrollable by default. This can be prevented by setting `enableScrolling` to `false`.

### Footer

The footer is optional and occupies the fixed bottom part of the page. Alternatively, the footer can be floating above the bottom part of the content. This is enabled with the `floatingFooter` property. **Note:** `Page` occipues the whole available space of its parent. In order to achieve the intended design you have to make sure that there is enough space for the `Page` to be rendered.