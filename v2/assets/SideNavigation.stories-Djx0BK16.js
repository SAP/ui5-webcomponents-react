import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as p}from"./calendar-BeOGjQ_z.js";import"./jsx-runtime-CkEx_Gfk.js";import{S as r,a as t,b as o,c as s}from"./chain-link-BazPyFqI.js";import{h as u}from"./home-CG64rBe2.js";const S="group",v="locate-me",I="history",N="chain-link",h={title:"Layouts & Floorplans / SideNavigation",component:r,argTypes:{children:{control:{disable:!0}},fixedItems:{control:{disable:!0}},header:{control:{disable:!0}}},args:{fixedItems:e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"External Link",icon:N,href:"https://www.sap.com/index.html",target:"_blank"}),e.jsx(t,{text:"History",icon:I})]})},tags:["package:@ui5/webcomponents-fiori"]},n={render:a=>e.jsxs(r,{...a,children:[e.jsx(t,{text:"Home",icon:u}),e.jsxs(t,{text:"People",expanded:!0,icon:S,children:[e.jsx(o,{text:"From My Team"}),e.jsx(o,{text:"From Other Teams"})]}),e.jsx(t,{text:"Locations",icon:v,selected:!0}),e.jsxs(t,{text:"Events",icon:p,children:[e.jsx(o,{text:"Local"}),e.jsx(o,{text:"Others"})]})]})},i={render:a=>e.jsxs(r,{...a,children:[e.jsxs(s,{text:"Group 1",expanded:!0,children:[e.jsx(t,{text:"Home",icon:u}),e.jsxs(t,{text:"People",expanded:!0,icon:S,children:[e.jsx(o,{text:"From My Team"}),e.jsx(o,{text:"From Other Teams"})]})]}),e.jsxs(s,{text:"Group 2",children:[e.jsx(t,{text:"Locations",icon:v,selected:!0}),e.jsxs(t,{text:"Events",icon:p,children:[e.jsx(o,{text:"Local"}),e.jsx(o,{text:"Others"})]})]})]})};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var x,l,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(l=i.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const j=["Default","Grouped"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Grouped:i,__namedExportsOrder:j,default:h},Symbol.toStringTag,{value:"Module"}));export{O as C,n as D};
