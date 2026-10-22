import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DhD1x6sB.js";import{n as r}from"./ListItemStandard-sPE4J0Jx.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-li`,[`accessibilityAttributes`,`accessibleName`,`accessibleRole`,`additionalText`,`additionalTextState`,`description`,`highlight`,`icon`,`text`,`tooltip`,`type`,`wrappingType`],[`iconEnd`,`movable`,`navigated`,`selected`],[`deleteButton`,`image`],[`click`,`detail-click`]),i.displayName=`ListItemStandard`;try{i.displayName=`ListItemStandard`,i.__docgenInfo={description:"The `ListItemStandard` represents the simplest type of item for a `List`.\n\nThis is a list item,\nproviding the most common use cases such as `text`,\n`image` and `icon`.\n\n__Note:__ This is a UI5 Web Component! [ListItemStandard UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ListItemStandard) | [Repository](https://github.com/UI5/webcomponents)",displayName:`ListItemStandard`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`}],description:'Defines the custom formatted text of the component.\n\n**Note:** For optimal text wrapping and a consistent layout, it is strongly recommended to use the `text` property.\n\nUse the `default` slot only when custom formatting with HTML elements (e.g., `<b>`, `<i>`) is required.\nBe aware that wrapping (via `wrappingType="Normal"`) may not function correctly with custom HTML content in the `default` slot.\n\nIf both `text` and `default` slot are used, the `text` property takes precedence.\n\n__Supported Node Type/s:__ `Array<Node>`',name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},deleteButton:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`}],description:`Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the \`Button\` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.9.0](https://github.com/UI5/webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<IButton>\``,name:`deleteButton`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},image:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`}],description:`**Note:** While the slot allows option for setting custom avatar, to match the
design guidelines, please use the \`Avatar\` with it's default size - S.

**Note:** If bigger \`Avatar\` needs to be used, then the size of the
\`ListItemStandard\` should be customized in order to fit.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="image"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`image`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`}],description:`Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\` property is set to \`true\`.

**Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListItemStandardDomRef, ListItemBaseClickEventDetail>) => void`}},onDetailClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`}],description:`Fired when the user clicks on the detail button when type is \`Detail\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onDetailClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListItemStandardDomRef, never>) => void`}},accessibilityAttributes:{defaultValue:{value:`{}`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
**Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set \`-1\`.

	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.

**Note:** Available since [v1.15.0](https://github.com/UI5/webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:`accessibilityAttributes`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`{}`},type:{name:`ListItemAccessibilityAttributes`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines the text alternative of the component.
Note: If not provided a default text alternative will be set, if present.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleRole:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:"Used to define the role of the list item.\n\n**Note:** If not set, the role is automatically inherited from the parent `List` based on its `accessible-role` property\n(e.g. `Menu` -> `MenuItem`, `Tree` -> `TreeItem`, `ListBox` -> `Option`).\nAn explicitly set `accessible-role` on the list item takes precedence over the inherited role.\n\n**Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents**.",name:`accessibleRole`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`undefined`},type:{name:`enum`,raw:`"None" | ListItemAccessibleRole | "ListItem" | "MenuItem" | "TreeItem" | "Option"`,value:[{value:`"None"`},{value:`"ListItem"`,description:`Represents the ARIA role "listitem". (by default)`,fullComment:`Represents the ARIA role "listitem". (by default)
@public`,tags:{public:``}},{value:`"MenuItem"`,description:`Represents the ARIA role "menuitem".`,fullComment:`Represents the ARIA role "menuitem".
@public`,tags:{public:``}},{value:`"TreeItem"`,description:`Represents the ARIA role "treeitem".`,fullComment:`Represents the ARIA role "treeitem".
@public`,tags:{public:``}},{value:`"Option"`,description:`Represents the ARIA role "option".`,fullComment:`Represents the ARIA role "option".
@public`,tags:{public:``}},{value:`"None"`,description:`Represents the ARIA role "none".`,fullComment:`Represents the ARIA role "none".
@public`,tags:{public:``}},{value:`"ListItem"`},{value:`"MenuItem"`},{value:`"TreeItem"`},{value:`"Option"`}]}},additionalText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines the \`additionalText\`, displayed in the end of the list item.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`additionalText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},additionalTextState:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:'Defines the state of the `additionalText`.\n\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.\n\n**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.',name:`additionalTextState`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Critical" | ValueState | "Positive" | "Negative" | "Information"`,value:[{value:`"None"`},{value:`"Critical"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`},{value:`"Negative"`},{value:`"Information"`}]}},description:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines the description displayed right under the item text, if such is present.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`description`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},highlight:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:'Defines the highlight state of the list items.\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.\n\n**Note:** Available since [v1.24.0](https://github.com/UI5/webcomponents/releases/tag/v1.24.0) of **@ui5/webcomponents**.',name:`highlight`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Critical" | "Positive" | "Negative" | "Information" | Highlight`,value:[{value:`"None"`},{value:`"Critical"`},{value:`"Positive"`},{value:`"Negative"`},{value:`"Information"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}}]}},icon:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines the \`icon\` source URI.

**Note:**
SAP-icons font provides numerous built-in icons. To find all the available icons, see the
[Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:`icon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},iconEnd:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:"Defines whether the `icon` should be displayed in the beginning of the list item or in the end.",name:`iconEnd`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},movable:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines whether the item is movable.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:`movable`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},navigated:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`The navigated state of the list item.
If set to \`true\`, a navigation indicator is displayed at the end of the list item.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:`navigated`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},selected:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines the selected state of the component.`,name:`selected`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines the text of the component.

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},tooltip:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines the text of the tooltip that would be displayed for the list item.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:`tooltip`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},type:{defaultValue:{value:`"Active"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:"Defines the visual indication and behavior of the list items.\nAvailable options are `Active` (by default), `Inactive`, `InactiveSelectable`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,\nwhile with type `Inactive`, `InactiveSelectable` and `Detail` - will not.\n\n**Note:** `InactiveSelectable` behaves like `Inactive` (no active press/hover feedback and the\n`item-click` event is not fired), but the item can still be selected. Clicking the item body,\npressing Space/Enter, or interacting with the selection component (checkbox in Multi mode, radio\nbutton in Single modes) toggles the selection when the list has a selection mode.",name:`type`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`"Active"`},type:{name:`enum`,raw:`"Navigation" | ListItemType | "Inactive" | "InactiveSelectable" | "Active" | "Detail"`,value:[{value:`"Navigation"`},{value:`"Inactive"`,description:`Indicates the list item does not have any active feedback when item is pressed.`,fullComment:`Indicates the list item does not have any active feedback when item is pressed.
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
@public`,tags:{public:``}},{value:`"Inactive"`},{value:`"InactiveSelectable"`},{value:`"Active"`},{value:`"Detail"`}]}},wrappingType:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`}],description:`Defines if the text of the component should wrap when it's too long.
When set to "Normal", the content (title, description) will be wrapped
using the \`ExpandableText\` component.<br/>

The text can wrap up to 100 characters on small screens (size S) and
up to 300 characters on larger screens (size M and above). When text exceeds
these limits, it truncates with an ellipsis followed by a text expansion trigger.

Available options are:
- \`None\` (default) - The text will truncate with an ellipsis.
- \`Normal\` - The text will wrap (without truncation).

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:`wrappingType`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemStandard/index.d.ts`,name:`ListItemStandardAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | WrappingType | "Normal"`,value:[{value:`"None"`},{value:`"None"`,description:`The text will be truncated with an ellipsis.`,fullComment:`The text will be truncated with an ellipsis.
@public`,tags:{public:``}},{value:`"Normal"`,description:`The text will wrap. The words will not be broken based on hyphenation.`,fullComment:`The text will wrap. The words will not be broken based on hyphenation.
@public`,tags:{public:``}},{value:`"Normal"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}export{a as n,i as t};