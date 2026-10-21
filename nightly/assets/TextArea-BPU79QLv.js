import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-CQvqGaAL.js";import{n as r}from"./TextArea-hZ7ckayv.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-textarea`,[`accessibleDescription`,`accessibleDescriptionRef`,`accessibleName`,`accessibleNameRef`,`growingMaxRows`,`maxlength`,`name`,`placeholder`,`rows`,`value`,`valueState`],[`disabled`,`growing`,`readonly`,`required`,`showExceededText`],[`valueStateMessage`],[`change`,`input`,`scroll`,`select`]),i.displayName=`TextArea`;try{i.displayName=`TextArea`,i.__docgenInfo={description:`The \`TextArea\` component is used to enter multiple rows of text.

When empty, it can hold a placeholder similar to a \`Input\`.
You can define the rows of the \`TextArea\` and also determine specific behavior when handling long texts.



__Note:__ This is a UI5 Web Component! [TextArea UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TextArea) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`TextArea`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,methods:[],props:{valueStateMessage:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaPropTypes`}],description:`Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed if the component has
\`valueState\` of type \`Information\`, \`Critical\` or \`Negative\`.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`valueStateMessage`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaPropTypes`}],description:`Fired when the text has changed and the focus leaves the component.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TextAreaDomRef, never>) => void`}},onInput:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaPropTypes`}],description:`Fired when the value of the component changes at each keystroke or when
something is pasted.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onInput`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TextAreaDomRef, TextAreaInputEventDetail>) => void`}},onScroll:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaPropTypes`}],description:`Fired when textarea is scrolled.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onScroll`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TextAreaDomRef, never>) => void`}},onSelect:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaPropTypes`}],description:`Fired when some text has been selected.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onSelect`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TextAreaDomRef, never>) => void`}},accessibleDescription:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines the accessible description of the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:`accessibleDescription`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleDescriptionRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Receives id(or many ids) of the elements that describe the textarea.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:`accessibleDescriptionRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines the accessible ARIA name of the component.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Receives id(or many ids) of the elements that label the textarea.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Indicates whether the user can interact with the component or not.

**Note:** A disabled component is completely noninteractive.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},growing:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Enables the component to automatically grow and shrink dynamically with its content.`,name:`growing`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},growingMaxRows:{defaultValue:{value:`0`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines the maximum number of rows that the component can grow.`,name:`growingMaxRows`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`0`},type:{name:`number`}},maxlength:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:"Defines the maximum number of characters that the `value` can have.",name:`maxlength`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`undefined`},type:{name:`number`}},name:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:`name`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},placeholder:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines a short hint intended to aid the user with data entry when the component has no value.`,name:`placeholder`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},readonly:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:`readonly`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},required:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines whether the component is required.`,name:`required`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},rows:{defaultValue:{value:`0`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines the number of visible text rows for the component.

**Notes:**

- If the \`growing\` property is enabled, this property defines the minimum rows to be displayed
in the textarea.
- The CSS \`height\` property wins over the \`rows\` property, if both are set.`,name:`rows`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`0`},type:{name:`number`}},showExceededText:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:"Determines whether the characters exceeding the maximum allowed character count are visible\nin the component.\n\nIf set to `false`, the user is not allowed to enter more characters than what is set in the\n`maxlength` property.\nIf set to `true` the characters exceeding the `maxlength` value are selected on\npaste and the counter below the component displays their number.",name:`showExceededText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},value:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines the value of the component.`,name:`value`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{},type:{name:`string`}},valueState:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`}],description:`Defines the value state of the component.

**Note:** If \`maxlength\` property is set,
the component turns into "Critical" state once the characters exceeds the limit.
In this case, only the "Negative" state is considered and can be applied.`,name:`valueState`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/TextArea/index.d.ts`,name:`TextAreaAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`ValueState | "None" | "Positive" | "Critical" | "Negative" | "Information"`,value:[{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"None"`},{value:`"Positive"`},{value:`"Critical"`},{value:`"Negative"`},{value:`"Information"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}export{a as n,i as t};