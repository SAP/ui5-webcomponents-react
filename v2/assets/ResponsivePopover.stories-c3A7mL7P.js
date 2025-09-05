import{x as i,Y as l,H as c,Z as d,j as e,R as a,r as s,B as u}from"./iframe-wtGyowSu.js";import{L as m}from"./index-5w_GDQTo.js";import{L as r}from"./index-UHr40Gn7.js";import"./i18n-DCXZOGva.js";import"./settings-BhXfmtZo.js";const v={title:"Modals & Popovers / ResponsivePopover",component:a,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(m,{children:[e.jsx(r,{additionalText:"Fruits",text:"Apples"}),e.jsx(r,{additionalText:"Fruits",text:"Bananas"}),e.jsx(r,{additionalText:"Vegetables",text:"Potato"})]}),headerText:"ResponsivePopover Header",horizontalAlign:d.Center,placement:c.End,verticalAlign:l.Center,opener:"openPopoverBtn",className:"footerPartNoPadding",open:i},tags:["package:@ui5/webcomponents"]},o={render(t){const[p,n]=s.useState(t.open);return s.useEffect(()=>{n(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(u,{id:"openResponsivePopoverBtn",onClick:()=>{n(!0)},children:"Open Popover"}),e.jsx(a,{...t,onClose:()=>{n(!1)},opener:"openResponsivePopoverBtn",open:p})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const x=["Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:x,default:v},Symbol.toStringTag,{value:"Module"}));export{O as C,o as D};
