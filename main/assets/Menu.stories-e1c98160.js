import{j as e}from"./jsx-runtime-5926aa06.js";import{r}from"./index-ebeaab24.js";import{B as f}from"./index-3021d8c3.js";import{M as u,a as t}from"./index-02c4b461.js";const m={title:"Modals & Popovers / Menu",component:u,argTypes:{children:{control:{disable:!0}}},parameters:{chromatic:{delay:1e3}}},n={render(i){const o=r.useRef(null),l=r.useRef(null);return r.useEffect(()=>{},[]),e.jsxs(e.Fragment,{children:[e.jsx(f,{ref:l,onClick:d=>{o.current.showAt(d.target)},children:"Show Menu"}),e.jsxs(u,{...i,ref:o,children:[e.jsx(t,{text:"New File",icon:"add-document"}),e.jsx(t,{text:"New Folder",icon:"add-folder",disabled:!0}),e.jsx(t,{text:"Open",icon:"open-folder",startsSection:!0}),e.jsx(t,{text:"Close"}),e.jsx(t,{text:"Preferences",icon:"action-settings",startsSection:!0}),e.jsx(t,{text:"Exit",icon:"journey-arrive"})]})]})}};var s,c,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(c=n.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const x=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:x,default:m},Symbol.toStringTag,{value:"Module"}));export{h as C,n as D};
//# sourceMappingURL=Menu.stories-e1c98160.js.map
