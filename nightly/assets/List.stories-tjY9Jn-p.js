import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{L as S,a as T,b as j}from"./List-CkWyokyd.js";import{T as C}from"./ThemingParameters-le4wpk1U.js";import"./CustomElementsScope-BUTWMsdD.js";import"./index-C--kS4iy.js";import{F as f,d as y}from"./index-JVGOCdcg.js";import{T as n}from"./index-CP0Y_Y_X.js";import{L as m}from"./index-Ble-j44n.js";import{L as d}from"./index-CEZ6KP7I.js";import{L as e}from"./index-DgXlCrrB.js";import{P as G}from"./index-BDcHtlOn.js";import{L as i}from"./index-BoyT6Wne.js";const w={title:"Data Display / List",component:i,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:"List with ListItemStandard",selectionMode:j.None,separators:T.All,growing:S.None},tags:["package:@ui5/webcomponents"]},s={render:r=>t.jsxs(i,{...r,children:[t.jsx(e,{additionalText:"3",children:"List Item 1"}),t.jsx(e,{additionalText:"2",children:"List Item 2"}),t.jsx(e,{additionalText:"1",children:"List Item 3"})]})},a={name:"ListItemCustom",args:{headerText:"List with a ListItemCustom"},render:r=>t.jsxs(i,{...r,children:[t.jsx(m,{children:t.jsxs(f,{justifyContent:y.SpaceAround,style:{width:"100%"},children:[t.jsx(n,{style:{fontWeight:"bold"},children:"FULLY"}),t.jsx(n,{style:{color:"red"},children:"CUSTOMIZABLE"}),t.jsx(n,{style:{color:"white",backgroundColor:C.sapButton_Emphasized_Background},children:"CHILDREN"})]})}),t.jsx(m,{children:t.jsx(G,{value:50})})]})},o={name:"ListItemGroup",args:{headerText:"List with a ListItemGroup"},render:r=>t.jsxs(i,{...r,children:[t.jsxs(d,{headerText:"ListItemGroup 1",children:[t.jsx(e,{children:"List Item"}),t.jsx(e,{children:"List Item"})]}),t.jsx(d,{headerText:"ListItemGroup 2",children:t.jsx(e,{children:"List Item"})})]})};var L,l,u;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    return <List {...args}>
        <ListItemStandard additionalText="3">List Item 1</ListItemStandard>
        <ListItemStandard additionalText="2">List Item 2</ListItemStandard>
        <ListItemStandard additionalText="1">List Item 3</ListItemStandard>
      </List>;
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,p,I;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(I=(p=a.parameters)==null?void 0:p.docs)==null?void 0:I.source}}};var x,h,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const b=["Default","ListItemCustomStory","ListItemGroupStory"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:s,ListItemCustomStory:a,ListItemGroupStory:o,__namedExportsOrder:b,default:w},Symbol.toStringTag,{value:"Module"}));export{v as C,s as D,a as L,o as a};
