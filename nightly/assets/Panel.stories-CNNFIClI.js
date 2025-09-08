import{j as e,T as d,H as u,J as l,Q as n,_ as i}from"./iframe-Cmm295l6.js";import{L as m}from"./index-CJAzT50r.js";import{L as t}from"./index-DIyb4d_p.js";import{P as o}from"./index-328mVx9g.js";import{F as g,c}from"./index-DjP2_XyX.js";const p={title:"Layouts & Floorplans / Panel",component:o,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:"Panel"},tags:["package:@ui5/webcomponents"]},a={render(r){return e.jsxs(o,{...r,children:[e.jsx(d,{level:u.H3,children:"Basic Panel"}),e.jsx(l,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]})}},s={args:{collapsed:!0,header:e.jsxs(g,{fitContainer:!0,style:{gap:"0.25rem"},alignItems:c.Center,children:[e.jsx(d,{level:u.H2,children:"Countries"}),e.jsx("span",{style:{flexGrow:1}}),e.jsx(n,{children:"Edit"}),e.jsx(n,{design:i.Negative,children:"Remove"}),e.jsx(n,{design:i.Emphasized,children:"Add"})]})},render(r){return e.jsx(o,{...r,children:e.jsxs(m,{children:[e.jsx(t,{description:"Language: Spanish",text:"Argentina"}),e.jsx(t,{description:"Language: Portuguese",text:"Portugal"}),e.jsx(t,{description:"Language: Spanish",text:"Mexico"}),e.jsx(t,{description:"Language: Portuguese",text:"Brazil"}),e.jsx(t,{description:"Language: German",text:"Germany"}),e.jsx(t,{description:"Language: English",text:"Australia"}),e.jsx(t,{description:"Language: German",text:"Austria"})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const x=["Default","WithCustomHeader"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithCustomHeader:s,__namedExportsOrder:x,default:p},Symbol.toStringTag,{value:"Module"}));export{B as C,a as D,s as W};
