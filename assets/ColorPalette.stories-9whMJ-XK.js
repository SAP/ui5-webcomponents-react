import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as m}from"./VersionInfo-LCCO4Ig5.js";import{d as u}from"./i18nBundle-ZoJ37UJR.js";import c from"./Dialog-ki1YSo8q.js";import{b as p}from"./Button-CV8gKi73.js";import d from"./ColorPicker-Iq3xdXQL.js";import{C as f,d as h,e as C}from"./i18n-defaults-zEJ36VRV.js";import{C as t}from"./index-67pueuRO.js";import{_ as g}from"./iframe-ydSfD9o2.js";import{w as _}from"./withWebComponent-I1wSIv4y.js";const a=_("ui5-color-palette",[],[],[],["item-click"],()=>g(()=>import("./index-67pueuRO.js").then(r=>r.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]),import.meta.url));a.displayName="ColorPalette";try{a.displayName="ColorPalette",a.__docgenInfo={description:`The \`ColorPalette\` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ColorPalette)`,displayName:"ColorPalette",props:{children:{defaultValue:null,description:"Defines the `ColorPaletteItem` elements.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPaletteDomRef, ColorPaletteItemClickEventDetail>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}class o{static get dependencies(){return[c,p,d]}static async init(){o.i18nBundle=await u("@ui5/webcomponents")}get colorPaletteDialogTitle(){return o.i18nBundle.getText(f)}get colorPaletteDialogOKButton(){return o.i18nBundle.getText(h)}get colorPaletteCancelButton(){return o.i18nBundle.getText(C)}}m("ColorPaletteMoreColors",o);const v={title:"Data Display / ColorPalette",component:a,argTypes:{children:{control:{disable:!0}}},args:{}},l={render:r=>e.jsxs(a,{...r,children:[e.jsx(t,{value:"darkblue"}),e.jsx(t,{value:"pink"}),e.jsx(t,{value:"#444444"}),e.jsx(t,{value:"rgb(0,200,0)"}),e.jsx(t,{value:"green"}),e.jsx(t,{value:"darkred"}),e.jsx(t,{value:"yellow"}),e.jsx(t,{value:"blue"}),e.jsx(t,{value:"cyan"}),e.jsx(t,{value:"orange"}),e.jsx(t,{value:"#5480e7"}),e.jsx(t,{value:"#ff6699"})]})};var n,s,i;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    return <ColorPalette {...args}>
        <ColorPaletteItem value="darkblue" />
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="#444444" />
        <ColorPaletteItem value="rgb(0,200,0)" />
        <ColorPaletteItem value="green" />
        <ColorPaletteItem value="darkred" />
        <ColorPaletteItem value="yellow" />
        <ColorPaletteItem value="blue" />
        <ColorPaletteItem value="cyan" />
        <ColorPaletteItem value="orange" />
        <ColorPaletteItem value="#5480e7" />
        <ColorPaletteItem value="#ff6699" />
      </ColorPalette>;
  }
}`,...(i=(s=l.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const P=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:P,default:v},Symbol.toStringTag,{value:"Module"}));export{k as C,l as D};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-67pueuRO.js","./UI5Element-Jt3C0_FN.js","./i18nBundle-ZoJ37UJR.js","./VersionInfo-LCCO4Ig5.js","./CustomElementsScopeUtils-M7hMRmEH.js","./withWebComponent-I1wSIv4y.js","./utils-KU8RGjGn.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./slot-HSrR9XJ-.js","./Icon-G6aW2FRW.js","./Icons-Nr5kgAbF.js","./ItemNavigation--ejGb_nH.js","./getActiveElement-IIKAy3xo.js","./CSSColor-cu9KZbQi.js","./Integer-kog98579.js","./class-map-CHDPODen.js","./Button-CV8gKi73.js","./AriaLabelHelper-RbKlVwzD.js","./MarkedEvents-aYv14vsS.js","./i18n-defaults-zEJ36VRV.js","./iframe-ydSfD9o2.js","./style-map-xQ1SPtMO.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}