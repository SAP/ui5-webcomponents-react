import{j as e}from"./useIsomorphicLayoutEffect-BDy32gDd.js";import{i as O}from"./utils-C6QUo0aU.js";import{r as i}from"./index-ClU-Tc1p.js";import{M as p,a as M,b as m}from"./index-CwLXqG0B.js";import{B as u}from"./index-B1dq4JQQ.js";const b={title:"Modals & Popovers / MessageBox",component:p,argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},args:{open:O,type:M.Confirm,children:'You can close the MessageBox by pressing "Escape" or selecting one of the footer buttons.'},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents","cem-module:Dialog"]},s={render(o){const[a,n]=i.useState(o.open),r=()=>{n(!0)},c=l=>{n(!1),o.onClose(l)};return i.useEffect(()=>{n(o.open)},[o.open]),e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:r,children:"Open Messagebox"}),e.jsx(p,{...o,open:a,onClose:c})]})}},t={args:{actions:[m.OK,"Custom Action",m.Cancel,e.jsx(u,{id:"custom-action",children:"Custom Button"},"0")]},render(o){const[a,n]=i.useState(!1),r=()=>{n(!0)},c=(l,h)=>{n(!1),o.onClose(l,h)};return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:r,children:"Open Messagebox"}),e.jsx(p,{...o,open:a,onClose:c})]})}};var d,C,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render(args) {
    const [open, setOpen] = useState(args.open);
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
}`,...(g=(C=s.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var x,B,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    const handleClose = (action, escPressed) => {
      if (action === 'Custom Action') {
        // do something on "Custom Action" button click
      }
      setOpen(false);
      args.onClose(action, escPressed);
    };
    return <>
        <Button onClick={onButtonClick}>Open Messagebox</Button>
        <MessageBox {...args} open={open} onClose={handleClose} />
      </>;
  }
}`,...(f=(B=t.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const k=["Default","WithCustomActions"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithCustomActions:t,__namedExportsOrder:k,default:b},Symbol.toStringTag,{value:"Module"}));export{_ as C,s as D,t as W};
