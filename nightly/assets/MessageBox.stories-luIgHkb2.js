import{j as e}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{i as O}from"./utils-DiipWok5.js";import{r as i}from"./index-RYns6xqu.js";import{M as p,a as M,b as m}from"./index-CYu7XaE1.js";import{B as u}from"./index-DblZcT2P.js";const b={title:"Modals & Popovers / MessageBox",component:p,argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},args:{open:O,type:M.Confirm,children:'You can close the MessageBox by pressing "Escape" or selecting one of the footer buttons.'},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents","cem-module:Dialog"]},n={render(o){const[a,s]=i.useState(o.open),r=()=>{s(!0)},c=l=>{s(!1),o.onClose(l)};return i.useEffect(()=>{s(o.open)},[o.open]),e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:r,children:"Open Messagebox"}),e.jsx(p,{...o,open:a,onClose:c})]})}},t={args:{actions:[m.OK,"Custom Action",m.Cancel,e.jsx(u,{id:"custom-action",children:"Custom Button"},"0")]},render(o){const[a,s]=i.useState(!1),r=()=>{s(!0)},c=(l,h)=>{s(!1),o.onClose(l,h)};return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:r,children:"Open Messagebox"}),e.jsx(p,{...o,open:a,onClose:c})]})}};var d,C,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(C=n.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var x,B,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(B=t.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const k=["Default","WithCustomActions"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithCustomActions:t,__namedExportsOrder:k,default:b},Symbol.toStringTag,{value:"Module"}));export{_ as C,n as D,t as W};
