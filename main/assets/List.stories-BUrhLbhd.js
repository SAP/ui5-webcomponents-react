import{j as t}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{L as S,a as T,b as j}from"./List-BtEOO51k.js";import{T as C}from"./ThemingParameters-DOkJX3Ed.js";import{F as f,b as y}from"./index-DwEKreE0.js";import{T as i}from"./index-C4m8BtnC.js";import{L as m}from"./index-CKkdIgtF.js";import{L as d}from"./index-CVjheGaE.js";import{L as e}from"./index-CBGBKaZp.js";import{P as G}from"./index-DIcgHn5Z.js";import{L as o}from"./index-D1l5YR2Z.js";const b={title:"Data Display / List",component:o,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:"List with ListItemStandard",selectionMode:S.None,separators:T.All,growing:j.None},tags:["package:@ui5/webcomponents"]},s={render:r=>t.jsxs(o,{...r,children:[t.jsx(e,{additionalText:"3",children:"List Item 1"}),t.jsx(e,{additionalText:"2",children:"List Item 2"}),t.jsx(e,{additionalText:"1",children:"List Item 3"})]})},n={name:"ListItemCustom",args:{headerText:"List with a ListItemCustom"},render:r=>t.jsxs(o,{...r,children:[t.jsx(m,{children:t.jsxs(f,{justifyContent:y.SpaceAround,style:{width:"100%"},children:[t.jsx(i,{style:{fontWeight:"bold"},children:"FULLY"}),t.jsx(i,{style:{color:"red"},children:"CUSTOMIZABLE"}),t.jsx(i,{style:{color:"white",backgroundColor:C.sapButton_Emphasized_Background},children:"CHILDREN"})]})}),t.jsx(m,{children:t.jsx(G,{value:50})})]})},a={name:"ListItemGroup",args:{headerText:"List with a ListItemGroup"},render:r=>t.jsxs(o,{...r,children:[t.jsxs(d,{headerText:"ListItemGroup 1",children:[t.jsx(e,{children:"List Item"}),t.jsx(e,{children:"List Item"})]}),t.jsx(d,{headerText:"ListItemGroup 2",children:t.jsx(e,{children:"List Item"})})]})};var L,l,u;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    return <List {...args}>
        <ListItemStandard additionalText="3">List Item 1</ListItemStandard>
        <ListItemStandard additionalText="2">List Item 2</ListItemStandard>
        <ListItemStandard additionalText="1">List Item 3</ListItemStandard>
      </List>;
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,I,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(I=n.parameters)==null?void 0:I.docs)==null?void 0:p.source}}};var x,h,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const w=["Default","ListItemCustomStory","ListItemGroupStory"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:s,ListItemCustomStory:n,ListItemGroupStory:a,__namedExportsOrder:w,default:b},Symbol.toStringTag,{value:"Module"}));export{N as C,s as D,n as L,a};
