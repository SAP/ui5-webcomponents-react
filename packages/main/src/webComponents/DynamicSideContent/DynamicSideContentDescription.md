## Usage

_When to use?_ Use this component if you want to display relevant information that is not critical for users to complete a task. Users should have access to all the key functions and critical information in the app even if they do not see the side content. This is important because on smaller screen sizes it may be difficult to display the side content in a way that is easily accessible for the user. _When not to use?_ Don't use it if you want to display navigation or critical information that prevents users from completing a task when they have no access to the side content.

## Responsive Behavior

Screen width > 1440px

- Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px each).
- If the application defines a trigger, the side content can be hidden.

Screen width <= 1440px and > 1024px

- Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of 320px each). If the side content width falls below 320 px, it automatically slides under the main content, unless the app development team specifies that it should disappear.

Screen width <= 1024px and > 720px

- The side content ratio is fixed to 340px, and the main content takes the rest of the width. Only if the `sideContentFallDown` is set to `OnMinimumWidth` and screen width is <= 960px and > 720px the side content falls below the main content.

Screen width <= 720px (for example on a mobile device)

- In this case, the side content automatically disappears from the screen (unless specified to stay under the content by setting of `sideContentVisibility` property to `AlwaysShow`) and can be triggered from a pre-set trigger (specified within the app). When the side content is triggered, it replaces the main content. We recommend that you always place the trigger for the side content in the same location, such as in the app footer.

A special case allows switching the comparison mode between the main and side content. In this case, the screen is split into 50:50 percent for main vs. side content. The responsive behavior of the equal split is the same as in the standard view - the side content disappears on screen widths of less than 720 px and can only be viewed by triggering it.
