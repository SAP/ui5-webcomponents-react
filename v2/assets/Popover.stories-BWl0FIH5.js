import{j as e}from"./jsx-runtime-CLpGMVip.js";import"./withWebComponent-pt4_FAs2.js";import"./settings-C3Ze2cqv.js";import{i as d}from"./utils-CKdwd20C.js";import{a as m,P as u,b as f}from"./Popover-BepUWsCJ.js";import{r as s}from"./index-D23YZj_x.js";import{B as P}from"./index-DBeTfgPc.js";import{L as g}from"./index-CVr7Q-In.js";import{L as n}from"./index-DQ_ixK5W.js";import{P as l}from"./index-Dmi4gEmW.js";const v={title:"Modals & Popovers / Popover",component:l,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(g,{children:[e.jsx(n,{additionalText:"Fruits",children:"Apples"}),e.jsx(n,{additionalText:"Fruits",children:"Bananas"}),e.jsx(n,{additionalText:"Vegetables",children:"Potato"})]}),headerText:"Popover Header",horizontalAlign:m.Center,placement:u.End,verticalAlign:f.Center,className:"footerPartNoPadding",open:d},tags:["package:@ui5/webcomponents"]},o={render(r){const[c,t]=s.useState(r.open);return s.useEffect(()=>{t(r.open)},[r.open]),e.jsxs(e.Fragment,{children:[e.jsx(P,{id:"openPopoverBtn",onClick:()=>{t(!0)},children:"Open Popover"}),e.jsx(l,{...r,onClose:()=>{t(!1)},opener:"openPopoverBtn",open:c})]})}};var a,p,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const x=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:x,default:v},Symbol.toStringTag,{value:"Module"}));export{A as C,o as D};
