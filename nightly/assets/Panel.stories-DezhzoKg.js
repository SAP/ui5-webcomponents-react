import{j as e}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{B as o}from"./Button-B2giC9cI.js";import{T as p}from"./Title-CE707q_n.js";import{F as x,c as h}from"./index-BOHkKvVj.js";import{T as S}from"./index-CRRN2t5A.js";import{B as n}from"./index-C7e1ipVj.js";import{L as j}from"./index-CG9nP8q_.js";import{L as t}from"./index-_FIB7eSd.js";import{T as L}from"./index-DnHjFRUM.js";import{P as i}from"./index-BRC5sKr0.js";const v={title:"Layouts & Floorplans / Panel",component:i,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:"Panel"},tags:["package:@ui5/webcomponents"]},a={render(s){return e.jsxs(i,{...s,children:[e.jsx(L,{level:p.H3,children:"Basic Panel"}),e.jsx(S,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]})}},r={args:{collapsed:!0,header:e.jsxs(x,{fitContainer:!0,style:{gap:"0.25rem"},alignItems:h.Center,children:[e.jsx(L,{level:p.H2,children:"Countries"}),e.jsx("span",{style:{flexGrow:1}}),e.jsx(n,{children:"Edit"}),e.jsx(n,{design:o.Negative,children:"Remove"}),e.jsx(n,{design:o.Emphasized,children:"Add"})]})},render(s){return e.jsx(i,{...s,children:e.jsxs(j,{children:[e.jsx(t,{description:"Language: Spanish",children:"Argentina"}),e.jsx(t,{description:"Language: Portuguese",children:"Portugal"}),e.jsx(t,{description:"Language: Spanish",children:"Mexico"}),e.jsx(t,{description:"Language: Portuguese",children:"Brazil"}),e.jsx(t,{description:"Language: German",children:"Germany"}),e.jsx(t,{description:"Language: English",children:"Australia"}),e.jsx(t,{description:"Language: German",children:"Austria"})]})})}};var d,m,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,c,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
          <ListItemStandard description="Language: Spanish">Argentina</ListItemStandard>
          <ListItemStandard description="Language: Portuguese">Portugal</ListItemStandard>
          <ListItemStandard description="Language: Spanish">Mexico</ListItemStandard>
          <ListItemStandard description="Language: Portuguese">Brazil</ListItemStandard>
          <ListItemStandard description="Language: German">Germany</ListItemStandard>
          <ListItemStandard description="Language: English">Australia</ListItemStandard>
          <ListItemStandard description="Language: German">Austria</ListItemStandard>
        </List>
      </Panel>;
  }
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const B=["Default","WithCustomHeader"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithCustomHeader:r,__namedExportsOrder:B,default:v},Symbol.toStringTag,{value:"Module"}));export{G as C,a as D,r as W};
