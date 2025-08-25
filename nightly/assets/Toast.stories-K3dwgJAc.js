import{K as l,Y as a,r as s,j as n,Q as u}from"./iframe-Ba8pCVp8.js";var r;(function(e){e.TopStart="TopStart",e.TopCenter="TopCenter",e.TopEnd="TopEnd",e.MiddleStart="MiddleStart",e.MiddleCenter="MiddleCenter",e.MiddleEnd="MiddleEnd",e.BottomStart="BottomStart",e.BottomCenter="BottomCenter",e.BottomEnd="BottomEnd"})(r||(r={}));const m={title:"Modals & Popovers / Toast",component:a,args:{placement:r.BottomCenter,children:"Toast Text",open:l},argTypes:{children:{control:"text"}},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents"]},t={render(e){const[p,o]=s.useState(e.open);s.useEffect(()=>{o(e.open)},[e.open]);const d=()=>{o(!0)},i=c=>{o(!1),e.onClose(c)};return n.jsxs("div",{style:{height:"300px"},children:[n.jsx(a,{open:p,duration:e.duration,placement:e.placement,onClose:i,children:e.children}),n.jsx(u,{onClick:d,children:"Show Toast"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const h=["Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:h,default:m},Symbol.toStringTag,{value:"Module"}));export{S as C,t as D};
