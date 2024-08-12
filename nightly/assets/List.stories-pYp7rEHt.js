import{j as t}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{L as S,a as T,b as j}from"./List-CH8w2THx.js";import{T as C}from"./ThemingParameters-DOkJX3Ed.js";import{F as f,b as y}from"./index-DNwR1bnO.js";import{T as n}from"./index-CrfrzNnJ.js";import{L as m}from"./index-Cg_L2nTJ.js";import{L as d}from"./index-CyjnTKLX.js";import{L as e}from"./index-B5bYdUJ9.js";import{P as G}from"./index-CoPK-ih_.js";import{L as i}from"./index-DmfT9_tb.js";const b={title:"Data Display / List",component:i,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:"List with ListItemStandard",selectionMode:S.None,separators:T.All,growing:j.None},tags:["package:@ui5/webcomponents"]},s={render:r=>t.jsxs(i,{...r,children:[t.jsx(e,{additionalText:"3",children:"List Item 1"}),t.jsx(e,{additionalText:"2",children:"List Item 2"}),t.jsx(e,{additionalText:"1",children:"List Item 3"})]})},a={name:"ListItemCustom",args:{headerText:"List with a ListItemCustom"},render:r=>t.jsxs(i,{...r,children:[t.jsx(m,{children:t.jsxs(f,{justifyContent:y.SpaceAround,style:{width:"100%"},children:[t.jsx(n,{style:{fontWeight:"bold"},children:"FULLY"}),t.jsx(n,{style:{color:"red"},children:"CUSTOMIZABLE"}),t.jsx(n,{style:{color:"white",backgroundColor:C.sapButton_Emphasized_Background},children:"CHILDREN"})]})}),t.jsx(m,{children:t.jsx(G,{value:50})})]})},o={name:"ListItemGroup",args:{headerText:"List with a ListItemGroup"},render:r=>t.jsxs(i,{...r,children:[t.jsxs(d,{headerText:"ListItemGroup 1",children:[t.jsx(e,{children:"List Item"}),t.jsx(e,{children:"List Item"})]}),t.jsx(d,{headerText:"ListItemGroup 2",children:t.jsx(e,{children:"List Item"})})]})};var L,l,u;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    return <List {...args}>
        <ListItemStandard additionalText="3">List Item 1</ListItemStandard>
        <ListItemStandard additionalText="2">List Item 2</ListItemStandard>
        <ListItemStandard additionalText="1">List Item 3</ListItemStandard>
      </List>;
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,I,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(I=a.parameters)==null?void 0:I.docs)==null?void 0:p.source}}};var x,h,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'ListItemGroup',
  args: {
    headerText: 'List with a ListItemGroup'
  },
  render: args => {
    return <List {...args}>
        <ListItemGroup headerText="ListItemGroup 1">
          <ListItemStandard>List Item</ListItemStandard>
          <ListItemStandard>List Item</ListItemStandard>
        </ListItemGroup>
        <ListItemGroup headerText="ListItemGroup 2">
          <ListItemStandard>List Item</ListItemStandard>
        </ListItemGroup>
      </List>;
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const w=["Default","ListItemCustomStory","ListItemGroupStory"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:s,ListItemCustomStory:a,ListItemGroupStory:o,__namedExportsOrder:w,default:b},Symbol.toStringTag,{value:"Module"}));export{N as C,s as D,a as L,o as a};
