import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DhD1x6sB.js";import{n as r}from"./Select-Bn-UEE1g.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-select`,[`accessibleDescription`,`accessibleDescriptionRef`,`accessibleName`,`accessibleNameRef`,`name`,`textSeparator`,`tooltip`,`value`,`valueState`],[`disabled`,`readonly`,`required`],[`label`,`valueStateMessage`],[`change`,`close`,`live-change`,`open`]),i.displayName=`Select`;try{i.displayName=`Select`,i.__docgenInfo={description:`The \`Select\` component is used to create a drop-down list.

### Usage

There are two main usages of the \`ui5-select>\`.

- With Option (\`Option\`) web component:

The available options of the Select are defined by using the Option component.
The Option comes with predefined design and layout, including \`icon\`, \`text\` and \`additional-text\`.

- With OptionCustom (\`OptionCustom\`) web component.

Options with custom content are defined by using the OptionCustom component.
The OptionCustom component comes with no predefined layout and it expects consumers to define it.

### Selection

The options can be selected via user interaction (click or with the use of the Space and Enter keys)
and programmatically - the Select component supports two distinct selection APIs, though mixing them is not supported:
- The "value" property of the Select component
- The "selected" property on individual options

**Note:** If the "value" property is set but does not match any option,
no option will be selected and the Select component will be displayed as empty.

**Note:** when both "value" and "selected" are both used (although discouraged),
the "value" property will take precedence.

### Keyboard Handling

The \`Select\` provides advanced keyboard handling.

- [F4] / [Alt] + [Up] / [Alt] + [Down] / [Space] or [Enter] - Opens/closes the drop-down.
- [Up] or [Down] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
- [Space], [Enter] - If the drop-down is opened - selects the focused option.
- [Escape] - Closes the drop-down without changing the selection.
- [Home] - Navigates to first option
- [End] - Navigates to the last option



\`import "@ui5/webcomponents/dist/Option";\`
\`import "@ui5/webcomponents/dist/OptionCustom";\`

__Note:__ This is a UI5 Web Component! [Select UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Select) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`Select`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectPropTypes`}],description:`Defines the component options.

**Note:** Only one selected option is allowed.
If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the \`Option\` component to define the desired options.
Use the \`OptionGroup\` component to group options.

__Supported Node Type/s:__ \`Array<IOption | IOptionGroup>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},label:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectPropTypes`}],description:`Defines the HTML element that will be displayed in the component input part,
representing the selected option.

**Note:** If not specified and \`OptionCustom\` is used,
either the option's \`display-text\` or its textContent will be displayed.

**Note:** If not specified and \`Option\` is used,
the option's textContent will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="label"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.17.0](https://github.com/UI5/webcomponents/releases/tag/v1.17.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`label`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},valueStateMessage:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectPropTypes`}],description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

**Note:** If the component has \`suggestionItems\`,
the \`valueStateMessage\` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`valueStateMessage`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectPropTypes`}],description:`Fired when the selected option changes.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<SelectDomRef, SelectChangeEventDetail>) => void`}},onClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectPropTypes`}],description:`Fired after the component's dropdown menu closes.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<SelectDomRef, never>) => void`}},onLiveChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectPropTypes`}],description:`Fired when the user navigates through the options, but the selection is not finalized,
or when pressing the ESC key to revert the current selection.

**Note:** Available since [v1.17.0](https://github.com/UI5/webcomponents/releases/tag/v1.17.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onLiveChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<SelectDomRef, SelectLiveChangeEventDetail>) => void`}},onOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectPropTypes`}],description:`Fired after the component's dropdown menu opens.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<SelectDomRef, never>) => void`}},accessibleDescription:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`}],description:`Defines the accessible description of the component.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:`accessibleDescription`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleDescriptionRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`}],description:`Receives id(or many ids) of the elements that describe the select.

**Note:** Available since [v2.14.0](https://github.com/UI5/webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:`accessibleDescriptionRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`}],description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`}],description:`Receives id(or many ids) of the elements that label the select.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`}],description:`Defines whether the component is in disabled state.

**Note:** A disabled component is noninteractive.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},name:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`}],description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:`name`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},readonly:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`}],description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.

**Note:** Available since [v1.21.0](https://github.com/UI5/webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.`,name:`readonly`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},required:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`}],description:`Defines whether the component is required.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`required`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},textSeparator:{defaultValue:{value:`"Dash"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`}],description:`Defines the separator type for the two columns layout when Select is in read-only mode.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:`textSeparator`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`},required:!1,tags:{default:`"Dash"`},type:{name:`enum`,raw:`SelectTextSeparator | "Bullet" | "Dash" | "VerticalLine"`,value:[{value:`"Bullet"`,description:`Will show bullet(·) as separator on two columns layout when Select is in read-only mode.`,fullComment:`Will show bullet(·) as separator on two columns layout when Select is in read-only mode.
@public`,tags:{public:``}},{value:`"Dash"`,description:`Will show N-dash(–) as separator on two columns layout when Select is in read-only mode.`,fullComment:`Will show N-dash(–) as separator on two columns layout when Select is in read-only mode.
@public`,tags:{public:``}},{value:`"VerticalLine"`,description:`Will show vertical line(|) as separator on two columns layout when Select is in read-only mode.`,fullComment:`Will show vertical line(|) as separator on two columns layout when Select is in read-only mode.
@public`,tags:{public:``}},{value:`"Bullet"`},{value:`"Dash"`},{value:`"VerticalLine"`}]}},tooltip:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`}],description:`Defines the tooltip of the select.

**Note:** Available since [v2.8.0](https://github.com/UI5/webcomponents/releases/tag/v2.8.0) of **@ui5/webcomponents**.`,name:`tooltip`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`}],description:`Defines the value of the component:

- when get - returns the value of the component or the value/text content of the selected option.
- when set - selects the option with matching \`value\` property or text content.

**Note:** Use either the Select's value or the Options' selected property.
Mixed usage could result in unexpected behavior.

**Note:** If the given value does not match any existing option,
no option will be selected and the Select component will be displayed as empty.

**Note:** Available since [v1.20.0](https://github.com/UI5/webcomponents/releases/tag/v1.20.0) of **@ui5/webcomponents**.`,name:`value`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`},required:!1,tags:{},type:{name:`string`}},valueState:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`}],description:`Defines the value state of the component.`,name:`valueState`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Select/index.d.ts`,name:`SelectAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Critical" | "Information" | ValueState | "Positive" | "Negative"`,value:[{value:`"None"`},{value:`"Critical"`},{value:`"Information"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`},{value:`"Negative"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents__.`}}}catch{}})))()}export{a as n,i as t};