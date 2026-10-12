import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DDACWNN1.js";import{n as r}from"./Panel-Crx1VAG7.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-panel`,[`accessibleName`,`accessibleRole`,`headerLevel`,`headerText`],[`collapsed`,`fixed`,`noAnimation`,`stickyHeader`],[`header`],[`toggle`]),i.displayName=`Panel`;try{i.displayName=`Panel`,i.__docgenInfo={description:`The \`Panel\` component is a container which has a header and a
content area and is used
for grouping and displaying information. It can be collapsed to save space on the screen.

### Guidelines:

- Nesting two or more panels is not recommended.
- Do not stack too many panels on one page.

### Structure
The panel's header area consists of a title bar with a header text or custom header.

The header is clickable and can be used to toggle between the expanded and collapsed state. It includes an icon which rotates depending on the state.

The custom header can be set through the \`header\` slot and it may contain arbitraray content, such as: title, buttons or any other HTML elements.

The content area can contain an arbitrary set of controls.

**Note:** The custom header is not clickable out of the box, but in this case the icon is interactive and allows to show/hide the content area.

### Responsive Behavior

- If the width of the panel is set to 100% (default), the panel and its children are
resized responsively,
depending on its parent container.
- If the panel has a fixed height, it will take up the space even if the panel is
collapsed.
- When the panel is expandable (the \`fixed\` property is set to \`false\`),
an arrow icon (pointing to the right) appears in front of the header.
- When the animation is activated, expand/collapse uses a smooth animation to open or
close the content area.
- When the panel expands/collapses, the arrow icon rotates 90 degrees
clockwise/counter-clockwise.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note:__ This is a UI5 Web Component! [Panel UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Panel) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`Panel`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelPropTypes`}],description:`Defines the content of the component. The content is visible only when the component is expanded.

__Supported Node Type/s:__ \`Array<Node>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},header:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelPropTypes`}],description:`Defines the component header area.

**Note:** When a header is provided, the \`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`header`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onToggle:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelPropTypes`}],description:`Fired when the component is expanded/collapsed by user interaction.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onToggle`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<PanelDomRef, never>) => void`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`}],description:`Defines the accessible ARIA name of the component.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleRole:{defaultValue:{value:`"Form"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`}],description:"Sets the accessible ARIA role of the component.\nDepending on the usage, you can change the role from the default `Form`\nto `Region` or `Complementary`.",name:`accessibleRole`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`},required:!1,tags:{default:`"Form"`},type:{name:`enum`,raw:`PanelAccessibleRole | "Complementary" | "Form" | "Region"`,value:[{value:`"Complementary"`,description:`Represents the ARIA role "complementary".
A section of the page, designed to be complementary to the main content at a similar level in the DOM hierarchy.`,fullComment:`Represents the ARIA role "complementary".
A section of the page, designed to be complementary to the main content at a similar level in the DOM hierarchy.
@public`,tags:{public:``}},{value:`"Form"`,description:`Represents the ARIA role "Form".
A landmark region that contains a collection of items and objects that, as a whole, create a form.`,fullComment:`Represents the ARIA role "Form".
A landmark region that contains a collection of items and objects that, as a whole, create a form.
@public`,tags:{public:``}},{value:`"Region"`,description:`Represents the ARIA role "Region".
A section of a page, that is important enough to be included in a page summary or table of contents.`,fullComment:`Represents the ARIA role "Region".
A section of a page, that is important enough to be included in a page summary or table of contents.
@public`,tags:{public:``}},{value:`"Complementary"`},{value:`"Form"`},{value:`"Region"`}]}},collapsed:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`}],description:`Indicates whether the component is collapsed and only the header is displayed.`,name:`collapsed`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},fixed:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`}],description:`Determines whether the component is in a fixed state that is not
expandable/collapsible by user interaction.`,name:`fixed`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},headerLevel:{defaultValue:{value:`"H2"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`}],description:'Defines the "aria-level" of component heading,\nset by the `headerText`.',name:`headerLevel`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`},required:!1,tags:{default:`"H2"`},type:{name:`enum`,raw:`TitleLevel | "H1" | "H2" | "H3" | "H4" | "H5" | "H6"`,value:[{value:`"H1"`,description:"Renders `h1` tag.",fullComment:"Renders `h1` tag.\n@public",tags:{public:``}},{value:`"H2"`,description:"Renders `h2` tag.",fullComment:"Renders `h2` tag.\n@public",tags:{public:``}},{value:`"H3"`,description:"Renders `h3` tag.",fullComment:"Renders `h3` tag.\n@public",tags:{public:``}},{value:`"H4"`,description:"Renders `h4` tag.",fullComment:"Renders `h4` tag.\n@public",tags:{public:``}},{value:`"H5"`,description:"Renders `h5` tag.",fullComment:"Renders `h5` tag.\n@public",tags:{public:``}},{value:`"H6"`,description:"Renders `h6` tag.",fullComment:"Renders `h6` tag.\n@public",tags:{public:``}},{value:`"H1"`},{value:`"H2"`},{value:`"H3"`},{value:`"H4"`},{value:`"H5"`},{value:`"H6"`}]}},headerText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`}],description:`This property is used to set the header text of the component.
The text is visible in both expanded and collapsed states.

**Note:** This property is overridden by the \`header\` slot.`,name:`headerText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},noAnimation:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`}],description:`Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled.`,name:`noAnimation`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},stickyHeader:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`}],description:`Indicates whether the Panel header is sticky or not.
If stickyHeader is set to true, then whenever you scroll the content or
the application, the header of the panel will be always visible and
a solid color will be used for its design.`,name:`stickyHeader`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Panel/index.d.ts`,name:`PanelAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{}}}catch{}})))()}export{a as n,i as t};