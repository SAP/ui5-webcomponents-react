import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,i,n as a,o,r as s,t as c}from"./SideNavigationSubItem-DZVKogxA.js";import{a as l,c as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./chain-link-CHJqNwLH.js";import{n as _,t as v}from"./home-DLoAdm-6.js";import{n as y,t as b}from"./calendar-D5aKNe6f.js";import{n as x,t as S}from"./history-C8u86Vi_.js";var C=t({Default:()=>E,Grouped:()=>D,__namedExportsOrder:()=>O,default:()=>T}),w,T,E,D,O;function k(){return(k=e((()=>{y(),f(),p(),x(),_(),m(),u(),i(),a(),o(),w=n(),T={title:`Layouts & Floorplans / SideNavigation`,component:r,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}},header:{control:{disable:!0}}},args:{fixedItems:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s,{text:`External Link`,icon:g,href:`https://www.sap.com/index.html`,target:`_blank`}),(0,w.jsx)(s,{text:`History`,icon:S})]})},tags:[`package:@ui5/webcomponents-fiori`]},E={render:e=>(0,w.jsxs)(r,{...e,children:[(0,w.jsx)(s,{text:`Home`,icon:v}),(0,w.jsxs)(s,{text:`People`,expanded:!0,icon:l,children:[(0,w.jsx)(c,{text:`From My Team`}),(0,w.jsx)(c,{text:`From Other Teams`})]}),(0,w.jsx)(s,{text:`Locations`,icon:d,selected:!0}),(0,w.jsxs)(s,{text:`Events`,icon:b,children:[(0,w.jsx)(c,{text:`Local`}),(0,w.jsx)(c,{text:`Others`})]})]})},D={render:e=>(0,w.jsxs)(r,{...e,children:[(0,w.jsxs)(h,{text:`Group 1`,expanded:!0,children:[(0,w.jsx)(s,{text:`Home`,icon:v}),(0,w.jsxs)(s,{text:`People`,expanded:!0,icon:l,children:[(0,w.jsx)(c,{text:`From My Team`}),(0,w.jsx)(c,{text:`From Other Teams`})]})]}),(0,w.jsxs)(h,{text:`Group 2`,children:[(0,w.jsx)(s,{text:`Locations`,icon:d,selected:!0}),(0,w.jsxs)(s,{text:`Events`,icon:b,children:[(0,w.jsx)(c,{text:`Local`}),(0,w.jsx)(c,{text:`Others`})]})]})]})},O=[`Default`,`Grouped`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <SideNavigation {...args}>
        <SideNavigationItem text="Home" icon={homeIcon} />
        <SideNavigationItem text="People" expanded icon={groupIcon}>
          <SideNavigationSubItem text="From My Team" />
          <SideNavigationSubItem text="From Other Teams" />
        </SideNavigationItem>
        <SideNavigationItem text="Locations" icon={locateMeIcon} selected />
        <SideNavigationItem text="Events" icon={calendarIcon}>
          <SideNavigationSubItem text="Local" />
          <SideNavigationSubItem text="Others" />
        </SideNavigationItem>
      </SideNavigation>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <SideNavigation {...args}>
        <SideNavigationGroup text="Group 1" expanded>
          <SideNavigationItem text="Home" icon={homeIcon} />
          <SideNavigationItem text="People" expanded icon={groupIcon}>
            <SideNavigationSubItem text="From My Team" />
            <SideNavigationSubItem text="From Other Teams" />
          </SideNavigationItem>
        </SideNavigationGroup>
        <SideNavigationGroup text="Group 2">
          <SideNavigationItem text="Locations" icon={locateMeIcon} selected />
          <SideNavigationItem text="Events" icon={calendarIcon}>
            <SideNavigationSubItem text="Local" />
            <SideNavigationSubItem text="Others" />
          </SideNavigationItem>
        </SideNavigationGroup>
      </SideNavigation>;
  }
}`,...D.parameters?.docs?.source}}}})))()}export{C as n,k as r,E as t};