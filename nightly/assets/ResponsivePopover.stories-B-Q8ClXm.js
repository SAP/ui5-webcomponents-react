import{j as e}from"./jsx-runtime-CLpGMVip.js";import{i as d}from"./utils-D9sA6PwJ.js";import{a as m,P as u,b as v}from"./Popover-BM5bmFmi.js";import{r as s}from"./index-D23YZj_x.js";import{B as f}from"./index-iR9PNDcN.js";import{L as P}from"./index-D0Ga7kYl.js";import{L as n}from"./index-gyPp3qGK.js";import{R as l}from"./index-B3djGxi3.js";import"./jsx-runtime--4q9epG_.js";import"./settings-D1-n_YAc.js";const g={title:"Modals & Popovers / ResponsivePopover",component:l,argTypes:{footer:{control:{disable:!0}},children:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(P,{children:[e.jsx(n,{additionalText:"Fruits",children:"Apples"}),e.jsx(n,{additionalText:"Fruits",children:"Bananas"}),e.jsx(n,{additionalText:"Vegetables",children:"Potato"})]}),headerText:"ResponsivePopover Header",horizontalAlign:m.Center,placement:u.End,verticalAlign:v.Center,opener:"openPopoverBtn",className:"footerPartNoPadding",open:d},tags:["package:@ui5/webcomponents"]},o={render(r){const[c,t]=s.useState(r.open);return s.useEffect(()=>{t(r.open)},[r.open]),e.jsxs(e.Fragment,{children:[e.jsx(f,{id:"openResponsivePopoverBtn",onClick:()=>{t(!0)},children:"Open Popover"}),e.jsx(l,{...r,onClose:()=>{t(!1)},opener:"openResponsivePopoverBtn",open:c})]})}};var p,a,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const x=["Default"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{_ as C,o as D};
