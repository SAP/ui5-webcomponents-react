import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{L as T,a as j,b as S}from"./List-B_8iuIil.js";import{T as C}from"./ThemingParameters-BB3UHRT7.js";import"./CustomElementsScope-BI7irdrP.js";import"./index-U0ga5oGA.js";import{F as f,d as y}from"./index-BpyrQw_5.js";import{T as n}from"./index-OzB7lNJQ.js";import{L as m}from"./index-BMWvigBx.js";import{L as d}from"./index-CsQ2S26q.js";import{L as e}from"./index-DuyCYrOJ.js";import{P as G}from"./index-CHMj_8N1.js";import{L as i}from"./index-DoEoZYV5.js";const w={title:"Data Display / List",component:i,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:"List with ListItemStandard",selectionMode:S.None,separators:j.All,growing:T.None},tags:["package:@ui5/webcomponents"]},r={render:s=>t.jsxs(i,{...s,children:[t.jsx(e,{additionalText:"3",text:"List Item 1"}),t.jsx(e,{additionalText:"2",text:"List Item 2"}),t.jsx(e,{additionalText:"1",text:"List Item 3"})]})},o={name:"ListItemCustom",args:{headerText:"List with a ListItemCustom"},render:s=>t.jsxs(i,{...s,children:[t.jsx(m,{children:t.jsxs(f,{justifyContent:y.SpaceAround,style:{width:"100%"},children:[t.jsx(n,{style:{fontWeight:"bold"},children:"FULLY"}),t.jsx(n,{style:{color:"red"},children:"CUSTOMIZABLE"}),t.jsx(n,{style:{color:"white",backgroundColor:C.sapButton_Emphasized_Background},children:"CHILDREN"})]})}),t.jsx(m,{children:t.jsx(G,{value:50})})]})},a={name:"ListItemGroup",args:{headerText:"List with a ListItemGroup"},render:s=>t.jsxs(i,{...s,children:[t.jsxs(d,{headerText:"ListItemGroup 1",children:[t.jsx(e,{text:"List Item"}),t.jsx(e,{text:"List Item"})]}),t.jsx(d,{headerText:"ListItemGroup 2",children:t.jsx(e,{text:"List Item"})})]})};var L,x,u;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    return <List {...args}>
        <ListItemStandard additionalText="3" text="List Item 1" />
        <ListItemStandard additionalText="2" text="List Item 2" />
        <ListItemStandard additionalText="1" text="List Item 3" />
      </List>;
  }
}`,...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var l,p,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var I,h,g;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const b=["Default","ListItemCustomStory","ListItemGroupStory"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ListItemCustomStory:o,ListItemGroupStory:a,__namedExportsOrder:b,default:w},Symbol.toStringTag,{value:"Module"}));export{v as C,r as D,o as L,a};
