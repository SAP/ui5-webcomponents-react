import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as i}from"./Button-DcNvBpEn.js";import{T as p}from"./Title-xNG2nZLh.js";import"./index-CoIYM95Z.js";import{T as L}from"./index-BxLcq94m.js";import{B as o}from"./index-dNG4P2z4.js";import{L as j}from"./index-CED0zuRY.js";import{L as t}from"./index-CcTRsgoi.js";import{T as x}from"./index-DU9ky0O0.js";import{P as n}from"./index-CHeCojj8.js";import{F as h,c as v}from"./index-BFqlvNkW.js";const B={title:"Layouts & Floorplans / Panel",component:n,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:"Panel"},tags:["package:@ui5/webcomponents"]},a={render(s){return e.jsxs(n,{...s,children:[e.jsx(x,{level:p.H3,children:"Basic Panel"}),e.jsx(L,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]})}},r={args:{collapsed:!0,header:e.jsxs(h,{fitContainer:!0,style:{gap:"0.25rem"},alignItems:v.Center,children:[e.jsx(x,{level:p.H2,children:"Countries"}),e.jsx("span",{style:{flexGrow:1}}),e.jsx(o,{children:"Edit"}),e.jsx(o,{design:i.Negative,children:"Remove"}),e.jsx(o,{design:i.Emphasized,children:"Add"})]})},render(s){return e.jsx(n,{...s,children:e.jsxs(j,{children:[e.jsx(t,{description:"Language: Spanish",text:"Argentina"}),e.jsx(t,{description:"Language: Portuguese",text:"Portugal"}),e.jsx(t,{description:"Language: Spanish",text:"Mexico"}),e.jsx(t,{description:"Language: Portuguese",text:"Brazil"}),e.jsx(t,{description:"Language: German",text:"Germany"}),e.jsx(t,{description:"Language: English",text:"Australia"}),e.jsx(t,{description:"Language: German",text:"Austria"})]})})}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render(args) {
    return <Panel {...args}>
        <Title level={TitleLevel.H3}>Basic Panel</Title>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
      </Panel>;
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,g,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    collapsed: true,
    header: <FlexBox fitContainer style={{
      gap: '0.25rem'
    }} alignItems={FlexBoxAlignItems.Center}>
        <Title level={TitleLevel.H2}>Countries</Title>
        <span style={{
        flexGrow: 1
      }} />
        <Button>Edit</Button>
        <Button design={ButtonDesign.Negative}>Remove</Button>
        <Button design={ButtonDesign.Emphasized}>Add</Button>
      </FlexBox>
  },
  render(args) {
    return <Panel {...args}>
        <List>
          <ListItemStandard description="Language: Spanish" text="Argentina" />
          <ListItemStandard description="Language: Portuguese" text="Portugal" />
          <ListItemStandard description="Language: Spanish" text="Mexico" />
          <ListItemStandard description="Language: Portuguese" text="Brazil" />
          <ListItemStandard description="Language: German" text="Germany" />
          <ListItemStandard description="Language: English" text="Australia" />
          <ListItemStandard description="Language: German" text="Austria" />
        </List>
      </Panel>;
  }
}`,...(c=(g=r.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const S=["Default","WithCustomHeader"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithCustomHeader:r,__namedExportsOrder:S,default:B},Symbol.toStringTag,{value:"Module"}));export{F as C,a as D,r as W};
