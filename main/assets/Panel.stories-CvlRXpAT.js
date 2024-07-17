import{j as e}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{B as i}from"./Button-gEiq340s.js";import{T as p}from"./Title-B8CZCSNg.js";import{T as h}from"./index-BXQLHBku.js";import{T as S}from"./index-CUngaHoB.js";import{T as x}from"./index-D7y2Aji5.js";import{B as s}from"./index-DyYZ-o4p.js";import{L as j}from"./index-BOvQfipl.js";import{L as t}from"./index-DnQwEkIB.js";import{T as L}from"./index-CFp2ImGm.js";import{P as o}from"./index-BQsZ7EnC.js";const v={title:"Layouts & Floorplans / Panel",component:o,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:"Panel"},tags:["package:@ui5/webcomponents"]},a={render(n){return e.jsxs(o,{...n,children:[e.jsx(L,{level:p.H3,children:"Basic Panel"}),e.jsx(x,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]})}},r={args:{collapsed:!0,header:e.jsxs(h,{children:[e.jsx(L,{level:p.H2,children:"Countries"}),e.jsx(S,{}),e.jsx(s,{children:"Edit"}),e.jsx(s,{design:i.Negative,children:"Remove"}),e.jsx(s,{design:i.Emphasized,children:"Add"})]})},render(n){return e.jsx(o,{...n,children:e.jsxs(j,{children:[e.jsx(t,{description:"Language: Spanish",children:"Argentina"}),e.jsx(t,{description:"Language: Portuguese",children:"Portugal"}),e.jsx(t,{description:"Language: Spanish",children:"Mexico"}),e.jsx(t,{description:"Language: Portuguese",children:"Brazil"}),e.jsx(t,{description:"Language: German",children:"Germany"}),e.jsx(t,{description:"Language: English",children:"Australia"}),e.jsx(t,{description:"Language: German",children:"Austria"})]})})}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,c,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    collapsed: true,
    header: <Toolbar>
        <Title level={TitleLevel.H2}>Countries</Title>
        <ToolbarSpacer />
        <Button>Edit</Button>
        <Button design={ButtonDesign.Negative}>Remove</Button>
        <Button design={ButtonDesign.Emphasized}>Add</Button>
      </Toolbar>
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
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const T=["Default","WithCustomHeader"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithCustomHeader:r,__namedExportsOrder:T,default:v},Symbol.toStringTag,{value:"Module"}));export{G as C,a as D,r as W};
