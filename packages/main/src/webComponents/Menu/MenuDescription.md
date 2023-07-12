## Usage

`Menu` contains `Menu-item` components. An arbitrary hierarchy structure can be represented by recursively nesting menu items.

## Keyboard Handling

The `Menu` provides advanced keyboard handling. The user can use the following keyboard shortcuts in order to navigate trough the tree:

- `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.
- `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested in the currently clicked menu item.
- `Arrow Left` or `Escape` - Closes the currently opened sub-menu.

Note: if the text ditrection is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.
