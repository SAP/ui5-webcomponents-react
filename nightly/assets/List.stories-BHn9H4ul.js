import{a3 as T,a4 as j,a5 as S,j as t,J as n}from"./iframe-CS0WNVf3.js";import{T as C}from"./ThemingParameters-pyhX3s39.js";import{F as y,d as f}from"./index-6Qc8M-Ay.js";import{L as m}from"./index-Cm98QziX.js";import{L as d}from"./index-BnT1YreS.js";import{L as e}from"./index-YClhRCxe.js";import{P as G}from"./index-DX8EZKfI.js";import{L as i}from"./index-DGoD02kv.js";const w={title:"Data Display / List",component:i,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:"List with ListItemStandard",selectionMode:S.None,separators:j.All,growing:T.None},tags:["package:@ui5/webcomponents"]},r={render:s=>t.jsxs(i,{...s,children:[t.jsx(e,{additionalText:"3",text:"List Item 1"}),t.jsx(e,{additionalText:"2",text:"List Item 2"}),t.jsx(e,{additionalText:"1",text:"List Item 3"})]})},o={name:"ListItemCustom",args:{headerText:"List with a ListItemCustom"},render:s=>t.jsxs(i,{...s,children:[t.jsx(m,{children:t.jsxs(y,{justifyContent:f.SpaceAround,style:{width:"100%"},children:[t.jsx(n,{style:{fontWeight:"bold"},children:"FULLY"}),t.jsx(n,{style:{color:"red"},children:"CUSTOMIZABLE"}),t.jsx(n,{style:{color:"white",backgroundColor:C.sapButton_Emphasized_Background},children:"CHILDREN"})]})}),t.jsx(m,{children:t.jsx(G,{value:50})})]})},a={name:"ListItemGroup",args:{headerText:"List with a ListItemGroup"},render:s=>t.jsxs(i,{...s,children:[t.jsxs(d,{headerText:"ListItemGroup 1",children:[t.jsx(e,{text:"List Item"}),t.jsx(e,{text:"List Item"})]}),t.jsx(d,{headerText:"ListItemGroup 2",children:t.jsx(e,{text:"List Item"})})]})};var L,x,u;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    return <List {...args}>
        <ListItemStandard additionalText="3" text="List Item 1" />
        <ListItemStandard additionalText="2" text="List Item 2" />
        <ListItemStandard additionalText="1" text="List Item 3" />
      </List>;
  }
}`,...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'ListItemCustom',
  args: {
    headerText: 'List with a ListItemCustom'
  },
  render: args => {
    return <List {...args}>
        <ListItemCustom>
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceAround} style={{
          width: '100%'
        }}>
            <Text style={{
            fontWeight: 'bold'
          }}>FULLY</Text>
            <Text style={{
            color: 'red'
          }}>CUSTOMIZABLE</Text>
            <Text style={{
            color: 'white',
            backgroundColor: ThemingParameters.sapButton_Emphasized_Background
          }}>
              CHILDREN
            </Text>
          </FlexBox>
        </ListItemCustom>
        <ListItemCustom>
          <ProgressIndicator value={50} />
        </ListItemCustom>
      </List>;
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var I,h,g;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'ListItemGroup',
  args: {
    headerText: 'List with a ListItemGroup'
  },
  render: args => {
    return <List {...args}>
        <ListItemGroup headerText="ListItemGroup 1">
          <ListItemStandard text="List Item" />
          <ListItemStandard text="List Item" />
        </ListItemGroup>
        <ListItemGroup headerText="ListItemGroup 2">
          <ListItemStandard text="List Item" />
        </ListItemGroup>
      </List>;
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const B=["Default","ListItemCustomStory","ListItemGroupStory"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ListItemCustomStory:o,ListItemGroupStory:a,__namedExportsOrder:B,default:w},Symbol.toStringTag,{value:"Module"}));export{A as C,r as D,o as L,a};
