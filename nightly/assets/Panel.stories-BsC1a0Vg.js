import{j as e,T as p,H as x,J as L,Q as n,_ as i}from"./iframe-BCRKbB-F.js";import{L as j}from"./index-BHZNi0Sj.js";import{L as t}from"./index-Kc0S7rJM.js";import{P as o}from"./index-BYXD4yaU.js";import{F as h,c as v}from"./index-BH2JzlMl.js";const S={title:"Layouts & Floorplans / Panel",component:o,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:"Panel"},tags:["package:@ui5/webcomponents"]},a={render(r){return e.jsxs(o,{...r,children:[e.jsx(p,{level:x.H3,children:"Basic Panel"}),e.jsx(L,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]})}},s={args:{collapsed:!0,header:e.jsxs(h,{fitContainer:!0,style:{gap:"0.25rem"},alignItems:v.Center,children:[e.jsx(p,{level:x.H2,children:"Countries"}),e.jsx("span",{style:{flexGrow:1}}),e.jsx(n,{children:"Edit"}),e.jsx(n,{design:i.Negative,children:"Remove"}),e.jsx(n,{design:i.Emphasized,children:"Add"})]})},render(r){return e.jsx(o,{...r,children:e.jsxs(j,{children:[e.jsx(t,{description:"Language: Spanish",text:"Argentina"}),e.jsx(t,{description:"Language: Portuguese",text:"Portugal"}),e.jsx(t,{description:"Language: Spanish",text:"Mexico"}),e.jsx(t,{description:"Language: Portuguese",text:"Brazil"}),e.jsx(t,{description:"Language: German",text:"Germany"}),e.jsx(t,{description:"Language: English",text:"Australia"}),e.jsx(t,{description:"Language: German",text:"Austria"})]})})}};var d,u,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var m,g,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(g=s.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const B=["Default","WithCustomHeader"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithCustomHeader:s,__namedExportsOrder:B,default:S},Symbol.toStringTag,{value:"Module"}));export{A as C,a as D,s as W};
