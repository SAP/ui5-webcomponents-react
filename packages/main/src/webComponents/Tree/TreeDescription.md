## Usage

### When to use:

- To display hierarchically structured items.
- To select one or more items out of a set of hierarchically structured items.

### When not to use:

- To display items not hierarchically strcutured. In this case, use the List component.
- To select one item from a very small number of non-hierarchical items. Select or ComboBox might be more appropriate.
- The hierarchy turns out to have only two levels. In this case, use List with group items.

## Keyboard Handling

The `Tree` provides advanced keyboard handling. The user can use the following keyboard shortcuts in order to navigate trough the tree:

- \[UP/DOWN\] - Navigates up and down the tree items that are currently visible.
- \[RIGHT\] - Drills down the tree by expanding the tree nodes.
- \[LEFT\] - Goes up the tree and collapses the tree nodes.

The user can use the following keyboard shortcuts to perform selection, when the `mode` property is in use:

- \[SPACE\] - Selects the currently focused item upon keyup.
- \[ENTER\] - Selects the currently focused item upon keydown.
