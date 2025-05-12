import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as c}from"./Input-D7OjForB.js";import{o as d}from"./ValueState-Bg0UWejw.js";import{e as x}from"./employee-rWykNOj7.js";import{I}from"./index-DtQjvaZb.js";import{a as r,S as t}from"./index-GKHhfn8s.js";import{I as p}from"./index-tq1xSqnD.js";const S={title:"Inputs / Input",component:p,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{type:c.Text,valueState:d.None,icon:e.jsx(I,{name:x})},tags:["package:@ui5/webcomponents"]},o={},s={name:"with SuggestionItem",args:{showSuggestions:!0,placeholder:"type anything to show suggestions",icon:null},render:l=>e.jsxs(p,{...l,style:{width:"400px"},children:[e.jsxs(r,{headerText:"A Group",children:[e.jsx(t,{text:"United States",additionalText:"USA"}),e.jsx(t,{text:"Bulgaria"})]}),e.jsxs(r,{headerText:"Another Group Items",children:[e.jsx(t,{text:"Argentina"}),e.jsx(t,{text:"Germany"}),e.jsx(t,{text:"Iceland"}),e.jsx(t,{text:"Moldova"})]})]})};var n,a,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var u,g,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'with SuggestionItem',
  args: {
    showSuggestions: true,
    placeholder: 'type anything to show suggestions',
    icon: null
  },
  render: args => {
    return <Input {...args} style={{
      width: '400px'
    }}>
        <SuggestionItemGroup headerText="A Group">
          <SuggestionItem text="United States" additionalText={'USA'} />
          <SuggestionItem text="Bulgaria" />
        </SuggestionItemGroup>
        <SuggestionItemGroup headerText="Another Group Items">
          <SuggestionItem text="Argentina" />
          <SuggestionItem text="Germany" />
          <SuggestionItem text="Iceland" />
          <SuggestionItem text="Moldova" />
        </SuggestionItemGroup>
      </Input>;
  }
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const h=["Default","WithSuggestionItem"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithSuggestionItem:s,__namedExportsOrder:h,default:S},Symbol.toStringTag,{value:"Module"}));export{b as C,o as D,s as W};
