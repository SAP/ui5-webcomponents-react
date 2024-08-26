import{j as e}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{i as v}from"./utils-DaZ1DVkg.js";import{a as d,P as c,b as m}from"./Popover-GyfEL2jk.js";import{r as P}from"./index-RYns6xqu.js";import{B as u}from"./index-Byuai5Dz.js";import{L as f}from"./index-BQWw2vFX.js";import{L as r}from"./index-CN5iwzCY.js";import{R as i}from"./index-Dkvxc4I4.js";import"./withWebComponent-6t4MTiZ-.js";import"./settings-DoiVHgq9.js";const g={title:"Modals & Popovers / ResponsivePopover",component:i,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(f,{children:[e.jsx(r,{additionalText:"Fruits",children:"Apples"}),e.jsx(r,{additionalText:"Fruits",children:"Bananas"}),e.jsx(r,{additionalText:"Vegetables",children:"Potato"})]}),headerText:"ResponsivePopover Header",horizontalAlign:d.Center,placement:c.End,verticalAlign:m.Center,opener:"openPopoverBtn",className:"footerPartNoPadding",open:v},tags:["package:@ui5/webcomponents"]},o={render(s){const[l,n]=P.useState(s.open);return e.jsxs(e.Fragment,{children:[e.jsx(u,{id:"openResponsivePopoverBtn",onClick:()=>{n(!0)},children:"Open Popover"}),e.jsx(i,{...s,onClose:()=>{n(!1)},opener:"openResponsivePopoverBtn",open:l})]})}};var t,p,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render(args) {
    const [responsivePopoverIsOpen, setResponsivePopoverIsOpen] = useState(args.open);
    return <>
        <Button id={'openResponsivePopoverBtn'} onClick={() => {
        setResponsivePopoverIsOpen(true);
      }}>
          Open Popover
        </Button>
        <ResponsivePopover {...args} onClose={() => {
        setResponsivePopoverIsOpen(false);
      }} opener="openResponsivePopoverBtn" open={responsivePopoverIsOpen} />
      </>;
  }
}`,...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const x=["Default"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{_ as C,o as D};
