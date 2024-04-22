import{j as o}from"./ManagedStyles-DBz9b8_7.js";import"./index-6ORMBGJq.js";import{r as s}from"./index-Cu9bd8lq.js";import{r as p}from"./index-Ckls47V4.js";import{B as u}from"./index-Cc3Ml5ET.js";import{T as m,a as d}from"./index-C0jVEOiH.js";const l=s.forwardRef((t,r)=>p.createPortal(o.jsx(m,{...t,ref:r}),document.body));l.displayName="Toast";const f={title:"Modals & Popovers / Toast",component:m,args:{placement:d.BottomCenter,children:"Toast Text"},argTypes:{children:{control:"text"}},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents"]},e={render(t){const r=s.useRef(null),i=()=>{r.current.show()};return s.useEffect(()=>{},[]),o.jsxs(o.Fragment,{children:[o.jsx(l,{ref:r,duration:t.duration,placement:t.placement,children:t.children}),o.jsx(u,{onClick:i,children:"Show Toast"})]})}};var a,n,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const h=["Default"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{C,e as D};
