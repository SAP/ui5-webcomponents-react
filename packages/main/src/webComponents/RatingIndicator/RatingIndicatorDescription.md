## Usage

The recommended number of icons is between 5 and 7.

## Responsive Behavior

You can change the size of the Rating Indicator by changing its `font-size` CSS property.  
Example: `<RatingIndicator style="font-size: 3rem;"></RatingIndicator>`

## Keyboard Handling

When the `RatingIndicator` is focused, the user can change the rating with the following keyboard shortcuts:

- \[RIGHT/UP\] - Increases the value of the rating by one step. If the highest value is reached, does nothing
- \[LEFT/DOWN\] - Decreases the value of the rating by one step. If the lowest value is reached, does nothing.
- \[HOME\] - Sets the lowest value.
- \[END\] - Sets the highest value.
- \[SPACE/ENTER/RETURN\] - Increases the value of the rating by one step. If the highest value is reached, sets the rating to the lowest value.
- Any number - Changes value to the corresponding number. If typed number is larger than the number of values, sets the highest value.
