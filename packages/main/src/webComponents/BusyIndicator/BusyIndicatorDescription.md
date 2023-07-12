## Usage

For the `BusyIndicator` you can define the size, the text and whether it is shown or hidden. In order to hide it, use the "active" property.

In order to show busy state over an HTML element, simply nest the HTML element in a `BusyIndicator` instance.  
**Note:** Since `BusyIndicator` has `display: inline-block;` by default and no width of its own, whenever you need to wrap a block-level element, you should set `display: block` to the busy indicator as well.

### When to use:

- The user needs to be able to cancel the operation.
- Only part of the application or a particular component is affected.

### When not to use:

- The operation takes less than one second.
- You need to block the screen and prevent the user from starting another activity.
- Do not show multiple busy indicators at once.
