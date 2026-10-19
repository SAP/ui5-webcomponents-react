import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-CQvqGaAL.js";import{n as r}from"./Text-C6TxigMd.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-text`,[`emptyIndicatorMode`,`maxLines`],[],[],[]),i.displayName=`Text`;try{i.displayName=`Text`,i.__docgenInfo={description:`The \`Text\` component displays text that can be used in any content area of an application.

### Usage

- Use the \`Text\` if you want to display text inside a form, table, or any other content area.
- Do not use the \`Text\` if you need to reference input type of components (use ui5-label).

### Responsive behavior

The \`Text\` component is fully adaptive to all screen sizes.
By default, the text will wrap when the space is not enough.
In addition, the component supports truncation via the \`max-lines\` property,
by defining the number of lines the text should wrap before start truncating.



__Note:__ This is a UI5 Web Component! [Text UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Text) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`Text`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Text/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Text/index.d.ts`,name:`TextPropTypes`}],description:`Defines the text of the component.

__Supported Node Type/s:__ \`Array<Node>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Text/index.d.ts`,name:`TextPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},emptyIndicatorMode:{defaultValue:{value:`"Off"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Text/index.d.ts`,name:`TextAttributes`}],description:`Specifies if an empty indicator should be displayed when there is no text.

**Note:** Available since [v2.2.0](https://github.com/UI5/webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:`emptyIndicatorMode`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Text/index.d.ts`,name:`TextAttributes`},required:!1,tags:{default:`"Off"`},type:{name:`enum`,raw:`TextEmptyIndicatorMode | "Off" | "On"`,value:[{value:`"Off"`,description:`Empty indicator is never rendered.`,fullComment:`Empty indicator is never rendered.
@public`,tags:{public:``}},{value:`"On"`,description:`Empty indicator is rendered always when the component's content is empty.`,fullComment:`Empty indicator is rendered always when the component's content is empty.
@public`,tags:{public:``}},{value:`"Off"`},{value:`"On"`}]}},maxLines:{defaultValue:{value:`Infinity`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Text/index.d.ts`,name:`TextAttributes`}],description:`Defines the number of lines the text should wrap before it truncates.`,name:`maxLines`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Text/index.d.ts`,name:`TextAttributes`},required:!1,tags:{default:`Infinity`},type:{name:`number`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.`}}}catch{}})))()}export{a as n,i as t};