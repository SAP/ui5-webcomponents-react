import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{r}from"./index-OjgoNOWw.js";import{B as m}from"./index-j1r8R8ti.js";import{r as u}from"./index-QYh6idnL.js";import{T as c,a as p}from"./index-Rjw5DyMA.js";const n=r.forwardRef((e,a)=>u.createPortal(t.jsx(c,{...e,ref:a}),document.body));n.displayName="Toast";try{n.displayName="Toast",n.__docgenInfo={description:"",displayName:"Toast",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},duration:{defaultValue:{value:"3000"},description:"Defines the duration in milliseconds for which component remains on the screen before it's automatically closed.\n\n**Note:** The minimum supported value is `500` ms and even if a lower value is set, the duration would remain `500` ms.",name:"duration",required:!1,type:{name:"number"}},placement:{defaultValue:{value:'"BottomCenter"'},description:"Defines the placement of the component.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'},{value:'"TopStart"'},{value:'"TopCenter"'},{value:'"TopEnd"'},{value:'"MiddleStart"'},{value:'"MiddleCenter"'},{value:'"MiddleEnd"'},{value:'"BottomStart"'},{value:'"BottomCenter"'},{value:'"BottomEnd"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}}}}}catch{}const h={title:"Modals & Popovers / Toast",component:c,args:{placement:p.BottomCenter,children:"Toast Text"},argTypes:{children:{control:"text"}},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents"]},o={render(e){const a=r.useRef(null),d=()=>{a.current.show()};return r.useEffect(()=>{},[]),t.jsxs(t.Fragment,{children:[t.jsx(n,{ref:a,duration:e.duration,placement:e.placement,children:e.children}),t.jsx(m,{onClick:d,children:"Show Toast"})]})}};var s,l,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const f=["Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:f,default:h},Symbol.toStringTag,{value:"Module"}));export{S as C,o as D};
