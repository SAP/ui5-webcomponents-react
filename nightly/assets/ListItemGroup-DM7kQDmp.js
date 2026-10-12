import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DDACWNN1.js";import{n as r}from"./ListItemGroup-B_3ridR0.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-li-group`,[`headerAccessibleName`,`headerText`,`wrappingType`],[],[`header`],[`move-over`,`move`]),i.displayName=`ListItemGroup`;try{i.displayName=`ListItemGroup`,i.__docgenInfo={description:`The \`ListItemGroup\` is a special list item, used only to create groups of list items.

This is the item to use inside a \`List\`.



__Note:__ This is a UI5 Web Component! [ListItemGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ListItemGroup) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`ListItemGroup`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ListItemGroup/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemGroup/index.d.ts`,name:`ListItemGroupPropTypes`}],description:`Defines the items of the group.

__Supported Node Type/s:__ \`Array<ListItemBase>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemGroup/index.d.ts`,name:`ListItemGroupPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},header:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemGroup/index.d.ts`,name:`ListItemGroupPropTypes`}],description:`Defines the header of the component.

**Note:** Using this slot, the default header text of group and the value of \`headerText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<ListItemBase>\``,name:`header`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemGroup/index.d.ts`,name:`ListItemGroupPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

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
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onMove:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemGroup/index.d.ts`,name:`ListItemGroupPropTypes`}],description:`Fired when a movable list item is dropped onto a drop target.

**Note:** \`move\` event is fired only if there was a preceding \`move-over\` with prevented default action.

**Note:** Available since [v2.1.0](https://github.com/UI5/webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onMove`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemGroup/index.d.ts`,name:`ListItemGroupPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListItemGroupDomRef, ListItemGroupMoveEventDetail>) => void`}},onMoveOver:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemGroup/index.d.ts`,name:`ListItemGroupPropTypes`}],description:`Fired when a movable list item is moved over a potential drop target during a dragging operation.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.1.0](https://github.com/UI5/webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onMoveOver`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemGroup/index.d.ts`,name:`ListItemGroupPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ListItemGroupDomRef, ListItemGroupMoveEventDetail>) => void`}},headerAccessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemGroup/index.d.ts`,name:`ListItemGroupAttributes`}],description:`Defines the accessible name of the header.`,name:`headerAccessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemGroup/index.d.ts`,name:`ListItemGroupAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},headerText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemGroup/index.d.ts`,name:`ListItemGroupAttributes`}],description:`Defines the header text of the group.`,name:`headerText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemGroup/index.d.ts`,name:`ListItemGroupAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},wrappingType:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemGroup/index.d.ts`,name:`ListItemGroupAttributes`}],description:`Defines if the text of the component should wrap when it's too long.
When set to "Normal", the content (title, description) will be wrapped
using the \`ExpandableText\` component.<br/>

The text can wrap up to 100 characters on small screens (size S) and
up to 300 characters on larger screens (size M and above). When text exceeds
these limits, it truncates with an ellipsis followed by a text expansion trigger.

Available options are:
- \`None\` (default) - The text will truncate with an ellipsis.
- \`Normal\` - The text will wrap (without truncation).

**Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.`,name:`wrappingType`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ListItemGroup/index.d.ts`,name:`ListItemGroupAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | WrappingType | "Normal"`,value:[{value:`"None"`},{value:`"None"`,description:`The text will be truncated with an ellipsis.`,fullComment:`The text will be truncated with an ellipsis.
@public`,tags:{public:``}},{value:`"Normal"`,description:`The text will wrap. The words will not be broken based on hyphenation.`,fullComment:`The text will wrap. The words will not be broken based on hyphenation.
@public`,tags:{public:``}},{value:`"Normal"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.`}}}catch{}})))()}export{a as n,i as t};