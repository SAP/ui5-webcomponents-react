import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as n}from"./index-OjgoNOWw.js";import{B as M}from"./index-G4cd92zv.js";import{M as a,a as t}from"./index-qTHbFySA.js";const j={title:"Modals & Popovers / Menu",component:a,argTypes:{children:{control:{disable:!0}}},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents"]},o={render(c){const r=n.useRef(null),u=n.useRef(null);return n.useEffect(()=>{},[]),e.jsxs(e.Fragment,{children:[e.jsx(M,{ref:u,onClick:i=>{r.current.showAt(i.target)},children:"Show Menu"}),e.jsxs(a,{...c,ref:r,children:[e.jsx(t,{text:"New File",icon:"add-document"}),e.jsx(t,{text:"New Folder",icon:"add-folder",disabled:!0}),e.jsx(t,{text:"Open",icon:"open-folder",startsSection:!0}),e.jsx(t,{text:"Close"}),e.jsx(t,{text:"Preferences",icon:"action-settings",startsSection:!0}),e.jsx(t,{text:"Exit",icon:"journey-arrive"})]})]})}},s={name:"with Submenu",render:c=>{const r=n.useRef(null),u=n.useRef(null);return n.useEffect(()=>{},[]),e.jsxs(e.Fragment,{children:[e.jsx(M,{ref:u,onClick:i=>{r.current.showAt(i.target)},children:"Show Menu"}),e.jsxs(a,{...c,ref:r,children:[e.jsx(t,{text:"New File",icon:"add-document"}),e.jsx(t,{text:"New Folder",icon:"add-folder",disabled:!0}),e.jsxs(t,{text:"Open",icon:"open-folder",startsSection:!0,children:[e.jsxs(t,{text:"Open Locally",icon:"open-folder",startsSection:!0,children:[e.jsx(t,{text:"Open C"}),e.jsx(t,{text:"Open D"}),e.jsx(t,{text:"Open E"})]}),e.jsx(t,{text:"Open from Cloud",icon:"cloud"})]}),e.jsx(t,{text:"Close"}),e.jsx(t,{text:"Preferences",icon:"action-settings",startsSection:!0}),e.jsx(t,{text:"Exit",icon:"journey-arrive"})]})]})}};var l,d,f;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render(args) {
    const ref = useRef(null);
    const btnRef = useRef(null);
    useEffect(() => {
      if (isChromatic) {
        ref.current.showAt(btnRef.current);
      }
    }, []);
    return <>
        <Button ref={btnRef} onClick={e => {
        ref.current.showAt(e.target);
      }}>
          Show Menu
        </Button>
        <Menu {...args} ref={ref}>
          <MenuItem text="New File" icon="add-document" />
          <MenuItem text="New Folder" icon="add-folder" disabled />
          <MenuItem text="Open" icon="open-folder" startsSection />
          <MenuItem text="Close" />
          <MenuItem text="Preferences" icon="action-settings" startsSection />
          <MenuItem text="Exit" icon="journey-arrive" />
        </Menu>
      </>;
  }
}`,...(f=(d=o.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var x,m,p;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'with Submenu',
  render: args => {
    const ref = useRef(null);
    const btnRef = useRef(null);
    useEffect(() => {
      if (isChromatic) {
        ref.current.showAt(btnRef.current);
      }
    }, []);
    return <>
        <Button ref={btnRef} onClick={e => {
        ref.current.showAt(e.target);
      }}>
          Show Menu
        </Button>
        <Menu {...args} ref={ref}>
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
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const h=["Default","WithSubMenu"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithSubMenu:s,__namedExportsOrder:h,default:j},Symbol.toStringTag,{value:"Module"}));export{I as C,o as D,s as W};
