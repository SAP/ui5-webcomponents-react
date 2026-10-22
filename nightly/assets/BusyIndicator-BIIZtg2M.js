import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DhD1x6sB.js";import{n as r}from"./BusyIndicator-BPQ4DUax.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-busy-indicator`,[`delay`,`size`,`text`,`textPlacement`],[`active`],[],[]),i.displayName=`BusyIndicator`;try{i.displayName=`BusyIndicator`,i.__docgenInfo={description:`The \`BusyIndicator\` signals that some operation is going on and that the
user must wait. It does not block the current UI screen so other operations could be triggered in parallel.
It displays 3 dots and each dot expands and shrinks at a different rate, resulting in a cascading flow of animation.

### Usage
For the \`BusyIndicator\` you can define the size, the text and whether it is shown or hidden.
In order to hide it, use the "active" property.

In order to show busy state over an HTML element, simply nest the HTML element in a \`BusyIndicator\` instance.

**Note:** Since \`BusyIndicator\` has \`display: inline-block;\` by default and no width of its own,
whenever you need to wrap a block-level element, you should set \`display: block\` to the busy indicator as well.

#### When to use:

- The user needs to be able to cancel the operation.
- Only part of the application or a particular component is affected.

#### When not to use:

- The operation takes less than one second.
- You need to block the screen and prevent the user from starting another activity.
- Do not show multiple busy indicators at once.



__Note:__ This is a UI5 Web Component! [BusyIndicator UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/BusyIndicator) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`BusyIndicator`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/BusyIndicator/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/BusyIndicator/index.d.ts`,name:`BusyIndicatorPropTypes`}],description:`Determines the content over which the component will appear.

__Supported Node Type/s:__ \`Array<Node>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/BusyIndicator/index.d.ts`,name:`BusyIndicatorPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},active:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/BusyIndicator/index.d.ts`,name:`BusyIndicatorAttributes`}],description:`Defines if the busy indicator is visible on the screen. By default it is not.`,name:`active`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/BusyIndicator/index.d.ts`,name:`BusyIndicatorAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},delay:{defaultValue:{value:`1000`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/BusyIndicator/index.d.ts`,name:`BusyIndicatorAttributes`}],description:`Defines the delay in milliseconds, after which the busy indicator will be visible on the screen.`,name:`delay`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/BusyIndicator/index.d.ts`,name:`BusyIndicatorAttributes`},required:!1,tags:{default:`1000`},type:{name:`number`}},size:{defaultValue:{value:`"M"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/BusyIndicator/index.d.ts`,name:`BusyIndicatorAttributes`}],description:`Defines the size of the component.`,name:`size`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/BusyIndicator/index.d.ts`,name:`BusyIndicatorAttributes`},required:!1,tags:{default:`"M"`},type:{name:`enum`,raw:`"S" | "M" | "L" | BusyIndicatorSize`,value:[{value:`"S"`},{value:`"M"`},{value:`"L"`},{value:`"S"`,description:`small size`,fullComment:`small size
@public`,tags:{public:``}},{value:`"M"`,description:`medium size`,fullComment:`medium size
@public`,tags:{public:``}},{value:`"L"`,description:`large size`,fullComment:`large size
@public`,tags:{public:``}}]}},text:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/BusyIndicator/index.d.ts`,name:`BusyIndicatorAttributes`}],description:`Defines text to be displayed below the component. It can be used to inform the user of the current operation.

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.`,name:`text`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/BusyIndicator/index.d.ts`,name:`BusyIndicatorAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},textPlacement:{defaultValue:{value:`"Bottom"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/BusyIndicator/index.d.ts`,name:`BusyIndicatorAttributes`}],description:`Defines the placement of the text.`,name:`textPlacement`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/BusyIndicator/index.d.ts`,name:`BusyIndicatorAttributes`},required:!1,tags:{default:`"Bottom"`},type:{name:`enum`,raw:`"Top" | "Bottom" | BusyIndicatorTextPlacement`,value:[{value:`"Top"`},{value:`"Bottom"`},{value:`"Top"`,description:`The text will be displayed on top of the busy indicator.`,fullComment:`The text will be displayed on top of the busy indicator.
@public`,tags:{public:``}},{value:`"Bottom"`,description:`The text will be displayed at the bottom of the busy indicator.`,fullComment:`The text will be displayed at the bottom of the busy indicator.
@public`,tags:{public:``}}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents__.`}}}catch{}})))()}export{a as n,i as t};