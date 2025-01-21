import{j as t}from"./jsx-runtime-CLpGMVip.js";import{o as I}from"./ValueState-Bg0UWejw.js";import{e as y}from"./employee-4XFbe-2d.js";import{F as m,b as E,a as i}from"./index-DlWYL6lf.js";import{C as e,a as o}from"./index-BQP4HnYw.js";import"./ComboBoxItemGroup-DWYR7v7z.js";import{w as f}from"./withWebComponent-DfVDXLfc.js";import{I as g}from"./index-DFqCSedi.js";import{L as a}from"./index-DVZh2p7o.js";const b=f("ui5-cb-item-group",["headerAccessibleName","headerText"],[],["header"],["move-over","move"]);b.displayName="ComboBoxItemGroup";const A={title:"Inputs / ComboBox",component:e,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:I.None,icon:t.jsx(g,{name:y})},tags:["package:@ui5/webcomponents"]},x={render:s=>t.jsxs(e,{...s,children:[t.jsx(o,{text:"ComboBox Entry 1"}),t.jsx(o,{text:"ComboBox Entry 2"}),t.jsx(o,{text:"ComboBox Entry 3"}),t.jsx(o,{text:"ComboBox Entry 4"}),t.jsx(o,{text:"ComboBox Entry 5"})]})},r={render(s){return t.jsxs(e,{...s,children:[t.jsxs(b,{headerText:"Group 1",children:[t.jsx(o,{text:"ComboBox Entry 1"}),t.jsx(o,{text:"ComboBox Entry 2"})]}),t.jsxs(b,{headerText:"Group 2",children:[t.jsx(o,{text:"ComboBox Entry 3"}),t.jsx(o,{text:"ComboBox Entry 4"}),t.jsx(o,{text:"ComboBox Entry 5"})]})]})}},n={render:()=>t.jsxs(m,{justifyContent:E.SpaceBetween,children:[t.jsxs(m,{direction:i.Column,children:[t.jsx(a,{children:"StartsWithPerTerm (Default)"}),t.jsxs(e,{filter:"StartsWithPerTerm",children:[t.jsx(o,{text:"Austria"}),t.jsx(o,{text:"United Arab Emirates"}),t.jsx(o,{text:"Czech Republic"}),t.jsx(o,{text:"United Kingdom"}),t.jsx(o,{text:"China"}),t.jsx(o,{text:"Ukraine"}),t.jsx(o,{text:"Australia"}),t.jsx(o,{text:"Russia"})]})]}),t.jsxs(m,{direction:i.Column,children:[t.jsx(a,{children:"StartsWith"}),t.jsxs(e,{filter:"StartsWith",children:[t.jsx(o,{text:"Austria"}),t.jsx(o,{text:"United Arab Emirates"}),t.jsx(o,{text:"Czech Republic"}),t.jsx(o,{text:"United Kingdom"}),t.jsx(o,{text:"China"}),t.jsx(o,{text:"Ukraine"}),t.jsx(o,{text:"Australia"}),t.jsx(o,{text:"Russia"})]})]}),t.jsxs(m,{direction:i.Column,children:[t.jsx(a,{children:"Contains"}),t.jsxs(e,{filter:"Contains",children:[t.jsx(o,{text:"Austria"}),t.jsx(o,{text:"United Arab Emirates"}),t.jsx(o,{text:"Czech Republic"}),t.jsx(o,{text:"United Kingdom"}),t.jsx(o,{text:"China"}),t.jsx(o,{text:"Ukraine"}),t.jsx(o,{text:"Australia"}),t.jsx(o,{text:"Russia"})]})]})]})};var C,B,l;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    return <ComboBox {...args}>
        <ComboBoxItem text="ComboBox Entry 1" />
        <ComboBoxItem text="ComboBox Entry 2" />
        <ComboBoxItem text="ComboBox Entry 3" />
        <ComboBoxItem text="ComboBox Entry 4" />
        <ComboBoxItem text="ComboBox Entry 5" />
      </ComboBox>;
  }
}`,...(l=(B=x.parameters)==null?void 0:B.docs)==null?void 0:l.source}}};var c,u,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,j,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(j=n.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};const F=["Default","WithGroups","FilterTypes"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:x,FilterTypes:n,WithGroups:r,__namedExportsOrder:F,default:A},Symbol.toStringTag,{value:"Module"}));export{z as C,x as D,n as F,r as W,b as a};
