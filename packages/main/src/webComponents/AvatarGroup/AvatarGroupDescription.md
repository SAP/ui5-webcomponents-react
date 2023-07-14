## Responsive Behavior

When the available space is less than the width required to display all avatars, an overflow visualization appears as a button placed at the end with the same shape and size as the avatars. The visualization displays the number of avatars that have overflowed and are not currently visible.

## Usage

Use the `AvatarGroup` if:

- You want to display a group of avatars.
- You want to display several avatars which have something in common.

Do not use the `AvatarGroup` if:

- You want to display a single avatar.
- You want to display a gallery for simple images.
- You want to use it for other visual content than avatars.

## Keyboard Handling

The component provides advanced keyboard handling. When focused, the user can use the following keyboard shortcuts in order to perform a navigation:  
`type` Individual:

- \[TAB\] - Move focus to the overflow button
- \[LEFT\] - Navigate one avatar to the left
- \[RIGHT\] - Navigate one avatar to the right
- \[HOME\] - Navigate to the first avatar
- \[END\] - Navigate to the last avatar
- \[SPACE\],\[ENTER\],\[RETURN\] - Trigger `undefined` event

`type` Group:

- \[TAB\] - Move focus to the next interactive element after the component
- \[SPACE\],\[ENTER\],\[RETURN\] - Trigger `undefined` event
