import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./jsx-runtime-CTdjW1dy.js";import"./settings-BDJRbAr_.js";import{i as d}from"./utils-DkCt3A4F.js";import{a as m,P as u,b as f}from"./Popover-D3TB1XeJ.js";import{r as s}from"./index-U0ga5oGA.js";import{B as P}from"./index-CK7zNLqv.js";import{L as x}from"./index-DoEoZYV5.js";import{L as n}from"./index-LP0Ne4sf.js";import{P as l}from"./index-DuSPh-fE.js";const g={title:"Modals & Popovers / Popover",component:l,argTypes:{children:{control:{disable:!0}},footer:{control:{disable:!0}},header:{control:{disable:!0}}},args:{children:e.jsxs(x,{children:[e.jsx(n,{additionalText:"Fruits",text:"Apples"}),e.jsx(n,{additionalText:"Fruits",text:"Bananas"}),e.jsx(n,{additionalText:"Vegetables",text:"Potato"})]}),headerText:"Popover Header",horizontalAlign:f.Center,placement:u.End,verticalAlign:m.Center,className:"footerPartNoPadding",open:d},tags:["package:@ui5/webcomponents"]},o={render(t){const[c,r]=s.useState(t.open);return s.useEffect(()=>{r(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(P,{id:"openPopoverBtn",onClick:()=>{r(!0)},children:"Open Popover"}),e.jsx(l,{...t,onClose:()=>{r(!1)},opener:"openPopoverBtn",open:c})]})}};var a,p,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const v=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:v,default:g},Symbol.toStringTag,{value:"Module"}));export{A as C,o as D};
