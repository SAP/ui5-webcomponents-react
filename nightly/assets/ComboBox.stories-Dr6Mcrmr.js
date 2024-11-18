import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{o as y}from"./ValueState-Bg0UWejw.js";import{e as g}from"./employee-ZGUn_izm.js";import{F as m,b as j,a as x}from"./index-CGY3gg1J.js";import{C as n,a as t}from"./index-DqOrRQmq.js";import{w as I}from"./withWebComponent-De1aKRdZ.js";import{I as _}from"./index-Ci-Q8c18.js";import{L as l}from"./index-D2qI6nMR.js";const o=I("ui5-cb-item-group",["headerText"],[],[],[]);o.displayName="ComboBoxItemGroup";try{o.displayName="ComboBoxItemGroup",o.__docgenInfo={description:"The `ui5-cb-group-item` is type of suggestion item,\nthat can be used to split the `ComboBox` suggestions into groups.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ComboBoxItemGroup",props:{children:{defaultValue:null,description:"Defines the items of the <code>ui5-cb-item-group</code>.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the text of the component.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="ComboBoxItemGroup",o.__docgenInfo={description:"The `ui5-cb-group-item` is type of suggestion item,\nthat can be used to split the `ComboBox` suggestions into groups.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"ComboBoxItemGroup",props:{children:{defaultValue:null,description:"Defines the items of the <code>ui5-cb-item-group</code>.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the text of the component.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Inputs / ComboBox",component:n,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:y.None,icon:e.jsx(_,{name:g})},tags:["package:@ui5/webcomponents"]},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{text:"ComboBox Entry 1"}),e.jsx(t,{text:"ComboBox Entry 2"}),e.jsx(t,{text:"ComboBox Entry 3"}),e.jsx(t,{text:"ComboBox Entry 4"}),e.jsx(t,{text:"ComboBox Entry 5"})]})},i={render(r){return e.jsxs(n,{...r,children:[e.jsxs(o,{headerText:"Group 1",children:[e.jsx(t,{text:"ComboBox Entry 1"}),e.jsx(t,{text:"ComboBox Entry 2"})]}),e.jsxs(o,{headerText:"Group 2",children:[e.jsx(t,{text:"ComboBox Entry 3"}),e.jsx(t,{text:"ComboBox Entry 4"}),e.jsx(t,{text:"ComboBox Entry 5"})]})]})}},a={render:()=>e.jsxs(m,{justifyContent:j.SpaceBetween,children:[e.jsxs(m,{direction:x.Column,children:[e.jsx(l,{children:"StartsWithPerTerm (Default)"}),e.jsxs(n,{filter:"StartsWithPerTerm",children:[e.jsx(t,{text:"Austria"}),e.jsx(t,{text:"United Arab Emirates"}),e.jsx(t,{text:"Czech Republic"}),e.jsx(t,{text:"United Kingdom"}),e.jsx(t,{text:"China"}),e.jsx(t,{text:"Ukraine"}),e.jsx(t,{text:"Australia"}),e.jsx(t,{text:"Russia"})]})]}),e.jsxs(m,{direction:x.Column,children:[e.jsx(l,{children:"StartsWith"}),e.jsxs(n,{filter:"StartsWith",children:[e.jsx(t,{text:"Austria"}),e.jsx(t,{text:"United Arab Emirates"}),e.jsx(t,{text:"Czech Republic"}),e.jsx(t,{text:"United Kingdom"}),e.jsx(t,{text:"China"}),e.jsx(t,{text:"Ukraine"}),e.jsx(t,{text:"Australia"}),e.jsx(t,{text:"Russia"})]})]}),e.jsxs(m,{direction:x.Column,children:[e.jsx(l,{children:"Contains"}),e.jsxs(n,{filter:"Contains",children:[e.jsx(t,{text:"Austria"}),e.jsx(t,{text:"United Arab Emirates"}),e.jsx(t,{text:"Czech Republic"}),e.jsx(t,{text:"United Kingdom"}),e.jsx(t,{text:"China"}),e.jsx(t,{text:"Ukraine"}),e.jsx(t,{text:"Australia"}),e.jsx(t,{text:"Russia"})]})]})]})};var u,c,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <ComboBox {...args}>
        <ComboBoxItem text="ComboBox Entry 1" />
        <ComboBoxItem text="ComboBox Entry 2" />
        <ComboBoxItem text="ComboBox Entry 3" />
        <ComboBoxItem text="ComboBox Entry 4" />
        <ComboBoxItem text="ComboBox Entry 5" />
      </ComboBox>;
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,b,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render(args) {
    return <ComboBox {...args}>
        <ComboBoxItemGroup headerText="Group 1">
          <ComboBoxItem text="ComboBox Entry 1" />
          <ComboBoxItem text="ComboBox Entry 2" />
        </ComboBoxItemGroup>
        <ComboBoxItemGroup headerText="Group 2">
          <ComboBoxItem text="ComboBox Entry 3" />
          <ComboBoxItem text="ComboBox Entry 4" />
          <ComboBoxItem text="ComboBox Entry 5" />
        </ComboBoxItemGroup>
      </ComboBox>;
  }
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var C,B,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    return <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
        <FlexBox direction={FlexBoxDirection.Column}>
          <Label>StartsWithPerTerm (Default)</Label>
          <ComboBox filter="StartsWithPerTerm">
            <ComboBoxItem text="Austria" />
            <ComboBoxItem text="United Arab Emirates" />
            <ComboBoxItem text="Czech Republic" />
            <ComboBoxItem text="United Kingdom" />
            <ComboBoxItem text="China" />
            <ComboBoxItem text="Ukraine" />
            <ComboBoxItem text="Australia" />
            <ComboBoxItem text="Russia" />
          </ComboBox>
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column}>
          <Label>StartsWith</Label>
          <ComboBox filter="StartsWith">
            <ComboBoxItem text="Austria" />
            <ComboBoxItem text="United Arab Emirates" />
            <ComboBoxItem text="Czech Republic" />
            <ComboBoxItem text="United Kingdom" />
            <ComboBoxItem text="China" />
            <ComboBoxItem text="Ukraine" />
            <ComboBoxItem text="Australia" />
            <ComboBoxItem text="Russia" />
          </ComboBox>
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column}>
          <Label>Contains</Label>
          <ComboBox filter="Contains">
            <ComboBoxItem text="Austria" />
            <ComboBoxItem text="United Arab Emirates" />
            <ComboBoxItem text="Czech Republic" />
            <ComboBoxItem text="United Kingdom" />
            <ComboBoxItem text="China" />
            <ComboBoxItem text="Ukraine" />
            <ComboBoxItem text="Australia" />
            <ComboBoxItem text="Russia" />
          </ComboBox>
        </FlexBox>
      </FlexBox>;
  }
}`,...(f=(B=a.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const w=["Default","WithGroups","FilterTypes"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:s,FilterTypes:a,WithGroups:i,__namedExportsOrder:w,default:S},Symbol.toStringTag,{value:"Module"}));export{G as C,s as D,a as F,i as W,o as a};
