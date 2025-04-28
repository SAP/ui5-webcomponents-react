import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./jsx-runtime-BCizSm9J.js";import"./settings-BLpaNyt-.js";import{i as d}from"./utils-CZ5mUiMk.js";import{a as m,P as u,b as f}from"./Popover-ZaMaqrll.js";import{r as s}from"./index-U0ga5oGA.js";import{B as P}from"./index-DoqJBpXZ.js";import{L as g}from"./index-BlpWI8MS.js";import{L as n}from"./index-hsck0mqN.js";import{P as l}from"./index-DogrUJhP.js";const v={title:"Modals & Popovers / Popover",component:l,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(g,{children:[e.jsx(n,{additionalText:"Fruits",children:"Apples"}),e.jsx(n,{additionalText:"Fruits",children:"Bananas"}),e.jsx(n,{additionalText:"Vegetables",children:"Potato"})]}),headerText:"Popover Header",horizontalAlign:f.Center,placement:u.End,verticalAlign:m.Center,className:"footerPartNoPadding",open:d},tags:["package:@ui5/webcomponents"]},o={render(r){const[c,t]=s.useState(r.open);return s.useEffect(()=>{t(r.open)},[r.open]),e.jsxs(e.Fragment,{children:[e.jsx(P,{id:"openPopoverBtn",onClick:()=>{t(!0)},children:"Open Popover"}),e.jsx(l,{...r,onClose:()=>{t(!1)},opener:"openPopoverBtn",open:c})]})}};var a,p,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
