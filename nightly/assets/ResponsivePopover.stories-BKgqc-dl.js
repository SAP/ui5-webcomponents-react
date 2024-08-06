import{j as e}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{i as v}from"./utils-Pzg-4hDJ.js";import{a as d,P as c,b as m}from"./Popover-C3k48onv.js";import{r as P}from"./index-ClU-Tc1p.js";import{B as u}from"./index-NmxPYmSL.js";import{L as f}from"./index-BkOfJ4KV.js";import{L as r}from"./index-CgB2GYAF.js";import{R as i}from"./index-BB4KQzaQ.js";import"./withWebComponent-Dj0CMfaz.js";import"./settings-DNVmxa12.js";const g={title:"Modals & Popovers / ResponsivePopover",component:i,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(f,{children:[e.jsx(r,{additionalText:"Fruits",children:"Apples"}),e.jsx(r,{additionalText:"Fruits",children:"Bananas"}),e.jsx(r,{additionalText:"Vegetables",children:"Potato"})]}),headerText:"ResponsivePopover Header",horizontalAlign:d.Center,placement:c.End,verticalAlign:m.Center,opener:"openPopoverBtn",className:"footerPartNoPadding",open:v},tags:["package:@ui5/webcomponents"]},o={render(n){const[l,s]=P.useState(n.open);return e.jsxs(e.Fragment,{children:[e.jsx(u,{id:"openResponsivePopoverBtn",onClick:()=>{s(!0)},children:"Open Popover"}),e.jsx(i,{...n,onClose:()=>{s(!1)},opener:"openResponsivePopoverBtn",open:l})]})}};var t,p,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
