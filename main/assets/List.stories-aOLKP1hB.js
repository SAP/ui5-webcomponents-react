import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{T as S}from"./ThemingParameters--AGRs54p.js";import{F as T,b as j}from"./index-loc45roa.js";import{T as i}from"./index-5Dv5HHo1.js";import{C as d}from"./index-Ci48Keoj.js";import{G as m}from"./index-CgL6VrXs.js";import{P as C}from"./index-C3x170AU.js";import{S as e}from"./index-cYu8B8FB.js";import{L as o}from"./index-BlSb_Vgi.js";import{L as f,a as y,b as G}from"./List-DE9t9iW8.js";const H={title:"Data Display / List",component:o,argTypes:{children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{headerText:"List with StandardListItems",mode:f.None,separators:y.All,growing:G.None},tags:["package:@ui5/webcomponents"]},s={render:r=>t.jsxs(o,{...r,children:[t.jsx(e,{additionalText:"3",children:"List Item 1"}),t.jsx(e,{additionalText:"2",children:"List Item 2"}),t.jsx(e,{additionalText:"1",children:"List Item 3"})]})},a={name:"CustomListItem",args:{headerText:"List with a CustomListItem"},render:r=>t.jsxs(o,{...r,children:[t.jsx(d,{children:t.jsxs(T,{justifyContent:j.SpaceAround,style:{width:"100%"},children:[t.jsx(i,{style:{fontWeight:"bold"},children:"FULLY"}),t.jsx(i,{style:{color:"red"},children:"CUSTOMIZABLE"}),t.jsx(i,{style:{color:"white",backgroundColor:S.sapButton_Emphasized_Background},children:"CHILDREN"})]})}),t.jsx(d,{children:t.jsx(C,{value:50})})]})},n={name:"GroupHeaderListItem",args:{headerText:"List with a GroupHeaderListItem"},render:r=>t.jsxs(o,{...r,children:[t.jsx(m,{children:"GroupHeaderListItem 1"}),t.jsx(e,{children:"List Item"}),t.jsx(e,{children:"List Item"}),t.jsx(m,{children:"GroupHeaderListItem 2"}),t.jsx(e,{children:"List Item"})]})};var L,l,u;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    return <List {...args}>
        <StandardListItem additionalText="3">List Item 1</StandardListItem>
        <StandardListItem additionalText="2">List Item 2</StandardListItem>
        <StandardListItem additionalText="1">List Item 3</StandardListItem>
      </List>;
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,I,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(I=a.parameters)==null?void 0:I.docs)==null?void 0:p.source}}};var x,h,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'GroupHeaderListItem',
  args: {
    headerText: 'List with a GroupHeaderListItem'
  },
  render: args => {
    return <List {...args}>
        <GroupHeaderListItem>GroupHeaderListItem 1</GroupHeaderListItem>
        <StandardListItem>List Item</StandardListItem>
        <StandardListItem>List Item</StandardListItem>
        <GroupHeaderListItem>GroupHeaderListItem 2</GroupHeaderListItem>
        <StandardListItem>List Item</StandardListItem>
      </List>;
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const b=["Default","CustomListItemStory","GroupHeaderListItemStory"],O=Object.freeze(Object.defineProperty({__proto__:null,CustomListItemStory:a,Default:s,GroupHeaderListItemStory:n,__namedExportsOrder:b,default:H},Symbol.toStringTag,{value:"Module"}));export{O as C,s as D,n as G,a};
