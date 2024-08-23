import{j as e}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{o as c}from"./ValueState-Bg0UWejw.js";import{M as r,a as t}from"./index-XKqiMTlk.js";import{w as d}from"./withWebComponent-6t4MTiZ-.js";const o=d("ui5-mcb-item-group",["headerText"],[],[],[]);o.displayName="MultiComboBoxItemGroup";try{o.displayName="MultiComboBoxItemGroup",o.__docgenInfo={description:"The `MultiComboBoxItemGroup` is type of suggestion item,\nthat can be used to split the `MultiComboBox` suggestions into groups.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"MultiComboBoxItemGroup",props:{children:{defaultValue:null,description:"Defines the items of the <code>ui5-mcb-item-group</code>.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the text of the component.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="MultiComboBoxItemGroup",o.__docgenInfo={description:"The `MultiComboBoxItemGroup` is type of suggestion item,\nthat can be used to split the `MultiComboBox` suggestions into groups.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"MultiComboBoxItemGroup",props:{children:{defaultValue:null,description:"Defines the items of the <code>ui5-mcb-item-group</code>.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the text of the component.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const h={title:"Inputs / MultiComboBox",component:r,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:c.None},tags:["package:@ui5/webcomponents"]},i={render:n=>e.jsxs(r,{...n,children:[e.jsx(t,{text:"Item 1"}),e.jsx(t,{text:"Item 2"}),e.jsx(t,{text:"Item 3"}),e.jsx(t,{text:"Item 4"}),e.jsx(t,{text:"Item 5"})]})},m={render:n=>e.jsxs(r,{...n,children:[e.jsxs(o,{text:"Asia",children:[e.jsx(t,{text:"Afghanistan"}),e.jsx(t,{text:"China"}),e.jsx(t,{text:"India"}),e.jsx(t,{text:"Indonesia"})]}),e.jsxs(o,{text:"Europe",children:[e.jsx(t,{text:"Austria"}),e.jsx(t,{text:"Bulgaria"}),e.jsx(t,{text:"Germany"}),e.jsx(t,{text:"Italy"})]}),e.jsxs(o,{text:"North America",children:[e.jsx(t,{text:"Canada"}),e.jsx(t,{text:"Granada"}),e.jsx(t,{text:"Haiti"}),e.jsx(t,{text:"United States"})]})]})};var a,s,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxItem text="Item 1" />
        <MultiComboBoxItem text="Item 2" />
        <MultiComboBoxItem text="Item 3" />
        <MultiComboBoxItem text="Item 4" />
        <MultiComboBoxItem text="Item 5" />
      </MultiComboBox>;
  }
}`,...(l=(s=i.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var u,p,x;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxItemGroup text="Asia">
          <MultiComboBoxItem text="Afghanistan"></MultiComboBoxItem>
          <MultiComboBoxItem text="China"></MultiComboBoxItem>
          <MultiComboBoxItem text="India"></MultiComboBoxItem>
          <MultiComboBoxItem text="Indonesia"></MultiComboBoxItem>
        </MultiComboBoxItemGroup>
        <MultiComboBoxItemGroup text="Europe">
          <MultiComboBoxItem text="Austria"></MultiComboBoxItem>
          <MultiComboBoxItem text="Bulgaria"></MultiComboBoxItem>
          <MultiComboBoxItem text="Germany"></MultiComboBoxItem>
          <MultiComboBoxItem text="Italy"></MultiComboBoxItem>
        </MultiComboBoxItemGroup>
        <MultiComboBoxItemGroup text="North America">
          <MultiComboBoxItem text="Canada"></MultiComboBoxItem>
          <MultiComboBoxItem text="Granada"></MultiComboBoxItem>
          <MultiComboBoxItem text="Haiti"></MultiComboBoxItem>
          <MultiComboBoxItem text="United States"></MultiComboBoxItem>
        </MultiComboBoxItemGroup>
      </MultiComboBox>;
  }
}`,...(x=(p=m.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const b=["Default","Grouping"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Grouping:m,__namedExportsOrder:b,default:h},Symbol.toStringTag,{value:"Module"}));export{M as C,i as D,m as G,o as M};
