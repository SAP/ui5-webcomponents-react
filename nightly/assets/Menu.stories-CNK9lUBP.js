import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{i as C}from"./utils-owyskn23.js";import{r as s}from"./index-U0ga5oGA.js";import{B as O}from"./index-DoqJBpXZ.js";import{M as n}from"./index-oXuKD_5j.js";import{M as p}from"./index-BUHSN-nc.js";import{M as l}from"./index-W9vpPI6U.js";const S={title:"Modals & Popovers / Menu",component:l,argTypes:{children:{control:{disable:!0}}},args:{open:C},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents"]},a={render(t){const[i,o]=s.useState(t.open),u=s.useRef(null);return s.useEffect(()=>{o(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(O,{ref:u,onClick:()=>{o(r=>!r)},children:"Show Menu"}),e.jsxs(l,{...t,open:i,opener:u.current,onClose:r=>{t.onClose(r),o(!1)},children:[e.jsx(n,{text:"New File",icon:"add-document"}),e.jsx(n,{text:"New Folder",icon:"add-folder",disabled:!0}),e.jsx(p,{}),e.jsx(n,{text:"Open",icon:"open-folder"}),e.jsx(n,{text:"Close"}),e.jsx(p,{}),e.jsx(n,{text:"Preferences",icon:"action-settings"}),e.jsx(n,{text:"Exit",icon:"journey-arrive"})]})]})}},c={name:"with Submenu",render:t=>{const[i,o]=s.useState(t.open),u=s.useRef(null);return s.useEffect(()=>{o(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(O,{ref:u,onClick:()=>{o(r=>!r)},children:"Show Menu"}),e.jsxs(l,{...t,open:i,opener:u.current,onClose:r=>{t.onClose(r),o(!1)},children:[e.jsx(n,{text:"New File",icon:"add-document"}),e.jsx(n,{text:"New Folder",icon:"add-folder",disabled:!0}),e.jsx(p,{}),e.jsxs(n,{text:"Open",icon:"open-folder",children:[e.jsxs(n,{text:"Open Locally",icon:"open-folder",children:[e.jsx(n,{text:"Open C"}),e.jsx(n,{text:"Open D"}),e.jsx(n,{text:"Open E"})]}),e.jsx(n,{text:"Open from Cloud",icon:"cloud"})]}),e.jsx(n,{text:"Close"}),e.jsx(p,{}),e.jsx(n,{text:"Preferences",icon:"action-settings"}),e.jsx(n,{text:"Exit",icon:"journey-arrive"})]})]})}};var d,x,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render(args) {
    const [open, setOpen] = useState(args.open);
    const btnRef = useRef(null);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button ref={btnRef} onClick={() => {
        setOpen(prev => !prev);
      }}>
          Show Menu
        </Button>
        <Menu {...args} open={open} opener={btnRef.current} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }}>
          <MenuItem text="New File" icon="add-document" />
          <MenuItem text="New Folder" icon="add-folder" disabled />
          <MenuSeparator />
          <MenuItem text="Open" icon="open-folder" />
          <MenuItem text="Close" />
          <MenuSeparator />
          <MenuItem text="Preferences" icon="action-settings" />
          <MenuItem text="Exit" icon="journey-arrive" />
        </Menu>
      </>;
  }
}`,...(m=(x=a.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var f,M,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'with Submenu',
  render: args => {
    const [open, setOpen] = useState(args.open);
    const btnRef = useRef(null);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button ref={btnRef} onClick={() => {
        setOpen(prev => !prev);
      }}>
          Show Menu
        </Button>
        <Menu {...args} open={open} opener={btnRef.current} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }}>
          <MenuItem text="New File" icon="add-document" />
          <MenuItem text="New Folder" icon="add-folder" disabled />
          <MenuSeparator />
          <MenuItem text="Open" icon="open-folder">
            <MenuItem text="Open Locally" icon="open-folder">
              <MenuItem text="Open C" />
              <MenuItem text="Open D" />
              <MenuItem text="Open E" />
            </MenuItem>
            <MenuItem text="Open from Cloud" icon="cloud" />
          </MenuItem>
          <MenuItem text="Close" />
          <MenuSeparator />
          <MenuItem text="Preferences" icon="action-settings" />
          <MenuItem text="Exit" icon="journey-arrive" />
        </Menu>
      </>;
  }
}`,...(j=(M=c.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};const b=["Default","WithSubMenu"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithSubMenu:c,__namedExportsOrder:b,default:S},Symbol.toStringTag,{value:"Module"}));export{y as C,a as D,c as W};
