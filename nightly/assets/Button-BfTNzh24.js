import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DDACWNN1.js";import{n as r}from"./Button-C69-ub8X.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-button`,[`accessibilityAttributes`,`accessibleDescription`,`accessibleName`,`accessibleNameRef`,`accessibleRole`,`design`,`endIcon`,`form`,`icon`,`loadingDelay`,`tooltip`,`type`],[`disabled`,`loading`,`submits`],[`badge`],[`click`]),i.displayName=`Button`;try{i.displayName=`Button`,i.__docgenInfo={description:`The \`Button\` component represents a simple push button.
It enables users to trigger actions by clicking or tapping the \`Button\`, or by pressing
certain keyboard keys, such as Enter.

### Usage

For the \`Button\` UI, you can define text, icon, or both. You can also specify
whether the text or the icon is displayed first.

You can choose from a set of predefined types that offer different
styling to correspond to the triggered action.

You can set the \`Button\` as enabled or disabled. An enabled
\`Button\` can be pressed by clicking or tapping it. The button changes
its style to provide visual feedback to the user that it is pressed or hovered over with
the mouse cursor. A disabled \`Button\` appears inactive and cannot be pressed.



__Note:__ This is a UI5 Web Component! [Button UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Button) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`Button`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,methods:[],props:{badge:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonPropTypes`}],description:`Adds a badge to the button.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="badge"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<ButtonBadge>\``,name:`badge`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonPropTypes`}],description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

__Supported Node Type/s:__ \`Array<Node>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonPropTypes`}],description:`Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\` property is set to \`true\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ButtonDomRef, ButtonClickEventDetail>) => void`}},accessibilityAttributes:{defaultValue:{value:`{}`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`}],description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
Accepts the following string values: \`true\` or \`false\`

- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
Accepts the following string values: \`dialog\`, \`grid\`, \`listbox\`, \`menu\` or \`tree\`.

- **ariaLabel**: Defines the accessible ARIA name of the component.
Accepts any string value.

 - **ariaKeyShortcuts**: Defines keyboard shortcuts that activate or give focus to the button.

- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
Accepts a lowercase string value.

**Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:`accessibilityAttributes`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`},required:!1,tags:{default:`{}`},type:{name:`ButtonAccessibilityAttributes`}},accessibleDescription:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`}],description:`Defines the accessible description of the component.

**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:`accessibleDescription`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`}],description:`Defines the accessible ARIA name of the component.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`}],description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.1.0](https://github.com/UI5/webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleRole:{defaultValue:{value:`"Button"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`}],description:`Describes the accessibility role of the button.

**Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.

**Note:** Available since [v1.23](https://github.com/UI5/webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.`,name:`accessibleRole`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`},required:!1,tags:{default:`"Button"`},type:{name:`enum`,raw:`"Button" | ButtonAccessibleRole | "Link"`,value:[{value:`"Button"`},{value:`"Button"`,description:`Represents Default (button) ARIA role.`,fullComment:`Represents Default (button) ARIA role.
@public`,tags:{public:``}},{value:`"Link"`,description:`Represents the ARIA role "link".`,fullComment:`Represents the ARIA role "link".
@public`,tags:{public:``}},{value:`"Link"`}]}},design:{defaultValue:{value:`"Default"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`}],description:`Defines the component design.`,name:`design`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`},required:!1,tags:{default:`"Default"`},type:{name:`enum`,raw:`"Default" | "Positive" | "Negative" | ButtonDesign | "Transparent" | "Emphasized" | "Attention"`,value:[{value:`"Default"`},{value:`"Positive"`},{value:`"Negative"`},{value:`"Default"`,description:`default type (no special styling)`,fullComment:`default type (no special styling)
@public`,tags:{public:``}},{value:`"Positive"`,description:`accept type (green button)`,fullComment:`accept type (green button)
@public`,tags:{public:``}},{value:`"Negative"`,description:`reject style (red button)`,fullComment:`reject style (red button)
@public`,tags:{public:``}},{value:`"Transparent"`,description:`transparent type`,fullComment:`transparent type
@public`,tags:{public:``}},{value:`"Emphasized"`,description:`emphasized type`,fullComment:`emphasized type
@public`,tags:{public:``}},{value:`"Attention"`,description:`attention type`,fullComment:`attention type
@public`,tags:{public:``}},{value:`"Transparent"`},{value:`"Emphasized"`},{value:`"Attention"`}]}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`}],description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},endIcon:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`}],description:`Defines the icon, displayed as graphical element within the component after the button text.

**Note:** It is highly recommended to use \`endIcon\` property only together with \`icon\` and/or \`text\` properties.
Usage of \`endIcon\` only should be avoided.

The SAP-icons font provides numerous options.

Example:
See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:`endIcon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},form:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`}],description:`Associates the button with a form element by the form's \`id\` attribute.
When set, the button can submit or reset the specified form even if the button
is not a descendant of that form.

**Note:** This property takes effect only when the button's "type" property is set to "Submit" or "Reset".

**Note:** Available since [v2.21.0](https://github.com/UI5/webcomponents/releases/tag/v2.21.0) of **@ui5/webcomponents**.`,name:`form`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},icon:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`}],description:`Defines the icon, displayed as graphical element within the component.
The SAP-icons font provides numerous options.

Example:
See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:`icon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`}],description:`Defines whether the button shows a loading indicator.

**Note:** If set to \`true\`, a busy indicator component will be displayed on the related button.

**Note:** Available since [v2.13.0](https://github.com/UI5/webcomponents/releases/tag/v2.13.0) of **@ui5/webcomponents**.`,name:`loading`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},loadingDelay:{defaultValue:{value:`1000`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`}],description:`Specifies the delay in milliseconds before the loading indicator appears within the associated button.

**Note:** Available since [v2.13.0](https://github.com/UI5/webcomponents/releases/tag/v2.13.0) of **@ui5/webcomponents**.`,name:`loadingDelay`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`},required:!1,tags:{default:`1000`},type:{name:`number`}},submits:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`}],description:"When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** This property is only applicable within the context of an HTML Form element.`",name:`submits`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`},required:!1,tags:{default:`false`,deprecated:`Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},tooltip:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`}],description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.

**Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:`tooltip`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},type:{defaultValue:{value:`"Button"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`}],description:`Defines whether the button has special form-related functionality.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v1.15.0](https://github.com/UI5/webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:`type`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Button/index.d.ts`,name:`ButtonAttributes`},required:!1,tags:{default:`"Button"`},type:{name:`enum`,raw:`"Button" | ButtonType | "Submit" | "Reset"`,value:[{value:`"Button"`},{value:`"Button"`,description:`The button does not do anything special when inside a form`,fullComment:`The button does not do anything special when inside a form
@public`,tags:{public:``}},{value:`"Submit"`,description:`The button acts as a submit button (submits a form)`,fullComment:`The button acts as a submit button (submits a form)
@public`,tags:{public:``}},{value:`"Reset"`,description:`The button acts as a reset button (resets a form)`,fullComment:`The button acts as a reset button (resets a form)
@public`,tags:{public:``}},{value:`"Submit"`},{value:`"Reset"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}export{a as n,i as t};