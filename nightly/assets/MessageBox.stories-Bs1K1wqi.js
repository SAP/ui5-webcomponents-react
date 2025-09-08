import{M as m,K as g,N as p,O as d,j as e,r as i,Q as u}from"./iframe-L-onm66G.js";const x={title:"Modals & Popovers / MessageBox",component:p,argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},args:{open:g,type:m.Confirm,children:'You can close the MessageBox by pressing "Escape" or selecting one of the footer buttons.'},parameters:{chromatic:{delay:1e3}},tags:["extends:@ui5/webcomponents","cem-module:Dialog","package:@ui5/webcomponents-react"]},n={render(o){const[a,s]=i.useState(o.open),r=()=>{s(!0)},c=l=>{s(!1),o.onClose(l)};return i.useEffect(()=>{s(o.open)},[o.open]),e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:r,children:"Open Messagebox"}),e.jsx(p,{...o,open:a,onClose:c})]})}},t={args:{actions:[d.OK,"Custom Action",d.Cancel,e.jsx(u,{id:"custom-action",children:"Custom Button"},"0")]},render(o){const[a,s]=i.useState(!1),r=()=>{s(!0)},c=(l,C)=>{s(!1),o.onClose(l,C)};return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:r,children:"Open Messagebox"}),e.jsx(p,{...o,open:a,onClose:c})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const B=["Default","WithCustomActions"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithCustomActions:t,__namedExportsOrder:B,default:x},Symbol.toStringTag,{value:"Module"}));export{h as C,n as D,t as W};
