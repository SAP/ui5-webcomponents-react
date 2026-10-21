import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DhD1x6sB.js";import{i as r}from"./List-BCDxANi7.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-li-custom`,[`accessibilityAttributes`,`accessibleName`,`accessibleRole`,`highlight`,`tooltip`,`type`],[`movable`,`navigated`,`selected`],[`deleteButton`],[`click`,`detail-click`]),i.displayName=`ListItemCustom`;try{i.displayName=`ListItemCustom`,i.__docgenInfo={description:`A component to be used as custom list item within the \`List\`
the same way as the standard \`ListItemStandard\`.

The component accepts arbitrary HTML content to allow full customization.

### Keyboard Handling

Interactive elements placed in the default slot (buttons, links, inputs, etc.)
are **not** reached by [Tab] from outside the list. This follows the SAP Fiori
"Intentional Edit Pattern" and preserves fast keyboard navigation between items.

To activate an interactive element inside a \`ListItemCustom\`:

- [F2] on the focused item - moves focus to the first interactive element inside the item.
  Pressing [F2] again returns focus to the item level.
- [F7] on the focused item - moves focus to the last remembered interactive element
  inside the item (or to the first interactive element if none is remembered).
  Pressing [F7] again saves the current position and returns focus to the item level.
- [Tab] or [Shift] + [Tab] then walks through the interactive elements within the item
  and continues into the next/previous item.
- [Up] or [Down] while focused on an interactive element moves focus to the element
  at the same index in the previous/next item; items with no interactive elements
  are skipped and \`ListItemGroup\` boundaries are crossed.

See the \`List\` "Keyboard Handling" section for the full behavior.

__Note:__ This is a UI5 Web Component! [ListItemCustom UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ListItemCustom) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`ListItemCustom`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomPropTypes`}],description:`Defines the content of the component.

__Supported Node Type/s:__ \`Array<Node>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},deleteButton:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomPropTypes`}],description:`Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the \`Button\` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.9.0](https://github.com/UI5/webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<IButton>\``,name:`deleteButton`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomPropTypes`}],description:`Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\` property is set to \`true\`.

**Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListItemCustomDomRef, ListItemBaseClickEventDetail>) => void`}},onDetailClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomPropTypes`}],description:`Fired when the user clicks on the detail button when type is \`Detail\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onDetailClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListItemCustomDomRef, never>) => void`}},accessibilityAttributes:{defaultValue:{value:`{}`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`}],description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
**Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set \`-1\`.

	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.

**Note:** Available since [v1.15.0](https://github.com/UI5/webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:`accessibilityAttributes`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`},required:!1,tags:{default:`{}`},type:{name:`ListItemAccessibilityAttributes`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`}],description:`Defines the text alternative of the component.

**Note**: If not provided a default text alternative will be set, if present.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleRole:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`}],description:"Used to define the role of the list item.\n\n**Note:** If not set, the role is automatically inherited from the parent `List` based on its `accessible-role` property\n(e.g. `Menu` -> `MenuItem`, `Tree` -> `TreeItem`, `ListBox` -> `Option`).\nAn explicitly set `accessible-role` on the list item takes precedence over the inherited role.\n\n**Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents**.",name:`accessibleRole`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`},required:!1,tags:{default:`undefined`},type:{name:`enum`,raw:`"None" | ListItemAccessibleRole | "ListItem" | "MenuItem" | "TreeItem" | "Option"`,value:[{value:`"None"`},{value:`"ListItem"`,description:`Represents the ARIA role "listitem". (by default)`,fullComment:`Represents the ARIA role "listitem". (by default)
@public`,tags:{public:``}},{value:`"MenuItem"`,description:`Represents the ARIA role "menuitem".`,fullComment:`Represents the ARIA role "menuitem".
@public`,tags:{public:``}},{value:`"TreeItem"`,description:`Represents the ARIA role "treeitem".`,fullComment:`Represents the ARIA role "treeitem".
@public`,tags:{public:``}},{value:`"Option"`,description:`Represents the ARIA role "option".`,fullComment:`Represents the ARIA role "option".
@public`,tags:{public:``}},{value:`"None"`,description:`Represents the ARIA role "none".`,fullComment:`Represents the ARIA role "none".
@public`,tags:{public:``}},{value:`"ListItem"`},{value:`"MenuItem"`},{value:`"TreeItem"`},{value:`"Option"`}]}},highlight:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`}],description:'Defines the highlight state of the list items.\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.\n\n**Note:** Available since [v1.24.0](https://github.com/UI5/webcomponents/releases/tag/v1.24.0) of **@ui5/webcomponents**.',name:`highlight`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Critical" | "Positive" | "Negative" | "Information" | Highlight`,value:[{value:`"None"`},{value:`"Critical"`},{value:`"Positive"`},{value:`"Negative"`},{value:`"Information"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}}]}},movable:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`}],description:`Defines whether the item is movable.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:`movable`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},navigated:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`}],description:`The navigated state of the list item.
If set to \`true\`, a navigation indicator is displayed at the end of the list item.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:`navigated`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},selected:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`}],description:`Defines the selected state of the component.`,name:`selected`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},tooltip:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`}],description:`Defines the text of the tooltip that would be displayed for the list item.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:`tooltip`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},type:{defaultValue:{value:`"Active"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`}],description:"Defines the visual indication and behavior of the list items.\nAvailable options are `Active` (by default), `Inactive`, `InactiveSelectable`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,\nwhile with type `Inactive`, `InactiveSelectable` and `Detail` - will not.\n\n**Note:** `InactiveSelectable` behaves like `Inactive` (no active press/hover feedback and the\n`item-click` event is not fired), but the item can still be selected. Clicking the item body,\npressing Space/Enter, or interacting with the selection component (checkbox in Multi mode, radio\nbutton in Single modes) toggles the selection when the list has a selection mode.",name:`type`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemCustom/index.d.ts`,name:`ListItemCustomAttributes`},required:!1,tags:{default:`"Active"`},type:{name:`enum`,raw:`ListItemType | "Inactive" | "InactiveSelectable" | "Active" | "Detail" | "Navigation"`,value:[{value:`"Inactive"`,description:`Indicates the list item does not have any active feedback when item is pressed.`,fullComment:`Indicates the list item does not have any active feedback when item is pressed.
@public`,tags:{public:``}},{value:`"InactiveSelectable"`,description:`Indicates the list item does not have any active feedback when item is pressed,
but the item can still be selected when a selection mode is active
(via the item body, Space/Enter, or the checkbox/radio).
The \`item-click\` event is not fired for items of this type.`,fullComment:`Indicates the list item does not have any active feedback when item is pressed,
but the item can still be selected when a selection mode is active
(via the item body, Space/Enter, or the checkbox/radio).
The \`item-click\` event is not fired for items of this type.
@public
@since 2.26.0`,tags:{public:``,since:`2.26.0`}},{value:`"Active"`,description:`Indicates that the item is clickable via active feedback when item is pressed.`,fullComment:`Indicates that the item is clickable via active feedback when item is pressed.
@public`,tags:{public:``}},{value:`"Detail"`,description:`Enables detail button of the list item that fires detail-click event.`,fullComment:`Enables detail button of the list item that fires detail-click event.
@public`,tags:{public:``}},{value:`"Navigation"`,description:`Enables the type of navigation, which is specified to add an arrow at the end of the items and fires navigate-click event.`,fullComment:`Enables the type of navigation, which is specified to add an arrow at the end of the items and fires navigate-click event.
@public`,tags:{public:``}},{value:`"Inactive"`},{value:`"InactiveSelectable"`},{value:`"Active"`},{value:`"Detail"`},{value:`"Navigation"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}export{a as n,i as t};