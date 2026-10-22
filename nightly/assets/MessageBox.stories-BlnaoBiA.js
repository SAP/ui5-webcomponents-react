import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./Button-BMYo3Xf9.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./MessageBox-BfzYmFtu.js";import{i as f}from"./iframe-DWosOdaS.js";var p=t({Default:()=>_,WithCustomActions:()=>v,__namedExportsOrder:()=>y,default:()=>g}),m,h,g,_,v,y;function b(){return(b=e((()=>{f(),m=n(),l(),s(),i(),c(),h=r(),g={title:`Modals & Popovers / MessageBox`,component:d,argTypes:{header:{control:{disable:!0}},actions:{control:{disable:!0}},icon:{control:{disable:!0}}},args:{open:!1,type:u.Confirm,children:`You can close the MessageBox by pressing "Escape" or selecting one of the footer buttons.`},parameters:{chromatic:{delay:1e3}},tags:[`extends:@ui5/webcomponents`,`cem-module:Dialog`,`package:@ui5/webcomponents-react`]},_={render(e){let[t,n]=(0,m.useState)(e.open),r=()=>{n(!0)},i=t=>{n(!1),e.onClose(t)};return(0,m.useEffect)(()=>{n(e.open)},[e.open]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{onClick:r,children:`Open Messagebox`}),(0,h.jsx)(d,{...e,open:t,onClose:i})]})}},v={args:{actions:[o.OK,`Custom Action`,o.Cancel,(0,h.jsx)(a,{id:`custom-action`,children:`Custom Button`},`0`)]},render(e){let[t,n]=(0,m.useState)(!1),r=()=>{n(!0)},i=(t,r)=>{n(!1),e.onClose(t,r)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{onClick:r,children:`Open Messagebox`}),(0,h.jsx)(d,{...e,open:t,onClose:i})]})}},y=[`Default`,`WithCustomActions`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}}})))()}export{b as i,p as n,v as r,_ as t};