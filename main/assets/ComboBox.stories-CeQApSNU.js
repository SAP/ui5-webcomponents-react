import{j as t}from"./useIsomorphicLayoutEffect-5feXxxyy.js";import{o as u}from"./ValueState-Bg0UWejw.js";import{e as d}from"./employee-BQqH2Rlj.js";import{F as r,b as j,a as s}from"./index-B5D3uFwJ.js";import{C as n,a as e}from"./index-1VB5bNNW.js";import{I as p}from"./index-Nr9nvLdJ.js";import{L as i}from"./index-Bswgice2.js";const I={title:"Inputs / ComboBox",component:n,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:u.None,icon:t.jsx(p,{name:d})},tags:["package:@ui5/webcomponents"]},o={render:c=>t.jsxs(n,{...c,children:[t.jsx(e,{text:"ComboBox Entry 1"}),t.jsx(e,{text:"ComboBox Entry 2"}),t.jsx(e,{text:"ComboBox Entry 3"}),t.jsx(e,{text:"ComboBox Entry 4"}),t.jsx(e,{text:"ComboBox Entry 5"})]})},x={render:()=>t.jsxs(r,{justifyContent:j.SpaceBetween,children:[t.jsxs(r,{direction:s.Column,children:[t.jsx(i,{children:"StartsWithPerTerm (Default)"}),t.jsxs(n,{filter:"StartsWithPerTerm",children:[t.jsx(e,{text:"Austria"}),t.jsx(e,{text:"United Arab Emirates"}),t.jsx(e,{text:"Czech Republic"}),t.jsx(e,{text:"United Kingdom"}),t.jsx(e,{text:"China"}),t.jsx(e,{text:"Ukraine"}),t.jsx(e,{text:"Australia"}),t.jsx(e,{text:"Russia"})]})]}),t.jsxs(r,{direction:s.Column,children:[t.jsx(i,{children:"StartsWith"}),t.jsxs(n,{filter:"StartsWith",children:[t.jsx(e,{text:"Austria"}),t.jsx(e,{text:"United Arab Emirates"}),t.jsx(e,{text:"Czech Republic"}),t.jsx(e,{text:"United Kingdom"}),t.jsx(e,{text:"China"}),t.jsx(e,{text:"Ukraine"}),t.jsx(e,{text:"Australia"}),t.jsx(e,{text:"Russia"})]})]}),t.jsxs(r,{direction:s.Column,children:[t.jsx(i,{children:"Contains"}),t.jsxs(n,{filter:"Contains",children:[t.jsx(e,{text:"Austria"}),t.jsx(e,{text:"United Arab Emirates"}),t.jsx(e,{text:"Czech Republic"}),t.jsx(e,{text:"United Kingdom"}),t.jsx(e,{text:"China"}),t.jsx(e,{text:"Ukraine"}),t.jsx(e,{text:"Australia"}),t.jsx(e,{text:"Russia"})]})]})]})};var m,a,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <ComboBox {...args}>
        <ComboBoxItem text="ComboBox Entry 1" />
        <ComboBoxItem text="ComboBox Entry 2" />
        <ComboBoxItem text="ComboBox Entry 3" />
        <ComboBoxItem text="ComboBox Entry 4" />
        <ComboBoxItem text="ComboBox Entry 5" />
      </ComboBox>;
  }
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var C,b,B;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(B=(b=x.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const h=["Default","FilterTypes"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:o,FilterTypes:x,__namedExportsOrder:h,default:I},Symbol.toStringTag,{value:"Module"}));export{S as C,o as D,x as F};
