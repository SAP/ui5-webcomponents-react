import{U as L,V as x,X as u,j as t,v as n}from"./iframe-S1rR11cQ.js";import{T as l}from"./ThemingParameters-pyhX3s39.js";import{F as c,d as p}from"./index-qWGPhuwe.js";import{L as m}from"./index-CavZ-61D.js";import{L as d}from"./index-DRSe1L-q.js";import{L as e}from"./index-BJEczdPQ.js";import{P as I}from"./index-UlI1oHWJ.js";import{L as i}from"./index-DN78M1wk.js";const h={title:"Data Display / List",component:i,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:"List with ListItemStandard",selectionMode:u.None,separators:x.All,growing:L.None},tags:["package:@ui5/webcomponents"]},r={render:s=>t.jsxs(i,{...s,children:[t.jsx(e,{additionalText:"3",text:"List Item 1"}),t.jsx(e,{additionalText:"2",text:"List Item 2"}),t.jsx(e,{additionalText:"1",text:"List Item 3"})]})},o={name:"ListItemCustom",args:{headerText:"List with a ListItemCustom"},render:s=>t.jsxs(i,{...s,children:[t.jsx(m,{children:t.jsxs(c,{justifyContent:p.SpaceAround,style:{width:"100%"},children:[t.jsx(n,{style:{fontWeight:"bold"},children:"FULLY"}),t.jsx(n,{style:{color:"red"},children:"CUSTOMIZABLE"}),t.jsx(n,{style:{color:"white",backgroundColor:l.sapButton_Emphasized_Background},children:"CHILDREN"})]})}),t.jsx(m,{children:t.jsx(I,{value:50})})]})},a={name:"ListItemGroup",args:{headerText:"List with a ListItemGroup"},render:s=>t.jsxs(i,{...s,children:[t.jsxs(d,{headerText:"ListItemGroup 1",children:[t.jsx(e,{text:"List Item"}),t.jsx(e,{text:"List Item"})]}),t.jsx(d,{headerText:"ListItemGroup 2",children:t.jsx(e,{text:"List Item"})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <List {...args}>
        <ListItemStandard additionalText="3" text="List Item 1" />
        <ListItemStandard additionalText="2" text="List Item 2" />
        <ListItemStandard additionalText="1" text="List Item 3" />
      </List>;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const g=["Default","ListItemCustomStory","ListItemGroupStory"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ListItemCustomStory:o,ListItemGroupStory:a,__namedExportsOrder:g,default:h},Symbol.toStringTag,{value:"Module"}));export{B as C,r as D,o as L,a};
