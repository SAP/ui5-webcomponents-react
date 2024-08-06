const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Menu-Da5C3RhH.js","./withWebComponent-CPW0iYAf.js","./utils-B4B9qFe5.js","./index-ClU-Tc1p.js","./useIsomorphicLayoutEffect-BDy32gDd.js","./slot-_4yKMUwC.js","./event-Dq0fpeHi.js","./Keys-F_3Gvx0K.js","./i18nBundle-shm5Q6c6.js","./slim-arrow-right-5rp1rFN9.js","./Icon-BIxZr4TA.js","./if-defined-BCPYWAh1.js","./parameters-bundle.css-DJWIHzS2.js","./Popover-C804Stt9.js","./PopupsCommon.css-C-wswpgh.js","./getEffectiveScrollbarStyle-BsLHc2Qj.js","./isElementHidden-B4HqmI2E.js","./isElementClickable-0ACQ4G_A.js","./AriaLabelHelper-C5uDZewF.js","./getActiveElement-kltGt_DR.js","./ResizeHandler-TnLd8hOy.js","./MediaRange-Bnzt26Xb.js","./Title-qjobRWCv.js","./style-map-Do0KrzH5.js","./class-map-CQfLTfub.js","./BrowserScrollbar.css-Cvy61GCB.js","./ResponsivePopover-CTTOCd1B.js","./i18n-defaults-DRoh8QZU.js","./Dialog-BhrO_1Jd.js","./ValueState-Bg0UWejw.js","./information-B1l_cM6v.js","./i18n-defaults-CEQaAj6E.js","./alert-C2BbHj1C.js","./Button-BsDFAdhY.js","./MarkedEvents-CAur0wxK.js","./willShowContent-CZcfsNXp.js","./decline-P6ltvR0I.js","./List-BIG_Eyud.js","./ItemNavigation-CIi6TzBH.js","./isElementInView-CjfjvN8v.js","./debounce-TTkz9ISH.js","./BusyIndicator-C9Q0CDgp.js","./Label-BcgafC0L.js","./TabbableElements-BJJu_CDc.js","./RadioButton-8nT8kXhO.js","./CheckBox-BL1miepq.js","./accept-B_wtZvcq.js","./Avatar-DrCFK53V.js","./employee-Bjf4oLVT.js","./AriaHasPopup-BTjm9d28.js","./nav-back-oMh2qsc4.js","./ListItemCustom-C3CAscAj.js"])))=>i.map(i=>d[i]);
import{j as e}from"./useIsomorphicLayoutEffect-BDy32gDd.js";import{i as w}from"./utils-8JadD7YA.js";import{r as s}from"./index-ClU-Tc1p.js";import{B as _}from"./index-Cn17W0Hn.js";import{M as n}from"./index-C3UMG299.js";import{_ as y}from"./iframe-CG-09MJP.js";import"./Menu-Da5C3RhH.js";import{w as S}from"./withWebComponent-CPW0iYAf.js";import{M as m}from"./index-CjgJBbyG.js";const o=S("ui5-menu-separator",[],[],[],[],()=>y(()=>import("./Menu-Da5C3RhH.js").then(t=>t.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]),import.meta.url));o.displayName="MenuSeparator";try{o.displayName="MenuSeparator",o.__docgenInfo={description:"The `MenuSeparator` represents a horizontal line to separate menu items inside a `Menu`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"MenuSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="MenuSeparator",o.__docgenInfo={description:"The `MenuSeparator` represents a horizontal line to separate menu items inside a `Menu`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"MenuSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const g={title:"Modals & Popovers / Menu",component:m,argTypes:{children:{control:{disable:!0}}},args:{open:w},parameters:{chromatic:{delay:1e3}},tags:["package:@ui5/webcomponents"]},p={render(t){const[l,r]=s.useState(t.open),a=s.useRef(null);return s.useEffect(()=>{r(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(_,{ref:a,onClick:i=>{r(c=>!c)},children:"Show Menu"}),e.jsxs(m,{...t,open:l,opener:a.current,onClose:i=>{t.onClose(i),r(!1)},children:[e.jsx(n,{text:"New File",icon:"add-document"}),e.jsx(n,{text:"New Folder",icon:"add-folder",disabled:!0}),e.jsx(o,{}),e.jsx(n,{text:"Open",icon:"open-folder"}),e.jsx(n,{text:"Close"}),e.jsx(o,{}),e.jsx(n,{text:"Preferences",icon:"action-settings"}),e.jsx(n,{text:"Exit",icon:"journey-arrive"})]})]})}},u={name:"with Submenu",render:t=>{const[l,r]=s.useState(t.open),a=s.useRef(null);return s.useEffect(()=>{r(t.open)},[t.open]),e.jsxs(e.Fragment,{children:[e.jsx(_,{ref:a,onClick:i=>{r(c=>!c)},children:"Show Menu"}),e.jsxs(m,{...t,open:l,opener:a.current,onClose:i=>{t.onClose(i),r(!1)},children:[e.jsx(n,{text:"New File",icon:"add-document"}),e.jsx(n,{text:"New Folder",icon:"add-folder",disabled:!0}),e.jsx(o,{}),e.jsxs(n,{text:"Open",icon:"open-folder",children:[e.jsxs(n,{text:"Open Locally",icon:"open-folder",children:[e.jsx(n,{text:"Open C"}),e.jsx(n,{text:"Open D"}),e.jsx(n,{text:"Open E"})]}),e.jsx(n,{text:"Open from Cloud",icon:"cloud"})]}),e.jsx(n,{text:"Close"}),e.jsx(o,{}),e.jsx(n,{text:"Preferences",icon:"action-settings"}),e.jsx(n,{text:"Exit",icon:"journey-arrive"})]})]})}};var d,f,h;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render(args) {
    const [open, setOpen] = useState(args.open);
    const btnRef = useRef(null);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button ref={btnRef} onClick={e => {
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
}`,...(h=(f=p.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,M,b;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'with Submenu',
  render: args => {
    const [open, setOpen] = useState(args.open);
    const btnRef = useRef(null);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return <>
        <Button ref={btnRef} onClick={e => {
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
}`,...(b=(M=u.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};const j=["Default","WithSubMenu"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:p,WithSubMenu:u,__namedExportsOrder:j,default:g},Symbol.toStringTag,{value:"Module"}));export{P as C,p as D,u as W};
