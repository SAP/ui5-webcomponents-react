## Usage

There are two main usages of the `Select`.

1. With Option (`Option`) web component:  
   The available options of the Select are defined by using the Option component. The Option comes with predefined design and layout, including `icon`, `text` and `additional-text`.
2. With SelectMenu (`SelectMenu`) and SelectMenuOption (`SelectMenuOption`) web components:  
   The SelectMenu can be used as alternative to define the Select's dropdown and can be used via the `menu` property of the Select to reference SelectMenu by its ID. The component gives the possibility to customize the Select's dropdown by slotting entirely custom options (via the SelectMenuOption component) and adding custom styles. **Note:** SelectMenu is a popover and placing it top-level in the HTML page is recommended, because some page styles (for example transitions) can misplace the SelectMenu.

## Keyboard Handling

The `Select` provides advanced keyboard handling.

- \[F4, ALT+UP, ALT+DOWN, SPACE, ENTER\] - Opens/closes the drop-down.
- \[UP, DOWN\] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
- \[SPACE, ENTER\] - If the drop-down is opened - selects the focused option.
- \[ESC\] - Closes the drop-down without changing the selection.
- \[HOME\] - Navigates to first option
- \[END\] - Navigates to the last option
