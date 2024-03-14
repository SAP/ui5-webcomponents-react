import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{r as s}from"./index-OjgoNOWw.js";import{r as u}from"./index-QYh6idnL.js";import{B as p}from"./index-Rv02CbMm.js";import{T as m,a as d}from"./index-mtJ85OVu.js";const l=s.forwardRef((t,r)=>u.createPortal(o.jsx(m,{...t,ref:r}),document.body));l.displayName="Toast";const f={title:"Modals & Popovers / Toast",component:m,args:{placement:d.BottomCenter,children:"Toast Text"},argTypes:{children:{control:"text"}},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents"]},e={render(t){const r=s.useRef(null),i=()=>{r.current.show()};return s.useEffect(()=>{},[]),o.jsxs(o.Fragment,{children:[o.jsx(l,{ref:r,duration:t.duration,placement:t.placement,children:t.children}),o.jsx(p,{onClick:i,children:"Show Toast"})]})}};var a,n,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render(args) {
    const toast = useRef(null);
    const showToast = () => {
      toast.current.show();
    };
    useEffect(() => {
      if (isChromatic) {
        toast.current.show();
      }
    }, []);
    return <>
        <Toast ref={toast} duration={args.duration} placement={args.placement}>
          {args.children}
        </Toast>
        <Button onClick={showToast}>Show Toast</Button>
      </>;
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const h=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{y as C,e as D};
