import{K as i,a8 as l,Z as c,a9 as d,j as e,V as a,r as s,Q as u}from"./iframe-Plj9L4DO.js";import"./settings-C1dsANlV.js";import{L as m}from"./index-BzcyxAVY.js";import{L as n}from"./index-Y38PQMr-.js";const x={title:"Modals & Popovers / Popover",component:a,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(m,{children:[e.jsx(n,{additionalText:"Fruits",text:"Apples"}),e.jsx(n,{additionalText:"Fruits",text:"Bananas"}),e.jsx(n,{additionalText:"Vegetables",text:"Potato"})]}),headerText:"Popover Header",horizontalAlign:d.Center,placement:c.End,verticalAlign:l.Center,className:"footerPartNoPadding",open:i},tags:["package:@ui5/webcomponents"]},o={render(t){const[p,r]=s.useState(t.open);return s.useEffect(()=>{r(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(u,{id:"openPopoverBtn",onClick:()=>{r(!0)},children:"Open Popover"}),e.jsx(a,{...t,onClose:()=>{r(!1)},opener:"openPopoverBtn",open:p})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render(args) {
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button id={'openPopoverBtn'} onClick={() => {
        setOpen(true);
      }}>
          Open Popover
        </Button>
        <Popover {...args} onClose={() => {
        setOpen(false);
      }} opener="openPopoverBtn" open={open} />
      </>;
  }
}`,...o.parameters?.docs?.source}}};const P=["Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:P,default:x},Symbol.toStringTag,{value:"Module"}));export{O as C,o as D};
