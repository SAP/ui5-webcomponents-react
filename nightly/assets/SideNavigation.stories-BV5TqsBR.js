import{j as e}from"./iframe-BM9OIWQT.js";import{c}from"./calendar-NbEjKmTF.js";import{S as s}from"./chain-link-cNTmKHyi.js";import{h as d}from"./home-BlmxNeby.js";import{S as r,a as t,b as o}from"./index-CXiVbQEH.js";const m="group",x="locate-me",l="history",g="chain-link",p={title:"Layouts & Floorplans / SideNavigation",component:r,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}},header:{control:{disable:!0}}},args:{fixedItems:e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"External Link",icon:g,href:"https://www.sap.com/index.html",target:"_blank"}),e.jsx(t,{text:"History",icon:l})]})},tags:["package:@ui5/webcomponents-fiori"]},n={render:a=>e.jsxs(r,{...a,children:[e.jsx(t,{text:"Home",icon:d}),e.jsxs(t,{text:"People",expanded:!0,icon:m,children:[e.jsx(o,{text:"From My Team"}),e.jsx(o,{text:"From Other Teams"})]}),e.jsx(t,{text:"Locations",icon:x,selected:!0}),e.jsxs(t,{text:"Events",icon:c,children:[e.jsx(o,{text:"Local"}),e.jsx(o,{text:"Others"})]})]})},i={render:a=>e.jsxs(r,{...a,children:[e.jsxs(s,{text:"Group 1",expanded:!0,children:[e.jsx(t,{text:"Home",icon:d}),e.jsxs(t,{text:"People",expanded:!0,icon:m,children:[e.jsx(o,{text:"From My Team"}),e.jsx(o,{text:"From Other Teams"})]})]}),e.jsxs(s,{text:"Group 2",children:[e.jsx(t,{text:"Locations",icon:x,selected:!0}),e.jsxs(t,{text:"Events",icon:c,children:[e.jsx(o,{text:"Local"}),e.jsx(o,{text:"Others"})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const u=["Default","Grouped"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Grouped:i,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{j as C,n as D};
