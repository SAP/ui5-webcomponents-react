import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{T as h}from"./index-lwweRvrD.js";import{T as S}from"./index-poYZVBZI.js";import{T as x}from"./index-9x3Nihny.js";import{B as n}from"./index-WbJYnAkm.js";import{L as j}from"./index-2Paf3sMH.js";import{S as t}from"./index-6Uga0j1B.js";import{T as L}from"./index-8urlLvhg.js";import{P as o,a as b}from"./index-laL5dtfz.js";import{T as i}from"./Title-d3ahDXw6.js";import{B as d}from"./Button-ywDxCu8p.js";const v={title:"Layouts & Floorplans / Panel",component:o,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{accessibleRole:b.Form,headerLevel:i.H2,headerText:"Panel"},tags:["package:@ui5/webcomponents"]},a={render(s){return e.jsxs(o,{...s,children:[e.jsx(L,{level:i.H3,children:"Basic Panel"}),e.jsx(h,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]})}},r={args:{collapsed:!0,header:e.jsxs(S,{children:[e.jsx(L,{level:i.H2,children:"Countries"}),e.jsx(x,{}),e.jsx(n,{children:"Edit"}),e.jsx(n,{design:d.Negative,children:"Remove"}),e.jsx(n,{design:d.Emphasized,children:"Add"})]})},render(s){return e.jsx(o,{...s,children:e.jsxs(j,{children:[e.jsx(t,{description:"Language: Spanish",children:"Argentina"}),e.jsx(t,{description:"Language: Portuguese",children:"Portugal"}),e.jsx(t,{description:"Language: Spanish",children:"Mexico"}),e.jsx(t,{description:"Language: Portuguese",children:"Brazil"}),e.jsx(t,{description:"Language: German",children:"Germany"}),e.jsx(t,{description:"Language: English",children:"Australia"}),e.jsx(t,{description:"Language: German",children:"Austria"})]})})}};var m,u,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var c,g,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          <StandardListItem description="Language: Spanish">Argentina</StandardListItem>
          <StandardListItem description="Language: Portuguese">Portugal</StandardListItem>
          <StandardListItem description="Language: Spanish">Mexico</StandardListItem>
          <StandardListItem description="Language: Portuguese">Brazil</StandardListItem>
          <StandardListItem description="Language: German">Germany</StandardListItem>
          <StandardListItem description="Language: English">Australia</StandardListItem>
          <StandardListItem description="Language: German">Austria</StandardListItem>
        </List>
      </Panel>;
  }
}`,...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const T=["Default","WithCustomHeader"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithCustomHeader:r,__namedExportsOrder:T,default:v},Symbol.toStringTag,{value:"Module"}));export{G as C,a as D,r as W};
