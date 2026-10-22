import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DhD1x6sB.js";import{n as r}from"./IllustratedMessage-B_FdzqGR.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-illustrated-message`,[`accessibleNameRef`,`design`,`name`,`subtitleText`,`titleText`],[`decorative`],[`subtitle`,`title`],[]),i.displayName=`IllustratedMessage`;try{i.displayName=`IllustratedMessage`,i.__docgenInfo={description:`An IllustratedMessage is a recommended combination of a solution-oriented message, an engaging
illustration, and conversational tone to better communicate an empty or a success state than just show
a message alone.

Each illustration has default internationalised title and subtitle texts. Also they can be managed with
\`titleText\` and \`subtitleText\` properties.

To display the desired illustration, use the \`name\` property, where you can find the list of all available illustrations.

**Note:** By default the “BeforeSearch” illustration is loaded. To use other illustrations, make sure you import them in addition, for example:

\`import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js"\`

**Note:** Illustrations starting with the “Tnt” prefix are part of another illustration set. For example to use the “TntSuccess” illustration, add the following import::

\`import "@ui5/webcomponents-fiori/dist/illustrations/tnt/Success.js"\`

### Structure
The IllustratedMessage consists of the following elements, which are displayed below each other in the following order:

- Illustration
- Title
- Subtitle
- Actions

### Usage
\`IllustratedMessage\` is meant to be used inside container component, for example a \`ui5-card\`,
a \`ui5-dialog\` or a \`Page\`



__Note:__ This is a UI5 Web Component! [IllustratedMessage UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/IllustratedMessage) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`IllustratedMessage`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessagePropTypes`}],description:"Defines the component actions.\n\n**Note:** Not displayed when the `design` property is set to `Base`.\n\n__Supported Node Type/s:__ `Array<IButton>`",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessagePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},subtitle:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessagePropTypes`}],description:`Defines the subtitle of the component.

**Note:** Using this slot, the default subtitle text of illustration and the value of \`subtitleText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="subtitle"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-fiori**.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`subtitle`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessagePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},title:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessagePropTypes`}],description:`Defines the title of the component.

**Note:** Using this slot, the default title text of illustration and the value of \`title\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="title"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.7.0](https://github.com/UI5/webcomponents/releases/tag/v1.7.0) of **@ui5/webcomponents-fiori**.

__Supported Node Type/s:__ \`Array<HTMLElement> & string\``,name:`title`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessagePropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessageAttributes`}],description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v1.7.0](https://github.com/UI5/webcomponents/releases/tag/v1.7.0) of **@ui5/webcomponents-fiori**.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessageAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},decorative:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessageAttributes`}],description:'Defines whether the illustration is decorative.\n\nWhen set to `true`, the attributes `role="presentation"` and `aria-hidden="true"` are applied to the SVG element.\n\n**Note:** Available since [v2.10.0](https://github.com/UI5/webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents-fiori**.',name:`decorative`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessageAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},design:{defaultValue:{value:`"Auto"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessageAttributes`}],description:`Determines which illustration breakpoint variant is used.

As \`IllustratedMessage\` adapts itself around the \`Illustration\`, the other
elements of the component are displayed differently on the different breakpoints/illustration designs.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.`,name:`design`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessageAttributes`},required:!1,tags:{default:`"Auto"`},type:{name:`enum`,raw:`"Dialog" | "Auto" | IllustrationMessageDesign | "Base" | "Dot" | "Spot" | "Scene" | "ExtraSmall" | "Small" | "Medium" | "Large"`,value:[{value:`"Dialog"`},{value:`"Auto"`},{value:`"Auto"`,description:`Automatically decides the <code>Illustration</code> size (<code>Base</code>, <code>Dot</code>, <code>Spot</code>,
<code>Dialog</code>, or <code>Scene</code>) depending on the <code>IllustratedMessage</code> container width.

**Note:** \`Auto\` is the only option where the illustration size is changed according to
the available container width. If any other \`IllustratedMessageSize\` is chosen, it remains
until changed by the app developer.`,fullComment:`Automatically decides the <code>Illustration</code> size (<code>Base</code>, <code>Dot</code>, <code>Spot</code>,
<code>Dialog</code>, or <code>Scene</code>) depending on the <code>IllustratedMessage</code> container width.

**Note:** \`Auto\` is the only option where the illustration size is changed according to
the available container width. If any other \`IllustratedMessageSize\` is chosen, it remains
until changed by the app developer.
@public`,tags:{public:``}},{value:`"Base"`,description:"Base `Illustration` size (XS breakpoint). Suitable for cards (two columns).\n\n**Note:** When `Base` is in use, no illustration is displayed.",fullComment:"Base `Illustration` size (XS breakpoint). Suitable for cards (two columns).\n\n**Note:** When `Base` is in use, no illustration is displayed.\n@public",tags:{public:``}},{value:`"Dot"`,description:`Dot <code>Illustration</code> size (XS breakpoint). Suitable for table rows.`,fullComment:`Dot <code>Illustration</code> size (XS breakpoint). Suitable for table rows.
@public
@deprecated Since 2.10.0, use ExtraSmall instead`,tags:{public:``,deprecated:`Since 2.10.0, use ExtraSmall instead`}},{value:`"Spot"`,description:`Spot <code>Illustration</code> size (S breakpoint). Suitable for cards (four columns).`,fullComment:`Spot <code>Illustration</code> size (S breakpoint). Suitable for cards (four columns).
@public
@deprecated Since 2.10.0, use Small instead`,tags:{public:``,deprecated:`Since 2.10.0, use Small instead`}},{value:`"Dialog"`,description:"Dialog `Illustration` size (M breakpoint). Suitable for dialogs.",fullComment:`Dialog \`Illustration\` size (M breakpoint). Suitable for dialogs.
@public
@deprecated Since 2.10.0, use Medium instead`,tags:{public:``,deprecated:`Since 2.10.0, use Medium instead`}},{value:`"Scene"`,description:"Scene `Illustration` size (L breakpoint). Suitable for a `Page` or a table.",fullComment:"Scene `Illustration` size (L breakpoint). Suitable for a `Page` or a table.\n@public\n@deprecated Since 2.10.0, use Large instead",tags:{public:``,deprecated:`Since 2.10.0, use Large instead`}},{value:`"ExtraSmall"`,description:`ExtraSmall <code>Illustration</code> size (XS breakpoint). Suitable for table rows.`,fullComment:`ExtraSmall <code>Illustration</code> size (XS breakpoint). Suitable for table rows.
@public`,tags:{public:``}},{value:`"Small"`,description:`Small <code>Illustration</code> size (S breakpoint). Suitable for cards (four columns).`,fullComment:`Small <code>Illustration</code> size (S breakpoint). Suitable for cards (four columns).
@public`,tags:{public:``}},{value:`"Medium"`,description:"Medium `Illustration` size (M breakpoint). Suitable for dialogs.",fullComment:"Medium `Illustration` size (M breakpoint). Suitable for dialogs.\n@public",tags:{public:``}},{value:`"Large"`,description:"Large `Illustration` size (L breakpoint). Suitable for a `Page` or a table.",fullComment:"Large `Illustration` size (L breakpoint). Suitable for a `Page` or a table.\n@public",tags:{public:``}},{value:`"Base"`},{value:`"Dot"`},{value:`"Spot"`},{value:`"Scene"`},{value:`"ExtraSmall"`},{value:`"Small"`},{value:`"Medium"`},{value:`"Large"`}]}},name:{defaultValue:{value:`"BeforeSearch"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessageAttributes`}],description:`Defines the illustration name that will be displayed in the component.

Example:

\`name='BeforeSearch'\`, \`name='UnableToUpload'\`, etc..

**Note:** To use the TNT illustrations,
you need to set the \`tnt\` or \`Tnt\` prefix in front of the icon's name.

Example:

\`name='tnt/Avatar'\` or \`name='TntAvatar'\`.

**Note:** By default the \`BeforeSearch\` illustration is loaded.
When using an illustration type, other than the default, it should be loaded in addition:

\`import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js";\`

For TNT illustrations:

\`import "@ui5/webcomponents-fiori/dist/illustrations/tnt/SessionExpired.js";\``,name:`name`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessageAttributes`},required:!1,tags:{default:`"BeforeSearch"`},type:{name:`string`}},subtitleText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessageAttributes`}],description:`Defines the subtitle of the component.

**Note:** Using this property, the default subtitle text of illustration will be overwritten.

**Note:** Using \`subtitle\` slot, the default of this property will be overwritten.`,name:`subtitleText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessageAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},titleText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessageAttributes`}],description:`Defines the title of the component.

**Note:** Using this property, the default title text of illustration will be overwritten.`,name:`titleText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/IllustratedMessage/index.d.ts`,name:`IllustratedMessageAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents-fiori__.`}}}catch{}})))()}export{a as n,i as t};