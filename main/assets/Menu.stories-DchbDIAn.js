import{j as e}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import"./index-B6o6n9h0.js";import{r}from"./index-DEe9W-hO.js";import{B as S}from"./index-BGeTBj-F.js";import{M as f,a as n}from"./index-B8mrnDbT.js";const h={title:"Modals & Popovers / Menu",component:f,argTypes:{children:{control:{disable:!0}}},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents"]},c={render(t){const[a,o]=r.useState(t.open),u=r.useRef(null),l=r.useRef(null);return r.useEffect(()=>{},[]),r.useEffect(()=>{o(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(S,{ref:l,onClick:s=>{u.current.opener=s.currentTarget,o(p=>!p)},children:"Show Menu"}),e.jsxs(f,{...t,open:a,ref:u,onClose:s=>{t.onClose(s),o(!1)},children:[e.jsx(n,{text:"New File",icon:"add-document"}),e.jsx(n,{text:"New Folder",icon:"add-folder",disabled:!0}),e.jsx(n,{text:"Open",icon:"open-folder",startsSection:!0}),e.jsx(n,{text:"Close"}),e.jsx(n,{text:"Preferences",icon:"action-settings",startsSection:!0}),e.jsx(n,{text:"Exit",icon:"journey-arrive"})]})]})}},i={name:"with Submenu",render:t=>{const[a,o]=r.useState(t.open),u=r.useRef(null),l=r.useRef(null);return r.useEffect(()=>{},[]),r.useEffect(()=>{o(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(S,{ref:l,onClick:s=>{u.current.opener=s.currentTarget,o(p=>!p)},children:"Show Menu"}),e.jsxs(f,{...t,open:a,ref:u,onClose:s=>{t.onClose(s),o(!1)},children:[e.jsx(n,{text:"New File",icon:"add-document"}),e.jsx(n,{text:"New Folder",icon:"add-folder",disabled:!0}),e.jsxs(n,{text:"Open",icon:"open-folder",startsSection:!0,children:[e.jsxs(n,{text:"Open Locally",icon:"open-folder",startsSection:!0,children:[e.jsx(n,{text:"Open C"}),e.jsx(n,{text:"Open D"}),e.jsx(n,{text:"Open E"})]}),e.jsx(n,{text:"Open from Cloud",icon:"cloud"})]}),e.jsx(n,{text:"Close"}),e.jsx(n,{text:"Preferences",icon:"action-settings",startsSection:!0}),e.jsx(n,{text:"Exit",icon:"journey-arrive"})]})]})}};var d,m,x;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render(args) {
    const [open, setOpen] = useState(args.open);
    const ref = useRef(null);
    const btnRef = useRef(null);
    useEffect(() => {
      if (isChromatic && ref.current && btnRef.current) {
        void customElements.whenDefined('ui5-menu').then(() => {
          ref.current.opener = btnRef.current;
          ref.current.open = true;
        });
      }
    }, []);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button ref={btnRef} onClick={e => {
        ref.current.opener = e.currentTarget;
        setOpen(prev => !prev);
      }}>
          Show Menu
        </Button>
        <Menu {...args} open={open} ref={ref} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }}>
          <MenuItem text="New File" icon="add-document" />
          <MenuItem text="New Folder" icon="add-folder" disabled />
          <MenuItem text="Open" icon="open-folder" startsSection />
          <MenuItem text="Close" />
          <MenuItem text="Preferences" icon="action-settings" startsSection />
          <MenuItem text="Exit" icon="journey-arrive" />
        </Menu>
      </>;
  }
}`,...(x=(m=c.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var M,j,O;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'with Submenu',
  render: args => {
    const [open, setOpen] = useState(args.open);
    const ref = useRef(null);
    const btnRef = useRef(null);
    useEffect(() => {
      if (isChromatic && ref.current && btnRef.current) {
        void customElements.whenDefined('ui5-menu').then(() => {
          ref.current.opener = btnRef.current;
          ref.current.open = true;
        });
      }
    }, []);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button ref={btnRef} onClick={e => {
        ref.current.opener = e.currentTarget;
        setOpen(prev => !prev);
      }}>
          Show Menu
        </Button>
        <Menu {...args} open={open} ref={ref} onClose={e => {
        args.onClose(e);
        setOpen(false);
      }}>
          <MenuItem text="New File" icon="add-document" />
          <MenuItem text="New Folder" icon="add-folder" disabled />
          <MenuItem text="Open" icon="open-folder" startsSection>
            <MenuItem text="Open Locally" icon="open-folder" startsSection>
              <MenuItem text="Open C" />
              <MenuItem text="Open D" />
              <MenuItem text="Open E" />
            </MenuItem>
            <MenuItem text="Open from Cloud" icon="cloud" />
          </MenuItem>
          <MenuItem text="Close" />
          <MenuItem text="Preferences" icon="action-settings" startsSection />
          <MenuItem text="Exit" icon="journey-arrive" />
        </Menu>
      </>;
  }
}`,...(O=(j=i.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};const C=["Default","WithSubMenu"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:c,WithSubMenu:i,__namedExportsOrder:C,default:h},Symbol.toStringTag,{value:"Module"}));export{w as C,c as D,i as W};
