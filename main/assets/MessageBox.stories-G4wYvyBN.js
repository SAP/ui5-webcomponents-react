import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{r as c}from"./index-OjgoNOWw.js";import{r as M}from"./index-QYh6idnL.js";import{M as h,a as O,b as m}from"./index-QxnNcpHS.js";import{B as u}from"./index-gDDRLNes.js";const p=c.forwardRef((e,s)=>M.createPortal(o.jsx(h,{...e,ref:s}),document.body));p.displayName="MessageBox";const b={title:"Modals & Popovers / MessageBox",component:h,argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},args:{open:!1,type:O.Confirm,children:'Press "Escape" to close the MessageBox.'},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents","cem-module:Dialog"]},t={render(e){const[s,n]=c.useState(e.open),l=()=>{n(!0)},i=r=>{n(!1),e.onClose(r)};return c.useEffect(()=>{n(e.open)},[e.open]),o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:l,children:"Open Messagebox"}),o.jsx(p,{...e,open:s,onClose:i})]})}},a={args:{actions:[m.OK,"Custom Action",m.Cancel,o.jsx(u,{id:"custom-action",children:"Custom Button"},"0")]},render(e){const[s,n]=c.useState(!1),l=()=>{n(!0)},i=r=>{r.detail.action,n(!1),e.onClose(r)};return o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:l,children:"Open Messagebox"}),o.jsx(p,{...e,open:s,onClose:i})]})}};var d,C,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render(args) {
    const [open, setOpen] = useState(isChromatic || args.open);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = e => {
      setOpen(false);
      args.onClose(e);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button onClick={onButtonClick}>Open Messagebox</Button>
        <MessageBox {...args} open={open} onClose={handleClose} />
      </>;
  }
}`,...(g=(C=t.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var x,B,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    actions: [MessageBoxActions.OK, 'Custom Action', MessageBoxActions.Cancel, <Button key="0" id="custom-action">
        Custom Button
      </Button>]
  },
  render(args) {
    const [open, setOpen] = useState(false);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = e => {
      if (e.detail.action === 'Custom Action') {
        // do something on "Custom Action" button click
      }
      setOpen(false);
      args.onClose(e);
    };
    return <>
        <Button onClick={onButtonClick}>Open Messagebox</Button>
        <MessageBox {...args} open={open} onClose={handleClose} />
      </>;
  }
}`,...(f=(B=a.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const k=["Default","WithCustomActions"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithCustomActions:a,__namedExportsOrder:k,default:b},Symbol.toStringTag,{value:"Module"}));export{_ as C,t as D,a as W};
