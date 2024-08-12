const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Menu-DKw2JPZY.js","./withWebComponent-Bvd6GsxT.js","./utils-B91Jjtng.js","./index-CMKoANNR.js","./useIsomorphicLayoutEffect-DOdM5Kf8.js","./slot-_4yKMUwC.js","./event-Dq0fpeHi.js","./Keys-F_3Gvx0K.js","./i18nBundle-DyvSagx7.js","./slim-arrow-right-C_o53qwA.js","./Icon-iJ5XkFd9.js","./if-defined-BJMHgp7g.js","./parameters-bundle.css-DJWIHzS2.js","./Popover-BQ0u1cZY.js","./PopupsCommon.css-DYqWK7NT.js","./getEffectiveScrollbarStyle-B3XuleRv.js","./isElementHidden-B4HqmI2E.js","./isElementClickable-0ACQ4G_A.js","./AriaLabelHelper-C5uDZewF.js","./getActiveElement-kltGt_DR.js","./ResizeHandler-DLtaLMaj.js","./MediaRange-Bnzt26Xb.js","./Title-CLsYVLHg.js","./style-map-CJSYxNSP.js","./class-map-izHjq-7_.js","./BrowserScrollbar.css-D0ty1KEr.js","./ResponsivePopover-CQe21ayh.js","./i18n-defaults-CcfWlpG-.js","./Dialog-ChhXL7p5.js","./ValueState-Bg0UWejw.js","./information-B954FDjj.js","./i18n-defaults-CEQaAj6E.js","./alert-XemOvmut.js","./Button-DFUJoV2f.js","./MarkedEvents-CAur0wxK.js","./willShowContent-CZcfsNXp.js","./decline-DI0qcVtv.js","./List-CH8w2THx.js","./ItemNavigation-vTMdqqKa.js","./isElementInView-CjfjvN8v.js","./debounce-TTkz9ISH.js","./BusyIndicator-Cx-S6BZJ.js","./Label-CuT9KatJ.js","./TabbableElements-BJJu_CDc.js","./RadioButton-Chceev8u.js","./CheckBox-B5ighiuc.js","./accept-0udhcfey.js","./Avatar-DBJmGUf1.js","./employee-CB0X-WXT.js","./AriaHasPopup-BTjm9d28.js","./nav-back-DJ5iqFTQ.js","./ListItemCustom-Cfu0T5y_.js"])))=>i.map(i=>d[i]);
import{j as e}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{i as w}from"./utils-DrMrLTRR.js";import{r as s}from"./index-CMKoANNR.js";import{B as _}from"./index-DngOatAE.js";import{M as n}from"./index-2wbT92jd.js";import{_ as y}from"./iframe-C92oZ2R_.js";import"./Menu-DKw2JPZY.js";import{w as S}from"./withWebComponent-Bvd6GsxT.js";import{M as m}from"./index-Bn3DuFKI.js";const o=S("ui5-menu-separator",[],[],[],[],()=>y(()=>import("./Menu-DKw2JPZY.js").then(t=>t.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]),import.meta.url));o.displayName="MenuSeparator";try{o.displayName="MenuSeparator",o.__docgenInfo={description:"The `MenuSeparator` represents a horizontal line to separate menu items inside a `Menu`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"MenuSeparator",props:{style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
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
