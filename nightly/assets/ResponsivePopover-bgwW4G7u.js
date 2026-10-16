import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DDACWNN1.js";import{n as r}from"./ResponsivePopover-vpwegrgd.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-responsive-popover`,[`accessibleDescription`,`accessibleDescriptionRef`,`accessibleName`,`accessibleNameRef`,`accessibleRole`,`headerText`,`horizontalAlign`,`initialFocus`,`opener`,`placement`,`verticalAlign`],[`allowTargetOverlap`,`hideArrow`,`modal`,`open`,`preventFocusRestore`,`preventInitialFocus`,`resizable`],[`footer`,`header`],[`before-close`,`before-open`,`close`,`open`]),i.displayName=`ResponsivePopover`;try{i.displayName=`ResponsivePopover`,i.__docgenInfo={description:`The \`ResponsivePopover\` acts as a Popover on desktop and tablet, while on phone it acts as a Dialog.
The component improves tremendously the user experience on mobile.

### Usage
Use it when you want to make sure that all the content is visible on any device.



__Note:__ This is a UI5 Web Component! [ResponsivePopover UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ResponsivePopover) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`ResponsivePopover`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverPropTypes`}],description:`Defines the content of the Popup.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},footer:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverPropTypes`}],description:`Defines the footer HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`footer`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},header:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverPropTypes`}],description:`Defines the header HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`header`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onBeforeClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverPropTypes`}],description:`Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:`onBeforeClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ResponsivePopoverDomRef, PopupBeforeCloseEventDetail>) => void`}},onBeforeOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverPropTypes`}],description:`Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:`onBeforeOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void`}},onClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverPropTypes`}],description:`Fired after the component is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void`}},onOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverPropTypes`}],description:`Fired after the component is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ResponsivePopoverDomRef, never>) => void`}},accessibleDescription:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Defines the accessible description of the component.

**Note:** Available since [v2.11.0](https://github.com/UI5/webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:`accessibleDescription`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleDescriptionRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Receives id(or many ids) of the elements that describe the component.

**Note:** Available since [v2.11.0](https://github.com/UI5/webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:`accessibleDescriptionRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Defines the accessible name of the component.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/UI5/webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleRole:{defaultValue:{value:`"Dialog"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:`accessibleRole`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`"Dialog"`},type:{name:`enum`,raw:`"None" | PopupAccessibleRole | "Dialog" | "AlertDialog"`,value:[{value:`"None"`},{value:`"None"`,description:`Represents no ARIA role.`,fullComment:`Represents no ARIA role.
@public`,tags:{public:``}},{value:`"Dialog"`,description:`Represents the ARIA role "dialog".`,fullComment:`Represents the ARIA role "dialog".
@public`,tags:{public:``}},{value:`"AlertDialog"`,description:`Represents the ARIA role "alertdialog".`,fullComment:`Represents the ARIA role "alertdialog".
@public`,tags:{public:``}},{value:`"Dialog"`},{value:`"AlertDialog"`}]}},allowTargetOverlap:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Determines if there is no enough space, the component can be placed
over the target.`,name:`allowTargetOverlap`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},headerText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:"Defines the header text.\n\n**Note:** If `header` slot is provided, the `headerText` is ignored.",name:`headerText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},hideArrow:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Determines whether the component arrow is hidden.`,name:`hideArrow`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},horizontalAlign:{defaultValue:{value:`"Center"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Determines the horizontal alignment of the component.`,name:`horizontalAlign`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`"Center"`},type:{name:`enum`,raw:`"Center" | PopoverHorizontalAlign | "Start" | "End" | "Stretch"`,value:[{value:`"Center"`},{value:`"Center"`,description:`Popover is centered.`,fullComment:`Popover is centered.
@public`,tags:{public:``}},{value:`"Start"`,description:`Popover is aligned with the start of the target.`,fullComment:`Popover is aligned with the start of the target.
@public`,tags:{public:``}},{value:`"End"`,description:`Popover is aligned with the end of the target.`,fullComment:`Popover is aligned with the end of the target.
@public`,tags:{public:``}},{value:`"Stretch"`,description:`Popover is stretched.`,fullComment:`Popover is stretched.
@public`,tags:{public:``}},{value:`"Start"`},{value:`"End"`},{value:`"Stretch"`}]}},initialFocus:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:`initialFocus`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},modal:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Defines whether the component should close when
clicking/tapping outside the popover.
If enabled, it blocks any interaction with the background.`,name:`modal`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},open:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:`open`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},opener:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Defines the ID or DOM Reference of the element at which the popover is shown.
When using this attribute in a declarative way, you must only use the \`id\` (as a string) of the element at which you want to show the popover.
You can only set the \`opener\` attribute to a DOM Reference when using JavaScript.

**Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:`opener`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`undefined`},type:{name:`enum`,raw:`string | HTMLElement`,value:[{value:`string`},{value:`HTMLElement`,description:`The **\`HTMLElement\`** interface represents any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement)`,fullComment:`The **\`HTMLElement\`** interface represents any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement)`,tags:{}}]}},placement:{defaultValue:{value:`"End"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Determines on which side the component is placed at.`,name:`placement`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`"End"`},type:{name:`enum`,raw:`"Start" | "End" | PopoverPlacement | "Top" | "Bottom"`,value:[{value:`"Start"`},{value:`"End"`},{value:`"Start"`,description:`Popover will be placed at the start of the reference element.`,fullComment:`Popover will be placed at the start of the reference element.
@public`,tags:{public:``}},{value:`"End"`,description:`Popover will be placed at the end of the reference element.`,fullComment:`Popover will be placed at the end of the reference element.
@public`,tags:{public:``}},{value:`"Top"`,description:`Popover will be placed at the top of the reference element.`,fullComment:`Popover will be placed at the top of the reference element.
@public`,tags:{public:``}},{value:`"Bottom"`,description:`Popover will be placed at the bottom of the reference element.`,fullComment:`Popover will be placed at the bottom of the reference element.
@public`,tags:{public:``}},{value:`"Top"`},{value:`"Bottom"`}]}},preventFocusRestore:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.`,name:`preventFocusRestore`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},preventInitialFocus:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Indicates whether initial focus should be prevented.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:`preventInitialFocus`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},resizable:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Determines whether the component is resizable.
**Note:** This property is effective only on desktop devices.

**Note:** Available since [v2.19.0](https://github.com/UI5/webcomponents/releases/tag/v2.19.0) of **@ui5/webcomponents**.`,name:`resizable`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},verticalAlign:{defaultValue:{value:`"Center"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`}],description:`Determines the vertical alignment of the component.`,name:`verticalAlign`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ResponsivePopover/index.d.ts`,name:`ResponsivePopoverAttributes`},required:!1,tags:{default:`"Center"`},type:{name:`enum`,raw:`"Center" | "Stretch" | "Top" | "Bottom" | PopoverVerticalAlign`,value:[{value:`"Center"`},{value:`"Stretch"`},{value:`"Top"`},{value:`"Bottom"`},{value:`"Center"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Top"`,description:`Popover will be placed at the top of the reference control.`,fullComment:`Popover will be placed at the top of the reference control.
@public`,tags:{public:``}},{value:`"Bottom"`,description:`Popover will be placed at the bottom of the reference control.`,fullComment:`Popover will be placed at the bottom of the reference control.
@public`,tags:{public:``}},{value:`"Stretch"`,description:`Popover will be streched`,fullComment:`Popover will be streched
@public`,tags:{public:``}}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}export{a as n,i as t};