import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,r as i}from"./Title-CCF0jz-s.js";import{l as a,n as o,t as s,u as c}from"./FlexBox-HHc9RZON.js";import{l,u}from"./Button-C69-ub8X.js";import{n as d,t as f}from"./List-D126OT8Z.js";import{n as p,t as m}from"./ListItemStandard-BLH1GaEa.js";import{n as h,t as g}from"./Text-Dw6yxZ4-.js";import{n as _,t as v}from"./Button-BWazcef0.js";import{n as y,t as b}from"./Title-C9R1PA8-.js";import{n as x,t as S}from"./Panel-CeY6ITso.js";var C=t({Default:()=>E,WithCustomHeader:()=>D,__namedExportsOrder:()=>O,default:()=>T}),w,T,E,D,O;function k(){return(k=e((()=>{u(),r(),o(),c(),h(),_(),d(),p(),y(),x(),w=n(),T={title:`Layouts & Floorplans / Panel`,component:S,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:`Panel`},tags:[`package:@ui5/webcomponents`]},E={render(e){return(0,w.jsxs)(S,{...e,children:[(0,w.jsx)(b,{level:i.H3,children:`Basic Panel`}),(0,w.jsx)(g,{children:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`})]})}},D={args:{collapsed:!0,header:(0,w.jsxs)(s,{fitContainer:!0,style:{gap:`0.25rem`},alignItems:a.Center,children:[(0,w.jsx)(b,{level:i.H2,children:`Countries`}),(0,w.jsx)(`span`,{style:{flexGrow:1}}),(0,w.jsx)(v,{children:`Edit`}),(0,w.jsx)(v,{design:l.Negative,children:`Remove`}),(0,w.jsx)(v,{design:l.Emphasized,children:`Add`})]})},render(e){return(0,w.jsx)(S,{...e,children:(0,w.jsxs)(f,{children:[(0,w.jsx)(m,{description:`Language: Spanish`,text:`Argentina`}),(0,w.jsx)(m,{description:`Language: Portuguese`,text:`Portugal`}),(0,w.jsx)(m,{description:`Language: Spanish`,text:`Mexico`}),(0,w.jsx)(m,{description:`Language: Portuguese`,text:`Brazil`}),(0,w.jsx)(m,{description:`Language: German`,text:`Germany`}),(0,w.jsx)(m,{description:`Language: English`,text:`Australia`}),(0,w.jsx)(m,{description:`Language: German`,text:`Austria`})]})})}},O=[`Default`,`WithCustomHeader`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}}})))()}export{k as i,C as n,D as r,E as t};