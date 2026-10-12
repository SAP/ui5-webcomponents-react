import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{_ as t,d as n,f as r,g as i}from"./jsx-runtime-NHZLEOw0.js";import{n as a,t as o}from"./withWebComponent-DDACWNN1.js";import{c as s,d as c,s as l,u}from"./MenuItem-Bg1w7D7n.js";function d(){return[u.call(this)]}function f(){return(f=e((()=>{c()})))()}var p,m;function h(){return(h=e((()=>{n(),s(),f(),i(),p=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},m=class extends l{},m=p([r({tag:`ui5-user-menu-item-group`,template:d})],m),m.define(),t(`isGroup`)})))()}var g;function _(){return(_=e((()=>{h(),o(),g=a(`ui5-user-menu-item-group`,[`checkMode`],[],[],[]),g.displayName=`UserMenuItemGroup`;try{g.displayName=`UserMenuItemGroup`,g.__docgenInfo={description:`The \`UserMenuItemGroup\` component represents a group of items designed for use inside a \`UserMenu\`.
Items belonging to the same group should be wrapped by a \`UserMenuItemGroup\`.
Each group can have an \`itemCheckMode\` property, which defines the check mode for the items within the group.
The possible values for \`itemCheckMode\` are:
- 'None' (default) - no items can be checked
- 'Single' - Only one item can be checked at a time
- 'Multiple' - Multiple items can be checked simultaneously

**Note:** If the \`itemCheckMode\` property is set to 'Single', only one item can remain checked at any given time.
If multiple items are marked as checked, the last checked item will take precedence.

### Usage

\`UserMenuItemGroup\` represents a collection of \`UserMenuItem\` components that can have the same check mode.
The items are addeed to the group's \`items\` slot.



__Note:__ This is a UI5 Web Component! [UserMenuItemGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserMenuItemGroup) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`UserMenuItemGroup`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/UserMenuItemGroup/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserMenuItemGroup/index.d.ts`,name:`UserMenuItemGroupPropTypes`}],description:"Defines the items of this component.\n**Note:** The slot can hold any combination of components of type `ui5-menu-item` or `ui5-menu-separator` or both.\n\n__Supported Node Type/s:__ `Array<IMenuItem>`",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserMenuItemGroup/index.d.ts`,name:`UserMenuItemGroupPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},checkMode:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/UserMenuItemGroup/index.d.ts`,name:`UserMenuItemGroupAttributes`}],description:`Defines the component's check mode.`,name:`checkMode`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/UserMenuItemGroup/index.d.ts`,name:`UserMenuItemGroupAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Single" | "Multiple" | MenuItemGroupCheckMode`,value:[{value:`"None"`},{value:`"Single"`},{value:`"Multiple"`},{value:`"None"`,description:`default type (items in a group cannot be checked)`,fullComment:`default type (items in a group cannot be checked)
@public`,tags:{public:``}},{value:`"Single"`,description:`Single item check mode (only one item in a group can be checked at a time)`,fullComment:`Single item check mode (only one item in a group can be checked at a time)
@public`,tags:{public:``}},{value:`"Multiple"`,description:`Multiple items check mode (multiple items in a group can be checked at a time)`,fullComment:`Multiple items check mode (multiple items in a group can be checked at a time)
@public`,tags:{public:``}}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.12.0](https://github.com/UI5/webcomponents/releases/tag/v2.12.0) of __@ui5/webcomponents-fiori__.`}}}catch{}})))()}export{_ as n,g as t};