import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{i as h}from"./utils--CInl4_t.js";import{r as s}from"./index-U0ga5oGA.js";import{B as C}from"./index-BWd6G_fU.js";import{T as i}from"./index-DiBsvSAg.js";var r;(function(e){e.TopStart="TopStart",e.TopCenter="TopCenter",e.TopEnd="TopEnd",e.MiddleStart="MiddleStart",e.MiddleCenter="MiddleCenter",e.MiddleEnd="MiddleEnd",e.BottomStart="BottomStart",e.BottomCenter="BottomCenter",e.BottomEnd="BottomEnd"})(r||(r={}));const f={title:"Modals & Popovers / Toast",component:i,args:{placement:r.BottomCenter,children:"Toast Text",open:h},argTypes:{children:{control:"text"}},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents"]},t={render(e){const[c,o]=s.useState(e.open);s.useEffect(()=>{o(e.open)},[e.open]);const l=()=>{o(!0)},m=u=>{o(!1),e.onClose(u)};return n.jsxs("div",{style:{height:"300px"},children:[n.jsx(i,{open:c,duration:e.duration,placement:e.placement,onClose:m,children:e.children}),n.jsx(C,{onClick:l,children:"Show Toast"})]})}};var a,p,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const S=["Default"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:S,default:f},Symbol.toStringTag,{value:"Module"}));export{M as C,t as D};
