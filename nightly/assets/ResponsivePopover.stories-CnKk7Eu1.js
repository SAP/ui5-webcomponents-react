import{K as d,a8 as u,Z as v,a9 as m,j as e,W as l,r as s,Q as P}from"./iframe-CG2rGjbc.js";import{L as x}from"./index-aCo9U2xx.js";import{L as r}from"./index-2K0DQ2LF.js";import"./settings-DWEJ_gda.js";const f={title:"Modals & Popovers / ResponsivePopover",component:l,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(x,{children:[e.jsx(r,{additionalText:"Fruits",text:"Apples"}),e.jsx(r,{additionalText:"Fruits",text:"Bananas"}),e.jsx(r,{additionalText:"Vegetables",text:"Potato"})]}),headerText:"ResponsivePopover Header",horizontalAlign:m.Center,placement:v.End,verticalAlign:u.Center,opener:"openPopoverBtn",className:"footerPartNoPadding",open:d},tags:["package:@ui5/webcomponents"]},o={render(t){const[c,n]=s.useState(t.open);return s.useEffect(()=>{n(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(P,{id:"openResponsivePopoverBtn",onClick:()=>{n(!0)},children:"Open Popover"}),e.jsx(l,{...t,onClose:()=>{n(!1)},opener:"openResponsivePopoverBtn",open:c})]})}};var a,p,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render(args) {
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button id={'openResponsivePopoverBtn'} onClick={() => {
        setOpen(true);
      }}>
          Open Popover
        </Button>
        <ResponsivePopover {...args} onClose={() => {
        setOpen(false);
      }} opener="openResponsivePopoverBtn" open={open} />
      </>;
  }
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const g=["Default"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:g,default:f},Symbol.toStringTag,{value:"Module"}));export{C,o as D};
