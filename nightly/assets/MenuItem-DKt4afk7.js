import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DDACWNN1.js";import{r}from"./MenuItem-Bg1w7D7n.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-menu-item`,[`accessibilityAttributes`,`accessibleName`,`accessibleRole`,`additionalText`,`highlight`,`icon`,`loadingDelay`,`text`,`tooltip`,`type`],[`checked`,`disabled`,`loading`,`navigated`,`selected`],[`deleteButton`,`endContent`],[`before-close`,`before-open`,`check`,`click`,`close`,`detail-click`,`open`]),i.displayName=`MenuItem`;try{i.displayName=`MenuItem`,i.__docgenInfo={description:"`MenuItem` is the item to use inside a `Menu`.\nAn arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n### Usage\n\n`MenuItem` represents a node in a `Menu`. The menu itself is rendered as a list,\nand each `MenuItem` is represented by a list item in that list. Therefore, you should only use\n`MenuItem` directly in your apps. The `ListItemStandard` list item is internal for the list, and not intended for public use.\n\n\n\n__Note:__ This is a UI5 Web Component! [MenuItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/MenuItem) | [Repository](https://github.com/UI5/webcomponents)",displayName:`MenuItem`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`}],description:"Defines the items of this component.\n\n**Note:** The slot can hold menu item and menu separator items.\n\nIf there are items added to this slot, an arrow will be displayed at the end\nof the item in order to indicate that there are items added. In that case components added\nto `endContent` slot or `additionalText` content will not be displayed.\n\nThe priority of what will be displayed at the end of the menu item is as follows:\nsub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.\n\n__Supported Node Type/s:__ `Array<IMenuItem>`",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},deleteButton:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`}],description:`Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the \`Button\` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.9.0](https://github.com/UI5/webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<IButton>\``,name:`deleteButton`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},endContent:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`}],description:"Defines the components that should be displayed at the end of the menu item.\n\n**Note:** It is highly recommended to slot only components of type `Button`,`Link`\nor `Icon` in order to preserve the intended design. If there are components added to this slot,\nand there is text set in `additionalText`, it will not be displayed. If there are items added to `items` slot,\nnether `additionalText` nor components added to this slot would be displayed.\n\nThe priority of what will be displayed at the end of the menu item is as follows:\nsub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.\n\nApplication developers are responsible for ensuring that interactive elements placed in the `endContent` slot\nhave the correct accessibility behaviour, including their enabled or disabled states.\nThe menu does not manage these aspects when the menu item state changes.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"endContent\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).\n\n**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.\n\n__Supported Node Type/s:__ `Array<HTMLElement>`",name:`endContent`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onBeforeClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`}],description:`Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:`onBeforeClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<MenuItemDomRef, MenuBeforeCloseEventDetail>) => void`}},onBeforeOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`}],description:`Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening.

**Note:** Since 1.14.0 the event is also fired before a sub-menu opens.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:`onBeforeOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<MenuItemDomRef, MenuBeforeOpenEventDetail>) => void`}},onCheck:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`}],description:`Fired when an item is checked or unchecked.

**Note:** Available since [v2.12.0](https://github.com/UI5/webcomponents/releases/tag/v2.12.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onCheck`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<MenuItemDomRef, never>) => void`}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`}],description:`Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\` property is set to \`true\`.

**Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<MenuItemDomRef, ListItemBaseClickEventDetail>) => void`}},onClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`}],description:`Fired after the menu is closed.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<MenuItemDomRef, never>) => void`}},onDetailClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`}],description:`Fired when the user clicks on the detail button when type is \`Detail\`.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onDetailClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<MenuItemDomRef, never>) => void`}},onOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`}],description:`Fired after the menu is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<MenuItemDomRef, never>) => void`}},accessibilityAttributes:{defaultValue:{value:`{}`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`}],description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **ariaKeyShortcuts**: Indicated the availability of a keyboard shortcuts defined for the menu item.

- **role**: Defines the role of the menu item. If not set, menu item will have default role="menuitem".

**Note:** Available since [v2.1.0](https://github.com/UI5/webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.`,name:`accessibilityAttributes`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`},required:!1,tags:{default:`{}`},type:{name:`MenuItemAccessibilityAttributes`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`}],description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.7.0](https://github.com/UI5/webcomponents/releases/tag/v1.7.0) of **@ui5/webcomponents**.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleRole:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`}],description:"Used to define the role of the list item.\n\n**Note:** If not set, the role is automatically inherited from the parent `List` based on its `accessible-role` property\n(e.g. `Menu` -> `MenuItem`, `Tree` -> `TreeItem`, `ListBox` -> `Option`).\nAn explicitly set `accessible-role` on the list item takes precedence over the inherited role.\n\n**Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents**.",name:`accessibleRole`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`enum`,raw:`"None" | ListItemAccessibleRole | "ListItem" | "MenuItem" | "TreeItem" | "Option"`,value:[{value:`"None"`},{value:`"ListItem"`,description:`Represents the ARIA role "listitem". (by default)`,fullComment:`Represents the ARIA role "listitem". (by default)
@public`,tags:{public:``}},{value:`"MenuItem"`,description:`Represents the ARIA role "menuitem".`,fullComment:`Represents the ARIA role "menuitem".
@public`,tags:{public:``}},{value:`"TreeItem"`,description:`Represents the ARIA role "treeitem".`,fullComment:`Represents the ARIA role "treeitem".
@public`,tags:{public:``}},{value:`"Option"`,description:`Represents the ARIA role "option".`,fullComment:`Represents the ARIA role "option".
@public`,tags:{public:``}},{value:`"None"`,description:`Represents the ARIA role "none".`,fullComment:`Represents the ARIA role "none".
@public`,tags:{public:``}},{value:`"ListItem"`},{value:`"MenuItem"`},{value:`"TreeItem"`},{value:`"Option"`}]}},additionalText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`}],description:"Defines the `additionalText`, displayed in the end of the menu item.\n\n**Note:** The additional text will not be displayed if there are items added in `items` slot or there are\ncomponents added to `endContent` slot.\n\nThe priority of what will be displayed at the end of the menu item is as follows:\nsub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.\n\n**Note:** Available since [v1.8.0](https://github.com/UI5/webcomponents/releases/tag/v1.8.0) of **@ui5/webcomponents**.",name:`additionalText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},checked:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`}],description:`Defines whether menu item is in checked state.

**Note:** checked state is only taken into account when menu item is added to menu item group
with \`checkMode\` other than \`None\`.

**Note:** A checked menu item has a checkmark displayed at its end.

**Note:** Available since [v2.12.0](https://github.com/UI5/webcomponents/releases/tag/v2.12.0) of **@ui5/webcomponents**.`,name:`checked`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`}],description:`Defines whether menu item is in disabled state.

**Note:** A disabled menu item is noninteractive.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},highlight:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`}],description:'Defines the highlight state of the list items.\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.\n\n**Note:** Available since [v1.24](https://github.com/UI5/webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.',name:`highlight`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Positive" | "Critical" | "Negative" | "Information" | Highlight`,value:[{value:`"None"`},{value:`"Positive"`},{value:`"Critical"`},{value:`"Negative"`},{value:`"Information"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}}]}},icon:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`}],description:`Defines the icon to be displayed as graphical element within the component.
The SAP-icons font provides numerous options.

**Example:**

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:`icon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`}],description:`Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding menu popover.

**Note:** If set to \`true\` a busy indicator component will be displayed into the related one to the current menu item sub-menu popover.

**Note:** Available since [v1.13.0](https://github.com/UI5/webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:`loading`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},loadingDelay:{defaultValue:{value:`1000`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`}],description:`Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding menu popover.

**Note:** Available since [v1.13.0](https://github.com/UI5/webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:`loadingDelay`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`},required:!1,tags:{default:`1000`},type:{name:`number`}},navigated:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`}],description:`The navigated state of the list item.
If set to \`true\`, a navigation indicator is displayed at the end of the list item.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:`navigated`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},selected:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`}],description:`Defines the selected state of the component.`,name:`selected`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`}],description:`Defines the text of the tree item.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},tooltip:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`}],description:`Defines the text of the tooltip for the menu item.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:`tooltip`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},type:{defaultValue:{value:`"Active"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`}],description:"Defines the visual indication and behavior of the list items.\nAvailable options are `Active` (by default), `Inactive`, `InactiveSelectable`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,\nwhile with type `Inactive`, `InactiveSelectable` and `Detail` - will not.\n\n**Note:** `InactiveSelectable` behaves like `Inactive` (no active press/hover feedback and the\n`item-click` event is not fired), but the item can still be selected. Clicking the item body,\npressing Space/Enter, or interacting with the selection component (checkbox in Multi mode, radio\nbutton in Single modes) toggles the selection when the list has a selection mode.",name:`type`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItem/index.d.ts`,name:`MenuItemAttributes`},required:!1,tags:{default:`"Active"`},type:{name:`enum`,raw:`ListItemType | "Inactive" | "InactiveSelectable" | "Active" | "Detail" | "Navigation"`,value:[{value:`"Inactive"`,description:`Indicates the list item does not have any active feedback when item is pressed.`,fullComment:`Indicates the list item does not have any active feedback when item is pressed.
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

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[1.3.0](https://github.com/UI5/webcomponents/releases/tag/v1.3.0) of __@ui5/webcomponents__.`}}}catch{}})))()}export{a as n,i as t};