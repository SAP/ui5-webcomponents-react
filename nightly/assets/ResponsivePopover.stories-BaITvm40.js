import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{i as d}from"./utils-CdA-kd4O.js";import{a as m,P as u,b as v}from"./Popover-eNK7pDla.js";import{r as s}from"./index-U0ga5oGA.js";import{B as f}from"./index-dNG4P2z4.js";import{L as P}from"./index-CED0zuRY.js";import{L as n}from"./index-Dhd-q9Er.js";import{R as l}from"./index-BiHE_w2X.js";import"./jsx-runtime-CkEx_Gfk.js";import"./settings-BLuc2Bhq.js";const x={title:"Modals & Popovers / ResponsivePopover",component:l,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(P,{children:[e.jsx(n,{additionalText:"Fruits",text:"Apples"}),e.jsx(n,{additionalText:"Fruits",text:"Bananas"}),e.jsx(n,{additionalText:"Vegetables",text:"Potato"})]}),headerText:"ResponsivePopover Header",horizontalAlign:v.Center,placement:u.End,verticalAlign:m.Center,opener:"openPopoverBtn",className:"footerPartNoPadding",open:d},tags:["package:@ui5/webcomponents"]},o={render(t){const[c,r]=s.useState(t.open);return s.useEffect(()=>{r(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(f,{id:"openResponsivePopoverBtn",onClick:()=>{r(!0)},children:"Open Popover"}),e.jsx(l,{...t,onClose:()=>{r(!1)},opener:"openResponsivePopoverBtn",open:c})]})}};var p,a,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const g=["Default"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:g,default:x},Symbol.toStringTag,{value:"Module"}));export{_ as C,o as D};
