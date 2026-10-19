import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-CQvqGaAL.js";import{n as r}from"./Bar-tMCATTYs.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-bar`,[`accessibleName`,`accessibleNameRef`,`accessibleRole`,`design`],[],[`endContent`,`startContent`],[]),i.displayName=`Bar`;try{i.displayName=`Bar`,i.__docgenInfo={description:`The Bar is a container which is primarily used to hold titles, buttons and input elements
and its design and functionality is the basis for page headers and footers.
The component consists of three areas to hold its content - startContent slot, default slot and endContent slot.
It has the capability to center content, such as a title, while having other components on the left and right side.

### Usage
With the use of the design property, you can set the style of the Bar to appear designed like a Header, Subheader, Footer and FloatingFooter.

**Note:** Do not place a Bar inside another Bar or inside any bar-like component. Doing so may cause unpredictable behavior.

### Responsive Behavior
The default slot will be centered in the available space between the startContent and the endContent areas,
therefore it might not always be centered in the entire bar.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note:__ This is a UI5 Web Component! [Bar UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Bar) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`Bar`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Bar/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Bar/index.d.ts`,name:`BarPropTypes`}],description:`Defines the content in the middle of the bar.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Bar/index.d.ts`,name:`BarPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},endContent:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Bar/index.d.ts`,name:`BarPropTypes`}],description:`Defines the content at the end of the bar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="endContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`endContent`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Bar/index.d.ts`,name:`BarPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},startContent:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Bar/index.d.ts`,name:`BarPropTypes`}],description:`Defines the content at the start of the bar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="startContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`startContent`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Bar/index.d.ts`,name:`BarPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Bar/index.d.ts`,name:`BarAttributes`}],description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Bar/index.d.ts`,name:`BarAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Bar/index.d.ts`,name:`BarAttributes`}],description:`Receives id(or many ids) of the elements that label the bar.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Bar/index.d.ts`,name:`BarAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleRole:{defaultValue:{value:`"Toolbar"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Bar/index.d.ts`,name:`BarAttributes`}],description:`Specifies the ARIA role applied to the component for accessibility purposes.

**Note:**

- By default, accessibleRole is set to "Toolbar", which renders the ARIA role "toolbar".

- Use the default accessibleRole value "Toolbar" only when the component contains two or more active, interactive elements (such as buttons, links, or input fields) within the bar.

- If there is only one or no active element, set accessibleRole to "None" to avoid rendering the ARIA role "toolbar", as that role implies a grouping of multiple interactive controls.

**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.`,name:`accessibleRole`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Bar/index.d.ts`,name:`BarAttributes`},required:!1,tags:{default:`"Toolbar"`},type:{name:`enum`,raw:`"None" | BarAccessibleRole | "Toolbar"`,value:[{value:`"None"`},{value:`"Toolbar"`,description:`Represents the ARIA role "toolbar".`,fullComment:`Represents the ARIA role "toolbar".
@public`,tags:{public:``}},{value:`"None"`,description:`Represents the ARIA role "none".`,fullComment:`Represents the ARIA role "none".
@public`,tags:{public:``}},{value:`"Toolbar"`}]}},design:{defaultValue:{value:`"Header"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Bar/index.d.ts`,name:`BarAttributes`}],description:`Defines the component's design.`,name:`design`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Bar/index.d.ts`,name:`BarAttributes`},required:!1,tags:{default:`"Header"`},type:{name:`enum`,raw:`BarDesign | "Header" | "Subheader" | "Footer" | "FloatingFooter"`,value:[{value:`"Header"`,description:`Default type`,fullComment:`Default type
@public`,tags:{public:``}},{value:`"Subheader"`,description:`Subheader type`,fullComment:`Subheader type
@public`,tags:{public:``}},{value:`"Footer"`,description:`Footer type`,fullComment:`Footer type
@public`,tags:{public:``}},{value:`"FloatingFooter"`,description:`Floating Footer type - there is visible border on all sides`,fullComment:`Floating Footer type - there is visible border on all sides
@public`,tags:{public:``}},{value:`"Header"`},{value:`"Subheader"`},{value:`"Footer"`},{value:`"FloatingFooter"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}export{a as n,i as t};