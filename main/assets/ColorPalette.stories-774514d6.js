import{j as e}from"./jsx-runtime-5926aa06.js";import{r as m}from"./CustomElementsScopeUtils-137da8c8.js";import{d as u}from"./UI5Element-fb9ecf93.js";import c from"./Dialog-2af89d50.js";import{b as p}from"./Button-4160b137.js";import d from"./ColorPicker-cbffb1a6.js";import{a$ as f,b0 as h,b1 as C}from"./i18n-defaults-a58643fd.js";import{C as t}from"./index-ff52432c.js";import{_ as g}from"./iframe-7c494daf.js";import{w as _}from"./withWebComponent-d4224c1c.js";const l=_("ui5-color-palette",[],[],[],["item-click"],()=>g(()=>import("./index-ff52432c.js").then(r=>r.b),["./index-ff52432c.js","./UI5Element-fb9ecf93.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-d4224c1c.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./slot-76e48863.js","./Icon-ef594e9f.js","./Icons-2c98f222.js","./ItemNavigation-c74bf7f7.js","./CSSColor-f91c8158.js","./Integer-f7f172c9.js","./Device-99b8bbf4.js","./class-map-18f572ce.js","./Button-4160b137.js","./AriaLabelHelper-43a261ec.js","./MarkedEvents-b83081e9.js","./i18n-defaults-a58643fd.js","./iframe-7c494daf.js","./style-map-54298215.js"],import.meta.url));l.displayName="ColorPalette";try{l.displayName="ColorPalette",l.__docgenInfo={description:`The \`ColorPalette\` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ColorPalette)`,displayName:"ColorPalette",props:{children:{defaultValue:null,description:"Defines the `ColorPaletteItem` elements.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPaletteDomRef, ColorPaletteItemClickEventDetail>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}class o{static get dependencies(){return[c,p,d]}static async init(){o.i18nBundle=await u("@ui5/webcomponents")}get colorPaletteDialogTitle(){return o.i18nBundle.getText(f)}get colorPaletteDialogOKButton(){return o.i18nBundle.getText(h)}get colorPaletteCancelButton(){return o.i18nBundle.getText(C)}}m("ColorPaletteMoreColors",o);const v={title:"Data Display / ColorPalette",component:l,argTypes:{children:{control:{disable:!0}}},args:{}},a={render:r=>e.jsxs(l,{...r,children:[e.jsx(t,{value:"darkblue"}),e.jsx(t,{value:"pink"}),e.jsx(t,{value:"#444444"}),e.jsx(t,{value:"rgb(0,200,0)"}),e.jsx(t,{value:"green"}),e.jsx(t,{value:"darkred"}),e.jsx(t,{value:"yellow"}),e.jsx(t,{value:"blue"}),e.jsx(t,{value:"cyan"}),e.jsx(t,{value:"orange"}),e.jsx(t,{value:"#5480e7"}),e.jsx(t,{value:"#ff6699"})]})};var n,s,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const P=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:P,default:v},Symbol.toStringTag,{value:"Module"}));export{k as C,a as D};
//# sourceMappingURL=ColorPalette.stories-774514d6.js.map
