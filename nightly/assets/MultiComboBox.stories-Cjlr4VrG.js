import{j as t}from"./jsx-runtime-CLpGMVip.js";import{o as b}from"./ValueState-Bg0UWejw.js";import{M as a,a as e}from"./index-DbosB1JA.js";import{w as C}from"./withWebComponent-DfVDXLfc.js";const r=C("ui5-mcb-item-group",["headerAccessibleName","headerText"],[],["header"],["move-over","move"]);r.displayName="MultiComboBoxItemGroup";const M={title:"Inputs / MultiComboBox",component:a,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:b.None},tags:["package:@ui5/webcomponents"]},o={render:x=>t.jsxs(a,{...x,children:[t.jsx(e,{text:"Item 1"}),t.jsx(e,{text:"Item 2"}),t.jsx(e,{text:"Item 3"}),t.jsx(e,{text:"Item 4"}),t.jsx(e,{text:"Item 5"})]})},m={render:x=>t.jsxs(a,{...x,children:[t.jsxs(r,{headerText:"Asia",children:[t.jsx(e,{text:"Afghanistan"}),t.jsx(e,{text:"China"}),t.jsx(e,{text:"India"}),t.jsx(e,{text:"Indonesia"})]}),t.jsxs(r,{headerText:"Europe",children:[t.jsx(e,{text:"Austria"}),t.jsx(e,{text:"Bulgaria"}),t.jsx(e,{text:"Germany"}),t.jsx(e,{text:"Italy"})]}),t.jsxs(r,{headerText:"North America",children:[t.jsx(e,{text:"Canada"}),t.jsx(e,{text:"Granada"}),t.jsx(e,{text:"Haiti"}),t.jsx(e,{text:"United States"})]})]})};var i,n,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxItem text="Item 1" />
        <MultiComboBoxItem text="Item 2" />
        <MultiComboBoxItem text="Item 3" />
        <MultiComboBoxItem text="Item 4" />
        <MultiComboBoxItem text="Item 5" />
      </MultiComboBox>;
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var u,l,I;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <MultiComboBox {...args}>
        <MultiComboBoxItemGroup headerText="Asia">
          <MultiComboBoxItem text="Afghanistan"></MultiComboBoxItem>
          <MultiComboBoxItem text="China"></MultiComboBoxItem>
          <MultiComboBoxItem text="India"></MultiComboBoxItem>
          <MultiComboBoxItem text="Indonesia"></MultiComboBoxItem>
        </MultiComboBoxItemGroup>
        <MultiComboBoxItemGroup headerText="Europe">
          <MultiComboBoxItem text="Austria"></MultiComboBoxItem>
          <MultiComboBoxItem text="Bulgaria"></MultiComboBoxItem>
          <MultiComboBoxItem text="Germany"></MultiComboBoxItem>
          <MultiComboBoxItem text="Italy"></MultiComboBoxItem>
        </MultiComboBoxItemGroup>
        <MultiComboBoxItemGroup headerText="North America">
          <MultiComboBoxItem text="Canada"></MultiComboBoxItem>
          <MultiComboBoxItem text="Granada"></MultiComboBoxItem>
          <MultiComboBoxItem text="Haiti"></MultiComboBoxItem>
          <MultiComboBoxItem text="United States"></MultiComboBoxItem>
        </MultiComboBoxItemGroup>
      </MultiComboBox>;
  }
}`,...(I=(l=m.parameters)==null?void 0:l.docs)==null?void 0:I.source}}};const B=["Default","Grouping"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Grouping:m,__namedExportsOrder:B,default:M},Symbol.toStringTag,{value:"Module"}));export{h as C,o as D,m as G,r as M};
