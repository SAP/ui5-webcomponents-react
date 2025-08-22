import{K as i,a8 as l,Z as c,a9 as d,j as e,W as a,r as s,Q as u}from"./iframe-C6IJVCey.js";import{L as v}from"./index-DoVpOxB3.js";import{L as r}from"./index-Bejl1epP.js";import"./settings-CaUhFBfT.js";const m={title:"Modals & Popovers / ResponsivePopover",component:a,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(v,{children:[e.jsx(r,{additionalText:"Fruits",text:"Apples"}),e.jsx(r,{additionalText:"Fruits",text:"Bananas"}),e.jsx(r,{additionalText:"Vegetables",text:"Potato"})]}),headerText:"ResponsivePopover Header",horizontalAlign:d.Center,placement:c.End,verticalAlign:l.Center,opener:"openPopoverBtn",className:"footerPartNoPadding",open:i},tags:["package:@ui5/webcomponents"]},o={render(t){const[p,n]=s.useState(t.open);return s.useEffect(()=>{n(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(u,{id:"openResponsivePopoverBtn",onClick:()=>{n(!0)},children:"Open Popover"}),e.jsx(a,{...t,onClose:()=>{n(!1)},opener:"openResponsivePopoverBtn",open:p})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const P=["Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:P,default:m},Symbol.toStringTag,{value:"Module"}));export{O as C,o as D};
