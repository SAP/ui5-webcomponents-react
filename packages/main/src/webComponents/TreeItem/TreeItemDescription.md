This is the item to use inside a `Tree`. You can represent an arbitrary tree structure by recursively nesting tree items.
### Usage

`TreeItem` is an abstract element, representing a node in a `Tree`. The tree itself is rendered as a list, and each `TreeItem` is represented by a list item(`TreeListItem`) in that list. Therefore, you should only use `TreeItem` directly in your apps. The `TreeListItem` list item is internal for the list, and not intended for public use.