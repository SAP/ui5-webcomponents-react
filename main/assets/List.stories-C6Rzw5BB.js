import{j as t}from"./useIsomorphicLayoutEffect-CZEdMYkS.js";import{L as S,a as T,b as j}from"./List-B_eqrXeT.js";import{T as C}from"./ThemingParameters-DOkJX3Ed.js";import{F as f,b as y}from"./index-BPwAjkf8.js";import{T as i}from"./index-CPNTbpoD.js";import{C as m}from"./index-DcO_gSVY.js";import{L as d}from"./index-BeqDSchJ.js";import{P as G}from"./index-Be13P3OP.js";import{S as e}from"./index-CwYO7Bx6.js";import{L as o}from"./index-B_z-4Gl0.js";const b={title:"Data Display / List",component:o,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:"List with StandardListItems",selectionMode:S.None,separators:T.All,growing:j.None},tags:["package:@ui5/webcomponents"]},r={render:s=>t.jsxs(o,{...s,children:[t.jsx(e,{additionalText:"3",children:"List Item 1"}),t.jsx(e,{additionalText:"2",children:"List Item 2"}),t.jsx(e,{additionalText:"1",children:"List Item 3"})]})},n={name:"CustomListItem",args:{headerText:"List with a CustomListItem"},render:s=>t.jsxs(o,{...s,children:[t.jsx(m,{children:t.jsxs(f,{justifyContent:y.SpaceAround,style:{width:"100%"},children:[t.jsx(i,{style:{fontWeight:"bold"},children:"FULLY"}),t.jsx(i,{style:{color:"red"},children:"CUSTOMIZABLE"}),t.jsx(i,{style:{color:"white",backgroundColor:C.sapButton_Emphasized_Background},children:"CHILDREN"})]})}),t.jsx(m,{children:t.jsx(G,{value:50})})]})},a={name:"ListItemGroup",args:{headerText:"List with a ListItemGroup"},render:s=>t.jsxs(o,{...s,children:[t.jsxs(d,{headerText:"ListItemGroup 1",children:[t.jsx(e,{children:"List Item"}),t.jsx(e,{children:"List Item"})]}),t.jsx(d,{headerText:"ListItemGroup 2",children:t.jsx(e,{children:"List Item"})})]})};var L,l,u;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    return <List {...args}>
        <StandardListItem additionalText="3">List Item 1</StandardListItem>
        <StandardListItem additionalText="2">List Item 2</StandardListItem>
        <StandardListItem additionalText="1">List Item 3</StandardListItem>
      </List>;
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,I,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'CustomListItem',
  args: {
    headerText: 'List with a CustomListItem'
  },
  render: args => {
    return <List {...args}>
        <CustomListItem>
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
        </CustomListItem>
        <CustomListItem>
          <ProgressIndicator value={50} />
        </CustomListItem>
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
          <StandardListItem>List Item</StandardListItem>
          <StandardListItem>List Item</StandardListItem>
        </ListItemGroup>
        <ListItemGroup headerText="ListItemGroup 2">
          <StandardListItem>List Item</StandardListItem>
        </ListItemGroup>
      </List>;
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const w=["Default","CustomListItemStory","ListItemGroupStory"],N=Object.freeze(Object.defineProperty({__proto__:null,CustomListItemStory:n,Default:r,ListItemGroupStory:a,__namedExportsOrder:w,default:b},Symbol.toStringTag,{value:"Module"}));export{N as C,r as D,a as L,n as a};
