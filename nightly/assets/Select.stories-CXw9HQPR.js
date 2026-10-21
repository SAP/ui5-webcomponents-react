import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{n,t as r}from"./withWebComponent-DhD1x6sB.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{n as a,t as o}from"./ValueState-Cz7u0abQ.js";import{n as s,t as c}from"./Option-Ddg3VHDr.js";import{r as l}from"./Select-Bn-UEE1g.js";import{n as u,t as d}from"./Select-CH6pBTc8.js";var f;function p(){return(p=e((()=>{l(),r(),f=n(`ui5-option-group`,[`headerText`],[],[],[]),f.displayName=`OptionGroup`;try{f.displayName=`OptionGroup`,f.__docgenInfo={description:`The \`OptionGroup\` component is used to group options within a \`Select\`.



__Note:__ This is a UI5 Web Component! [OptionGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/OptionGroup) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`OptionGroup`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/OptionGroup/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionGroup/index.d.ts`,name:`OptionGroupPropTypes`}],description:`Defines the options of the group.

**Note:** Use the \`Option\` component to define the desired options.

__Supported Node Type/s:__ \`Array<Option>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionGroup/index.d.ts`,name:`OptionGroupPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},headerText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionGroup/index.d.ts`,name:`OptionGroupAttributes`}],description:`Defines the header text of the group.`,name:`headerText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionGroup/index.d.ts`,name:`OptionGroupAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.26.0](https://github.com/UI5/webcomponents/releases/tag/v2.26.0) of __@ui5/webcomponents__.`}}}catch{}})))()}var m=t({Default:()=>_,WithOptionGroups:()=>v,__namedExportsOrder:()=>y,default:()=>g}),h,g,_,v,y;function b(){return(b=e((()=>{o(),s(),p(),u(),h=i(),g={title:`Inputs / Select`,component:d,argTypes:{children:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:a.None},tags:[`package:@ui5/webcomponents`]},_={render:e=>(0,h.jsxs)(d,{...e,children:[(0,h.jsx)(c,{children:`Option 1`}),(0,h.jsx)(c,{children:`Option 2`}),(0,h.jsx)(c,{children:`Option 3`}),(0,h.jsx)(c,{children:`Option 4`}),(0,h.jsx)(c,{children:`Option 5`})]})},v={render:e=>(0,h.jsxs)(d,{...e,children:[(0,h.jsxs)(f,{headerText:`Oceania`,children:[(0,h.jsx)(c,{value:`au`,children:`Australia`}),(0,h.jsx)(c,{value:`nz`,children:`New Zealand`})]}),(0,h.jsxs)(f,{headerText:`Europe`,children:[(0,h.jsx)(c,{value:`fr`,children:`France`}),(0,h.jsx)(c,{value:`de`,selected:!0,children:`Germany`})]})]})},y=[`Default`,`WithOptionGroups`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Select {...args}>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
        <Option>Option 3</Option>
        <Option>Option 4</Option>
        <Option>Option 5</Option>
      </Select>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Select {...args}>
        <OptionGroup headerText="Oceania">
          <Option value="au">Australia</Option>
          <Option value="nz">New Zealand</Option>
        </OptionGroup>
        <OptionGroup headerText="Europe">
          <Option value="fr">France</Option>
          <Option value="de" selected>
            Germany
          </Option>
        </OptionGroup>
      </Select>;
  }
}`,...v.parameters?.docs?.source}}}})))()}export{f as a,b as i,m as n,p as o,v as r,_ as t};