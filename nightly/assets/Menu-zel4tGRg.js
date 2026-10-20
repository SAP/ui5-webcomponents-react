import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-CQvqGaAL.js";import{r}from"./Menu-CyZb5182.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-menu`,[`headerText`,`horizontalAlign`,`loadingDelay`,`opener`,`placement`],[`loading`,`open`],[],[`before-close`,`before-open`,`close`,`item-click`,`open`]),i.displayName=`Menu`;try{i.displayName=`Menu`,i.__docgenInfo={description:"`Menu` component represents a hierarchical menu structure.\n\n### Structure\n\nThe `Menu` can hold two types of entities:\n\n- `MenuItem` components\n- `MenuSeparator` - used to separate menu items with a line\n\nAn arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n### Keyboard Handling\n\nThe `Menu` provides advanced keyboard handling.\nThe user can use the following keyboard shortcuts in order to navigate trough the tree:\n\n- `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.\n- `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested\nin the currently clicked menu item.\n- `Arrow Left` or `Escape` - Closes the currently opened sub-menu.\n\nwhen there is `endContent` :\n- `Arrow Left` or `ArrowRight` - Navigate between the menu item actions and the menu item itself\n- `Arrow Up` / `Arrow Down` - Navigates up and down the currently visible menu items\n\n**Note:** If the text direction is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.\n\nApplication developers are responsible for ensuring that interactive elements placed in the `endContent` slot\nhave the correct accessibility behaviour, including their enabled or disabled states.\nThe menu does not manage these aspects when the menu item state changes.\n\n\n\n__Note:__ This is a UI5 Web Component! [Menu UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Menu) | [Repository](https://github.com/UI5/webcomponents)",displayName:`Menu`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuPropTypes`}],description:"Defines the items of this component.\n\n**Note:** Use `MenuItem` and `MenuSeparator` for their intended design.\n\n__Supported Node Type/s:__ `Array<IMenuItem>`",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},onBeforeClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuPropTypes`}],description:`Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onBeforeClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<MenuDomRef, MenuBeforeCloseEventDetail>) => void`}},onBeforeOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuPropTypes`}],description:`Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening.

**Note:** Since 1.14.0 the event is also fired before a sub-menu opens.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onBeforeOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<MenuDomRef, MenuBeforeOpenEventDetail>) => void`}},onClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuPropTypes`}],description:`Fired after the menu is closed.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<MenuDomRef, never>) => void`}},onItemClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuPropTypes`}],description:`Fired when an item is being clicked.

**Note:** Since 1.17.0 the event is preventable, allowing the menu to remain open after an item is pressed.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:`onItemClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<MenuDomRef, MenuItemClickEventDetail>) => void`}},onOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuPropTypes`}],description:`Fired after the menu is opened.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<MenuDomRef, never>) => void`}},headerText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuAttributes`}],description:`Defines the header text of the menu (displayed on mobile).`,name:`headerText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},horizontalAlign:{defaultValue:{value:`"Start"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuAttributes`}],description:`Determines the horizontal alignment of the menu relative to its opener control.`,name:`horizontalAlign`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuAttributes`},required:!1,tags:{default:`"Start"`},type:{name:`enum`,raw:`PopoverHorizontalAlign | "Center" | "Start" | "End" | "Stretch"`,value:[{value:`"Center"`,description:`Popover is centered.`,fullComment:`Popover is centered.
@public`,tags:{public:``}},{value:`"Start"`,description:`Popover is aligned with the start of the target.`,fullComment:`Popover is aligned with the start of the target.
@public`,tags:{public:``}},{value:`"End"`,description:`Popover is aligned with the end of the target.`,fullComment:`Popover is aligned with the end of the target.
@public`,tags:{public:``}},{value:`"Stretch"`,description:`Popover is stretched.`,fullComment:`Popover is stretched.
@public`,tags:{public:``}},{value:`"Center"`},{value:`"Start"`},{value:`"End"`},{value:`"Stretch"`}]}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuAttributes`}],description:`Defines if a loading indicator would be displayed inside the corresponding ui5-menu popover.

**Note:** Available since [v1.13.0](https://github.com/UI5/webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:`loading`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},loadingDelay:{defaultValue:{value:`1000`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuAttributes`}],description:`Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover.

**Note:** Available since [v1.13.0](https://github.com/UI5/webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:`loadingDelay`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuAttributes`},required:!1,tags:{default:`1000`},type:{name:`number`}},open:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuAttributes`}],description:`Indicates if the menu is open.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:`open`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},opener:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuAttributes`}],description:`Defines the ID or DOM Reference of the element at which the menu is shown.
When using this attribute in a declarative way, you must only use the \`id\` (as a string) of the element at which you want to show the popover.
You can only set the \`opener\` attribute to a DOM Reference when using JavaScript.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:`opener`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuAttributes`},required:!1,tags:{default:`undefined`},type:{name:`enum`,raw:`string | HTMLElement`,value:[{value:`string`},{value:`HTMLElement`,description:`The **\`HTMLElement\`** interface represents any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement)`,fullComment:`The **\`HTMLElement\`** interface represents any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement)`,tags:{}}]}},placement:{defaultValue:{value:`"Bottom"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuAttributes`}],description:`Determines on which side the component is placed at.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:`placement`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Menu/index.d.ts`,name:`MenuAttributes`},required:!1,tags:{default:`"Bottom"`},type:{name:`enum`,raw:`"Start" | "End" | PopoverPlacement | "Top" | "Bottom"`,value:[{value:`"Start"`},{value:`"End"`},{value:`"Start"`,description:`Popover will be placed at the start of the reference element.`,fullComment:`Popover will be placed at the start of the reference element.
@public`,tags:{public:``}},{value:`"End"`,description:`Popover will be placed at the end of the reference element.`,fullComment:`Popover will be placed at the end of the reference element.
@public`,tags:{public:``}},{value:`"Top"`,description:`Popover will be placed at the top of the reference element.`,fullComment:`Popover will be placed at the top of the reference element.
@public`,tags:{public:``}},{value:`"Bottom"`,description:`Popover will be placed at the bottom of the reference element.`,fullComment:`Popover will be placed at the bottom of the reference element.
@public`,tags:{public:``}},{value:`"Top"`},{value:`"Bottom"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[1.3.0](https://github.com/UI5/webcomponents/releases/tag/v1.3.0) of __@ui5/webcomponents__.`}}}catch{}})))()}export{a as n,i as t};