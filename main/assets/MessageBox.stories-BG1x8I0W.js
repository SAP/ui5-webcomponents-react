import{j as e}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import"./index-CUA2PSWR.js";import{r as i}from"./index-BQ1WsyJB.js";import{M as p,a as h,b as m}from"./index-DfsbXIc6.js";import{B as u}from"./index-Dwd6f1Ha.js";const O={title:"Modals & Popovers / MessageBox",component:p,argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},args:{open:!1,type:h.Confirm,children:'Press "Escape" to close the MessageBox.'},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents","cem-module:Dialog"]},t={render(n){const[r,o]=i.useState(n.open),c=()=>{o(!0)},l=a=>{o(!1),n.onClose(a)};return i.useEffect(()=>{o(n.open)},[n.open]),e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:c,children:"Open Messagebox"}),e.jsx(p,{...n,open:r,onClose:l})]})}},s={args:{actions:[m.OK,"Custom Action",m.Cancel,e.jsx(u,{id:"custom-action",children:"Custom Button"},"0")]},render(n){const[r,o]=i.useState(!1),c=()=>{o(!0)},l=a=>{a.detail.action,o(!1),n.onClose(a)};return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:c,children:"Open Messagebox"}),e.jsx(p,{...n,open:r,onClose:l})]})}};var d,C,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(C=t.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var x,B,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    actions: [MessageBoxAction.OK, 'Custom Action', MessageBoxAction.Cancel, <Button key="0" id="custom-action">
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
}`,...(f=(B=s.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const M=["Default","WithCustomActions"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithCustomActions:s,__namedExportsOrder:M,default:O},Symbol.toStringTag,{value:"Module"}));export{y as C,t as D,s as W};
