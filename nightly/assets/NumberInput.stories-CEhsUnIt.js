import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{n,t as r}from"./withWebComponent-DDACWNN1.js";import{n as i,t as a}from"./ValueState-Cz7u0abQ.js";import{n as o}from"./NumberInput-BoXD6joC.js";var s;function c(){return(c=e((()=>{o(),r(),s=n(`ui5-number-input`,[`accessibleName`,`accessibleNameRef`,`max`,`min`,`name`,`step`,`value`,`valuePrecision`,`valueState`],[`disabled`,`readonly`],[`valueStateMessage`],[`change`,`input`,`value-state-change`]),s.displayName=`NumberInput`;try{s.displayName=`NumberInput`,s.__docgenInfo={description:`The \`NumberInput\` component is a numeric input field. It allows users to enter, edit and select numeric values.

### Usage

The default step is 1 but the app developer can set a different one.

App developers can set a maximum and minimum value for \`NumberInput\`.
The increase/decrease button and the up/down keyboard navigation become disabled when
the value reaches the max/min or a new value is entered from the input which is greater/less than the max/min.

#### When to use:

- To enter or adjust numeric values.
- To adjust values for a specific step.

#### When not to use:

- To enter a static number (for example, postal code, phone number, or ID). In this case,
use the regular \`Input\` instead.
- To enter dates and times. In this case, use date/time related components instead.



__Note:__ This is a UI5 Web Component! [NumberInput UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/NumberInput) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`NumberInput`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,methods:[],props:{valueStateMessage:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputPropTypes`}],description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`valueStateMessage`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputPropTypes`}],description:`Fired when the input operation has finished by pressing Enter or on focusout.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<NumberInputDomRef, never>) => void`}},onInput:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputPropTypes`}],description:`Fired when the value of the component changes at each keystroke.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onInput`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<NumberInputDomRef, never>) => void`}},onValueStateChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputPropTypes`}],description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if its default action is
prevented, the component will not update the value state.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onValueStateChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<NumberInputDomRef, NumberInputValueStateChangeEventDetail>) => void`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`}],description:`Defines the accessible ARIA name of the component.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`}],description:`Receives ID (or many IDs) of the elements that label the component.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`}],description:`Determines whether the component is displayed as disabled.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},max:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`}],description:`Defines a maximum value of the component.`,name:`max`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`number`}},min:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`}],description:`Defines a minimum value of the component.`,name:`min`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`number`}},name:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`}],description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:`name`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},readonly:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`}],description:`Determines whether the component is displayed as read-only.`,name:`readonly`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},step:{defaultValue:{value:`1`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`}],description:`Defines a step of increasing/decreasing the value of the component.`,name:`step`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`},required:!1,tags:{default:`1`},type:{name:`number`}},value:{defaultValue:{value:`0`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`}],description:`Defines a value of the component.`,name:`value`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`},required:!1,tags:{default:`0`},type:{name:`number`}},valuePrecision:{defaultValue:{value:`0`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`}],description:`Determines the number of digits after the decimal point of the component.`,name:`valuePrecision`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`},required:!1,tags:{default:`0`},type:{name:`number`}},valueState:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`}],description:`Defines the value state of the component.`,name:`valueState`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/NumberInput/index.d.ts`,name:`NumberInputAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | ValueState | "Positive" | "Critical" | "Negative" | "Information"`,value:[{value:`"None"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`},{value:`"Critical"`},{value:`"Negative"`},{value:`"Information"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.27.0](https://github.com/UI5/webcomponents/releases/tag/v2.27.0) of __@ui5/webcomponents__.`,experimental:``}}}catch{}})))()}var l=t({Default:()=>d,__namedExportsOrder:()=>f,default:()=>u}),u,d,f;function p(){return(p=e((()=>{a(),c(),u={title:`Inputs / NumberInput`,component:s,argTypes:{valueStateMessage:{control:{disable:!0}}},args:{valueState:i.None},tags:[`package:@ui5/webcomponents`,`experimental`]},d={},f=[`Default`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}}})))()}export{l as n,p as r,d as t};