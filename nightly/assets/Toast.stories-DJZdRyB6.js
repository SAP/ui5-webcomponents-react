import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./Button-DB-H23f_.js";import{n as o,t as s}from"./Toast-BxTt2MEc.js";import{i as c}from"./iframe-B2XIkDRG.js";var l,u;function d(){return(d=e((()=>{(function(e){e.TopStart=`TopStart`,e.TopCenter=`TopCenter`,e.TopEnd=`TopEnd`,e.MiddleStart=`MiddleStart`,e.MiddleCenter=`MiddleCenter`,e.MiddleEnd=`MiddleEnd`,e.BottomStart=`BottomStart`,e.BottomCenter=`BottomCenter`,e.BottomEnd=`BottomEnd`})(l||={}),u=l})))()}var f=t({Default:()=>g,__namedExportsOrder:()=>_,default:()=>h}),p,m,h,g,_;function v(){return(v=e((()=>{c(),d(),p=n(),i(),o(),m=r(),h={title:`Modals & Popovers / Toast`,component:s,args:{placement:u.BottomCenter,children:`Toast Text`,open:!1},argTypes:{children:{control:`text`}},parameters:{chromatic:{delay:1e3}},tags:[`package:@ui5/webcomponents`]},g={render(e){let[t,n]=(0,p.useState)(e.open);return(0,p.useEffect)(()=>{n(e.open)},[e.open]),(0,m.jsxs)(`div`,{style:{height:`300px`},children:[(0,m.jsx)(s,{open:t,duration:e.duration,placement:e.placement,onClose:t=>{n(!1),e.onClose(t)},children:e.children}),(0,m.jsx)(a,{onClick:()=>{n(!0)},children:`Show Toast`})]})}},_=[`Default`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}})))()}export{f as n,v as r,g as t};