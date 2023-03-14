import{a as s,F as m,j as e}from"./jsx-runtime-670450c2.js";import{r}from"./index-f1f749bf.js";import{B as p}from"./index-89702626.js";import{M as i,a as t}from"./index-76303d52.js";const x={title:"Modals & Popovers / Menu",component:i,argTypes:{children:{control:{disable:!0}}},parameters:{chromatic:{delay:1e3}}},n={render(l){const o=r.useRef(null),d=r.useRef(null);return r.useEffect(()=>{},[]),s(m,{children:[e(p,{ref:d,onClick:f=>{o.current.showAt(f.target)},children:"Show Menu"}),s(i,{...l,ref:o,children:[e(t,{text:"New File",icon:"add-document"}),e(t,{text:"New Folder",icon:"add-folder",disabled:!0}),e(t,{text:"Open",icon:"open-folder",startsSection:!0}),e(t,{text:"Close"}),e(t,{text:"Preferences",icon:"action-settings",startsSection:!0}),e(t,{text:"Exit",icon:"journey-arrive"})]})]})}};var a,c,u;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const M=["Default"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:M,default:x},Symbol.toStringTag,{value:"Module"}));export{w as C,n as D};
//# sourceMappingURL=Menu.stories-4d9e7db6.js.map
