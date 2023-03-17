import{j as t,a as o}from"./jsx-runtime-670450c2.js";import{e as d}from"./employee-1bc983a2.js";import{F as i,b as p,a as m}from"./index-da505e61.js";import{C as x,a as e}from"./index-0907ef52.js";import{I}from"./index-ed534eec.js";import{L as a}from"./index-a187776a.js";import{V as h}from"./ValueState-ab6838cc.js";const f={title:"Inputs / ComboBox",component:x,argTypes:{children:{control:{disable:!0}},icon:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:h.None,icon:t(I,{name:d})}},n={render:u=>o(x,{...u,children:[t(e,{text:"ComboBox Entry 1"}),t(e,{text:"ComboBox Entry 2"}),t(e,{text:"ComboBox Entry 3"}),t(e,{text:"ComboBox Entry 4"}),t(e,{text:"ComboBox Entry 5"})]})},r={render:()=>o(i,{justifyContent:p.SpaceBetween,children:[o(i,{direction:m.Column,children:[t(a,{children:"StartsWithPerTerm (Default)"}),o(x,{filter:"StartsWithPerTerm",children:[t(e,{text:"Austria"}),t(e,{text:"United Arab Emirates"}),t(e,{text:"Czech Republic"}),t(e,{text:"United Kingdom"}),t(e,{text:"China"}),t(e,{text:"Ukraine"}),t(e,{text:"Australia"}),t(e,{text:"Russia"})]})]}),o(i,{direction:m.Column,children:[t(a,{children:"StartsWith"}),o(x,{filter:"StartsWith",children:[t(e,{text:"Austria"}),t(e,{text:"United Arab Emirates"}),t(e,{text:"Czech Republic"}),t(e,{text:"United Kingdom"}),t(e,{text:"China"}),t(e,{text:"Ukraine"}),t(e,{text:"Australia"}),t(e,{text:"Russia"})]})]}),o(i,{direction:m.Column,children:[t(a,{children:"Contains"}),o(x,{filter:"Contains",children:[t(e,{text:"Austria"}),t(e,{text:"United Arab Emirates"}),t(e,{text:"Czech Republic"}),t(e,{text:"United Kingdom"}),t(e,{text:"China"}),t(e,{text:"Ukraine"}),t(e,{text:"Australia"}),t(e,{text:"Russia"})]})]})]})};var s,l,C;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return <ComboBox {...args}>
        <ComboBoxItem text="ComboBox Entry 1" />
        <ComboBoxItem text="ComboBox Entry 2" />
        <ComboBoxItem text="ComboBox Entry 3" />
        <ComboBoxItem text="ComboBox Entry 4" />
        <ComboBoxItem text="ComboBox Entry 5" />
      </ComboBox>;
  }
}`,...(C=(l=n.parameters)==null?void 0:l.docs)==null?void 0:C.source}}};var b,B,c;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(c=(B=r.parameters)==null?void 0:B.docs)==null?void 0:c.source}}};const y=["Default","FilterTypes"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:n,FilterTypes:r,__namedExportsOrder:y,default:f},Symbol.toStringTag,{value:"Module"}));export{D as C,n as D,r as F};
//# sourceMappingURL=ComboBox.stories-4e1d9020.js.map
