import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{i as w}from"./utils-CdOaKA-E.js";import{r as a}from"./index-C--kS4iy.js";import{B as b}from"./index-DTbqhkR9.js";import{M as n}from"./index-DUUo_c43.js";import"./Menu-CpjzYUJ6.js";import{w as y}from"./jsx-runtime-28PG-PhA.js";import{M as c}from"./index-AOtOudmJ.js";const o=y("ui5-menu-separator",[],[],[],[]);o.displayName="MenuSeparator";try{o.displayName="MenuSeparator",o.__docgenInfo={description:"The `MenuSeparator` represents a horizontal line to separate menu items inside a `Menu`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"MenuSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="MenuSeparator",o.__docgenInfo={description:"The `MenuSeparator` represents a horizontal line to separate menu items inside a `Menu`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"MenuSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Modals & Popovers / Menu",component:c,argTypes:{children:{control:{disable:!0}}},args:{open:w},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents"]},p={render(t){const[l,r]=a.useState(t.open),i=a.useRef(null);return a.useEffect(()=>{r(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(b,{ref:i,onClick:()=>{r(s=>!s)},children:"Show Menu"}),e.jsxs(c,{...t,open:l,opener:i.current,onClose:s=>{t.onClose(s),r(!1)},children:[e.jsx(n,{text:"New File",icon:"add-document"}),e.jsx(n,{text:"New Folder",icon:"add-folder",disabled:!0}),e.jsx(o,{}),e.jsx(n,{text:"Open",icon:"open-folder"}),e.jsx(n,{text:"Close"}),e.jsx(o,{}),e.jsx(n,{text:"Preferences",icon:"action-settings"}),e.jsx(n,{text:"Exit",icon:"journey-arrive"})]})]})}},u={name:"with Submenu",render:t=>{const[l,r]=a.useState(t.open),i=a.useRef(null);return a.useEffect(()=>{r(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(b,{ref:i,onClick:()=>{r(s=>!s)},children:"Show Menu"}),e.jsxs(c,{...t,open:l,opener:i.current,onClose:s=>{t.onClose(s),r(!1)},children:[e.jsx(n,{text:"New File",icon:"add-document"}),e.jsx(n,{text:"New Folder",icon:"add-folder",disabled:!0}),e.jsx(o,{}),e.jsxs(n,{text:"Open",icon:"open-folder",children:[e.jsxs(n,{text:"Open Locally",icon:"open-folder",children:[e.jsx(n,{text:"Open C"}),e.jsx(n,{text:"Open D"}),e.jsx(n,{text:"Open E"})]}),e.jsx(n,{text:"Open from Cloud",icon:"cloud"})]}),e.jsx(n,{text:"Close"}),e.jsx(o,{}),e.jsx(n,{text:"Preferences",icon:"action-settings"}),e.jsx(n,{text:"Exit",icon:"journey-arrive"})]})]})}};var m,d,f;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(d=p.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var h,x,M;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(M=(x=u.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};const g=["Default","WithSubMenu"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:p,WithSubMenu:u,__namedExportsOrder:g,default:S},Symbol.toStringTag,{value:"Module"}));export{F as C,p as D,u as W};
