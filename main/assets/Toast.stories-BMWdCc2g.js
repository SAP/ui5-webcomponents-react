import{j as n}from"./useIsomorphicLayoutEffect-CJg151Ok.js";import{i as u}from"./utils-CM5wdzW0.js";import{T as c,a as h}from"./index-CcwMavOE.js";import{r as s}from"./index-CP2MHerv.js";import{B as f}from"./index-D0pdIQFP.js";const T={title:"Modals & Popovers / Toast",component:c,args:{placement:h.BottomCenter,children:"Toast Text",open:u},argTypes:{children:{control:"text"}},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents"]},o={render(e){const[l,t]=s.useState(e.open);s.useEffect(()=>{t(e.open)},[e.open]);const i=()=>{t(!0)},m=d=>{t(!1),e.onClose(d)};return n.jsxs("div",{style:{height:"300px"},children:[n.jsx(c,{open:l,duration:e.duration,placement:e.placement,onClose:m,children:e.children}),n.jsx(f,{onClick:i,children:"Show Toast"})]})}};var r,a,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render(args) {
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    const showToast = () => {
      setOpen(true);
    };
    const onClose = e => {
      setOpen(false);
      args.onClose(e);
    };
    return <div style={{
      height: '300px'
    }}>
        <Toast open={open} duration={args.duration} placement={args.placement} onClose={onClose}>
          {args.children}
        </Toast>
        <Button onClick={showToast}>Show Toast</Button>
      </div>;
  }
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const x=["Default"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:x,default:T},Symbol.toStringTag,{value:"Module"}));export{w as C,o as D};
