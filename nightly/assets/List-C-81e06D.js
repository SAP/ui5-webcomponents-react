import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-CQvqGaAL.js";import{n as r}from"./List-ZJUPXzCq.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-list`,[`accessibilityAttributes`,`accessibleDescription`,`accessibleDescriptionRef`,`accessibleName`,`accessibleNameRef`,`accessibleRole`,`footerText`,`growing`,`growingButtonText`,`headerText`,`loadingDelay`,`noDataText`,`selectionMode`,`separators`],[`indent`,`loading`,`stickyHeader`],[`header`],[`item-click`,`item-close`,`item-delete`,`item-toggle`,`load-more`,`move-over`,`move`,`selection-change`]),i.displayName=`List`;try{i.displayName=`List`,i.__docgenInfo={description:`The \`List\` component allows displaying a list of items, advanced keyboard
handling support for navigating between items, and predefined modes to improve the development efficiency.

The \`List\` is a container for the available list items:

- \`ListItemStandard\`
- \`ListItemCustom\`
- \`ListItemGroup\`

To benefit from the built-in selection mechanism, you can use the available
selection modes, such as
\`Single\`, \`Multiple\` and \`Delete\`.

Additionally, the \`List\` provides header, footer, and customization for the list item separators.

### Keyboard Handling

The \`List\` follows the SAP Fiori "Intentional Edit Pattern" (forms-editing variant)
and exposes two interaction modes:

- **Navigation mode** (default) - Arrow keys move focus between items; [Tab] leaves the list.
- **Edit mode** (toggled by [F2] or [F7]) - [Tab] walks through the interactive elements
  inside items (buttons, links, inputs, checkboxes, etc.) and continues into the next item.

#### Basic Navigation
The \`List\` provides advanced keyboard handling for navigation between items.
When an item is focused the user can use the following keyboard shortcuts:

- [Up] or [Down] - Navigates up and down the items
- [Home] - Navigates to first item
- [End] - Navigates to the last item
- [Tab] or [Shift] + [Tab] - Moves focus out of the list, to the next/previous control in the tab chain

The user can use the following keyboard shortcuts to perform actions (such as select, delete),
when the \`selectionMode\` property is in use:

- [Space] - Select an item (if \`type\` is 'Active') when \`selectionMode\` is selection
- [Delete] - Delete an item if \`selectionMode\` property is \`Delete\`

#### Edit Mode - Reaching Interactive Elements Inside Items
Interactive elements inside a list item (buttons, links, inputs, etc.) are not reached
by [Tab] from navigation mode. To activate them, the user first enters edit mode.

- [F2] - While focus is on an item, moves focus to the first interactive element inside it.
  While focus is on an interactive element, moves focus back to the item level.
  Unlike [F7], [F2] does not remember the previous position — it always lands on the first interactive element.
- [F7] - While focus is on an item, moves focus to the last remembered internal element
  (or to the first interactive element if none is remembered).
  While focus is on an interactive element, saves its position and moves focus back to the item level.
- [Tab] or [Shift] + [Tab] - While in edit mode, moves focus through the interactive
  elements within an item, then continues into the next/previous item's interactive elements,
  and exits the list after the last/first element.
- [Up] or [Down] - While focus is on an interactive element inside an item, moves focus
  to the element at the same index in the previous/next item. Items with no interactive
  elements are skipped, and boundaries of \`ListItemGroup\` are crossed.

**Note:** In \`selectionMode="Delete"\`, the per-item delete button is reachable through
the edit-mode [Tab] flow described above, in addition to the [Delete] shortcut.

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



\`import "@ui5/webcomponents/dist/ListItemStandard.js";\` (for \`ListItemStandard\`)

\`import "@ui5/webcomponents/dist/ListItemCustom.js";\` (for \`ListItemCustom\`)

\`import "@ui5/webcomponents/dist/ListItemGroup.js";\` (for \`ListItemGroup\`)

__Note:__ This is a UI5 Web Component! [List UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/List) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`List`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:"Defines the items of the component.\n\n**Note:** Use `ListItemStandard`, `ListItemCustom`, and `ListItemGroup` for the intended design.\n\n__Supported Node Type/s:__ `Array<ListItemBase | ListItemGroup>`",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},header:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Defines the component header.

**Note:** When \`header\` is set, the
\`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`header`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onItemClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Fired when an item is activated, unless the item's \`type\` property
is set to \`Inactive\`.

**Note**: This event is not triggered by interactions with selection components such as the checkboxes and radio buttons,
associated with non-default \`selectionMode\` values, or if any other **interactive** component
(such as a button or input) within the list item is directly clicked.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onItemClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, ListItemClickEventDetail>) => void`}},onItemClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Fired when the \`Close\` button of any item is clicked

**Note:** This event is only applicable to list items that can be closed (such as notification list items),
not to be confused with \`item-delete\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onItemClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, ListItemCloseEventDetail>) => void`}},onItemDelete:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Fired when the Delete button of any item is pressed.

**Note:** A Delete button is displayed on each item,
when the component \`selectionMode\` property is set to \`Delete\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onItemDelete`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, ListItemDeleteEventDetail>) => void`}},onItemToggle:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Fired when the \`Toggle\` button of any item is clicked.

**Note:** This event is only applicable to list items that can be toggled (such as notification group list items).

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onItemToggle`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, ListItemToggleEventDetail>) => void`}},onLoadMore:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Fired when the user scrolls to the bottom of the list.

**Note:** The event is fired when the \`growing='Scroll'\` property is enabled.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onLoadMore`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, never>) => void`}},onMove:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Fired when a movable list item is dropped onto a drop target.

**Note:** \`move\` event is fired only if there was a preceding \`move-over\` with prevented default action.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onMove`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, MoveEventDetail>) => void`}},onMoveOver:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:`Fired when a movable list item is moved over a potential drop target during a dragging operation.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onMoveOver`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, MoveEventDetail>) => void`}},onSelectionChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`}],description:"Fired when selection is changed by user interaction\nin `Single`, `SingleStart`, `SingleEnd` and `Multiple` selection modes.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.\n\n| cancelable | bubbles |\n| :--------: | :-----: |\n| ✅|✅|",name:`onSelectionChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListDomRef, ListSelectionChangeEventDetail>) => void`}},accessibilityAttributes:{defaultValue:{value:`{}`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines additional accessibility attributes on different areas of the component.

The accessibilityAttributes object has the following field:

 - **growingButton**: \`growingButton.name\`, \`growingButton.description\`.

 The accessibility attributes support the following values:

- **name**: Defines the accessible ARIA name of the growing button.
Accepts any string.

- **description**: Defines the accessible ARIA description of the growing button.
Accepts any string.

 **Note:** The \`accessibilityAttributes\` property is in an experimental state and is a subject to change.

**Note:** Available since [v2.13.0](https://github.com/UI5/webcomponents/releases/tag/v2.13.0) of **@ui5/webcomponents**.`,name:`accessibilityAttributes`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`{}`},type:{name:`ListAccessibilityAttributes`}},accessibleDescription:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the accessible description of the component.

**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:`accessibleDescription`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleDescriptionRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the IDs of the elements that describe the component.

**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:`accessibleDescriptionRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the accessible name of the component.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the IDs of the elements that label the component.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleRole:{defaultValue:{value:`"List"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the accessible role of the component.`,name:`accessibleRole`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`"List"`},type:{name:`enum`,raw:`ListAccessibleRole | "List" | "Menu" | "Tree" | "ListBox"`,value:[{value:`"List"`,description:`Represents the ARIA role "list". (by default)`,fullComment:`Represents the ARIA role "list". (by default)
@public`,tags:{public:``}},{value:`"Menu"`,description:`Represents the ARIA role "menu".`,fullComment:`Represents the ARIA role "menu".
@public`,tags:{public:``}},{value:`"Tree"`,description:`Represents the ARIA role "tree".`,fullComment:`Represents the ARIA role "tree".
@public`,tags:{public:``}},{value:`"ListBox"`,description:`Represents the ARIA role "listbox".`,fullComment:`Represents the ARIA role "listbox".
@public`,tags:{public:``}},{value:`"List"`},{value:`"Menu"`},{value:`"Tree"`},{value:`"ListBox"`}]}},footerText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the footer text.`,name:`footerText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},growing:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:'Defines whether the component will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\non IE the component will fallback to `growing="Button"`.',name:`growing`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Button" | ListGrowingMode | "Scroll"`,value:[{value:`"None"`},{value:`"Button"`},{value:`"Button"`,description:`Component's "load-more" is fired upon pressing a "More" button.
at the bottom.`,fullComment:`Component's "load-more" is fired upon pressing a "More" button.
at the bottom.
@public`,tags:{public:``}},{value:`"Scroll"`,description:`Component's "load-more" is fired upon scroll.`,fullComment:`Component's "load-more" is fired upon scroll.
@public`,tags:{public:``}},{value:`"None"`,description:`Component's growing is not enabled.`,fullComment:`Component's growing is not enabled.
@public`,tags:{public:``}},{value:`"Scroll"`}]}},growingButtonText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the text that will be displayed inside the growing button.

**Note:** If not specified a built-in text will be displayed.

**Note:** This property takes effect if the \`growing\` property is set to the \`Button\`.

**Note:** Available since [v1.24](https://github.com/UI5/webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.`,name:`growingButtonText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},headerText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the component header text.

**Note:** If \`header\` is set this property is ignored.`,name:`headerText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},indent:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Determines whether the component is indented.`,name:`indent`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines if the component would display a loading indicator over the list.`,name:`loading`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},loadingDelay:{defaultValue:{value:`1000`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the delay in milliseconds, after which the loading indicator will show up for this component.`,name:`loadingDelay`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`1000`},type:{name:`number`}},noDataText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the text that is displayed when the component contains no items.`,name:`noDataText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},selectionMode:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the selection mode of the component.`,name:`selectionMode`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Delete" | ListSelectionMode | "Single" | "SingleStart" | "SingleEnd" | "SingleAuto" | "Multiple"`,value:[{value:`"None"`},{value:`"Delete"`},{value:`"None"`,description:`Default mode (no selection).`,fullComment:`Default mode (no selection).
@public`,tags:{public:``}},{value:`"Single"`,description:`Right-positioned single selection mode (only one list item can be selected).`,fullComment:`Right-positioned single selection mode (only one list item can be selected).
@public`,tags:{public:``}},{value:`"SingleStart"`,description:`Left-positioned single selection mode (only one list item can be selected).`,fullComment:`Left-positioned single selection mode (only one list item can be selected).
@public`,tags:{public:``}},{value:`"SingleEnd"`,description:`Selected item is highlighted but no selection element is visible
(only one list item can be selected).`,fullComment:`Selected item is highlighted but no selection element is visible
(only one list item can be selected).
@public`,tags:{public:``}},{value:`"SingleAuto"`,description:`Selected item is highlighted and selection is changed upon arrow navigation
(only one list item can be selected - this is always the focused item).`,fullComment:`Selected item is highlighted and selection is changed upon arrow navigation
(only one list item can be selected - this is always the focused item).
@public`,tags:{public:``}},{value:`"Multiple"`,description:`Multi selection mode (more than one list item can be selected).`,fullComment:`Multi selection mode (more than one list item can be selected).
@public`,tags:{public:``}},{value:`"Delete"`,description:`Delete mode (only one list item can be deleted via provided delete button)`,fullComment:`Delete mode (only one list item can be deleted via provided delete button)
@public`,tags:{public:``}},{value:`"Single"`},{value:`"SingleStart"`},{value:`"SingleEnd"`},{value:`"SingleAuto"`},{value:`"Multiple"`}]}},separators:{defaultValue:{value:`"All"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Defines the item separator style that is used.`,name:`separators`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`"All"`},type:{name:`enum`,raw:`"None" | ListSeparator | "All" | "Inner"`,value:[{value:`"None"`},{value:`"All"`,description:`Separators between the items including the last and the first one.`,fullComment:`Separators between the items including the last and the first one.
@public`,tags:{public:``}},{value:`"Inner"`,description:`Separators between the items.
Note: This enumeration depends on the theme.`,fullComment:`Separators between the items.
Note: This enumeration depends on the theme.
@public`,tags:{public:``}},{value:`"None"`,description:`No item separators.`,fullComment:`No item separators.
@public`,tags:{public:``}},{value:`"All"`},{value:`"Inner"`}]}},stickyHeader:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`}],description:`Indicates whether the List header is sticky or not.
If stickyHeader is set to true, then whenever you scroll the content or
the application, the header of the list will be always visible.

**Note:** Available since [v2.19.0](https://github.com/UI5/webcomponents/releases/tag/v2.19.0) of **@ui5/webcomponents**.`,name:`stickyHeader`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/List/index.d.ts`,name:`ListAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}export{a as n,i as t};