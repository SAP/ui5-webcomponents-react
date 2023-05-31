import{j as e}from"./jsx-runtime-5926aa06.js";import{r as u}from"./CustomElementsScopeUtils-137da8c8.js";import{d as m}from"./UI5Element-784c80b7.js";import c from"./Dialog-5c8482e3.js";import{B as p}from"./Button-0cdf0df4.js";import d from"./ColorPicker-33f713b7.js";import{aU as f,aV as h,aW as g}from"./i18n-defaults-254d6b69.js";import{C as t}from"./index-ab4e9833.js";import{_ as C}from"./iframe-47b31245.js";import{w as _}from"./withWebComponent-d61dcbbc.js";const l=_("ui5-color-palette",[],[],[],["item-click"],()=>C(()=>import("./index-ab4e9833.js").then(r=>r.b),["./index-ab4e9833.js","./UI5Element-784c80b7.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-d61dcbbc.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./slot-76e48863.js","./Icon-a5230073.js","./Icons-e56d104a.js","./ItemNavigation-18d1bc39.js","./getActiveElement-bcae01ed.js","./CSSColor-f91c8158.js","./Integer-f7f172c9.js","./Device-208919c6.js","./class-map-519e9c6d.js","./Button-0cdf0df4.js","./AriaLabelHelper-43a261ec.js","./MarkedEvents-b83081e9.js","./i18n-defaults-254d6b69.js","./iframe-47b31245.js","./style-map-33b353d0.js"],import.meta.url));l.displayName="ColorPalette";try{l.displayName="ColorPalette",l.__docgenInfo={description:`The \`ColorPalette\` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPalette" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"ColorPalette",props:{children:{defaultValue:null,description:"Defines the `ColorPaletteItem` elements.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPaletteDomRef, { color: string; }>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}class o{static get dependencies(){return[c,p,d]}static async init(){o.i18nBundle=await m("@ui5/webcomponents")}get colorPaletteDialogTitle(){return o.i18nBundle.getText(f)}get colorPaletteDialogOKButton(){return o.i18nBundle.getText(h)}get colorPaletteCancelButton(){return o.i18nBundle.getText(g)}}u("ColorPaletteMoreColors",o);const P={title:"Data Display / ColorPalette",component:l,argTypes:{children:{control:{disable:!0}}},args:{}},a={render:r=>e.jsxs(l,{...r,children:[e.jsx(t,{value:"darkblue"}),e.jsx(t,{value:"pink"}),e.jsx(t,{value:"#444444"}),e.jsx(t,{value:"rgb(0,200,0)"}),e.jsx(t,{value:"green"}),e.jsx(t,{value:"darkred"}),e.jsx(t,{value:"yellow"}),e.jsx(t,{value:"blue"}),e.jsx(t,{value:"cyan"}),e.jsx(t,{value:"orange"}),e.jsx(t,{value:"#5480e7"}),e.jsx(t,{value:"#ff6699"})]})};var n,s,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const v=["Default"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:v,default:P},Symbol.toStringTag,{value:"Module"}));export{E as C,a as D};
//# sourceMappingURL=ColorPalette.stories-e45b051d.js.map
