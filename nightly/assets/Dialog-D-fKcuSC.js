import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DhD1x6sB.js";import{n as r}from"./Dialog-CDRZyI9S.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-dialog`,[`accessibleDescription`,`accessibleDescriptionRef`,`accessibleName`,`accessibleNameRef`,`accessibleRole`,`headerText`,`initialFocus`,`state`],[`draggable`,`open`,`preventFocusRestore`,`preventInitialFocus`,`resizable`,`showFullscreenButton`,`stretch`],[`footer`,`header`],[`before-close`,`before-open`,`close`,`open`]),i.displayName=`Dialog`;try{i.displayName=`Dialog`,i.__docgenInfo={description:`The \`Dialog\` component is used to temporarily display some information in a
size-limited window in front of the regular app screen.
It is used to prompt the user for an action or a confirmation.
The \`Dialog\` interrupts the current app processing as it is the only focused UI element and
the main screen is dimmed/blocked.
The dialog combines concepts known from other technologies where the windows have
names such as dialog box, dialog window, pop-up, pop-up window, alert box, or message box.

The \`Dialog\` is modal, which means that a user action is required before it is possible to return to the parent window.
To open multiple dialogs, each dialog element should be separate in the markup. This will ensure the correct modal behavior. Avoid nesting dialogs within each other.
The content of the \`Dialog\` is fully customizable.

### Structure
A \`Dialog\` consists of a header, content, and a footer for action buttons.
The \`Dialog\` is usually displayed at the center of the screen.
Its position can be changed by the user. To enable this, you need to set the property \`draggable\` accordingly.


### Responsive Behavior
The \`stretch\` property can be used to stretch the \`Dialog\` to full screen. For better usability, it's recommended to stretch the dialog to full screen on phone devices.

**Note:** When a \`Bar\` is used in the header or in the footer, you should remove the default dialog's paddings.

For more information see the sample "Bar in Header/Footer".

### Keyboard Handling

#### Basic Navigation
When the \`Dialog\` has the \`draggable\` property set to \`true\`, the user can move the dialog
with the following keyboard shortcuts:

- [Up] or [Down] arrow keys - Move the dialog up/down.
- [Left] or [Right] arrow keys - Move the dialog left/right.

#### Resizing
When the \`Dialog\` has the \`resizable\` property set to \`true\`, the user can change the size of the dialog
with the following keyboard shortcuts:

- [Shift] + [Up] or [Down] - Decrease/Increase the height of the dialog.
- [Shift] + [Left] or [Right] - Decrease/Increase the width of the dialog.

#### Fullscreen
When the \`Dialog\` has the \`showFullscreenButton\` property set to \`true\`, the user can toggle fullscreen mode
with the following keyboard shortcut:

- [Shift] + [Ctrl] + [F] - Toggle fullscreen mode.



__Note:__ This is a UI5 Web Component! [Dialog UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Dialog) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`Dialog`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`}],description:`Defines the content of the Popup.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},footer:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`}],description:`Defines the footer HTML Element.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="footer"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`footer`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},header:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`}],description:`Defines the header HTML Element.

**Note:** If \`header\` slot is provided, the labelling of the dialog is a responsibility of the application developer.
\`accessibleName\` should be used.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`header`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onBeforeClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`}],description:`Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:`onBeforeClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DialogDomRef, PopupBeforeCloseEventDetail>) => void`}},onBeforeOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`}],description:`Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|❌|`,name:`onBeforeOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DialogDomRef, never>) => void`}},onClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`}],description:`Fired after the component is closed.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DialogDomRef, never>) => void`}},onOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`}],description:`Fired after the component is opened.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<DialogDomRef, never>) => void`}},accessibleDescription:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Defines the accessible description of the component.

**Note:** Available since [v2.11.0](https://github.com/UI5/webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:`accessibleDescription`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleDescriptionRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Receives id(or many ids) of the elements that describe the component.

**Note:** Available since [v2.11.0](https://github.com/UI5/webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.`,name:`accessibleDescriptionRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Defines the accessible name of the component.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Defines the IDs of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/UI5/webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleRole:{defaultValue:{value:`"Dialog"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Allows setting a custom role.

**Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:`accessibleRole`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`"Dialog"`},type:{name:`enum`,raw:`"None" | PopupAccessibleRole | "Dialog" | "AlertDialog"`,value:[{value:`"None"`},{value:`"None"`,description:`Represents no ARIA role.`,fullComment:`Represents no ARIA role.
@public`,tags:{public:``}},{value:`"Dialog"`,description:`Represents the ARIA role "dialog".`,fullComment:`Represents the ARIA role "dialog".
@public`,tags:{public:``}},{value:`"AlertDialog"`,description:`Represents the ARIA role "alertdialog".`,fullComment:`Represents the ARIA role "alertdialog".
@public`,tags:{public:``}},{value:`"Dialog"`},{value:`"AlertDialog"`}]}},draggable:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Determines whether the component is draggable.
If this property is set to true, the Dialog will be draggable by its header.

**Note:** The component can be draggable only in desktop mode.

**Note:** This property overrides the default HTML "draggable" attribute native behavior.
When "draggable" is set to true, the native browser "draggable"
behavior is prevented and only the Dialog custom logic ("draggable by its header") works.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`draggable`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},headerText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:"Defines the header text.\n\n**Note:** If `header` slot is provided, the `headerText` is ignored.",name:`headerText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},initialFocus:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:"Defines the ID of the HTML Element, which will get the initial focus.\n\n**Note:** If an element with `autofocus` attribute is added inside the component,\n`initialFocus` won't take effect.",name:`initialFocus`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},open:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Indicates if the element is open

**Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:`open`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},preventFocusRestore:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Defines if the focus should be returned to the previously focused element,
when the popup closes.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`preventFocusRestore`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},preventInitialFocus:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Indicates whether initial focus should be prevented.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:`preventInitialFocus`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},resizable:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Configures the component to be resizable.
If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
In RTL languages, the resize handle will be placed in the bottom left corner.

**Note:** The component can be resizable only in desktop mode.

**Note:** Upon resizing, externally defined height and width styling will be ignored.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`resizable`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},showFullscreenButton:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Defines whether a fullscreen toggle button is shown in the dialog header.
When pressed, it toggles the \`stretch\` property.
The fullscreen button is not available on phone devices.

**Note:** The fullscreen button is not available on phone devices,
nor when a custom header slot is provided — the application is expected
to render its own toggle inside the custom header in those cases.

**Note:** Available since [v2.25.0](https://github.com/UI5/webcomponents/releases/tag/v2.25.0) of **@ui5/webcomponents**.`,name:`showFullscreenButton`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},state:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:'Defines the state of the `Dialog`.\n\n**Note:** If `"Negative"` and `"Critical"` states is set, it will change the\naccessibility role to "alertdialog", if the accessibleRole property is set to `"Dialog"`.\n\n**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.',name:`state`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Critical" | "Information" | ValueState | "Positive" | "Negative"`,value:[{value:`"None"`},{value:`"Critical"`},{value:`"Information"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`},{value:`"Negative"`}]}},stretch:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`}],description:`Determines if the dialog will be stretched to full screen on mobile. On desktop,
the dialog will be stretched to approximately 90% of the viewport.

**Note:** For better usability of the component it is recommended to set this property to "true" when the dialog is opened on phone.`,name:`stretch`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Dialog/index.d.ts`,name:`DialogAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}export{a as n,i as t};